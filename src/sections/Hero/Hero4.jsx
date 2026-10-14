import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero4.css";
import spaceSavingImage from "../../assets/applications/Spacesaving.png";
import fireResistantImage from "../../assets/applications/Fire resistant.png";
import scratchResistantImage from "../../assets/applications/Scratch.png";
import impactResistantImage from "../../assets/applications/Impact resistant.png";
import quickInstallationImage from "../../assets/applications/Quick installation.png";
import moistureResistantImage from "../../assets/applications/Moisture resistant.png";
import solventResistantImage from "../../assets/applications/Solvent resistant.png";

/* =========================================================
   VSK STORY DATA
========================================================= */

const stories = [
  {
    number: "01",
    eyebrow: "SPACE SAVING",
    title: "Maximum space. Minimal footprint.",
    description:
      "VSK restroom cubicle systems are designed to make efficient use of available space, providing practical layouts without compromising comfort or functionality.",
    image: spaceSavingImage,
    label: "SPACE EFFICIENT",
  },
  {
    number: "02",
    eyebrow: "FIRE RESISTANT",
    title: "Built with safety in mind.",
    description:
      "VSK panels are designed with fire-resistant properties, providing an added level of safety for commercial, institutional and high-traffic environments.",
    image: fireResistantImage,
    label: "FIRE RESISTANT",
  },
  {
    number: "03",
    eyebrow: "SCRATCH RESISTANT",
    title: "Made to stay looking better.",
    description:
      "Durable surface construction helps resist everyday scratches and wear, maintaining a clean and professional appearance even in busy restroom environments.",
    image: scratchResistantImage,
    label: "SCRATCH RESISTANT",
  },
  {
    number: "04",
    eyebrow: "IMPACT RESISTANT",
    title: "Engineered for everyday impact.",
    description:
      "VSK restroom systems are built to withstand the demands of high-traffic spaces, offering reliable resistance against everyday knocks and impacts.",
    image: impactResistantImage,
    label: "IMPACT RESISTANT",
  },
  {
    number: "05",
    eyebrow: "QUICK INSTALLATION",
    title: "Faster installation. Less disruption.",
    description:
      "A practical modular design enables efficient installation, helping reduce project time and minimizing disruption to your building or facility.",
    image: quickInstallationImage,
    label: "QUICK INSTALLATION",
  },
  {
    number: "06",
    eyebrow: "MOISTURE RESISTANT",
    title: "Made for wet environments.",
    description:
      "VSK panels are designed to perform reliably in moisture-rich restroom environments, helping maintain durability and appearance over time.",
    image: moistureResistantImage,
    label: "MOISTURE RESISTANT",
  },
  {
    number: "07",
    eyebrow: "SOLVENT RESISTANT",
    title: "Built to handle demanding cleaning.",
    description:
      "Resistant surfaces help withstand exposure to commonly used cleaning agents and solvents, making VSK systems easier to maintain in demanding environments.",
    image: solventResistantImage,
    label: "SOLVENT RESISTANT",
  },
];

/*
  Total "slides" shown in the right-side stage:
  5 stories + 1 closing call-to-action slide.
*/
const SLIDE_COUNT = stories.length + 1;

/* =========================================================
   MAIN HERO4
========================================================= */

