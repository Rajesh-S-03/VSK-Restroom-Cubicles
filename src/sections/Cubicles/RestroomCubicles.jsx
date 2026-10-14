// import React, { useEffect, useRef, useState } from "react";
// import "./RestroomCubicles.css";

// import ssPipeSeries from "../../assets/SS_pipe_series.png";
// import nylonSeries from "../../assets/nylon_series.png";
// import ssAnodize from "../../assets/ss_anodize.png";

// import CatalogueDetail, { getDetailItem } from "./CatalogueDetail";
// import ComparisonSlider from "./Comparision_slider";
// import Cubicles1 from "./Cubicles1";
// import Cubicles2 from "./Cubicles2";
// import Cubicles3 from "./Cubicles3";
// import Cubicles4 from "./Cubicles4";
// import CubicleMosaic from "./CubicleMosaic";
// import HorizontalCards from "./HorizontalCards";

// const cubicleSolutions = [
//   {
//     id: 1,
//     tag: "01 / CUBICLE SERIES",
//     title: "SS Pipe Series",
//     subtitle: "Clean. Strong. Functional.",
//     description:
//       "A practical cubicle system combining compact laminate panels with a clean stainless-steel pipe and hardware language.",
//     image: ssPipeSeries,
//     features: [
//       "Compact Grade Laminate",
//       "Stainless Steel Components",
//       "Professional Cubicle System",
//     ],
//   },
//   {
//     id: 2,
//     tag: "02 / CUBICLE SERIES",
//     title: "Nylon Series",
//     subtitle: "Simple. Durable. Refined.",
//     description:
//       "A clean cubicle configuration using nylon-based components for a practical and contemporary restroom environment.",
//     image: nylonSeries,
//     features: [
//       "Compact Grade Laminate",
//       "Nylon Components",
//       "Clean Contemporary Finish",
//     ],
//   },
//   {
//     id: 3,
//     tag: "03 / CUBICLE SERIES",
//     title: "SS Anodize Series",
//     subtitle: "Contemporary Architectural Finish.",
//     description:
//       "A refined cubicle system designed around a more architectural stainless-steel and anodized finish language.",
//     image: ssAnodize,
//     features: [
//       "Compact Grade Laminate",
//       "Anodized Components",
//       "Refined Architectural Look",
//     ],
//   },
//   {
//     id: 4,
//     tag: "04 / CUBICLE SERIES",
//     title: "12mm Box-Up Series",
//     subtitle: "A Structured Cubicle System.",
//     description:
//       "A 12mm box-up configuration developed around a clean and structured cubicle appearance.",
//     image: ssPipeSeries,
//     features: [
//       "12mm Board System",
//       "Compact Laminate Construction",
//       "Clean Box-Up Profile",
//     ],
//   },
//   {
//     id: 5,
//     tag: "05 / CUBICLE SERIES",
//     title: "PD Door",
//     subtitle: "Indus Model.",
//     description:
//       "The PD Door / Indus Model forms part of the VSK restroom cubicle range, with coordinated panels and hardware.",
//     image: nylonSeries,
//     features: [
//       "Compact Laminate Panels",
//       "Coordinated Hardware",
//       "Professional Cubicle Configuration",
//     ],
//   },
//   {
//     id: 6,
//     tag: "06 / CUBICLE SERIES",
//     title: "Hoover Ceiling Hung",
//     subtitle: "Minimal Floor-Level Expression.",
//     description:
//       "A ceiling-hung cubicle configuration designed around a clean and visually lighter restroom environment.",
//     image: ssAnodize,
//     features: [
//       "Compact Laminate Panels",
//       "Ceiling-Hung Configuration",
//       "Clean Contemporary Appearance",
//     ],
//   },
//   {
//     id: 7,
//     tag: "07 / CUBICLE SERIES",
//     title: "Hoover Lite / Athena Lite",
//     subtitle: "Lightweight Visual Language.",
//     description:
//       "The Hoover Lite / Athena Lite range provides another configuration within the VSK restroom cubicle collection.",
//     image: nylonSeries,
//     features: [
//       "Compact Laminate Panels",
//       "Lite Configuration",
//       "Coordinated Hardware",
//     ],
//   },
// ];

