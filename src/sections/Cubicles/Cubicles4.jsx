import React, { useState } from "react";
import "./Cubicles4.css";
import claddingImage from "../../assets/applications/exteriorclading.png";
import { Link } from "react-router-dom";

const highlights = [
  { number: "01", title: "Contemporary facade", text: "A clean surface language for modern building exteriors." },
  { number: "02", title: "Designed for exterior use", text: "A cladding option intended for projects that need a durable exterior finish." },
  { number: "03", title: "Coordinated appearance", text: "Choose a finish that complements the wider architectural palette." },
];

const solidColors = [
  ["101 Azure White", "#f4f6f8"], ["1005 Creamy White", "#f7f5f0"], ["107 Ivory", "#f5f3e7"],
  ["1078 Solera White", "#f2f4f5"], ["1082 Clinical White", "#fcfcfc"], ["1081 Techno White", "#f0f2f5"],
  ["1020 Off White", "#e8ebe9"], ["120 Alumina Grey", "#b8bcc2"], ["1788 Tribeca Grey", "#9ba0a8"],
  ["1080 Solera Grey", "#a2a7af"], ["531 Smoke Grey", "#8c929a"], ["538 Ivory Grey", "#94969b"],
  ["1091 Steel Blue", "#6a889e"], ["1707 Laser Grey", "#7e828a"], ["1084 Munso White", "#e4e7eb"],
  ["1789 Nexa grey", "#6b7078"], ["8117 Warm Grey", "#918e87"], ["8121 Chalk Grey", "#d6d4ce"],
  ["1049 Charcoal Grey", "#42464c"], ["1071 Cloudy Grey", "#989ea5"], ["1072 Gun Metal", "#35393f"],
  ["539 Dark Chocolate", "#3d2d24"], ["1014 City Shadow", "#545a60"], ["1717 Classic Grey", "#80858d"],
  ["1079 Solera Beige", "#d6cbbe"], ["1083 Half Beige", "#c4b8aa"], ["1085 Absolute Peach", "#e0b8a8"],
  ["1033 Tidal Sand", "#c7b59d"], ["1040 Rust Brown", "#8b452e"], ["1018 Cherry Brown", "#6b2d20"],
  ["1709 Avio Blue", "#5a788c"], ["1716 Dark Olive", "#4a523d"], ["1047 Military Green", "#485244"],
  ["526 Azure", "#3878b5"], ["8421 Royal Blue", "#204a87"], ["529 Royal Ink", "#172d4c"],
  ["1073 Olympia Blue", "#386b8c"], ["1708 Bond Blue", "#2a5c82"], ["1048 Deep Blue", "#142840"],
  ["1718 Rainy Sky", "#788c9c"], ["1752 Kiwi Green", "#7cb342"], ["8306 Hina", "#527a4d"],
  ["8504 Golden Yellow", "#fbc02d"], ["8522 Orange", "#f57c00"], ["530 Blood Red", "#c62828"],
  ["8442 Purple", "#6a1b9a"], ["142 Black Magic", "#1c1d21"]
];

