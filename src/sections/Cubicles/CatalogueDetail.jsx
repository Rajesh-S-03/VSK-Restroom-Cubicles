import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CatalogueDetail.css";

import ssPipeSeries from "../../assets/SS_pipe_series.png";
import nylonSeries from "../../assets/nylon_series.png";
import ssAnodize from "../../assets/ss_anodize.png";

const blankImages = (count) => Array(count).fill(null);

export const catalogueDetails = {
  // ---------------------------------------------------
  // CUBICLE SERIES
  // ---------------------------------------------------
  cubicleSeries: {
    "SS Pipe Series": {
      eyebrow: "CUBICLE SERIES",
      title: "SS Pipe Series",
      images: [ssPipeSeries, null, null, null, null, null],
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
        "Optional indicator-cum-doorknob, subject to specifications and availability",
      ],
    },
    "Nylon Series": {
      eyebrow: "CUBICLE SERIES",
      title: "Nylon Series",
      images: [nylonSeries, null, null, null, null, null],
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
    "SS Anodize Series": {
      eyebrow: "CUBICLE SERIES",
      title: "SS Anodize Series",
      images: [ssAnodize, null, null, null, null, null],
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
        "Optional indicator-cum-doorknob, subject to specifications and availability",
      ],
    },
    "12mm Box-Up Series": {
      eyebrow: "CUBICLE SERIES",
      title: "12mm Box-Up Series",
      images: blankImages(6),
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
    "PD Door": {
      eyebrow: "CUBICLE SERIES",
      title: "PD Door — Indus Model",
      images: blankImages(6),
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
        "Self-closing hinges",
        "Privacy lock with indicator",
        "Coat hanger cum stopper",
      ],
    },
    "Hoover Ceiling Hung": {
      eyebrow: "CUBICLE SERIES",
      title: "Hoover Ceiling Hung",
      images: blankImages(6),
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
        { label: "♿ Wheelchair Accessible Width", value: "1550 mm" },
        { label: "♿ Wheelchair Accessible Door Width", value: "910 mm" },
        { label: "Door Thickness", value: "18 mm" },
        { label: "Pilaster Thickness", value: "18 mm" },
        { label: "Divider Thickness", value: "12 mm" },
      ],
      optionsAndUpgrades: [
        "Ceiling-supported, floor-free cubicle configuration",
        "Wheelchair-accessible configuration as indicated in the catalogue",
        "HPL colour and finish selection",
        "Door stopping mechanism with routed vertical ends",
        "Rubber sponge lining at the routed door ends",
      ],
      prerequisites: [
        "Can only be installed at places where False Ceiling is yet to be installed",
        "Can only be installed at sites having walls on both sides",
      ],
      doorStoppingMechanism: [
        "Door stopping mechanism provided with routed vertical ends",
        "Rubber sponge lining provided at the routed door ends",
      ],
    },
    "Hoover Lite / Athena Lite": {
      eyebrow: "CUBICLE SERIES",
      title: "Hoover Lite / Athena Lite",
      images: blankImages(6),
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
        { label: "♿ Wheelchair Accessible Width", value: "1550 mm" },
        { label: "♿ Wheelchair Accessible Door Width", value: "900 mm" },
        { label: "Door Thickness", value: "12 mm" },
        { label: "Pilaster Thickness", value: "12 mm" },
        { label: "Divider Thickness", value: "12 mm" },
      ],
      optionsAndUpgrades: [
        "Slim, lightweight cubicle configuration",
        "HPL colour and finish selection",
        "Clean architectural finish",
      ],
      prerequisites: [
        "Can only be installed at places where False Ceiling is yet to be installed",
        "Can only be installed at sites having walls on both sides",
      ],
      doorStoppingMechanism: [
        "Aluminum made door stopper profiles",
        "Rubber linings provided for dampening the noise while door closing",
        "Door stopper profiles will be provided at the vertical ends of the pilasters",
      ],
    },
  },

  // ---------------------------------------------------
  // HARDWARE & ACCESSORIES
  // ---------------------------------------------------
  hardware: {
    "Spring Loaded Hinges / Gravity Hinges": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "Spring Loaded Hinges / Gravity Hinges",
      images: blankImages(4),
      description:
        "Self-closing hinge hardware engineered for consistent, reliable door movement across high-frequency-use restroom cubicles.",
      features: [
        "Self-closing spring action",
        "Corrosion-resistant construction",
        "Consistent door alignment",
        "Rated for high-frequency use",
        "Easy tension adjustment",
        "Compatible with standard door panels",
      ],
    },
    "Privacy Lock with Indicator": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "Privacy Lock with Indicator",
      images: blankImages(4),
      description:
        "A vacant/engaged indicator lock system providing clear occupancy status while maintaining smooth, dependable operation.",
      features: [
        "Vacant / Engaged visual indicator",
        "Smooth turn-lock mechanism",
        "Corrosion-resistant finish",
        "Emergency release compatible",
        "Simple, tool-free installation",
        "Durable long-term operation",
      ],
    },
    "Coat Hanger Cum Stopper": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "Coat Hanger Cum Stopper",
      images: blankImages(4),
      description:
        "A dual-purpose fitting that combines a door stopper with a coat/bag hanger, adding functionality without extra hardware.",
      features: [
        "Dual function: stopper and hanger",
        "Rated for daily commercial use",
        "Corrosion-resistant finish",
        "Simple surface-mount fitting",
        "Compact, unobtrusive design",
        "Matches standard hardware finishes",
      ],
    },
    "Door Knob & Panel Holder": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "Door Knob & Panel Holder",
      images: blankImages(4),
      description:
        "Coordinated knob and panel-holder hardware for a clean, finished look across every cubicle door and partition edge.",
      features: [
        "Ergonomic knob profile",
        "Secure panel-edge holder",
        "Corrosion-resistant finish",
        "Coordinated hardware family",
        "Easy replacement and servicing",
        "Suitable for all VSK cubicle series",
      ],
    },
    "SS L-Bend & Floor Angle Plate": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "SS L-Bend & Floor Angle Plate",
      images: blankImages(4),
      description:
        "Structural stainless-steel fixing components that anchor cubicle panels securely to the floor for long-term stability.",
      features: [
        "Stainless steel construction",
        "High structural load rating",
        "Secure floor-anchor fixing",
        "Corrosion resistant",
        "Compatible with all panel thicknesses",
        "Simple on-site installation",
      ],
    },
    "SS Skirting & Shoe Box Cover": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "SS Skirting & Shoe Box Cover",
      images: blankImages(4),
      description:
        "A finishing skirting and cover system that conceals fixings at floor level for a clean, professional installation.",
      features: [
        "Stainless steel skirting profile",
        "Conceals floor-level fixings",
        "Clean, finished appearance",
        "Corrosion resistant",
        "Easy-clean surface",
        "Matches full hardware range",
      ],
    },
    "SS / Pedestal Adjustable Legs": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "SS / Pedestal Adjustable Legs",
      images: blankImages(4),
      description:
        "Height-adjustable support legs that allow precise levelling of cubicle panels across uneven floor surfaces.",
      features: [
        "Height-adjustable levelling",
        "Stainless steel construction",
        "High load-bearing capacity",
        "Suitable for uneven floors",
        "Corrosion resistant",
        "Quick on-site adjustment",
      ],
    },
    "Head Rail — SS / Aluminium": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "Head Rail — SS / Aluminium",
      images: blankImages(4),
      description:
        "The structural top-rail system that ties cubicle panels together, available in stainless steel or aluminium finishes.",
      features: [
        "Available in SS or aluminium",
        "Structural panel-to-panel support",
        "Clean architectural profile",
        "Corrosion resistant",
        "Compatible with all cubicle series",
        "Simple, secure installation",
      ],
    },
    "Nylon Accessories": {
      eyebrow: "HARDWARE & ACCESSORIES",
      title: "Nylon Accessories",
      images: blankImages(4),
      description:
        "A complete range of nylon hardware accessories offering a rust-proof, cost-effective alternative for humid restroom environments.",
      features: [
        "Fully rust-proof nylon build",
        "Cost-effective hardware option",
        "Lightweight components",
        "Suitable for humid environments",
        "Low-maintenance finish",
        "Compatible with Nylon Series cubicles",
      ],
    },
  },

  // ---------------------------------------------------
  // MATERIALS
  // ---------------------------------------------------
  materials: {
    "Compact Grade Laminate Board": {
      eyebrow: "MATERIALS & COMPOSITION",
      title: "Compact Grade Laminate Board",
      images: blankImages(3),
      composition: "Thermosetting resins reinforced with cellulose-fibre core layers pressed under high heat and pressure.",
      thickness: "12mm standard (Available in 6mm, 18mm options)",
      manufacturingInfo: "Manufactured via high-pressure thermosetting processes ensuring complete solid core homogeneity.",
      applicableStandards: "IS 20146 / EN 438 Standards compliant",
      performanceProperties: [
        "100% Water & Moisture Impermeable",
        "High Impact & Abrasion Resistance",
        "Scratch and Chemical Resistant",
        "Anti-Bacterial & Easy to Sterilize",
        "Self-Supporting Rigidity",
      ],
      description:
        "A dense, high-pressure compact laminate board featuring a dark cellulose-fibre core and protective decorative resin surfaces. Designed for heavy commercial usage.",
    },
    "12mm Board Thickness": {
      eyebrow: "MATERIALS & COMPOSITION",
      title: "12mm Board Thickness",
      images: blankImages(3),
      composition: "High-density kraft paper layers impregnated with phenolic resins topped with melaminic decorative surfaces.",
      thickness: "12mm (Nominal)",
      manufacturingInfo: "Calibrated precision pressing to ensure uniform thickness tolerance across large sheets.",
      applicableStandards: "EN 438 Class 4 / IS 20146",
      performanceProperties: [
        "Optimal Space-Saving Dimensions",
        "High Mechanical Bending Strength",
        "Dimensionally Stable under Temperature Fluctuations",
        "Vandal & Grafitti Resistant Surface",
      ],
      description:
        "The gold standard for modern architectural cubicle partitions, providing extreme structural integrity with minimal floor footprint.",
    },
    "Water & Moisture Resistant": {
      eyebrow: "MATERIALS & COMPOSITION",
      title: "Water & Moisture Resistant",
      images: blankImages(3),
      composition: "Non-porous solid composite structure preventing liquid penetration.",
      thickness: "12mm / 18mm",
      manufacturingInfo: "Hydrophobic resin bonding engineered specifically for high-humidity and wet-area installations.",
      applicableStandards: "ISO 4586 / EN 438-4 Water Immersion Certified",
      performanceProperties: [
        "Zero Swelling or Delamination",
        "Steam & Vapor Proof",
        "Resistant to Mildew and Fungal Growth",
        "Washdown Safe",
      ],
      description:
        "Material profile optimized for severe moisture conditions, daily chemical hosing, and continuous water exposure.",
    },
    "Scratch, Impact & Chemical Resistant": {
      eyebrow: "MATERIALS & COMPOSITION",
      title: "Scratch, Impact & Chemical Resistant",
      images: blankImages(3),
      composition: "Melamine-infused outer protective clear overlay with reinforced core matrix.",
      thickness: "6mm to 18mm options",
      manufacturingInfo: "High-density surface treatment providing superior Vickers hardness values.",
      applicableStandards: "EN 438 Abrasion & Impact Class",
      performanceProperties: [
        "Stain Resistant against Organic Solvents",
        "Heavy Impact Resistance against Scuffs & Dents",
        "UV Colorfastness (Fade-Proof)",
        "Low Maintenance Coating",
      ],
      description:
        "Heavy-duty panel surface built to resist abrasive cleaners, accidental impacts, and harsh public washroom conditions.",
    },
  },

  // ---------------------------------------------------
  // MODULAR FURNITURE
  // ---------------------------------------------------
  modularFurniture: {
    "Modular Workstation & Chair": {
      eyebrow: "MODULAR FURNITURE",
      title: "Modular Workstation & Chair",
      images: blankImages(6),
      description:
        "Our modular workstations and chairs deliver ergonomic comfort, flexible layouts, and modern design, enhancing productivity in contemporary office environments.",
      features: [
        "Ergonomic seating and work surfaces",
        "Flexible, reconfigurable layouts",
        "Modern office design",
        "Durable, easy-clean finishes",
        "Suitable for offices and co-working spaces",
        "Made to suit your space and requirement",
      ],
    },
  },

  // ---------------------------------------------------
  // INTERIOR & EXTERIOR CLADDING
  // ---------------------------------------------------
  exteriorCladding: {
    "6mm HPL Exterior Cladding": {
      eyebrow: "EXTERIOR CLADDING",
      title: "6mm HPL Exterior Cladding",
      images: blankImages(6),
      description:
        "Our 6mm HPL exterior cladding offers weather resistance, durability, and modern aesthetics, ensuring long-lasting protection for contemporary building exteriors.",
      features: [
        "6mm high-pressure laminate (HPL) panels",
        "Weather and moisture resistant",
        "UV and colour-fade resistant",
        "Long-lasting exterior protection",
        "Wide range of colours and wood finishes",
        "Low maintenance, easy to clean",
      ],
    },
  },
};