// // ADDED — new product groups
// const modularFurniture = [
//   {
//     id: 8,
//     tag: "01 / MODULAR FURNITURE",
//     title: "Modular Workstation & Chair",
//     subtitle: "Ergonomic. Flexible. Modern.",
//     description:
//       "Our modular workstations and chairs deliver ergonomic comfort, flexible layouts, and modern design, enhancing productivity in contemporary office environments.",
//     image: ssPipeSeries,
//     features: [
//       "Ergonomic Comfort",
//       "Flexible Workspace Layouts",
//       "Modern Office Design",
//     ],
//   },
// ];

// const exteriorCladding = [
//   {
//     id: 9,
//     tag: "01 / EXTERIOR CLADDING",
//     title: "6mm HPL Exterior Cladding",
//     subtitle: "Durable. Weather-Resistant. Contemporary.",
//     description:
//       "Our 6mm HPL exterior cladding offers weather resistance, durability, and modern aesthetics, ensuring long-lasting protection for contemporary building exteriors.",
//     image: ssAnodize,
//     features: [
//       "6mm HPL Construction",
//       "Weather & Moisture Resistant",
//       "Long-Lasting Exterior Protection",
//     ],
//   },
// ];

// // ADDED — every card in one list (used by the slider + selector)
// const allProducts = [
//   ...cubicleSolutions,
//   ...modularFurniture,
//   ...exteriorCladding,
// ];

// // ADDED — groups shown inside the "Products" dropdown.
// // detailSection must match a key in catalogueDetails (CatalogueDetail.jsx)
// const productGroups = [
//   {
//     id: "cubicle",
//     label: "Cubicle Series",
//     detailSection: "cubicleSeries",
//     items: cubicleSolutions,
//   },
//   {
//     id: "furniture",
//     label: "Modular Furniture",
//     detailSection: "modularFurniture",
//     items: modularFurniture,
//   },
//   {
//     id: "cladding",
//     label: "Interior & Exterior Cladding",
//     detailSection: "exteriorCladding",
//     items: exteriorCladding,
//   },
// ];

// const standardColorsList = [
//   { name: "Classic Grey", hex: "#888b8d" },
//   { name: "Rainy Sky", hex: "#6c7a89" },
//   { name: "Egg White", hex: "#f2f0e6" },
//   { name: "City Shadow", hex: "#4a535e" },
//   { name: "Azure White", hex: "#eef2f5" },
//   { name: "Ivory", hex: "#fffff0" },
//   { name: "Black Magic", hex: "#1c1d21" },
//   { name: "Rust Brown", hex: "#8b3a2b" },
//   { name: "Deep Blue", hex: "#0a192f" },
//   { name: "Clinical White", hex: "#fdfdfd" },
//   { name: "Steel Blue", hex: "#4682b4" },
//   { name: "Warm Grey", hex: "#9d9d93" },
//   { name: "Royal Blue", hex: "#4169e1" },
//   { name: "Purple", hex: "#800080" },
//   { name: "Golden Yellow", hex: "#ffc107" },
//   { name: "Orange", hex: "#ff9800" },
//   { name: "Olive Green", hex: "#556b2f" },
//   { name: "Cyan Blue", hex: "#00bcd4" },
//   { name: "Slate Gray", hex: "#708090" },
//   { name: "Coral Pink", hex: "#ff7f50" },
//   { name: "Crimson Red", hex: "#dc143c" },
//   { name: "Mint Green", hex: "#98ff98" },
// ];

