import { useEffect, useRef, useState } from "react";
import "./Hero2.css";
import glanceImg from "../../assets/glanceimg.png";

const clamp = (v) => Math.max(0, Math.min(1, v));
const ease = (t) => 1 - Math.pow(1 - t, 3);

const descriptionLines = [
  "VSK Enterprises specializes in premium restroom cubicle and washroom systems engineered for modern commercial spaces.",
  "With a focus on precision manufacturing, durable materials and thoughtful design, we deliver solutions that combine functionality, hygiene and lasting style —",
  "trusted across corporate, hospitality and public infrastructure projects nationwide.",
];

const ITEMS = 7;

const Hero2 = () => {
  const stageRef = useRef(null);
  const ticking = useRef(false);
  const [p, setP] = useState(0);

  useEffect(() => {
    const update = () => {
      const stage = stageRef.current;

      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const scrollDistance = stage.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) return;

      const value = clamp(-rect.top / scrollDistance);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setP(value);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", update, {
      passive: true,
    });

    window.addEventListener("resize", update);

    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /* =========================================================
     FAST TEXT SEQUENCE
  ========================================================= */

  const START = 0.01;
  const FADE = 0.06;
  const STEP = 0.09;

  const fade = (i) => {
    const start = START + i * STEP;

    const progress = clamp((p - start) / FADE);

    return {
      opacity: progress,
      transform: `translateY(${12 - progress * 12}px)`,
    };
  };

  /* =========================================================
     IMAGE ENTERS FASTER
  ========================================================= */

  const imageProgress = ease(
    clamp((p - 0.03) / 0.28)
  );

  return (
    <section
      className="hero2-stage"
      ref={stageRef}
    >
      <div className="hero2-sticky">

        <div className="hero2-glow" />

        <div className="hero2-inner">

          {/* =================================================
              LEFT — TEXT
          ================================================= */}

          <div className="hero2-content">

            <p
              className="hero2-label"
              style={fade(0)}
            >
              ABOUT US
            </p>

            <h2 className="hero2-title">

              <span
                className="hero2-line"
                style={fade(1)}
              >
                VSK at a
              </span>

              <br />

              <span
                className="hero2-line hero2-accent"
                style={fade(2)}
              >
                Glance
              </span>

            </h2>

            <p className="hero2-description">

              {descriptionLines.map((line, i) => (
                <span
                  key={i}
                  className="hero2-chunk"
                  style={fade(3 + i)}
                >
                  {line}{" "}
                </span>
              ))}

            </p>

            <a
              href="#about"
              className="hero2-button"
              style={fade(6)}
            >
              <span className="hero2-button-text">
                ABOUT US
              </span>

              <span className="hero2-button-arrow">
                →
              </span>
            </a>

          </div>

          {/* =================================================
              RIGHT — IMAGE
          ================================================= */}

          <div
            className="hero2-visual"
            style={{
              opacity: imageProgress,
              transform: `translateX(${
                (1 - imageProgress) * 60
              }px)`,
            }}
          >

            <div className="hero2-photo">

              <img
                src={glanceImg}
                alt="VSK restroom cubicles"
              />

              <span className="corner corner-tl" />

              <span className="corner corner-br" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero2;