// =========================================================
// STANDARD COLOURS — 48 entries
// =========================================================
const namedStandardColours = [
  { name: "Classic Grey", hex: "#888b8d" },
  { name: "Rainy Sky", hex: "#6c7a89" },
  { name: "Egg White", hex: "#f2f0e6" },
  { name: "City Shadow", hex: "#4a535e" },
  { name: "Azure White", hex: "#eef2f5" },
  { name: "Ivory", hex: "#fffff0" },
  { name: "Black Magic", hex: "#1c1d21" },
  { name: "Rust Brown", hex: "#8b3a2b" },
  { name: "Deep Blue", hex: "#0a192f" },
  { name: "Clinical White", hex: "#fdfdfd" },
  { name: "Steel Blue", hex: "#4682b4" },
  { name: "Warm Grey", hex: "#9d9d93" },
  { name: "Royal Blue", hex: "#4169e1" },
  { name: "Purple", hex: "#800080" },
  { name: "Golden Yellow", hex: "#ffc107" },
  { name: "Orange", hex: "#ff9800" },
  { name: "Olive Green", hex: "#556b2f" },
  { name: "Cyan Blue", hex: "#00bcd4" },
  { name: "Slate Gray", hex: "#708090" },
  { name: "Coral Pink", hex: "#ff7f50" },
  { name: "Crimson Red", hex: "#dc143c" },
  { name: "Mint Green", hex: "#98ff98" },
];

