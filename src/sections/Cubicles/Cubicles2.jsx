import React, { useState } from "react";
import "./Cubicles2.css";
import { Link } from "react-router-dom";

import ssPipeSeries from "../../assets/SS_pipe_series.png";
import ss_3 from "../../assets/applications/ss_pipe3.png";
import nylonSeries from "../../assets/nylon_series.png";
import ny2 from "../../assets/applications/nylon2.png";
import ny3 from "../../assets/applications/nylon3.png";
import ano1 from "../../assets/applications/ano1.png";
import ano2 from "../../assets/applications/ano2.jpeg";
import ano3 from "../../assets/applications/ano3.jpeg";
import tmm1 from "../../assets/applications/12mm1.jpeg";
import tmm2 from "../../assets/applications/12mm2.jpeg";
import tmm3 from "../../assets/applications/12mm3.jpeg";
import shoe1 from "../../assets/applications/shoebox1.png";
import shoe2 from "../../assets/clients/ga69.png";
import shoe3 from "../../assets/applications/shoebox.jpeg";
import pd1 from "../../assets/applications/pd1.jpeg";
import pd2 from "../../assets/applications/pd2.jpeg";
import pd3 from "../../assets/applications/pd3.jpeg";
import hoover1 from "../../assets/applications/hoover1.jpeg";
import hoover2 from "../../assets/applications/hoover2.jpeg";
import hoover3 from "../../assets/applications/hoover3.jpeg";
import hooverLite1 from "../../assets/applications/hooverl1.jpeg";
import hooverLite2 from "../../assets/applications/hooverl2.jpeg";
import hooverLite3 from "../../assets/applications/hooverl3.jpeg";
import ssAnodize from "../../assets/ss_anodize.png";