// const specialColorsList = [
//   { name: "Desert Marble", pattern: "linear-gradient(135deg, #d3c7b3, #a89f91)" },
//   { name: "Highland Pine", pattern: "linear-gradient(135deg, #8b5a2b, #5c3a1e)" },
//   { name: "Ash Oak", pattern: "linear-gradient(135deg, #b8a99a, #847568)" },
//   { name: "Hedfield Walnut", pattern: "linear-gradient(135deg, #4a2c11, #2b1808)" },
//   { name: "Mountain Maple", pattern: "linear-gradient(135deg, #c68a4c, #915a28)" },
//   { name: "Mahogany", pattern: "linear-gradient(135deg, #400000, #260000)" },
//   { name: "Red Maple", pattern: "linear-gradient(135deg, #a83232, #6b1d1d)" },
//   { name: "Auburn Oak", pattern: "linear-gradient(135deg, #935116, #5d330e)" },
//   { name: "Canterbury Oak", pattern: "linear-gradient(135deg, #7e5129, #4f3218)" },
//   { name: "Alumina Pearl", pattern: "linear-gradient(135deg, #e5e4e2, #b0b0b0)" },
//   { name: "Black Granite", pattern: "linear-gradient(135deg, #2c2c2c, #111111)" },
//   { name: "Teak Wood", pattern: "linear-gradient(135deg, #b86d29, #734213)" },
//   { name: "Rosewood Finish", pattern: "linear-gradient(135deg, #65000b, #330005)" },
//   { name: "Smoked Birch", pattern: "linear-gradient(135deg, #7f7062, #483d34)" },
//   { name: "Ebony Grain", pattern: "linear-gradient(135deg, #1f1f1f, #080808)" },
//   { name: "Rustic Elm", pattern: "linear-gradient(135deg, #99734e, #5e432a)" },
//   { name: "Wenge Wood", pattern: "linear-gradient(135deg, #3d2b1f, #1c120c)" },
//   { name: "White Marble", pattern: "linear-gradient(135deg, #f5f5f5, #d1d1d1)" },
//   { name: "Copper Rust", pattern: "linear-gradient(135deg, #b87333, #78471b)" },
//   { name: "Bronze Texture", pattern: "linear-gradient(135deg, #8c7853, #544730)" },
// ];

// const catalogueSections = [
//   {
//     // CHANGED — "Cubicle Series" section is now "Products"
//     id: "products",
//     title: "Products",
//     eyebrow: "PRODUCT RANGE",
//     items: allProducts.map((item) => ({
//       name: item.title,
//       number: String(item.id).padStart(2, "0"),
//       action: () => null,
//     })),
//   },
//   {
//     id: "hardware",
//     title: "Hardware & Accessories",
//     eyebrow: "COMPONENTS",
//     items: [
//       "Spring Loaded Hinges / Gravity Hinges",
//       "Privacy Lock with Indicator",
//       "Coat Hanger Cum Stopper",
//       "Door Knob & Panel Holder",
//       "SS L-Bend & Floor Angle Plate",
//       "SS Skirting & Shoe Box Cover",
//       "SS / Pedestal Adjustable Legs",
//       "Head Rail — SS / Aluminium",
//       "Nylon Accessories",
//     ],
//   },
//   {
//     id: "materials",
//     title: "Materials",
//     eyebrow: "CONSTRUCTION",
//     items: [
//       "Compact Grade Laminate Board",
//       "12mm Board Thickness",
//       "Water & Moisture Resistant",
//       "Scratch, Impact & Chemical Resistant",
//     ],
//   },
// ];

// const DURATION = 6000;

// const pad = (number) => (number < 10 ? `0${number}` : `${number}`);

// export default function RestroomCubicles() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // CHANGED — default open section is now "products"
//   const [openSection, setOpenSection] = useState("products");
//   // ADDED — which product group (inside Products) is expanded
//   const [openGroup, setOpenGroup] = useState("cubicle");
//   const [activeColorModal, setActiveColorModal] = useState(null);

//   const [detailView, setDetailView] = useState(null); // { section, name } | null

