import { useEffect, useRef, useState } from 'react';
import './Hero2.css';
import glanceImg from '../../assets/glanceimg.png';

const Hero2 = () => {
  const stageRef = useRef(null);
  const ticking = useRef(false);

  const [textProgress, setTextProgress] = useState(0);
  const [imageProgress, setImageProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const scrollDistance = stage.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      let raw = -rect.top / scrollDistance;
      raw = Math.max(0, Math.min(1, raw));

      // -----------------------------------------------------
      // PHASE MAP (within the 0–1 pinned range)
      // 0.00 – 0.22  → EMPTY (nothing visible)
      // 0.22 – 0.55  → TEXT rises from bottom, settles left
      // 0.55 – 0.90  → IMAGE slides in from right, settles right
      // 0.90 – 1.00  → HOLD (both fully settled)
      // -----------------------------------------------------

      const t = Math.max(0, Math.min(1, (raw - 0.22) / 0.33));
      const i = Math.max(0, Math.min(1, (raw - 0.55) / 0.35));

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setTextProgress(t);
          setImageProgress(i);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="hero2-stage" ref={stageRef}>
      <div className="hero2-sticky">

        <div className="hero2-glow" />
        <div className="hero2-grid" />

        <div className="hero2-inner">

          {/* LEFT — TEXT */}
          <div
            className="hero2-content"
            style={{
              opacity: textProgress,
              transform: `translateY(${70 * (1 - textProgress)}px)`,
            }}
          >
            <div className="hero2-label">
              <span>04</span>
              <div className="label-line" />
              <span>ABOUT US</span>
            </div>

            <h2 className="hero2-title">
              VSK at a
              <br />
              <span>Glance</span>
            </h2>

            <p className="hero2-description">
              VSK Enterprises specializes in premium restroom cubicle
              and washroom systems engineered for modern commercial
              spaces. With a focus on precision manufacturing, durable
              materials and thoughtful design, we deliver solutions
              that combine functionality, hygiene and lasting style —
              trusted across corporate, hospitality and public
              infrastructure projects nationwide.
            </p>
          </div>

          {/* RIGHT — IMAGE */}
          <div
            className="hero2-visual"
            style={{
              opacity: imageProgress,
              transform: `translateX(${90 * (1 - imageProgress)}px)`,
            }}
          >
            <div className="hero2-photo">
              <img
                src={glanceImg}
                alt="VSK Enterprises facility"
                draggable="false"
              />
              <span className="corner corner-tl" />
              <span className="corner corner-br" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero2;