// Consolidated Full Cubicle Data
const cubicleData = [
  {
    id: "01",
    key: "SS Pipe Series",
    eyebrow: "01 / CUBICLE SERIES",
    title: "SS Pipe Series",
    subtitle: "Clean. Strong. Functional.",
    images: [ssPipeSeries, ss_3, ssAnodize],
    description:
      "A practical cubicle system combining compact laminate panels with a clean stainless-steel pipe and hardware language. Built for high-traffic commercial and institutional washrooms that need a durable, low-maintenance finish.",
    features: [
      "12mm compact grade laminate panels",
      "Stainless steel pipe head-rail and frame",
      "Corrosion-resistant hardware",
      "Fast, dry-fit installation",
      "150mm clearance from finished floor level",
      "Suitable for high-footfall commercial spaces",
    ],
    specifications: [
      { label: "Total Cubicle Height", value: "2150–2440 mm" },
      { label: "Cubicle Depth", value: "1500–1830 mm" },
      { label: "Pilaster Height", value: "2100–2400 mm" },
      { label: "Door Height", value: "2100 mm" },
      { label: "Partition Width", value: "900–1500 mm" },
      { label: "Door Width", value: "610–750 mm" },
      { label: "Divider Height", value: "1800–2100 mm" },
    ],
    optionsAndUpgrades: [
      "Multiple HBL board colours and finishes",
      "CNC-routed designer door shapes",
      "Stainless steel accessories selected to complement the laminate colour",
      "Optional indicator-cum-doorknob, subject to availability",
    ],
  },
  {
    id: "02",
    key: "Nylon Series",
    eyebrow: "02 / CUBICLE SERIES",
    title: "Nylon Series",
    subtitle: "Simple. Durable. Refined.",
    images: [nylonSeries, ny2, ny3],
    description:
      "A clean cubicle configuration using nylon-based hardware components for a practical and contemporary restroom environment, ideal for humid or frequently washed-down spaces.",
    features: [
      "12mm compact grade laminate panels",
      "Nylon polyamide 6 grade hardware",
      "Fully rust-proof components",
      "Lightweight and cost effective",
      "Clean, contemporary finish",
      "Low-maintenance, easy to clean",
    ],
    specifications: [
      { label: "Total Cubicle Height", value: "1980–2300 mm" },
      { label: "Cubicle Depth", value: "1830–2130 mm" },
      { label: "Pilaster Height", value: "1830–2130 mm" },
      { label: "Door Height", value: "1780–2100 mm" },
      { label: "Partition Width", value: "900–1500 mm" },
      { label: "Door Width", value: "610–750 mm" },
      { label: "Divider Height", value: "1800–2100 mm" },
    ],
    optionsAndUpgrades: [
      "Multiple HBL board colours and finishes",
      "CNC-routed designer door shapes",
      "Adjustable legs for floor-level adjustment",
      "Nylon hardware with black anodized aluminium profiles",
      "Optional indicator-cum-doorknob, subject to availability",
    ],
  },
  {
    id: "03",
    key: "SS Anodize Series",
    eyebrow: "03 / CUBICLE SERIES",
    title: "SS Anodize Series",
    subtitle: "A refined architectural finish.",
    images: [ano1, ano2, ano3],
    description:
      "A refined cubicle system built around an architectural stainless-steel and anodized finish language, suited to premium commercial and corporate interiors.",
    features: [
      "12mm compact grade laminate panels",
      "Anodized aluminium accent trims",
      "Scratch and stain resistant surface",
      "Premium matte architectural finish",
      "Robust privacy strip detailing",
      "Long-term corrosion resistance",
    ],
    specifications: [
      { label: "Total Cubicle Height", value: "1980–2300 mm" },
      { label: "Cubicle Depth", value: "1830–2130 mm" },
      { label: "Pilaster Height", value: "1830–2130 mm" },
      { label: "Door Height", value: "1780–2100 mm" },
      { label: "Partition Width", value: "900–1500 mm" },
      { label: "Door Width", value: "610–750 mm" },
      { label: "Divider Height", value: "1800–2100 mm" },
    ],
    optionsAndUpgrades: [
      "Multiple HBL board colours and finishes",
      "CNC-routed designer door shapes",
      "Adjustable legs for floor-level adjustment",
      "Anodized aluminium profiles with SS finish options",
      "Stainless steel accessories selected to complement the laminate colour",
      "Optional indicator-cum-doorknob, subject to specifications",
    ],
  },
  {
    id: "04",
    key: "12mm Box-Up Series",
    eyebrow: "04 / CUBICLE SERIES",
    title: "12mm Box-Up Series",
    subtitle: "Defined lines. Structured form.",
    images: [tmm1, tmm2, tmm3],
    description:
      "A 12mm box-up configuration developed around a clean, structured cubicle appearance, with a bold aluminium head-rail detail for medium to high traffic areas.",
    features: [
      "12mm board box-up profile",
      "Compact laminate construction",
      "Bold aluminium head-rail design",
      "Suitable for medium-to-high traffic",
      "Seamless, boxed-edge appearance",
      "Water resistant panel construction",
    ],
    specifications: [
      { label: "Total Cubicle Height", value: "2100–2400 mm" },
      { label: "Cubicle Depth", value: "2100–2400 mm" },
      { label: "Pilaster Height", value: "1500–1830 mm" },
      { label: "Door Height", value: "2000–2150 mm" },
      { label: "Partition Width", value: "900–1500 mm" },
      { label: "Door Width", value: "610–750 mm" },
      { label: "Divider Height", value: "1800–2100 mm" },
    ],
    optionsAndUpgrades: [
      "Multiple HBL board colours and finishes",
      "CNC-routed designer door shapes",
      "Adjustable legs for floor-level adjustment",
      "Choice of stainless steel or nylon accessories",
      "Optional indicator-cum-doorknob, subject to availability",
    ],
  },
  {
    id: "05",
    key: "12mm Box-Up Shoe Series",
    eyebrow: "05 / CUBICLE SERIES",
    title: "12mm Box-Up Shoe",
    subtitle: "Strong. Neat. Functional.",
    images: [shoe1, shoe2, shoe3],
    description:
      "A 12mm compact laminate toilet cubicle system featuring a box-up shoe design for a neat, structured, and durable restroom partition solution.",
    features: [
      "12mm Compact Laminate Panels",
      "Box-Up Shoe Design",
      "Durable Toilet Partitions",
      "Clean, Structured Appearance",
      "Suitable for Commercial Restrooms",
    ],
    specifications: [
      { label: "Panel Thickness", value: "12 mm" },
      { label: "Configuration", value: "Box-Up Shoe System" },
    ],
    optionsAndUpgrades: [
      "Multiple HBL board colours and finishes",
      "Choice of compatible hardware options",
      "Custom configuration based on project requirements",
    ],
  },
  {
    id: "06",
    key: "PD Door",
    eyebrow: "06 / CUBICLE SERIES",
    title: "PD Door — Indus Model",
    subtitle: "A coordinated door solution.",
    images: [pd1, pd2, pd3],
    description:
      "The PD Door / Indus Model forms part of the VSK restroom cubicle range, with coordinated panels and powder-coated aluminium mounts suited to quickwall installations.",
    features: [
      "Compact laminate privacy panels",
      "Powder-coated aluminium mounts",
      "Coordinated hardware set",
      "Quickwall-suitable installation",
      "Smooth door glide action",
      "Easy on-site fitting",
    ],
    specifications: [
      { label: "Door Height", value: "1800–2100 mm" },
      { label: "Door Width (customizable)", value: "600–700 mm" },
    ],
    optionsAndUpgrades: [
      "Compact laminate privacy panels",
      "Powder-coated aluminium mounting profiles",
      "Stainless steel or nylon hardware options",
      "Self-closing hinges & Privacy lock with indicator",
      "Coat hanger cum stopper",
    ],
  },
  {
    id: "07",
    key: "Hoover Ceiling Hung",
    eyebrow: "07 / CUBICLE SERIES",
    title: "Hoover Ceiling Hung",
    subtitle: "A lighter floor-level expression.",
    images: [hoover1, hoover2, hoover3],
    description:
      "A ceiling-hung cubicle configuration designed around a clean, visually lighter restroom environment with zero floor contact for effortless cleaning.",
    features: [
      "Compact laminate panels",
      "Ceiling-hung mounting configuration",
      "Zero floor contact for easy cleaning",
      "Modern, floating appearance",
      "Unobstructed floor access",
      "Suitable for premium washroom fit-outs",
    ],
    specifications: [
      { label: "Width", value: "1000 mm" },
      { label: "Door Width", value: "610 mm" },
      { label: "Depth", value: "1550–1800 mm" },
      { label: "Total Height from Ground", value: "2400 mm" },
      { label: "Bottom Gap", value: "100 mm" },
      { label: "Pilaster Width", value: "400 mm" },
      { label: "♿ Wheelchair Access Width", value: "1550 mm" },
      { label: "♿ Wheelchair Door Width", value: "910 mm" },
      { label: "Door / Pilaster Thickness", value: "18 mm" },
      { label: "Divider Thickness", value: "12 mm" },
    ],
    optionsAndUpgrades: [
      "Ceiling-supported, floor-free cubicle configuration",
      "Wheelchair-accessible configuration options",
      "Door stopping mechanism with routed vertical ends",
      "Rubber sponge lining at the routed door ends",
    ],
    prerequisites: [
      "Installed where False Ceiling is yet to be mounted",
      "Requires supporting walls on both sides",
    ],
  },
  {
    id: "08",
    key: "Hoover Lite / Athena Lite",
    eyebrow: "08 / CUBICLE SERIES",
    title: "Hoover Lite / Athena Lite",
    subtitle: "Lightweight visual language.",
    images: [hooverLite1, hooverLite2, hooverLite3],
    description:
      "The Hoover Lite / Athena Lite range offers a lighter-duty ceiling-hung configuration within the VSK restroom cubicle collection, built for faster installation and cost-sensitive projects.",
    features: [
      "Compact laminate panels",
      "Lightweight ceiling-hung frame",
      "Quick installation profile",
      "Coordinated hardware set",
      "Budget-friendly configuration",
      "Clean, contemporary appearance",
    ],
    specifications: [
      { label: "Width", value: "1000 mm" },
      { label: "Door Width", value: "610 mm" },
      { label: "Depth", value: "1550–1800 mm" },
      { label: "Total Height from Ground", value: "2105 mm" },
      { label: "Bottom Gap", value: "150 mm" },
      { label: "Pilaster Width", value: "400 mm" },
      { label: "♿ Wheelchair Access Width", value: "1550 mm" },
      { label: "♿ Wheelchair Door Width", value: "900 mm" },
      { label: "Door / Pilaster / Divider", value: "12 mm" },
    ],
    optionsAndUpgrades: [
      "Slim, lightweight cubicle configuration",
      "HPL colour and finish selection",
      "Clean architectural finish",
    ],
    prerequisites: [
      "Installed where False Ceiling is yet to be mounted",
      "Requires supporting walls on both sides",
    ],
  },
];