const extraStandardColours = Array.from({ length: 48 - namedStandardColours.length }, (_, i) => {
  const hue = (i * 47) % 360;
  return {
    name: `Shade ${namedStandardColours.length + i + 1}`,
    hex: `hsl(${hue}, 45%, 55%)`,
  };
});

export const standardColours48 = [...namedStandardColours, ...extraStandardColours].map((c) => ({
  ...c,
  code: c.hex,
  image: null,
}));

// =========================================================
// SPECIAL WOODEN GRAIN COLOURS — 32 entries
// =========================================================
const namedSpecialColours = [
  { name: "Oak Natural", pattern: "linear-gradient(135deg, #b8860b, #8b5a2b)" },
  { name: "Walnut Dark", pattern: "linear-gradient(135deg, #4a2c11, #2b1808)" },
  { name: "Maple Light", pattern: "linear-gradient(135deg, #d2b48c, #a88a68)" },
  { name: "Teak Classic", pattern: "linear-gradient(135deg, #b86d29, #734213)" },
  { name: "Desert Marble", pattern: "linear-gradient(135deg, #d3c7b3, #a89f91)" },
  { name: "Highland Pine", pattern: "linear-gradient(135deg, #8b5a2b, #5c3a1e)" },
  { name: "Ash Oak", pattern: "linear-gradient(135deg, #b8a99a, #847568)" },
  { name: "Hedfield Walnut", pattern: "linear-gradient(135deg, #5c3818, #361f0b)" },
  { name: "Mahogany Red", pattern: "linear-gradient(135deg, #500000, #2b0000)" },
  { name: "Auburn Oak", pattern: "linear-gradient(135deg, #935116, #5d330e)" },
  { name: "Canterbury Oak", pattern: "linear-gradient(135deg, #7e5129, #4f3218)" },
  { name: "Alumina Pearl", pattern: "linear-gradient(135deg, #e5e4e2, #b0b0b0)" },
  { name: "Black Granite", pattern: "linear-gradient(135deg, #3a3a3a, #111111)" },
  { name: "Rosewood Finish", pattern: "linear-gradient(135deg, #65000b, #330005)" },
  { name: "Smoked Birch", pattern: "linear-gradient(135deg, #7f7062, #483d34)" },
  { name: "Ebony Grain", pattern: "linear-gradient(135deg, #282828, #0a0a0a)" },
  { name: "Rustic Elm", pattern: "linear-gradient(135deg, #99734e, #5e432a)" },
  { name: "Wenge Wood", pattern: "linear-gradient(135deg, #3d2b1f, #1c120c)" },
  { name: "White Marble", pattern: "linear-gradient(135deg, #f8f9fa, #cfd8dc)" },
  { name: "Copper Rust", pattern: "linear-gradient(135deg, #b87333, #78471b)" },
];

