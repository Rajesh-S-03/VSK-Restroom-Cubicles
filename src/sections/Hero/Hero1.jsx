import { useEffect, useRef, useState } from 'react';
import './Hero1.css';

// =========================================================
// LOAD FRAMES (sorted numerically, upper/lower case extensions)
// =========================================================

const sortFrames = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, src]) => src)
    .filter(Boolean);

const buildFrames = sortFrames(
  import.meta.glob(
    '../../frames/build/*.{webp,png,jpg,jpeg,WEBP,PNG,JPG,JPEG}',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
);

const urinalsFrames = sortFrames(
  import.meta.glob(
    '../../frames/urinals/*.{webp,png,jpg,jpeg,WEBP,PNG,JPG,JPEG}',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
);

// =========================================================
// COMBINE ALL FRAMES (build first, then urinals)
// =========================================================

const allFrames = [...buildFrames, ...urinalsFrames];

const TOTAL_FRAMES = allFrames.length;

// =========================================================
// FRAME BOUNDARY
// Frames 0 .. buildEnd-1      -> BUILD
// Frames buildEnd .. end      -> URINALS
// =========================================================

const buildEnd = buildFrames.length;

// =========================================================
// PRELOAD SETTINGS
// =========================================================

/*
  Step 1: the first frame loads ALONE with high priority.
  Step 2: coarse frames (every 2nd + the last one) load next,
          so half of the sequence is ready before the
          animation can outrun the loading.
  Step 3: all remaining frames fill in, in the background.

  Fewer parallel requests (4) keep memory and network
  pressure lower on laptops with large frames.
*/


const COARSE_STEP = 2;
const CONCURRENCY = 3;
const MAX_RETRIES = 2;
const DECODE_AHEAD = 4;


// =========================================================
// SCROLL SETTINGS
// =========================================================

/*
  1 = the animation finishes exactly at the end of .hero-stage.
  Do NOT use values above 1. To slow everything down, make
  .hero-stage taller in CSS instead.
*/
const SCROLL_DISTANCE_MULTIPLIER = 1;

/*
  Share of the animation scroll given to the BUILD frames.
  0.65 -> BUILD gets 65%, URINALS gets the remaining 35%.
  Increase (e.g. 0.70) to make BUILD slower.
*/
const BUILD_SCROLL_SHARE = 0.65;

/*
  Smoothing of the frame movement (0 - 1).
  Lower  = smoother / more floaty.
  Higher = more direct.
  1      = no smoothing (frame jumps straight to the target).
*/
const FRAME_SMOOTHING = 0.2;

// Maps animation progress (0-1) to a frame index.
const getTargetFrame = (frameProgress) => {
  if (TOTAL_FRAMES === 0) return 0;

  let frame;

  if (buildFrames.length > 0 && urinalsFrames.length > 0) {
    if (frameProgress <= BUILD_SCROLL_SHARE) {
      // BUILD
      const buildProgress = frameProgress / BUILD_SCROLL_SHARE;

      frame = Math.round(buildProgress * (buildFrames.length - 1));
    } else {
      // URINALS
      const urinalsProgress =
        (frameProgress - BUILD_SCROLL_SHARE) / (1 - BUILD_SCROLL_SHARE);

      frame = buildEnd + Math.round(urinalsProgress * (urinalsFrames.length - 1));
    }
  } else {
    frame = Math.round(frameProgress * (TOTAL_FRAMES - 1));
  }

  return Math.max(0, Math.min(TOTAL_FRAMES - 1, frame));
};

const LOAD_ORDER = (() => {
  const order = [];

  for (let i = 0; i < TOTAL_FRAMES; i += COARSE_STEP) order.push(i);

  if (TOTAL_FRAMES > 0 && (TOTAL_FRAMES - 1) % COARSE_STEP !== 0) {
    order.push(TOTAL_FRAMES - 1);
  }

  const coarse = new Set(order);

  for (let i = 0; i < TOTAL_FRAMES; i++) {
    if (!coarse.has(i)) order.push(i);
  }

  return order;
})();

const COARSE_COUNT = Math.min(
  TOTAL_FRAMES,
  Math.ceil(TOTAL_FRAMES / COARSE_STEP) +
    (TOTAL_FRAMES > 0 && (TOTAL_FRAMES - 1) % COARSE_STEP !== 0 ? 1 : 0)
);

// =========================================================
// HERO1
// =========================================================

const Hero1 = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const [ready, setReady] = useState(TOTAL_FRAMES === 0);
  const [loadedCount, setLoadedCount] = useState(0);

  // Only used to re-render while background frames keep loading,
  // so the nearest-frame fallback upgrades even if the user is idle.
  const [, setFillTick] = useState(0);

  // Keep references to the Image objects so the browser
  // does not garbage-collect / evict them.
  const imagesRef = useRef([]);
  const loadedRef = useRef(new Uint8Array(TOTAL_FRAMES));

  // Frame the scroll position asks for / frame currently shown.
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);

  // =======================================================
  // PRELOAD FRAMES
  // (first frame alone -> coarse frames -> remaining frames;
  //  parallel, decoded, with retries and full cleanup)
  // =======================================================

  useEffect(() => {
    if (TOTAL_FRAMES === 0) {
      setReady(true);
      return undefined;
    }

    let cancelled = false;
    let cursor = 0;
    let coarseDone = 0;
    let fillDone = 0;

    const retryTimers = new Set();
    const inFlight = new Set();

    // Load one image, decode it, and retry if necessary.
    const loadOne = (index) =>
      new Promise((resolve) => {
        let attemptNumber = 0;
        let settled = false;

        const finish = (success, img = null) => {
          if (settled) return;
          settled = true;

          if (success && !cancelled) {
            imagesRef.current[index] = img;
            loadedRef.current[index] = 1;
          }

          resolve(success && !cancelled);
        };

        const attempt = () => {
          if (cancelled) {
            finish(false);
            return;
          }

          attemptNumber++;

          const img = new Image();
          img.decoding = 'async';
          img.fetchPriority = index === 0 ? 'high' : 'auto';

          inFlight.add(img);

          img.onload = async () => {
            // onload does not guarantee the image is decoded,
            // so decode() it once before marking it ready.
            try {
              if (typeof img.decode === 'function') {
                await img.decode();
              }
            } catch {
              // Image loaded; continue even if decode() rejects.
            }

            inFlight.delete(img);
            finish(true, img);
          };

          img.onerror = () => {
            inFlight.delete(img);

            if (cancelled) {
              finish(false);
              return;
            }

            if (attemptNumber < MAX_RETRIES) {
              const timer = setTimeout(() => {
                retryTimers.delete(timer);
                attempt();
              }, 300 * attemptNumber);

              retryTimers.add(timer);
            } else {
              console.warn('Failed to preload frame:', allFrames[index]);
              finish(false);
            }
          };

          img.src = allFrames[index];
        };

        attempt();
      });

    // Counts a finished frame (loaded OR failed) so the loader
    // can never stay stuck on one bad image.
    const registerDone = (position) => {
      if (position < COARSE_COUNT) {
        coarseDone++;
        setLoadedCount(coarseDone);

        if (coarseDone >= COARSE_COUNT) setReady(true);
      } else {
        fillDone++;

        if (fillDone % 8 === 0) setFillTick((tick) => tick + 1);
      }
    };

    const worker = async () => {
      while (!cancelled) {
        // Each frame is assigned to exactly one worker.
        const position = cursor++;

        if (position >= LOAD_ORDER.length) return;

        await loadOne(LOAD_ORDER[position]);

        if (cancelled) return;

        registerDone(position);
      }
    };

    const run = async () => {
      // STEP 1 — first frame alone, high priority
      cursor = 1;

      await loadOne(LOAD_ORDER[0]);

      if (cancelled) return;

      registerDone(0);

      // STEP 2 + 3 — coarse frames first, then the rest, in parallel
      await Promise.all(
        Array.from(
          { length: Math.min(CONCURRENCY, LOAD_ORDER.length - 1) },
          () => worker()
        )
      );

      if (cancelled) return;

      // All preload attempts have finished.
      setReady(true);
      setFillTick((tick) => tick + 1);

      console.info(
        `Frame preload complete: ${loadedRef.current.reduce(
          (total, value) => total + value,
          0
        )}/${TOTAL_FRAMES} frames loaded`
      );
    };

    run();

    return () => {
      cancelled = true;

      retryTimers.forEach((timer) => clearTimeout(timer));
      retryTimers.clear();

      inFlight.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
      inFlight.clear();
    };
  }, []);

  // =======================================================
  // SCROLL ANIMATION
  //
  // 1. The scroll position only decides the TARGET frame.
  // 2. A small animation loop moves the shown frame toward
  //    the target, so fast wheel scrolling does not make the
  //    frames jump and stall.
  // =======================================================

  useEffect(() => {
    let scrollRaf = null;
    let smoothRaf = null;
    let initialised = false;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Moves the shown frame toward the target frame.
    const stepSmoothing = () => {
      smoothRaf = null;

      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      let next = reducedMotion
        ? target
        : current + (target - current) * FRAME_SMOOTHING;

      if (Math.abs(target - next) < 0.5) next = target;

      currentFrameRef.current = next;

      setFrameIndex(Math.round(next));

      if (next !== target) {
        smoothRaf = window.requestAnimationFrame(stepSmoothing);
      }
    };

    const compute = () => {
      scrollRaf = null;

      const stageEl = document.querySelector('.hero-stage');

      if (!stageEl || TOTAL_FRAMES === 0) return;

      const rect = stageEl.getBoundingClientRect();

      const scrollDistance =
        (stageEl.offsetHeight - window.innerHeight) *
        SCROLL_DISTANCE_MULTIPLIER;

      if (scrollDistance <= 0) return;

      const totalProgress = Math.max(
        0,
        Math.min(1, -rect.top / scrollDistance)
      );

      // PHASE 2 — frame animation (after the 12% reveal)
      const frameProgress = Math.max(
        0,
        Math.min(1, (totalProgress - 0.12) / 0.88)
      );

      const frame = getTargetFrame(frameProgress);

      targetFrameRef.current = frame;

      setProgress(totalProgress);

      // First calculation (e.g. page reloaded mid-scroll):
      // jump straight to the frame instead of sweeping from 0.
      if (!initialised) {
        initialised = true;
        currentFrameRef.current = frame;
        setFrameIndex(frame);
        return;
      }

      if (smoothRaf === null && currentFrameRef.current !== frame) {
        smoothRaf = window.requestAnimationFrame(stepSmoothing);
      }
    };

    const onScroll = () => {
      if (scrollRaf === null) {
        scrollRaf = window.requestAnimationFrame(compute);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    compute();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);

      if (scrollRaf !== null) window.cancelAnimationFrame(scrollRaf);
      if (smoothRaf !== null) window.cancelAnimationFrame(smoothRaf);
    };
  }, []);

  // =======================================================
  // PICK THE FRAME TO SHOW
  // If the exact frame is not loaded yet, show the nearest
  // loaded one instead of a blank / stuck image.
  // =======================================================

  const getDisplayIndex = (target) => {
    const loaded = loadedRef.current;

    if (loaded[target]) return target;

    for (let d = 1; d < TOTAL_FRAMES; d++) {
      if (target - d >= 0 && loaded[target - d]) return target - d;
      if (target + d < TOTAL_FRAMES && loaded[target + d]) return target + d;
    }

    return target;
  };

  const displayIndex = getDisplayIndex(frameIndex);
  const displaySrc = allFrames[displayIndex];

  // =======================================================
  // CURRENT STAGE
  // =======================================================

  let stage = 'build';

  if (frameIndex >= buildEnd) {
    stage = 'urinals';
  }

  // =======================================================
  // STAGE PROGRESS
  // =======================================================

  let stageProgress = 0;

  if (stage === 'build') {
    stageProgress = frameIndex / Math.max(1, buildFrames.length - 1);
  }

  if (stage === 'urinals') {
    stageProgress =
      (frameIndex - buildEnd) / Math.max(1, urinalsFrames.length - 1);
  }

  stageProgress = Math.max(0, Math.min(1, stageProgress));

  // =======================================================
  // CONTENT
  // =======================================================

  const content = {
    build: {
      number: '01',
      label: 'BUILD',
      title: 'Built for',
      second: 'Durability',

      description: (
        <>
          Precision engineering and premium
          <br />
          materials for long-lasting performance.
        </>
      ),
    },

    urinals: {
      number: '02',
      label: 'URINALS',
      title: 'Clean Spaces,',
      second: 'Healthier Environments',

      description: (
        <>
          Modern urinal systems designed
          <br />
          for hygiene, efficiency and comfort.
        </>
      ),
    },
  };

  const active = content[stage];

  // =======================================================
  // TEXT ANIMATION
  // =======================================================

  const clamp01 = (v) => Math.min(1, Math.max(0, v));

  const labelProgress = clamp01(stageProgress / 0.18);
  const titleProgress = clamp01((stageProgress - 0.08) / 0.3);
  const descriptionProgress = clamp01((stageProgress - 0.32) / 0.2);
  const buttonProgress = clamp01((stageProgress - 0.52) / 0.18);

  // =======================================================
  // HERO1 POP FROM BOTTOM
  // =======================================================

  const hero1Y = Math.max(0, 100 - (progress / 0.12) * 100);

  // =======================================================
  // LOADER (inline styles, no CSS changes needed)
  // Tied to the coarse frames that make the animation usable.
  // =======================================================

  const loadPercent = Math.min(
    100,
    Math.round((loadedCount / Math.max(1, COARSE_COUNT)) * 100)
  );

  // =======================================================
  // RETURN
  // =======================================================

  return (
    <div
      className="hero1"
      style={{
        transform: `translateY(${hero1Y}%)`,
      }}
    >
      <div className="hero1-screen">

        {/* FRAME */}

        {displaySrc && (
          <img
            src={displaySrc}
            alt=""
            className="hero1-frame"
            draggable="false"
            decoding="async"
            fetchPriority={frameIndex === 0 ? 'high' : 'auto'}
          />
        )}

        {/* OVERLAY */}

        <div className="hero1-overlay" />

        {/* CONTENT */}

        <div className="hero1-content">

          {/* LABEL */}

          <div
            className="hero1-label"
            style={{
              opacity: labelProgress,
              transform: `translateY(${35 - labelProgress * 35}px)`,
            }}
          >
            <span>{active.number}</span>

            <div className="label-line" />

            <span>{active.label}</span>
          </div>

          {/* TITLE */}

          <h2
            className="hero1-title"
            style={{
              opacity: titleProgress,
              transform: `translateY(${65 - titleProgress * 65}px) scale(${
                0.94 + titleProgress * 0.06
              })`,
            }}
          >
            {active.title}

            <br />

            <span>{active.second}</span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="hero1-description"
            style={{
              opacity: descriptionProgress,
              transform: `translateY(${30 - descriptionProgress * 30}px)`,
            }}
          >
            {active.description}
          </p>

          {/* BUTTON */}

          <div
            className="hero1-button"
            style={{
              opacity: buttonProgress,
              transform: `translateY(${25 - buttonProgress * 25}px)`,
            }}
          >
            <span>DISCOVER MORE</span>

            <div className="button-circle">→</div>
          </div>

        </div>

        {/* RIGHT INDICATOR */}

        {/* <div className="hero1-indicator">

          <div className="indicator-line">
            <div
              className="indicator-progress"
              style={{
                height: `${stageProgress * 100}%`,
              }}
            />
          </div>

          <span>{active.number}</span>

        </div> */}

        {/* FRAME COUNTER */}

        {/* <div className="hero1-counter">
          {String(frameIndex + 1).padStart(3, '0')}

          <span>/</span>

          {String(TOTAL_FRAMES).padStart(3, '0')}
        </div> */}

        {/* LOADING OVERLAY (until the coarse pass is done) */}

        {!ready && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              background: '#080b0a',
              color: '#fff',
              fontSize: '11px',
              letterSpacing: '3px',
            }}
          >
            <span>LOADING {loadPercent}%</span>

            <div
              style={{
                width: '180px',
                height: '2px',
                background: 'rgba(255,255,255,0.15)',
              }}
            >
              <div
                style={{
                  width: `${loadPercent}%`,
                  height: '100%',
                  background: '#18b878',
                  transition: 'width 0.2s ease',
                }}
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Hero1;