//   const trackRef = useRef(null);
//   const cardRefs = useRef([]);

//   // CHANGED — now based on allProducts (9 cards)
//   const total = allProducts.length;
//   const activeData = allProducts[activeIndex];

//   const handleNext = () => {
//     setActiveIndex((current) => (current + 1) % total);
//   };

//   const handlePrev = () => {
//     setActiveIndex((current) => (current - 1 + total) % total);
//   };

//   useEffect(() => {
//     setProgress(0);

//     const start = Date.now();

//     const interval = setInterval(() => {
//       const elapsed = Date.now() - start;
//       const percentage = Math.min((elapsed / DURATION) * 100, 100);

//       setProgress(percentage);
//     }, 50);

//     const timer = setTimeout(() => {
//       handleNext();
//     }, DURATION);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timer);
//     };
//   }, [activeIndex]);

//   useEffect(() => {
//     const track = trackRef.current;
//     const card = cardRefs.current[activeIndex];

//     if (!track || !card) return;

//     const left =
//       card.offsetLeft - track.clientWidth / 2 + card.clientWidth / 2;

//     track.scrollTo({
//       left,
//       behavior: "smooth",
//     });
//   }, [activeIndex]);

//   const selectSeries = (index) => {
//     setActiveIndex(index);
//     setIsMenuOpen(false);
//   };

//   const toggleSection = (id) => {
//     setOpenSection((current) => (current === id ? null : id));
//   };

//   // ADDED — toggle a group inside the Products dropdown
//   const toggleGroup = (id) => {
//     setOpenGroup((current) => (current === id ? null : id));
//   };

//   const openDetail = (section, name) => {
//     setDetailView({ section, name });
//   };

//   const closeDetail = () => {
//     setDetailView(null);
//   };

//   const activeDetailItem = detailView
//     ? getDetailItem(detailView.section, detailView.name)
//     : null;

//   return (
//     <>
//     <section className="vsk-restroom-page">

//       {/* =====================================================
//           BACKGROUND
//       ====================================================== */}

//       <div
//         className="vsk-product-background"
//         key={activeData.id}
//         style={{
//           backgroundImage: `url(${activeData.image})`,
//         }}
//       />

//       <div className="vsk-background-gradient" />
//       <div className="vsk-background-glow" />

//       {/* =====================================================
//           TOP NAV / BRAND
//       ====================================================== */}

//       <header className="vsk-product-header">

//         <div className="vsk-product-brand">
//           <span className="vsk-brand-main">VSK</span>
//           <span className="vsk-brand-sub">ENTERPRISES</span>
//         </div>

//         <div className="vsk-product-page-label">
//           RESTROOM CUBICLES
//         </div>

//       </header>

//       {/* =====================================================
//           CATALOGUE BUTTON
//       ====================================================== */}

//       <button
//         className="vsk-catalogue-button"
//         onClick={() => setIsMenuOpen(true)}
//         aria-label="Open product catalogue"
//       >
//         <span className="vsk-menu-lines">
//           <span />
//           <span />
//           <span />
//         </span>

//         <span className="vsk-catalogue-label">
//           CATALOGUE
//         </span>
//       </button>

//       {/* =====================================================
//           MAIN PRODUCT CONTENT
//       ====================================================== */}

//       <main className="vsk-product-main">

//         <div
//           className="vsk-product-information"
//           key={`product-${activeData.id}`}
//         >

//           <div className="vsk-product-eyebrow">
//             <span>{activeData.tag}</span>
//             <i />
//             <span>VSK RESTROOM SYSTEMS</span>
//           </div>

//           <h1 className="vsk-product-title">
//             {activeData.title}
//           </h1>

//           <h2 className="vsk-product-subtitle">
//             {activeData.subtitle}
//           </h2>

//           <p className="vsk-product-description">
//             {activeData.description}
//           </p>

//           <div className="vsk-product-features">

