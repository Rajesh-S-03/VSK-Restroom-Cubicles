import React, { useEffect, useRef, useState } from "react";
import "./Cubicles1.css";

import ssPipeSeries from "../../assets/SS_pipe_series.png";
import nylonSeries from "../../assets/nylon_series.png";
import ssAnodize from "../../assets/ss_anodize.png";
import tmmBoxUp from "../../assets/applications/12mm1.jpeg";
import shoeBox from "../../assets/applications/shoebox.jpeg";
import pdDoor from "../../assets/applications/pd1.jpeg";
import hooverCeiling from "../../assets/applications/hoover1.jpeg";
import hooverLite from "../../assets/applications/hooverl2.jpeg";
import modularWorkstation from "../../assets/applications/works2.jpeg"
import exteriorCladding from "../../assets/applications/exteriorclading.png";

const products = [
  {
    id: "01",
    title: "SS Pipe Series",
    subtitle: "Clean. Strong. Functional.",
    description: "A practical cubicle system combining compact laminate panels with a clean stainless-steel pipe and hardware language.",
    image: ssPipeSeries,
    features: ["Compact Grade Laminate", "Stainless Steel Components", "Professional Cubicle System"],
  },
  {
    id: "02",
    title: "Nylon Series",
    subtitle: "Simple. Durable. Refined.",
    description: "A clean cubicle configuration using nylon-based components for a practical and contemporary restroom environment.",
    image: nylonSeries,
    features: ["Compact Grade Laminate", "Nylon Components", "Contemporary Finish"],
  },
  {
    id: "03",
    title: "SS Anodize Series",
    subtitle: "A refined architectural finish.",
    description: "A refined cubicle system designed around a contemporary stainless-steel and anodized finish language.",
    image: ssAnodize,
    features: ["Compact Grade Laminate", "Anodized Components", "Architectural Appearance"],
  },
  {
    id: "04",
    title: "12mm Box-Up Series",
    subtitle: "A structured cubicle system.",
    description: "A 12mm box-up configuration developed around a clean, structured cubicle appearance.",
    image: tmmBoxUp,
    features: ["12mm Board System", "Compact Laminate Construction", "Box-Up Profile"],
  },
  {
    id: "05",
    title: "12mm Box-Up Shoe",
    subtitle: "Strong. Neat. Functional.",
    description: "A 12mm compact laminate toilet cubicle system featuring a box-up design for a clean, structured, and durable restroom partition solution.",
    image: shoeBox,
    features: ["12mm Compact Laminate Board","Box-Up Shoe Design","Durable Toilet Partitions",],
  },
  {
    id: "06",
    title: "PD Door — Indus Model",
    subtitle: "Coordinated panels and hardware.",
    description: "The PD Door / Indus Model forms part of the VSK restroom cubicle range, with coordinated panels and hardware.",
    image: pdDoor,
    features: ["Compact Laminate Panels", "Coordinated Hardware", "Professional Configuration"],
  },
  {
    id: "07",
    title: "Hoover Ceiling Hung",
    subtitle: "Minimal floor-level expression.",
    description: "A ceiling-hung cubicle configuration designed around a clean and visually lighter restroom environment.",
    image: hooverCeiling,
    features: ["Compact Laminate Panels", "Ceiling-Hung Configuration", "Clean Appearance"],
  },
  {
    id: "08",
    title: "Hoover Lite / Athena Lite",
    subtitle: "A lighter visual language.",
    description: "The Hoover Lite / Athena Lite range provides another configuration within the VSK restroom cubicle collection.",
    image: hooverLite,
    features: ["Compact Laminate Panels", "Lite Configuration", "Coordinated Hardware"],
  },
  {
    id: "09",
    title: "Modular Workstation & Chair",
    subtitle: "Ergonomic. Flexible. Modern.",
    description: "Modular workstations and chairs support flexible layouts and contemporary office environments.",
    image: modularWorkstation,
    features: ["Ergonomic Comfort", "Flexible Layouts", "Modern Office Design"],
  },
  {
    id: "10",
    title: "6mm HPL Exterior Cladding",
    subtitle: "Durable. Weather-resistant. Contemporary.",
    description: "6mm HPL exterior cladding brings a contemporary finish to building exteriors with durable, weather-resistant surfaces.",
    image: exteriorCladding,
    features: ["6mm HPL Construction", "Weather-Resistant Surface", "Exterior Protection"],
  },
];

const ROTATION_MS = 6000;

export default function Cubicles1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const active = products[activeIndex];

  const goTo = (index) => {
    setActiveIndex((index + products.length) % products.length);
    setProgress(0);
  };

  useEffect(() => {
    const start = Date.now();
    setProgress(0);
    const interval = window.setInterval(() => {
      setProgress(Math.min(((Date.now() - start) / ROTATION_MS) * 100, 100));
    }, 50);
    const timeout = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, ROTATION_MS);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [activeIndex]);

  useEffect(() => {
    const track = trackRef.current;
    const card = cardRefs.current[activeIndex];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - track.clientWidth / 2 + card.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <section className="vsk-showcase" aria-label="Featured VSK products">
      <div className="vsk-showcase-backdrop" style={{ backgroundImage: `url(${active.image})` }} />
      <div className="vsk-showcase-shade" />

      <header className="vsk-showcase-header">
        <a className="vsk-showcase-brand" href="/" aria-label="VSK Enterprises home">
          <strong>VSK</strong><span>ENTERPRISES</span>
        </a>
        <span className="vsk-showcase-label">RESTROOM & ARCHITECTURAL SYSTEMS</span>
      </header>

      <div className="vsk-showcase-main" key={active.id}>
        <div className="vsk-showcase-copy">
          <span className="vsk-showcase-eyebrow">PRODUCT {active.id} / VSK COLLECTION</span>
          <h1>{active.title}</h1>
          <h2>{active.subtitle}</h2>
          <p>{active.description}</p>
          <ul>
            {active.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
          <a className="vsk-showcase-cta" href="#vsk-cubicle-range">Explore product details <span>↓</span></a>
        </div>
        {/* <div className="vsk-showcase-index"><strong>{active.id}</strong><span /> <small>{String(products.length).padStart(2, "0")}</small></div> */}
      </div>

      <div className="vsk-showcase-selector">
        <div className="vsk-showcase-selector-heading">
          <span>EXPLORE THE RANGE</span><i /><small>{active.id} / {String(products.length).padStart(2, "0")}</small>
        </div>
        <div className="vsk-showcase-track-row">
          <button className="vsk-showcase-arrow" onClick={() => goTo(activeIndex - 1)} aria-label="Previous product">←</button>
          <div className="vsk-showcase-track" ref={trackRef}>
            {products.map((product, index) => (
              <button
                key={product.id}
                ref={(element) => { cardRefs.current[index] = element; }}
                className={`vsk-showcase-card ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => goTo(index)}
                aria-pressed={index === activeIndex}
              >
                <span className="vsk-showcase-card-image" style={{ backgroundImage: `url(${product.image})` }} />
                <span className="vsk-showcase-card-shade" />
                <span className="vsk-showcase-card-number">{product.id}</span>
                <span className="vsk-showcase-card-title">{product.title}</span>
              </button>
            ))}
          </div>
          <button className="vsk-showcase-arrow" onClick={() => goTo(activeIndex + 1)} aria-label="Next product">→</button>
        </div>
        <div className="vsk-showcase-timer"><div><span style={{ width: `${progress}%` }} /></div><small>AUTO ROTATION</small></div>
      </div>
    </section>
  );
}
