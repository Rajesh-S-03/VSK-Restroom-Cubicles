import React, { useState } from "react";
import "./CubicleMosaic.css";
import { Link } from "react-router-dom";

// The supplied material data uses blankImages(3), so these are three empty
// gallery slots until actual material photographs are added.
const blankImages = (count) => Array.from({ length: count }, () => null);

const materials = [
{
  number: "01",
  theme: "compact",
  title: "Compact Grade Laminate Board",
  eyebrow: "MATERIALS & COMPOSITION",

  description:
    "A premium high-pressure compact laminate board featuring a dense cellulose-fibre core and durable decorative resin surfaces. Engineered for demanding commercial environments, it offers excellent strength, moisture resistance, and long-lasting durability.",

  composition:
    "Constructed from multiple layers of cellulose-fibre sheets impregnated with thermosetting resins. These layers are bonded together to create a dense, rigid, and durable solid-core structure suitable for heavy-duty applications.",

  thickness: "12mm Standard | 6mm, 18mm Options Available",

  manufacturingInfo:
    "Manufactured using advanced high-pressure thermosetting technology, where multiple resin-treated layers are compressed under controlled heat and pressure to achieve a uniform core, enhanced structural stability, and reliable long-term performance.",

  applicableStandards: "IS 20146 / EN 438",

  performanceProperties: [
    "Excellent Water & Moisture Resistance",
    "High Impact & Abrasion Resistance",
    "Superior Scratch & Chemical Resistance",
    "Hygienic Surface & Easy Maintenance",
    "Strong, Rigid & Self-Supporting Structure",
  ],

  images: blankImages(3),
},
  {
    number: "02",
    theme: "thickness",
    title: "12mm Board Thickness",
    eyebrow: "MATERIALS & COMPOSITION",
    description:
      "The gold standard for modern architectural cubicle partitions, providing extreme structural integrity with minimal floor footprint.",
    composition:
      "High-density kraft paper layers impregnated with phenolic resins topped with melaminic decorative surfaces.",
    thickness: "12mm (Nominal)",
    manufacturingInfo:
      "Calibrated precision pressing to ensure uniform thickness tolerance across large sheets.",
    applicableStandards: "EN 438 Class 4 / IS 20146",
    performanceProperties: [
      "Optimal Space-Saving Dimensions",
      "High Mechanical Bending Strength",
      "Dimensionally Stable under Temperature Fluctuations",
      "Vandal & Grafitti Resistant Surface",
    ],
    images: blankImages(3),
  },
  {
    number: "03",
    theme: "moisture",
    title: "Water & Moisture Resistant",
    eyebrow: "MATERIALS & COMPOSITION",
    description:
      "Material profile optimized for severe moisture conditions, daily chemical hosing, and continuous water exposure.",
    composition:
      "Non-porous solid composite structure preventing liquid penetration.",
    thickness: "12mm / 18mm",
    manufacturingInfo:
      "Hydrophobic resin bonding engineered specifically for high-humidity and wet-area installations.",
    applicableStandards: "ISO 4586 / EN 438-4 Water Immersion Certified",
    performanceProperties: [
      "Zero Swelling or Delamination",
      "Steam & Vapor Proof",
      "Resistant to Mildew and Fungal Growth",
      "Washdown Safe",
    ],
    images: blankImages(3),
  },
  {
    number: "04",
    theme: "resistance",
    title: "Scratch, Impact & Chemical Resistant",
    eyebrow: "MATERIALS & COMPOSITION",
    description:
      "Heavy-duty panel surface built to resist abrasive cleaners, accidental impacts, and harsh public washroom conditions.",
    composition:
      "Melamine-infused outer protective clear overlay with reinforced core matrix.",
    thickness: "6mm to 18mm options",
    manufacturingInfo:
      "High-density surface treatment providing superior Vickers hardness values.",
    applicableStandards: "EN 438 Abrasion & Impact Class",
    performanceProperties: [
      "Stain Resistant against Organic Solvents",
      "Heavy Impact Resistance against Scuffs & Dents",
      "UV Colorfastness (Fade-Proof)",
      "Low Maintenance Coating",
    ],
    images: blankImages(3),
  },
];

const galleryCaptions = ["Surface finish", "Solid-core structure", "Material detail"];

