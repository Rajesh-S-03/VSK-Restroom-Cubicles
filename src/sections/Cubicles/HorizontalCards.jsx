import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./HorizontalCards.css";

import hardware1 from "../../assets/applications/springloaded.jpg";
import hardware2 from "../../assets/applications/plock.jpeg";
import hardware3 from "../../assets/applications/hangercumstoper.jpeg";
import hardware4 from "../../assets/applications/doorknob.jpeg";
import hardware5 from "../../assets/applications/sslbend.jpg.jpeg";
import hardware6 from "../../assets/applications/skirting.jpeg";
import hardware7 from "../../assets/applications/pedestalleg.jpeg";
import hardware8 from "../../assets/applications/headrail.jpeg";
import hardware9 from "../../assets/applications/nylon_Accessories.jpeg";

const hardwareData = [
  {
    id: "01",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "Spring Loaded / Gravity Hinges",
    description:
      "Self-closing hinge hardware engineered for consistent, reliable door movement across high-frequency-use restroom cubicles.",
    features: [
      "Self-closing spring action",
      "Corrosion-resistant construction",
      "Consistent door alignment",
      "Rated for high-frequency use",
    ],
    image: hardware1,
  },
  {
    id: "02",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "Privacy Lock with Indicator",
    description:
      "A vacant/engaged indicator lock system providing clear occupancy status while maintaining smooth, dependable operation.",
    features: [
      "Vacant / Engaged visual indicator",
      "Smooth turn-lock mechanism",
      "Corrosion-resistant finish",
      "Emergency release compatible",
    ],
    image: hardware2,
  },
  {
    id: "03",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "Coat Hanger Cum Stopper",
    description:
      "A dual-purpose fitting that combines a door stopper with a coat/bag hanger, adding functionality without extra hardware.",
    features: [
      "Dual function: stopper and hanger",
      "Rated for daily commercial use",
      "Corrosion-resistant finish",
      "Compact, unobtrusive design",
    ],
    image: hardware3,
  },
  {
    id: "04",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "Door Knob & Panel Holder",
    description:
      "Coordinated knob and panel-holder hardware for a clean, finished look across every cubicle door and partition edge.",
    features: [
      "Ergonomic knob profile",
      "Secure panel-edge holder",
      "Coordinated hardware family",
      "Suitable for all VSK series",
    ],
    image: hardware4,
  },
  {
    id: "05",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "SS L-Bend & Floor Angle Plate",
    description:
      "Structural stainless-steel fixing components that anchor cubicle panels securely to the floor for long-term stability.",
    features: [
      "Stainless steel construction",
      "High structural load rating",
      "Secure floor-anchor fixing",
      "Compatible with all panel thicknesses",
    ],
    image: hardware5,
  },
  {
    id: "06",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "SS Skirting & Shoe Box Cover",
    description:
      "A finishing skirting and cover system that conceals fixings at floor level for a clean, professional installation.",
    features: [
      "Stainless steel skirting profile",
      "Conceals floor-level fixings",
      "Clean, finished appearance",
      "Matches full hardware range",
    ],
    image: hardware6 ,
  },
  {
    id: "07",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "SS / Pedestal Adjustable Legs",
    description:
      "Height-adjustable support legs that allow precise levelling of cubicle panels across uneven floor surfaces.",
    features: [
      "Height-adjustable levelling",
      "Stainless steel construction",
      "High load-bearing capacity",
      "Quick on-site adjustment",
    ],
    image: hardware7,
  },
  {
    id: "08",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "Head Rail — SS / Aluminium",
    description:
      "The structural top-rail system that ties cubicle panels together, available in stainless steel or aluminium finishes.",
    features: [
      "Available in SS or aluminium",
      "Structural panel-to-panel support",
      "Clean architectural profile",
      "Simple, secure installation",
    ],
    image: hardware8,
  },
  {
    id: "09",
    eyebrow: "HARDWARE & ACCESSORIES",
    title: "Nylon Accessories",
    description:
      "A complete range of nylon hardware accessories offering a rust-proof, cost-effective alternative for humid restroom environments.",
    features: [
      "Fully rust-proof nylon build",
      "Cost-effective hardware option",
      "Suitable for humid environments",
      "Compatible with Nylon Series",
    ],
    image: hardware9,
  },
];

export default function HorizontalCards() {
  const targetRef = useRef(null);

  // Track vertical scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate percentage transformation dynamically for 9 cards
  // Translate from 0% down to -88% to show all 9 cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-225%"]);

  return (
    <section ref={targetRef} className="vsk-horizontal-pin-stage">
      {/* STICKY CONTAINER */}
      <div className="vsk-horizontal-sticky">
        {/* Glow & Grid Background Accents */}
        <div className="vsk-horizontal-glow glow-1" />
        <div className="vsk-horizontal-glow glow-2" />
        <div className="vsk-horizontal-grid" />

        <div className="vsk-horizontal-header">
          <div className="vsk-hw-kicker-wrap">
            <span className="vsk-hw-dot" />
            <span className="vsk-horizontal-kicker">HARDWARE & ACCESSORIES</span>
          </div>
          <h2>Engineered Fittings & Precision Componentry</h2>
        </div>

        {/* HORIZONTAL MOVING TRACK */}
        <div className="vsk-horizontal-track-container">
          <motion.div style={{ x }} className="vsk-horizontal-track">
            {hardwareData.map((card) => (
              <div key={card.id} className="vsk-card-item">
                <div className="vsk-card-image-wrap">
                  <img src={card.image} alt={card.title} />
                  <div className="vsk-card-overlay" />

                  <span className="vsk-card-badge">{card.id}</span>
                  <span className="vsk-card-eyebrow">{card.eyebrow}</span>

                  <div className="vsk-card-caption">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>

                    <ul className="vsk-card-features">
                      {card.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}