//             {activeData.features.map((feature, index) => (
//               <div
//                 className="vsk-feature"
//                 key={index}
//               >
//                 <span className="vsk-feature-number">
//                   {pad(index + 1)}
//                 </span>

//                 <span>{feature}</span>
//               </div>
//             ))}

//           </div>

//           <div className="vsk-product-actions">

//             <button className="vsk-primary-product-btn">
//               Request Quotation
//               <span>↗</span>
//             </button>

//             <button
//               className="vsk-secondary-product-btn"
//               onClick={() => setIsMenuOpen(true)}
//             >
//               Explore Catalogue
//               <span>→</span>
//             </button>

//           </div>

//         </div>

//         {/* PRODUCT INDEX */}

//         <div className="vsk-product-index">

//           <span className="index-current">
//             {pad(activeIndex + 1)}
//           </span>

//           <span className="index-line" />

//           <span className="index-total">
//             {pad(total)}
//           </span>

//         </div>

//       </main>

//       {/* =====================================================
//           BOTTOM PRODUCT SELECTOR
//       ====================================================== */}

//       <div className="vsk-product-selector">

//         <div className="vsk-selector-heading">

//           <span>EXPLORE THE RANGE</span>

//           <div className="vsk-selector-line" />

//           <small>
//             {pad(activeIndex + 1)} / {pad(total)}
//           </small>

//         </div>

//         <div className="vsk-selector-row">

//           <button
//             className="vsk-selector-arrow"
//             onClick={handlePrev}
//             aria-label="Previous product"
//           >
//             ←
//           </button>

//           <div
//             className="vsk-product-track"
//             ref={trackRef}
//           >

//             {/* CHANGED — maps over allProducts (9 cards) */}
//             {allProducts.map((item, index) => (

//               <button
//                 key={item.id}
//                 ref={(element) => {
//                   cardRefs.current[index] = element;
//                 }}
//                 className={`vsk-product-card ${
//                   index === activeIndex ? "active" : ""
//                 }`}
//                 onClick={() => setActiveIndex(index)}
//               >

//                 <div
//                   className="vsk-product-card-image"
//                   style={{
//                     backgroundImage: `url(${item.image})`,
//                   }}
//                 />

//                 <div className="vsk-product-card-overlay" />

//                 <div className="vsk-product-card-content">

//                   <span className="vsk-card-number">
//                     {pad(item.id)}
//                   </span>

//                   <span className="vsk-card-name">
//                     {item.title}
//                   </span>

//                 </div>

//                 {index === activeIndex && (
//                   <span className="vsk-active-card-marker" />
//                 )}

//               </button>

//             ))}

//           </div>

//           <button
//             className="vsk-selector-arrow"
//             onClick={handleNext}
//             aria-label="Next product"
//           >
//             →
//           </button>

//         </div>

//         <div className="vsk-timer">

//           <div className="vsk-timer-track">
//             <div
//               className="vsk-timer-progress"
//               style={{
//                 width: `${progress}%`,
//               }}
//             />
//           </div>

//           <span>
//             AUTO
//           </span>

//         </div>

//       </div>

//       {/* =====================================================
//           MENU OVERLAY
//       ====================================================== */}

//       {isMenuOpen && (
//         <div
//           className="vsk-catalogue-overlay"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}

//       {/* =====================================================
//           RIGHT CATALOGUE DRAWER
//       ====================================================== */}

//       <aside
//         className={`vsk-catalogue-drawer ${
//           isMenuOpen ? "open" : ""
//         }`}
//       >

//         <div className="vsk-drawer-header">

//           <div>
//             <span className="vsk-drawer-eyebrow">
//               VSK ENTERPRISES
//             </span>

//             <h3>
//               Product Catalogue
//             </h3>
//           </div>

//           <button
//             className="vsk-drawer-close"
//             onClick={() => setIsMenuOpen(false)}
//             aria-label="Close catalogue"
//           >
//             ×
//           </button>