const Hero4 = () => {
   const navigate = useNavigate();
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  /* ---------------------------------------------------------
     Scroll position -> active slide.
     Works with wheel, trackpad, keyboard, scrollbar drag and
     touch, because it only reads the real page scroll position.
  --------------------------------------------------------- */

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;

      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

      const index = Math.min(
        SLIDE_COUNT - 1,
        Math.floor(progress * SLIDE_COUNT)
      );

      setActive((prev) => (prev === index ? prev : index));
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  /* ---------------------------------------------------------
     Jump to a slide (progress dots)
  --------------------------------------------------------- */

  const scrollToSlide = (index) => {
    const track = trackRef.current;
    if (!track) return;

    const trackTop = window.scrollY + track.getBoundingClientRect().top;
    const scrollable = track.offsetHeight - window.innerHeight;

    /* land in the middle of that slide's scroll range */
    const target = trackTop + (scrollable * (index + 0.5)) / SLIDE_COUNT;

    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const imageIndex = Math.min(active, stories.length - 1);
  const currentStory = stories[imageIndex];

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      ref={trackRef}
      className="hero4"
      style={{ "--hero4-slides": SLIDE_COUNT }}
    >
      <div className="hero4-sticky">
        {/* BACKGROUND */}
        <div className="hero4-bg-grid"></div>
        <div className="hero4-bg-glow"></div>

        {/* =====================================================
           LEFT — FIXED IMAGE
        ===================================================== */}

        <div className="hero4-image-wrap">
          <div className="hero4-image-frame">
            <div className="hero4-image-glow"></div>

            <div className="hero4-image-card">
              {/* all images stacked, cross-fade by class */}
              {stories.map((story, i) => (
                <img
                  key={story.image}
                  src={story.image}
                  alt={story.title}
                  className={`hero4-story-image ${
                    i === imageIndex ? "is-active" : ""
                  }`}
                />
              ))}

              <div className="hero4-image-overlay"></div>

              {/* TOP */}
              {/* <div className="hero4-image-top"> */}
                {/* <span>VSK ENTERPRISES</span> */}
                {/* <span className="hero4-image-number">
                  {currentStory.number} */}
                {/* </span>
              </div> */}

              {/* CONTENT */}
              <div className="hero4-image-content">
                {stories.map((story, i) => (
                  <div
                    key={story.number}
                    className={`hero4-image-caption ${
                      i === imageIndex ? "is-active" : ""
                    }`}
                  >
                    {/* <span className="hero4-image-label">{story.label}</span> */}
                    {/* <h3>{story.title}</h3> */}
                  </div>
                ))}
              </div>

              {/* CTA */}
               <button
      type="button"
      className="hero4-image-button"
      onClick={() => navigate("/restroom-cubicles")}
    >
      <span>Explore More Details</span>
      <span className="hero4-button-arrow">→</span>
    </button>
            </div>

            <div className="hero4-corner-mark">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* =====================================================
           RIGHT — FIXED TEMPLATE, CHANGING CONTENT
        ===================================================== */}

        <div className="hero4-content">
          <div className="hero4-content-inner">
            {/* FIXED HEADING */}
            <div className="hero4-heading">
              <span className="hero4-section-label">
                ENGINEERED FOR PERFORMANCE
              </span>

              <h1>
                Built for <span>every space</span>
                
              </h1>

              <p>
                Smart restroom solutions designed to combine durability,
                hygiene and modern architectural aesthetics.
              </p>
            </div>

            {/* CONTENT STAGE — one fixed display area */}
            <div className="hero4-stage">
              {stories.map((story, i) => {
                const state =
                  i === active ? "is-active" : i < active ? "is-past" : "is-next";

                return (
                  <article
                    key={story.number}
                    className={`hero4-slide ${state}`}
                    aria-hidden={i !== active}
                  >
                    <div className="hero4-slide-index">
                      <span>{story.number}</span>
                      <span className="hero4-slide-total">
                        / {String(stories.length).padStart(2, "0")}
                      </span>
                    </div>

                    <span className="hero4-story-eyebrow">{story.eyebrow}</span>

                    <h2>{story.title}</h2>

                    <p>{story.description}</p>
                  </article>
                );
              })}

              {/* CLOSING SLIDE */}
              <article
                className={`hero4-slide hero4-slide-end ${
                  active === stories.length ? "is-active" : "is-next"
                }`}
                aria-hidden={active !== stories.length}
              >
                <span className="hero4-story-eyebrow">VSK ENTERPRISES</span>

                <h2>
                  Performance that
                  <br />
                  <strong>speaks for itself.</strong>
                </h2>

                <p>
                  From concept to installation, create restroom spaces that
                  are built to perform.
                </p>

                {/* <button
                  type="button"
                  className="hero4-end-button"
                  onClick={goToContact}
                  tabIndex={active === stories.length ? 0 : -1}
                >
                  Start Your Project
                  <span>→</span>
                </button> */}
              </article>
            </div>
          </div>

          {/* PROGRESS DOTS */}
          <div className="hero4-progress" aria-label="Story progress">
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`hero4-dot ${i === active ? "is-active" : ""}`}
                onClick={() => scrollToSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