function MaterialGallery({ item }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = item.images?.length ? item.images : [null, null, null];
  const currentImage = images[activeIndex];
  const slideNumber = activeIndex + 1;

  const goToSlide = (direction) => {
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

  return (
    <div className="vsk-material-gallery" aria-label={`${item.title} image gallery`}>
      {currentImage ? (
        <img
          className="vsk-material-gallery-image"
          src={currentImage}
          alt={`${item.title} — ${galleryCaptions[activeIndex]}`}
        />
      ) : (
        <div
          className={`vsk-material-art vsk-material-art--${item.theme} vsk-material-art--slide-${slideNumber}`}
          role="img"
          aria-label={`${item.title} image placeholder ${slideNumber}. Add material photography to the images array.`}
        >
          <span className="vsk-material-art-kicker">VSK MATERIAL LIBRARY</span>
          <div className="vsk-material-sample vsk-material-sample--back" />
          <div className="vsk-material-sample vsk-material-sample--middle" />
          <div className="vsk-material-sample vsk-material-sample--front">
            <span className="vsk-material-sample-edge" />
          </div>
          <div className="vsk-material-art-caption">
            <span>{galleryCaptions[activeIndex]}</span>
            <strong>{item.number} / 0{slideNumber}</strong>
          </div>
          <span className="vsk-material-art-note">ADD MATERIAL PHOTO</span>
        </div>
      )}

      <span className="vsk-material-gallery-label">MATERIAL {item.number}</span>

      <button
        type="button"
        className="vsk-material-gallery-arrow vsk-material-gallery-arrow--left"
        onClick={() => goToSlide(-1)}
        aria-label={`Previous image for ${item.title}`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        className="vsk-material-gallery-arrow vsk-material-gallery-arrow--right"
        onClick={() => goToSlide(1)}
        aria-label={`Next image for ${item.title}`}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="vsk-material-gallery-footer">
        <span>{String(slideNumber).padStart(2, "0")}</span>
        <div className="vsk-material-gallery-dots" aria-label="Choose image">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1} of ${item.title}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
        <span>{String(images.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

function MaterialCard({ item, featured = false }) {
  return (
    <article
      className={`vsk-material-card ${featured ? "vsk-material-card--featured" : ""}`}
      key={item.number}
    >
      <MaterialGallery item={item} />

      <div className="vsk-material-card-content">
        <div className="vsk-material-card-heading">
          <span className="vsk-material-eyebrow">{item.eyebrow} / {item.number}</span>
          <h3>{item.title}</h3>
          <p className="vsk-material-description">{item.description}</p>
        </div>

        <div className="vsk-material-detail">
          <span className="vsk-material-detail-label">Composition</span>
          <p>{item.composition}</p>
        </div>

        <div className="vsk-material-detail vsk-material-detail--thickness">
          <span className="vsk-material-detail-label">Thickness</span>
          <p>{item.thickness}</p>
        </div>

        <div className="vsk-material-detail">
          <span className="vsk-material-detail-label">Manufacturing</span>
          <p>{item.manufacturingInfo}</p>
        </div>

        <div className="vsk-material-detail">
          <span className="vsk-material-detail-label">Applicable standards</span>
          <p>{item.applicableStandards}</p>
        </div>

        <div className="vsk-material-performance">
          <span className="vsk-material-detail-label">Performance properties</span>
          <ul>
            {item.performanceProperties.map((property) => (
              <li key={property}>{property}</li>
            ))}
          </ul>
        </div>

        <Link to="/contact-us#register" className="vsk-material-link">
          Discuss this material <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}

export default function CubicleMosaic() {
  return (
    <section className="vsk-materials-mosaic" id="vsk-materials">
      <div className="vsk-materials-container">
        <header className="vsk-materials-intro">
          <span className="vsk-materials-kicker">02 / MATERIALS & COMPOSITION</span>
          <h2>
            The substance behind
            <br />
            <em>lasting performance.</em>
          </h2>
          <p>
            Explore the materials, construction details and performance properties
            selected for demanding commercial restroom environments.
          </p>
        </header>

        <div className="vsk-materials-grid">
          {materials.map((item, index) => (
            <MaterialCard key={item.number} item={item} featured={index === 0} />
          ))}
        </div>

        <p className="vsk-materials-image-note">
          Image galleries are ready for three photos per material. Replace the empty
          image slots in the materials data with your actual material photographs.
        </p>
      </div>
    </section>
  );
}