//         </div>

//         <div className="vsk-drawer-intro">
//           Explore our products, components, materials and
//           available colour finishes.
//         </div>

//         {/* PRODUCTS (was "Cubicle Series") */}

//         <div className="vsk-drawer-section">

//           <button
//             className={`vsk-drawer-section-header ${
//               openSection === "products" ? "active" : ""
//             }`}
//             onClick={() => toggleSection("products")}
//           >

//             <div>
//               <span>01</span>
//               <strong>Products</strong>
//             </div>

//             <span className="drawer-plus">
//               {openSection === "products" ? "−" : "+"}
//             </span>

//           </button>

//           {openSection === "products" && (

//             <div className="vsk-drawer-list">

//               {/* ADDED — 3 sub-dropdowns inside Products */}
//               {productGroups.map((group, groupIndex) => (

//                 <div className="vsk-drawer-subgroup" key={group.id}>

//                   <button
//                     className={`vsk-drawer-subgroup-header ${
//                       openGroup === group.id ? "active" : ""
//                     }`}
//                     onClick={() => toggleGroup(group.id)}
//                   >

//                     <div>
//                       <span>{pad(groupIndex + 1)}</span>
//                       <strong>{group.label}</strong>
//                     </div>

//                     <span className="drawer-plus">
//                       {openGroup === group.id ? "−" : "+"}
//                     </span>

//                   </button>

//                   {openGroup === group.id && (

//                     <div className="vsk-drawer-subgroup-list">

//                       {group.items.map((item) => {
//                         const globalIndex = allProducts.findIndex(
//                           (product) => product.id === item.id
//                         );

//                         return (
//                           <button
//                             key={item.id}
//                             className={`vsk-drawer-product ${
//                               globalIndex === activeIndex ? "selected" : ""
//                             }`}
//                             onClick={() => {
//                               selectSeries(globalIndex);
//                               openDetail(group.detailSection, item.title);
//                             }}
//                           >

//                             <span className="drawer-product-number">
//                               {pad(item.id)}
//                             </span>

//                             <span className="drawer-product-name">
//                               {item.title}
//                             </span>

//                             <span className="drawer-product-arrow">
//                               →
//                             </span>

//                           </button>
//                         );
//                       })}

//                     </div>

//                   )}

//                 </div>

//               ))}

//             </div>

//           )}

//         </div>

//         {/* HARDWARE */}

//         <div className="vsk-drawer-section">

//           <button
//             className={`vsk-drawer-section-header ${
//               openSection === "hardware" ? "active" : ""
//             }`}
//             onClick={() => toggleSection("hardware")}
//           >

//             <div>
//               <span>02</span>
//               <strong>Hardware & Accessories</strong>
//             </div>

//             <span className="drawer-plus">
//               {openSection === "hardware" ? "−" : "+"}
//             </span>

//           </button>

//           {openSection === "hardware" && (

//             <div className="vsk-drawer-list">

//               {catalogueSections[1].items.map(
//                 (item, index) => (

//                   <div
//                     className="vsk-drawer-info-item"
//                     key={index}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => openDetail("hardware", item)}
//                   >
//                     <span>
//                       {pad(index + 1)}
//                     </span>

//                     <p>{item}</p>

//                   </div>

//                 )
//               )}

//             </div>

//           )}

//         </div>

//         {/* MATERIALS */}

//         <div className="vsk-drawer-section">

//           <button
//             className={`vsk-drawer-section-header ${
//               openSection === "materials" ? "active" : ""
//             }`}
//             onClick={() => toggleSection("materials")}
//           >

//             <div>
//               <span>03</span>
//               <strong>Materials</strong>
//             </div>

//             <span className="drawer-plus">
//               {openSection === "materials" ? "−" : "+"}
//             </span>

//           </button>

//           {openSection === "materials" && (

//             <div className="vsk-drawer-list">

//               {catalogueSections[2].items.map(
//                 (item, index) => (