const extraSpecialColours = Array.from({ length: 32 - namedSpecialColours.length }, (_, i) => {
  const hue = (i * 61) % 360;
  return {
    name: `Wooden Finish ${namedSpecialColours.length + i + 1}`,
    pattern: `linear-gradient(135deg, hsl(${hue}, 40%, 48%), hsl(${hue}, 40%, 22%))`,
  };
});

export const specialColours32 = [...namedSpecialColours, ...extraSpecialColours].map((c) => ({
  ...c,
  code: null,
  image: null,
}));

// =========================================================
// LOOKUP HELPER
// =========================================================
export function getDetailItem(section, name) {
  if (section === "standardColours") {
    return {
      type: "standardColours",
      eyebrow: "COLOURS & FINISHES",
      title: "Standard Colours",
      colours: standardColours48,
    };
  }

  if (section === "specialColours") {
    return {
      type: "specialColours",
      eyebrow: "COLOURS & FINISHES",
      title: "Special Wooden-Grain Colours & Textures",
      colours: specialColours32,
    };
  }

  const bucket = catalogueDetails[section];
  const entry = bucket && bucket[name];
  if (!entry) return null;

  if (section === "materials") {
    return { type: "material", ...entry };
  }

  if (section === "hardware") {
    return { type: "hardware", ...entry };
  }

  return { type: "product", ...entry };
}