const woodFinishes = [
  ["1965 Dense Oak", "linear-gradient(135deg,#e0d6c3,#b5a993)"],
  ["7251 Highland Pine", "linear-gradient(135deg,#d8c4b2,#a39180)"],
  ["2303 Polar Birch", "linear-gradient(135deg,#e8dfd3,#c2b8aa)"],
  ["2319 Rovere Cristallo", "linear-gradient(135deg,#d1c4b2,#9e917d)"],
  ["2334 Pin Oak", "linear-gradient(135deg,#9e9890,#706a62)"],
  ["2804 Meribo Wood", "linear-gradient(135deg,#d4b596,#a38160)"],
  ["2833 Ligno Horizontal Wood", "linear-gradient(135deg,#cfae8d,#9e7c5c)"],
  ["2803 Meribo Oak", "linear-gradient(135deg,#cca682,#9c7551)"],
  ["2838 Teak Classical", "linear-gradient(135deg,#b89775,#876646)"],
  ["2839 Elite Grains", "linear-gradient(135deg,#b5a491,#847360)"],
  ["7771 Wellow Tree White", "linear-gradient(135deg,#dedcd5,#b5b3ac)"],
  ["7303 Mountain Maple", "linear-gradient(135deg,#dfb891,#ad835c)"],
  ["7305 Alberta Maple", "linear-gradient(135deg#e0be9b,#ad8d6a)"],
  ["2082 Weeping Beech", "linear-gradient(135deg,#d6b08a,#a37d57)"],
  ["2966 Pascal Wood", "linear-gradient(135deg,#ba9875,#886543)"],
  ["2967 Kayoko Wood", "linear-gradient(135deg,#b89470,#86623e)"],
  ["7416 Ash Oak", "linear-gradient(135deg,#bfb09d,#8f806d)"],
  ["2845 Desert Teak", "linear-gradient(135deg,#c4a27d,#93714c)"],
  ["2851 Royal Wood", "linear-gradient(135deg,#caa783,#987552)"],
  ["2461 Hydra Teak", "linear-gradient(135deg,#a8784d,#774d22)"],
  ["2865 Calais Eiche", "linear-gradient(135deg,#b58c63,#845b32)"],
  ["2913 Wisconsin Walnut", "linear-gradient(135deg,#8f6b4a,#5e3a19)"],
  ["2381 Hadfiled Walnut", "linear-gradient(135deg,#9e683b,#6d390a)"],
  ["1981 Orlando Walnut", "linear-gradient(135deg,#7a4b27,#491f00)"],
  ["2835 Naina Teak", "linear-gradient(135deg,#96623b,#65330c)"],
  ["7254 Straight Pine", "linear-gradient(135deg,#d6ab82,#a57a51)"],
  ["7285 Mahogany", "linear-gradient(135deg,#964b2b,#651f00)"],
  ["7288 Legal Mahogany", "linear-gradient(135deg,#8a4222,#591900)"],
  ["2202 Raw Charm", "linear-gradient(135deg,#a86e40,#773d0f)"],
  ["2859 Brown Pattern", "linear-gradient(135deg,#6e5b4d,#3d2a1c)"],
  ["2234 Juglan Burch", "linear-gradient(135deg,#6b523f,#3a210e)"],
  ["7717 Vegas Walnut", "linear-gradient(135deg,#9e5d30,#6d2d00)"],
  ["2843 Cocoa Teak", "linear-gradient(135deg,#5e3f2b,#2d1200)"],
  ["7712 Miami Walnut", "linear-gradient(135deg,#523824,#210d00)"]
];