//                   <div
//                     className="vsk-drawer-info-item"
//                     key={index}
//                     style={{ cursor: "pointer" }}
//                     onClick={() => openDetail("materials", item)}
//                   >
//                     <span>
//                       {pad(index + 1)}
//                     </span>

//                     <p>{item}</p>

//                   </div>

//                 )
//               )}

//             </div>

//           )}

//         </div>

//         {/* COLOURS */}

//         <div className="vsk-drawer-section">

//           <button
//             className={`vsk-drawer-section-header ${
//               openSection === "colours" ? "active" : ""
//             }`}
//             onClick={() => toggleSection("colours")}
//           >

//             <div>
//               <span>04</span>
//               <strong>Colours & Finishes</strong>
//             </div>

//             <span className="drawer-plus">
//               {openSection === "colours" ? "−" : "+"}
//             </span>

//           </button>

//           {openSection === "colours" && (

//             <div className="vsk-colour-options">

//               <button
//                 onClick={() =>
//                   // (old line kept, in case you want to revert)
//                   // setActiveColorModal("standard")
//                   openDetail("standardColours")
//                 }
//               >
//                 <span className="colour-option-dot standard" />
//                 <span>Standard Colours</span>
//                 <span>→</span>
//               </button>

//               <button
//                 onClick={() =>
//                   // (old line kept, in case you want to revert)
//                   // setActiveColorModal("special")
//                   openDetail("specialColours")
//                 }
//               >
//                 <span className="colour-option-dot special" />
//                 <span>Special / Wooden Grain</span>
//                 <span>→</span>
//               </button>

//             </div>

//           )}

//         </div>

//         <div className="vsk-drawer-footer">

//           <span>
//             VSK RESTROOM CUBICLE SYSTEMS
//           </span>

//           <button>
//             Discuss Your Requirement →
//           </button>

//         </div>

//       </aside>

//       {/* =====================================================
//           COLOUR MODAL  (old modal, unused now — kept for revert)
//       ====================================================== */}

//       {activeColorModal && (

//         <div
//           className="vsk-colour-modal-overlay"
//           onClick={() => setActiveColorModal(null)}
//         >

//           <div
//             className="vsk-colour-modal"
//             onClick={(event) =>
//               event.stopPropagation()
//             }
//           >

//             <div className="vsk-colour-modal-header">

//               <div>

//                 <span>
//                   VSK FINISH COLLECTION
//                 </span>

//                 <h2>
//                   {activeColorModal === "standard"
//                     ? "Standard Colours"
//                     : "Special / Wooden Grain"}
//                 </h2>

//               </div>

//               <button
//                 onClick={() =>
//                   setActiveColorModal(null)
//                 }
//               >
//                 ×
//               </button>

//             </div>

//             <div className="vsk-colour-grid">

//               {(activeColorModal === "standard"
//                 ? standardColorsList
//                 : specialColorsList
//               ).map((item, index) => (

//                 <div
//                   className="vsk-colour-card"
//                   key={index}
//                 >

//                   <div
//                     className="vsk-colour-swatch"
//                     style={
//                       activeColorModal === "standard"
//                         ? {
//                             backgroundColor:
//                               item.hex,
//                           }
//                         : {
//                             background:
//                               item.pattern,
//                           }
//                     }
//                   />

//                   <span>
//                     {item.name}
//                   </span>

//                 </div>

//               ))}

//             </div>

//           </div>

//         </div>

//       )}

//       {/* =====================================================
//           CATALOGUE DETAIL OVERLAY
//       ====================================================== */}

//       <CatalogueDetail item={activeDetailItem} onClose={closeDetail} />
      

//     </section>
//     <Cubicles1/>
//     <Cubicles2/>
//     <Cubicles3/>
//     <Cubicles4/>
//     <CubicleMosaic/>
//     <HorizontalCards/>
//     <ComparisonSlider/>

//     </>
    
//   );
// }