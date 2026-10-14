import { useEffect, useRef, useState } from "react";
import "./Hero2.css";
import glanceImg from "../../assets/glanceimg.jpg";

const clamp = (v) => Math.max(0, Math.min(1, v));

const descriptionLines = [
  "VSK Enterprises specializes in premium restroom cubicle and washroom systems engineered for modern commercial spaces.",
  "With a focus on precision manufacturing, durable materials and thoughtful design, we deliver solutions that combine functionality, hygiene and lasting style —",
  "trusted across corporate, hospitality and public infrastructure projects nationwide.",
];

const Hero2 = () => {
  const stageRef = useRef(null);
  const ticking = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const scrollDistance = stage.offsetHeight - window.innerHeight;
      
      if (scrollDistance <= 0) {
        setScrollProgress(1);
        return;
      }

      const value = clamp(-rect.top / scrollDistance);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollProgress(value);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Compute staggered opacities & translates base on scroll progress
const getStyle = (index, total = 7) => {
  const start = 0.02 + (index / total) * 0.12;

  const progress = clamp(
    (scrollProgress - start) / 0.08
  );

  const translateY = 8 * (1 - progress);

  return {
    opacity: progress,
    transform: `translateY(${translateY}px)`,
    transition: "none",
  };
};

  return (
    <section className="hero2-stage" ref={stageRef}>
      <div className="hero2-sticky">
        {/* Dynamic Dark Background Glows */}
        <div className="hero2-bg-glow hero2-glow-green" />
        <div className="hero2-bg-glow hero2-glow-navy" />
        <div className="hero2-grid-pattern" />

        <div className="hero2-inner">
          {/* LEFT CONTENT */}
          <div className="hero2-content">
            <div className="hero2-badge-wrap" style={getStyle(0)}>
              <span className="hero2-badge-dot" />
              <span className="hero2-label">ABOUT VSK ENTERPRISES</span>
            </div>

            <h2 className="hero2-title">
              <span className="hero2-line" style={getStyle(1)}>
                Engineering
              </span>{" "}
              <span className="hero2-line hero2-accent" style={getStyle(2)}>
                Excellence
              </span>{" "}
              <br className="hero2-br-desktop" />
              <span className="hero2-line" style={getStyle(3)}>
                at a Glance
              </span>
            </h2>

            <p className="hero2-description">
              {descriptionLines.map((line, i) => (
                <span key={i} className="hero2-chunk" style={getStyle(4 + i)}>
                  {line}{" "}
                </span>
              ))}
            </p>

            {/* QUICK STATS STRIP */}
            <div className="hero2-stats" style={getStyle(6)}>
              <div className="hero2-stat-item">
                <span className="hero2-stat-num">100+</span>
                <span className="hero2-stat-lbl">Projects Done</span>
              </div>
              <div className="hero2-stat-divider" />
              <div className="hero2-stat-item">
                <span className="hero2-stat-num">100%</span>
                <span className="hero2-stat-lbl">Precision Built</span>
              </div>
            </div>

            <a href="#about" className="hero2-button" style={getStyle(7)}>
              <span className="hero2-button-text">Discover More</span>
              <span className="hero2-button-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="hero2-visual"
            style={{
              opacity: clamp((scrollProgress - 0.05) / 0.3),
              transform: `scale(${0.95 + clamp((scrollProgress - 0.05) / 0.3) * 0.05})`,
            }}
          >
            <div className="hero2-photo-card">
              <div className="hero2-photo-inner">
                <img src={glanceImg} alt="VSK restroom cubicles" />
                <div className="hero2-photo-overlay" />
              </div>

              {/* Corner Framing Elements */}
              <span className="corner corner-tl" />
              <span className="corner corner-tr" />
              <span className="corner corner-bl" />
              <span className="corner corner-br" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;