const specialFinishes = [
  ["1353 Tweed Gray", "linear-gradient(135deg,#c2c4bc,#91938b)"],
  ["1411 Light Aluminium", "linear-gradient(135deg,#d1d5db,#9ca3af)"],
  ["1384 Slate Dust", "linear-gradient(135deg,#8a8f98,#595e67)"],
  ["1481 Puntinato Marble", "linear-gradient(135deg,#dedcd5,#ab9f91)"],
  ["1489 Landra Grain", "linear-gradient(135deg,#d6d4ce,#a3a19b)"],
  ["1490 Dust Zinger", "linear-gradient(135deg,#c7c5be,#96948d)"],
  ["1653 Perlina Gery", "linear-gradient(135deg,#d8dede,#a7adad)"],
  ["1650 Breccia Grey", "linear-gradient(135deg,#a3a9ad,#72787c)"],
  ["1652 Traven Grey", "linear-gradient(135deg,#b0b6ba,#7f8589)"],
  ["1480 Pietra Marble", "linear-gradient(135deg,#b8b8b0,#87877f)"],
  ["1468 New Pinara", "linear-gradient(135deg,#a3a3a3,#727272)"],
  ["1469 Black Pinara", "linear-gradient(135deg,#3d3d3d,#1a1a1a)"],
  ["1656 Adrian White", "linear-gradient(135deg,#f0ede6,#bfa79f)"],
  ["1654 Peyton Grey", "linear-gradient(135deg,#e0e0e0,#afafaf)"],
  ["1655 Hayden Beige", "linear-gradient(135deg,#d9cebe,#a89d8d)"],
  ["2853 Bengal Marble", "linear-gradient(135deg,#c4b5a3,#938472)"],
  ["2964 Quintia Grey", "linear-gradient(135deg,#d1d5db,#9ca3af)"],
  ["2965 Harumi Beige", "linear-gradient(135deg,#e5dccb,#b4a99a)"],
  ["1568 Salty Pepper", "linear-gradient(135deg,#f0f0f0,#bfbfbf)"],
  ["1553 Fontia", "linear-gradient(135deg,#e6dec9,#b5ad98)"],
  ["1609 Versilia", "linear-gradient(135deg,#e3e6eb,#b2b5ba)"],
  ["1667 Yarmouth Blue", "linear-gradient(135deg,#d3dbe3,#a2aab2)"],
  ["2969 Octivia Grey", "linear-gradient(135deg,#9ca3af,#6b7280)"],
  ["2844 Grey Lines", "linear-gradient(135deg,#848c96,#535b65)"],
  ["1651 Fradella Grey", "linear-gradient(135deg,#6b726b,#3a413a)"],
  ["1635 Soraya Grey", "linear-gradient(135deg,#787c7e,#474b4d)"],
  ["1649 Frausin Black", "linear-gradient(135deg,#2b2b2b,#0a0a0a)"],
  ["1492 Blue Marble", "linear-gradient(135deg,#3b4a59,#1a2530)"],
  ["1608 Fire Stone", "linear-gradient(135deg,#2b2424,#0a0505)"],
  ["1554 Letizia", "linear-gradient(135deg,#423a35,#211914)"],
  ["1659 Lenora Orange", "linear-gradient(135deg,#d98b6c,#a85a3b)"],
  ["1423 Grey Stone", "linear-gradient(135deg,#4a4e51,#191d20)"],
  ["1458 Zebrawood Marbel", "linear-gradient(135deg,#54595d,#23282c)"],
  ["1385 Choco Dust", "linear-gradient(135deg,#705642,#3f2511)"],
  ["1386 Green Dust", "linear-gradient(135deg,#4a615d,#19302c)"],
  ["1422 Nordic Terra", "linear-gradient(135deg,#627382,#314251)"],
  ["1610 Orient Brown", "linear-gradient(135deg,#59362b,#280500)"],
  ["1657 Elton Red", "linear-gradient(135deg,#7a3b4a,#490a19)"],
  ["1658 Duncan Blue", "linear-gradient(135deg,#4a5d7a,#192c49)"],
  ["1462 Bianco Carrara Venato", "linear-gradient(135deg,#f7f9fa,#c6c8c9)"]
];

const hardware = [
  "Spring-loaded hinges / gravity hinges",
  "Privacy lock with indicator",
  "Coat hanger cum stopper",
  "Door knob & panel holder",
  "SS L-bend & floor angle plate",
  "SS skirting & shoe box cover",
  "SS / pedestal adjustable legs",
  "SS / aluminium head rail",
  "Nylon accessories",
];