// Single Item Card Component handling Image Slider and Tab toggles
const CubicleCard = ({ item, isReversed }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("features");

  const validImages = item.images.filter((img) => img !== null);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? validImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === validImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <article className={`vsk-card ${isReversed ? "is-reversed" : ""}`}>
      {/* LEFT / RIGHT - IMAGE CAROUSEL */}
      <div className="vsk-card-visual">
        <div className="vsk-carousel">
          <img
            src={validImages[currentImageIndex] || ssPipeSeries}
            alt={`${item.title} Slide ${currentImageIndex + 1}`}
            className="vsk-carousel-img"
          />

          {validImages.length > 1 && (
            <>
              <button
                type="button"
                className="vsk-carousel-btn prev"
                onClick={handlePrevImage}
                aria-label="Previous Image"
              >
                &#8249;
              </button>
              <button
                type="button"
                className="vsk-carousel-btn next"
                onClick={handleNextImage}
                aria-label="Next Image"
              >
                &#8250;
              </button>
              <div className="vsk-carousel-dots">
                {validImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`vsk-dot ${
                      idx === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
            </>
          )}

          <span className="vsk-card-number">{item.id}</span>
        </div>
      </div>

      {/* RIGHT / LEFT - DETAILED CONTENT */}
      <div className="vsk-card-content">
        <span className="vsk-card-eyebrow">{item.eyebrow}</span>
        <h3 className="vsk-card-title">{item.title}</h3>
        <h4 className="vsk-card-subtitle">{item.subtitle}</h4>
        <p className="vsk-card-description">{item.description}</p>

        {/* DETAILS TABS */}
        <div className="vsk-tabs">
          <button
            className={`vsk-tab-btn ${activeTab === "features" ? "active" : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`vsk-tab-btn ${activeTab === "specs" ? "active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </button>
          <button
            className={`vsk-tab-btn ${activeTab === "options" ? "active" : ""}`}
            onClick={() => setActiveTab("options")}
          >
            Options & Upgrades
          </button>
        </div>

        {/* TAB CONTENTS */}
        <div className="vsk-tab-panel">
          {activeTab === "features" && (
            <ul className="vsk-feature-list">
              {item.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          )}

          {activeTab === "specs" && (
            <div className="vsk-specs-grid">
              {item.specifications.map((spec, idx) => (
                <div key={idx} className="vsk-spec-row">
                  <span className="vsk-spec-label">{spec.label}</span>
                  <span className="vsk-spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "options" && (
            <div className="vsk-options-wrap">
              <ul className="vsk-feature-list">
                {item.optionsAndUpgrades.map((opt, idx) => (
                  <li key={idx}>{opt}</li>
                ))}
              </ul>
              {item.prerequisites && (
                <div className="vsk-prereq-block">
                  <strong className="vsk-prereq-title">Prerequisites:</strong>
                  <ul>
                    {item.prerequisites.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

       
<Link to="/contact-us#register" className="vsk-card-link">
  Discuss this configuration <span>&rarr;</span>
</Link>

      </div>
    </article>
  );
};

export default function Cubicles2() {
  return (
    <section className="vsk-cubicles-section" id="vsk-cubicles">
      <header className="vsk-section-header">
        <span className="vsk-kicker">RESTROOM SOLUTIONS</span>
        <h2>
          Designed around <em>everyday performance.</em>
        </h2>
        <p>
          Explore the VSK cubicle range. Each configuration combines engineered
          materials, dedicated hardware languages, and modern architectural
          finishes tailored to your project requirements.
        </p>
      </header>

      <div className="vsk-card-container">
        {cubicleData.map((item, index) => (
          <CubicleCard
            key={item.id}
            item={item}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}