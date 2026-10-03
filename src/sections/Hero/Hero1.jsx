import { useEffect, useRef, useState } from 'react';
import './Hero1.css';

// =========================================================
// LOAD ENTRANCE FRAMES
// =========================================================

const entranceFrames = Object.entries(
  import.meta.glob('../../frames/entrance/*.{webp,png,jpg,jpeg}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true })
  )
  .map(([, src]) => src);

// =========================================================
// LOAD BUILD FRAMES
// =========================================================

const buildFrames = Object.entries(
  import.meta.glob('../../frames/build/*.{webp,png,jpg,jpeg}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true })
  )
  .map(([, src]) => src);

// =========================================================
// LOAD URINALS FRAMES
// =========================================================

const urinalsFrames = Object.entries(
  import.meta.glob('../../frames/urinals/*.{webp,png,jpg,jpeg}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true })
  )
  .map(([, src]) => src);

// =========================================================
// COMBINE ALL FRAMES
// =========================================================

const allFrames = [
  ...entranceFrames,
  ...buildFrames,
  ...urinalsFrames,
];

// =========================================================
// FRAME BOUNDARIES
// =========================================================

const entranceEnd = entranceFrames.length;

const buildEnd =
  entranceFrames.length + buildFrames.length;

// =========================================================
// HERO1
// =========================================================

const Hero1 = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const ticking = useRef(false);

  // =======================================================
  // SCROLL ANIMATION
  // =======================================================

  useEffect(() => {
    const updateAnimation = () => {
      const stage =
        document.querySelector('.hero-stage');

      if (!stage) return;

      const rect =
        stage.getBoundingClientRect();

      const scrollDistance =
        stage.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      let totalProgress =
        -rect.top / scrollDistance;

      totalProgress = Math.max(
        0,
        Math.min(1, totalProgress)
      );

      if (!ticking.current) {
        window.requestAnimationFrame(() => {

          // =================================================
          // PHASE 1
          // HERO1 POP FROM BOTTOM
          // =================================================

          const revealProgress =
            Math.min(
              1,
              totalProgress / 0.12
            );

          // =================================================
          // PHASE 2
          // FRAME ANIMATION
          // =================================================

          const frameProgress =
            Math.max(
              0,
              Math.min(
                1,
                (totalProgress - 0.12) /
                  0.88
              )
            );

          const frame =
            Math.min(
              allFrames.length - 1,
              Math.floor(
                frameProgress *
                  (allFrames.length - 1)
              )
            );

          setFrameIndex(frame);
          setProgress(totalProgress);

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener(
      'scroll',
      updateAnimation,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      updateAnimation
    );

    updateAnimation();

    return () => {
      window.removeEventListener(
        'scroll',
        updateAnimation
      );

      window.removeEventListener(
        'resize',
        updateAnimation
      );
    };
  }, []);

  // =======================================================
  // CURRENT STAGE
  // =======================================================

  let stage = 'entrance';

  if (frameIndex >= buildEnd) {
    stage = 'urinals';
  } else if (frameIndex >= entranceEnd) {
    stage = 'build';
  }

  // =======================================================
  // STAGE PROGRESS
  // =======================================================

  let stageProgress = 0;

  if (stage === 'entrance') {
    stageProgress =
      frameIndex /
      Math.max(
        1,
        entranceFrames.length - 1
      );
  }

  if (stage === 'build') {
    stageProgress =
      (frameIndex - entranceEnd) /
      Math.max(
        1,
        buildFrames.length - 1
      );
  }

  if (stage === 'urinals') {
    stageProgress =
      (frameIndex - buildEnd) /
      Math.max(
        1,
        urinalsFrames.length - 1
      );
  }

  // =======================================================
  // CONTENT
  // =======================================================

  const content = {
    entrance: {
      number: '01',
      label: 'ENTRANCE',
      title: 'Elegant Entrances,',
      second: 'Lasting Impressions',

      description: (
        <>
          Thoughtfully designed entrance solutions
          <br />
          that add style, privacy and comfort to
          <br />
          modern spaces.
        </>
      ),
    },

    build: {
      number: '02',
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
      number: '03',
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

  const labelProgress =
    Math.min(
      1,
      Math.max(
        0,
        stageProgress / 0.18
      )
    );

  const titleProgress =
    Math.min(
      1,
      Math.max(
        0,
        (stageProgress - 0.08) /
          0.30
      )
    );

  const descriptionProgress =
    Math.min(
      1,
      Math.max(
        0,
        (stageProgress - 0.32) /
          0.20
      )
    );

  const buttonProgress =
    Math.min(
      1,
      Math.max(
        0,
        (stageProgress - 0.52) /
          0.18
      )
    );

  // =======================================================
  // HERO1 POP FROM BOTTOM
  // =======================================================

  const hero1Y =
    Math.max(
      0,
      100 -
        (progress / 0.12) * 100
    );

  // =======================================================
  // RETURN
  // =======================================================

  return (
    <div
      className="hero1"
      style={{
        transform:
          `translateY(${hero1Y}%)`,
      }}
    >
      <div className="hero1-screen">

        {/* FRAME */}

        <img
          src={allFrames[frameIndex]}
          alt=""
          className="hero1-frame"
          draggable="false"
        />

        {/* OVERLAY */}

        <div className="hero1-overlay" />

        {/* CONTENT */}

        <div className="hero1-content">

          {/* LABEL */}

          <div
            className="hero1-label"
            style={{
              opacity: labelProgress,

              transform: `
                translateY(
                  ${35 -
                    labelProgress *
                      35}px
                )
              `,
            }}
          >
            <span>
              {active.number}
            </span>

            <div className="label-line" />

            <span>
              {active.label}
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="hero1-title"
            style={{
              opacity: titleProgress,

              transform: `
                translateY(
                  ${65 -
                    titleProgress *
                      65}px
                )
                scale(
                  ${0.94 +
                    titleProgress *
                      0.06}
                )
              `,
            }}
          >
            {active.title}

            <br />

            <span>
              {active.second}
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="hero1-description"
            style={{
              opacity:
                descriptionProgress,

              transform: `
                translateY(
                  ${30 -
                    descriptionProgress *
                      30}px
                )
              `,
            }}
          >
            {active.description}
          </p>

          {/* BUTTON */}

          <div
            className="hero1-button"
            style={{
              opacity:
                buttonProgress,

              transform: `
                translateY(
                  ${25 -
                    buttonProgress *
                      25}px
                )
              `,
            }}
          >
            <span>
              DISCOVER MORE
            </span>

            <div className="button-circle">
              →
            </div>
          </div>

        </div>

        {/* RIGHT INDICATOR */}

        <div className="hero1-indicator">

          <div className="indicator-line">

            <div
              className="indicator-progress"
              style={{
                height:
                  `${stageProgress * 100}%`,
              }}
            />

          </div>

          <span>
            {active.number}
          </span>

        </div>

        {/* FRAME COUNTER */}

        <div className="hero1-counter">

          {String(
            frameIndex + 1
          ).padStart(3, '0')}

          <span>/</span>

          {String(
            allFrames.length
          ).padStart(3, '0')}

        </div>

      </div>
    </div>
  );
};

export default Hero1;