export default function Cubicles4() {
  const [finishCategory, setFinishCategory] = useState("standard");
  const [selected, setSelected] = useState(null);

  let activeFinishes = solidColors;
  if (finishCategory === "wood") {
    activeFinishes = woodFinishes;
  } else if (finishCategory === "special") {
    activeFinishes = specialFinishes;
  }

  const finishes = activeFinishes.map(([name, value]) => {
    const isGradient = value.startsWith("linear-gradient");
    return {
      name,
      style: isGradient ? { background: value } : { backgroundColor: value },
    };
  });

  return (
    <>
      <section className="vsk-cladding-section" id="vsk-exterior-cladding">
        <div className="vsk-cladding-topline">
          <span>03 / ARCHITECTURAL SURFACES</span>
          <span>HPL EXTERIOR RANGE</span>
        </div>
        <div className="vsk-cladding-layout">
          <div className="vsk-cladding-image">
            <img src={claddingImage} alt="VSK architectural cladding product image" loading="lazy" />
            <span>EXTERIOR / 06MM</span>
          </div>
          <div className="vsk-cladding-copy">
            <span className="vsk-cladding-kicker">SURFACE. STRUCTURE. CHARACTER.</span>
            <h2>Exterior cladding with a clear architectural point of view.</h2>
            <p>
              VSK's 6mm HPL exterior cladding range brings a contemporary surface finish to building facades. Review the project requirements and finish options with our team to identify a suitable configuration.
            </p>
            <div className="vsk-cladding-highlights">
              {highlights.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link to="/contact-us#register" className="vsk-cladding-cta">
              Enquire about cladding <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="vsk-finish-section" id="vsk-finishes">
        <header className="vsk-finish-heading">
          <span>04 / DETAILS MAKE THE DIFFERENCE</span>
          <h2>Choose your <em>finish.</em></h2>
          <p>
            Explore the available colour and grain options sourced directly from our architectural catalogue. Use the swatches as a visual guide and confirm the final finish with VSK before ordering.
          </p>
        </header>

        <div className="vsk-finish-panel">
          <div className="vsk-finish-panel-heading">
            <div>
              <span>FINISH LIBRARY</span>
              <h3>Colours & surfaces</h3>
            </div>
            <div className="vsk-finish-toggle">
              <button
                className={finishCategory === "standard" ? "active" : ""}
                onClick={() => { setFinishCategory("standard"); setSelected(null); }}
              >
                Standard colours
              </button>
              <button
                className={finishCategory === "wood" ? "active" : ""}
                onClick={() => { setFinishCategory("wood"); setSelected(null); }}
              >
                Wooden finishes
              </button>
              <button
                className={finishCategory === "special" ? "active" : ""}
                onClick={() => { setFinishCategory("special"); setSelected(null); }}
              >
                Special & mixed
              </button>
            </div>
          </div>

          {selected && (
            <div className="vsk-finish-selected">
              Selected visual reference: <strong>{selected}</strong>
            </div>
          )}
          <div className="vsk-finish-swatches">
            {finishes.map((finish) => (
              <button
                key={finish.name}
                className={`vsk-finish-swatch ${selected === finish.name ? "selected" : ""}`}
                onClick={() => setSelected(finish.name)}
                aria-pressed={selected === finish.name}
              >
                <span style={finish.style} />
                <small>{finish.name}</small>
              </button>
            ))}
          </div>
          <p className="vsk-finish-note">
            Screen colours may differ from physical samples. Please confirm availability and final shade with the VSK team. Full sheet sizes: 1860 x 4320 mm, 1860 x 3660 mm[cite: 53].
          </p>
        </div>

        <div className="vsk-materials-layout">
          <div className="vsk-materials-intro">
            <span>05 / SYSTEM COMPONENTS</span>
            <h3>Considered down to the details.</h3>
            <p>Explore key hardware and material categories used across the restroom cubicle range.</p>
          </div>
          <div className="vsk-materials-content">
            <div className="vsk-material-block">
              <h4>Hardware & accessories</h4>
              <ul>
                {hardware.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="vsk-material-block">
              <h4>Material characteristics</h4>
              <ul>
                <li>Compact grade laminate board</li>
                <li>12mm board options, depending on model</li>
                <li>Water and moisture resistance, depending on material specification</li>
                <li>Scratch, impact and chemical resistance, subject to selected board specification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}