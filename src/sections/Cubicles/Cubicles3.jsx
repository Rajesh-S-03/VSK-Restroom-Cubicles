import React, { useState } from "react";
import "./Cubicles3.css";
import { Link } from "react-router-dom";

import workstationImage1 from "../../assets/applications/works1.jpeg";
import workstationImage2 from "../../assets/applications/works2.jpeg";
import workstationImage3 from "../../assets/applications/works3.jpeg";

// Consolidated Data with Image Carousel Array
const modularFurnitureData = {
  eyebrow: "02 / WORKSPACE SOLUTIONS",
  title: "Modular Workstation & Chair",
  subtitle: "Make room for better work.",
  images: [workstationImage1, workstationImage2, workstationImage3],
  leadText:
    "Our modular workstations and chairs deliver ergonomic comfort, flexible layouts, and modern design, enhancing productivity in contemporary office environments.",
  description:
    "Flexible layouts help teams use space efficiently while a coordinated furniture approach keeps the workspace organized, ergonomic, and professional.",
  benefits: [
    { num: "01", label: "Flexible Layouts" },
    { num: "02", label: "Everyday Comfort" },
    { num: "03", label: "Modern Styling" },
  ],
  features: [
    "Ergonomic seating and work surfaces",
    "Flexible, reconfigurable layouts",
    "Modern office design aesthetics",
    "Durable, easy-clean finishes",
    "Suitable for offices & co-working spaces",
    "Made to suit your space and requirement",
  ],
  specifications: [
    { label: "Configuration", value: "Modular / Reconfigurable" },
    { label: "Material", value: "High-grade Engineered Wood & Steel" },
    { label: "Finish", value: "Anti-scratch Laminate / Powder Coated" },
    { label: "Applications", value: "Corporate, Co-working, IT Hubs" },
  ],
};

export default function Cubicles3() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("features");

  const images = modularFurnitureData.images.filter((img) => img !== null);

  const handlePrevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="vsk-furniture-section" id="vsk-modular-furniture">
      {/* Background Decorative Glows */}
      <div className="vsk-furniture-glow glow-green" />
      <div className="vsk-furniture-glow glow-navy" />
      <div className="vsk-furniture-grid-pattern" />

      <div className="vsk-furniture-inner">
        {/* LEFT COLUMN - CONTENT & SPECS */}
        <div className="vsk-furniture-copy">
          <div className="vsk-furniture-kicker-wrap">
            <span className="vsk-furniture-kicker-dot" />
            <span className="vsk-furniture-kicker">
              {modularFurnitureData.eyebrow}
            </span>
          </div>

          <h2 className="vsk-furniture-title">
            {modularFurnitureData.title}
          </h2>

          <p className="vsk-furniture-lead">
            {modularFurnitureData.leadText}
          </p>

          <p className="vsk-furniture-subtext">
            {modularFurnitureData.description}
          </p>

          {/* BENEFIT COUNTERS */}
          <div className="vsk-furniture-benefits">
            {modularFurnitureData.benefits.map((benefit, idx) => (
              <div key={idx} className="vsk-benefit-item">
                <strong>{benefit.num}</strong>
                <span>{benefit.label}</span>
              </div>
            ))}
          </div>

          {/* TAB TOGGLES FOR DETAILS */}
          <div className="vsk-furniture-tabs">
            <button
              className={`vsk-tab-btn ${activeTab === "features" ? "active" : ""}`}
              onClick={() => setActiveTab("features")}
            >
              Key Features
            </button>
            <button
              className={`vsk-tab-btn ${activeTab === "specs" ? "active" : ""}`}
              onClick={() => setActiveTab("specs")}
            >
              Specifications
            </button>
          </div>

          <div className="vsk-furniture-tab-content">
            {activeTab === "features" && (
              <ul className="vsk-furniture-feature-list">
                {modularFurnitureData.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            )}

            {activeTab === "specs" && (
              <div className="vsk-furniture-specs-grid">
                {modularFurnitureData.specifications.map((spec, idx) => (
                  <div key={idx} className="vsk-spec-item">
                    <span className="vsk-spec-lbl">{spec.label}</span>
                    <span className="vsk-spec-val">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact-us#register" className="vsk-furniture-cta">
            <span>Discuss Your Workspace</span>
            <span className="vsk-cta-arrow">&rarr;</span>
          </Link>
        </div>

        {/* RIGHT COLUMN - CAROUSEL SLIDER */}
        <div className="vsk-furniture-visual-wrap">
          <div className="vsk-furniture-card">
            <div className="vsk-furniture-carousel">
              <img
                src={images[currentImgIndex]}
                alt={`Modular Workstation View ${currentImgIndex + 1}`}
                className="vsk-furniture-img"
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    className="vsk-carousel-arrow prev"
                    onClick={handlePrevImage}
                    aria-label="Previous Slide"
                  >
                    &#8249;
                  </button>
                  <button
                    type="button"
                    className="vsk-carousel-arrow next"
                    onClick={handleNextImage}
                    aria-label="Next Slide"
                  >
                    &#8250;
                  </button>

                  {/* Dot Indicators */}
                  <div className="vsk-carousel-dots">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`vsk-dot ${
                          idx === currentImgIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentImgIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* FLOATING CAPTION CARD */}
            <figcaption className="vsk-furniture-caption">
              <span className="vsk-caption-brand">VSK ENTERPRISES</span>
              <strong className="vsk-caption-title">
                {modularFurnitureData.title}
              </strong>
            </figcaption>

            {/* Corner Details */}
            <span className="corner corner-tl" />
            <span className="corner corner-br" />
          </div>
        </div>
      </div>
    </section>
  );
}