// =========================================================
// ENHANCEMENTS MAPPING
// =========================================================
const cubicleEnhancements = {
  "SS Pipe Series": {
    accessories: [
      "Stainless-steel pipe head-rail and frame",
      "Self-closing hinges and privacy lock options",
      "Coat hanger cum stopper, where selected",
      "SS L-bend / floor angle plate fixing options",
    ],
    materials: [
      "12mm compact grade laminate panels",
      "HBL standard colour options",
      "Special wooden-grain finishes, subject to availability",
    ],
    applications: [
      "High-footfall commercial washrooms",
      "Office and institutional restroom blocks",
      "Public facilities",
    ],
    installation: [
      "Confirm site measurements and floor levels before fabrication",
      "Allow stilted 150mm clearance from finished floor level",
    ],
  },
  "Nylon Series": {
    accessories: [
      "Nylon polyamide 6 grade hardware",
      "Nylon accessory set selected for the cubicle layout",
      "Adjustable legs where required for floor levelling",
    ],
    materials: [
      "12mm compact grade laminate panels",
      "Nylon hardware with black anodized aluminium profile options",
    ],
    applications: [
      "Humid restroom environments",
      "Frequently washed-down washrooms",
    ],
    installation: [
      "Check floor levels before positioning the panels",
      "Verify door swing and clearances on site",
    ],
  },
};

const DetailListSection = ({ title, items, className = "" }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className={`catalogue-detail-card-section ${className}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((entry, index) => (
          <li key={`${title}-${index}`}>
            <span className="feature-dot" />
            {entry}
          </li>
        ))}
      </ul>
    </section>
  );
};

// =========================================================
// MAIN COMPONENT
// =========================================================
const CatalogueDetail = ({ item, onClose }) => {
  const navigate = useNavigate();
  const [zoomImg, setZoomImg] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  // Colour search filter states
  const [stdSearchTerm, setStdSearchTerm] = useState("");
  const [woodSearchTerm, setWoodSearchTerm] = useState("");

  if (!item) return null;

  const isCubicleSeries = item.eyebrow === "CUBICLE SERIES";
  const extraDetails = isCubicleSeries ? cubicleEnhancements[item.title] : null;

  const handleNavigateToContact = () => {
    if (onClose) onClose();
    navigate("/contact", { state: { productInterest: item.title } });
  };

  const openZoom = (src) => {
    if (!src) return;
    setZoomImg(src);
    setZoomScale(1);
  };

  const closeZoom = () => {
    setZoomImg(null);
    setZoomScale(1);
  };

  return (
    <div className="catalogue-detail-overlay" onClick={onClose}>
      <div
        className="catalogue-detail-panel"
        onClick={(event) => event.stopPropagation()}
      >
        {/* HEADER */}
        <div className="catalogue-detail-header">
          <div>
            <span className="catalogue-detail-eyebrow">{item.eyebrow}</span>
            <h2>{item.title}</h2>
          </div>

          <button
            className="catalogue-detail-close"
            onClick={onClose}
            aria-label="Close details"
          >
            ×
          </button>
        </div>

        <div className="catalogue-detail-body">
          {/* 1. MATERIAL DETAIL VIEW */}
          {item.type === "material" && (
            <div className="material-detail-container">
              <div className="material-detail-hero">
                <div className="material-detail-main-text">
                  <h3>Overview</h3>
                  <p>{item.description}</p>
                </div>
                {item.applicableStandards && (
                  <div className="material-badge-card">
                    <span className="badge-title">Applicable Standards</span>
                    <span className="badge-value">{item.applicableStandards}</span>
                  </div>
                )}
              </div>

              <div className="material-spec-grid">
                <div className="catalogue-detail-card-section">
                  <h3>Composition</h3>
                  <p>{item.composition}</p>
                </div>

                <div className="catalogue-detail-card-section">
                  <h3>Thickness Specifications</h3>
                  <p className="highlight-text">{item.thickness}</p>
                </div>

                <div className="catalogue-detail-card-section">
                  <h3>Manufacturing Information</h3>
                  <p>{item.manufacturingInfo}</p>
                </div>
              </div>

              {item.performanceProperties && (
                <div className="catalogue-detail-card-section">
                  <h3>Performance Properties</h3>
                  <ul className="material-prop-list">
                    {item.performanceProperties.map((prop, idx) => (
                      <li key={idx}>
                        <span className="feature-dot" />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="catalogue-detail-image-grid">
                {item.images.map((src, index) => (
                  <div
                    className="catalogue-detail-image-card clickable"
                    key={index}
                    onClick={() => openZoom(src)}
                  >
                    {src ? (
                      <img src={src} alt={`${item.title} sample ${index + 1}`} />
                    ) : (
                      <div className="catalogue-detail-image-placeholder">
                        <span className="placeholder-icon">📐</span>
                        <span>Sample Preview {index + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. STANDARD COLOURS GRID */}
          {item.type === "standardColours" && (
            <div className="colours-detail-container">
              <div className="colours-filter-bar">
                <input
                  type="text"
                  className="colour-search-input"
                  placeholder="Search standard colours by name or hex code..."
                  value={stdSearchTerm}
                  onChange={(e) => setStdSearchTerm(e.target.value)}
                />
              </div>

              <div className="catalogue-colour-grid">
                {item.colours
                  .filter(
                    (c) =>
                      c.name.toLowerCase().includes(stdSearchTerm.toLowerCase()) ||
                      (c.code && c.code.toLowerCase().includes(stdSearchTerm.toLowerCase()))
                  )
                  .map((colour, index) => (
                    <div className="catalogue-colour-card" key={index}>
                      <div
                        className="catalogue-colour-swatch"
                        style={{ backgroundColor: colour.hex }}
                      />
                      <span className="colour-card-name">{colour.name}</span>
                      {colour.code && <small className="colour-card-code">{colour.code}</small>}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 3. SPECIAL WOODEN-GRAIN COLOURS WITH FILTER */}
          {item.type === "specialColours" && (
            <div className="special-colours-container">
              <div className="colours-filter-bar">
                <input
                  type="text"
                  className="colour-search-input"
                  placeholder="Filter wooden grain & marble textures by name..."
                  value={woodSearchTerm}
                  onChange={(e) => setWoodSearchTerm(e.target.value)}
                />
              </div>

              <p className="special-colours-intro">
                High-resolution textured previews representing natural wood grains, marble, and premium architectural finishes available for cubicles and cladding.
              </p>

              <div className="special-colour-grid">
                {item.colours
                  .filter((c) =>
                    c.name.toLowerCase().includes(woodSearchTerm.toLowerCase())
                  )
                  .map((colour, index) => (
                    <div className="special-colour-card" key={index}>
                      <div
                        className="special-colour-texture"
                        style={{ background: colour.pattern }}
                      >
                        <span className="texture-zoom-tag">Texture Finish</span>
                      </div>
                      <div className="special-colour-info">
                        <h4>{colour.name}</h4>
                        <span>Architectural Grain</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 4. HARDWARE & ACCESSORIES VIEW */}
          {item.type === "hardware" && (
            <div className="hardware-detail-container">
              <div className="catalogue-detail-about">
                <h3>Hardware Overview</h3>
                <p>{item.description}</p>
              </div>

              <div className="catalogue-detail-image-grid hardware-gallery">
                {item.images.map((src, index) => (
                  <div
                    className="catalogue-detail-image-card clickable"
                    key={index}
                    onClick={() => openZoom(src)}
                  >
                    {src ? (
                      <img src={src} alt={`${item.title} detail ${index + 1}`} />
                    ) : (
                      <div className="catalogue-detail-image-placeholder">
                        <span className="placeholder-icon">🔩</span>
                        <span>Accessory View {index + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="catalogue-detail-card-section">
                <h3>Technical Features</h3>
                <ul className="hardware-features-list">
                  {item.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 5. STANDARD PRODUCT LAYOUT (CUBICLES / FURNITURE / CLADDING) */}
          {item.type === "product" && (
            <>
              <div className="catalogue-detail-image-grid">
                {item.images.map((src, index) => (
                  <div
                    className="catalogue-detail-image-card clickable"
                    key={index}
                    onClick={() => openZoom(src)}
                  >
                    {src ? (
                      <img src={src} alt={`${item.title} ${index + 1}`} />
                    ) : (
                      <div className="catalogue-detail-image-placeholder">
                        <span className="placeholder-icon">🖼</span>
                        <span>Image {index + 1}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="catalogue-detail-about">
                <h3>About the Product</h3>
                <p>{item.description}</p>
              </div>

              <div className="catalogue-detail-card-section">
                <h3>Key Features</h3>
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {item.specifications && item.specifications.length > 0 && (
                <div className="catalogue-detail-specifications">
                  <h3>Technical Specifications</h3>
                  <div className="catalogue-detail-spec-table">
                    {item.specifications.map((spec, index) => (
                      <div className="catalogue-detail-spec-row" key={index}>
                        <span className="catalogue-detail-spec-label">{spec.label}</span>
                        <span className="catalogue-detail-spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {item.optionsAndUpgrades && item.optionsAndUpgrades.length > 0 && (
                <div className="catalogue-detail-card-section">
                  <h3>Options &amp; Upgrades</h3>
                  <ul>
                    {item.optionsAndUpgrades.map((option, index) => (
                      <li key={index}>
                        <span className="feature-dot" />
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.prerequisites && item.prerequisites.length > 0 && (
                <div className="catalogue-detail-card-section">
                  <h3>Pre-Requisites</h3>
                  <ul>
                    {item.prerequisites.map((req, index) => (
                      <li key={index}>
                        <span className="feature-dot" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.doorStoppingMechanism && item.doorStoppingMechanism.length > 0 && (
                <div className="catalogue-detail-card-section">
                  <h3>Door Stopping Mechanism</h3>
                  <ul>
                    {item.doorStoppingMechanism.map((mech, index) => (
                      <li key={index}>
                        <span className="feature-dot" />
                        {mech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {extraDetails && (
                <>
                  <DetailListSection
                    title="Hardware & Accessories"
                    items={extraDetails.accessories}
                  />
                  <DetailListSection
                    title="Materials & Finishes"
                    items={extraDetails.materials}
                  />
                  <DetailListSection
                    title="Applications & Suitability"
                    items={extraDetails.applications}
                  />
                  <DetailListSection
                    title="Installation Requirements"
                    items={extraDetails.installation}
                  />
                </>
              )}
            </>
          )}

          {/* REQUEST QUOTATION CTA CARD - ALL VIEWS */}
          <section className="catalogue-detail-quotation">
            <div>
              <span className="catalogue-detail-quotation-eyebrow">
                HAVE A PROJECT IN MIND?
              </span>
              <h3>Request a Quotation</h3>
              <p>
                Contact VSK Enterprises about <strong>{item.title}</strong> and share your project requirements for a custom estimate.
              </p>
            </div>

            <button
              className="catalogue-detail-quotation-button"
              onClick={handleNavigateToContact}
            >
              Request Quotation <span aria-hidden="true">→</span>
            </button>
          </section>
        </div>
      </div>

      {/* IMAGE ZOOM MODAL */}
      {zoomImg && (
        <div className="image-zoom-overlay" onClick={closeZoom}>
          <div className="image-zoom-container" onClick={(e) => e.stopPropagation()}>
            <div className="zoom-controls">
              <button onClick={() => setZoomScale((s) => Math.min(s + 0.3, 3))}>+</button>
              <button onClick={() => setZoomScale((s) => Math.max(s - 0.3, 0.6))}>-</button>
              <button onClick={() => setZoomScale(1)}>Reset</button>
              <button className="zoom-close-btn" onClick={closeZoom}>×</button>
            </div>
            <div className="zoom-img-wrapper">
              <img
                src={zoomImg}
                alt="Enlarged Detail"
                style={{ transform: `scale(${zoomScale})` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogueDetail;