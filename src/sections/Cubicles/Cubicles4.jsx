import React, { useState } from "react";
import "./Cubicles4.css";
import claddingImage from "../../assets/applications/exteriorclading.png";
import { Link } from "react-router-dom";

// --- 1. Wood Finishes Imports (vsk_category1) ---
import denseOak from "../../assets/vsk_category1/1965-Dense Oak.jpg";
import orlandoWalnut from "../../assets/vsk_category1/1981-Orlando Walnut.jpg";
import weepingBeech from "../../assets/vsk_category1/2082-Weeping Beech.jpg";
import rawCharm from "../../assets/vsk_category1/2202-Raw Charm.jpg";
import juglanBurch from "../../assets/vsk_category1/2234-Juglan Burch.jpg";
import polarBirch from "../../assets/vsk_category1/2303-Polar Birch.jpg";
import rovereCristallo from "../../assets/vsk_category1/2319-Rovere Cristallo.jpg";
import pinOak from "../../assets/vsk_category1/2334-Pin Oak.jpg";
import hadfiledWalnut from "../../assets/vsk_category1/2381-Hadfiled Walnut.jpg";
import hydraTeak from "../../assets/vsk_category1/2461-Hydra teak.jpg";
import meriboOak from "../../assets/vsk_category1/2803-Meribo Oak.jpg";
import meriboWood from "../../assets/vsk_category1/2804-Meribo Wood.jpg";
import lignoHorizontalWood from "../../assets/vsk_category1/2833-Ligno-Horizontal-Wood.jpg";
import nainaTeak from "../../assets/vsk_category1/2835-Naina teak.jpg";
import teakClassical from "../../assets/vsk_category1/2838-Teak Classical.jpg";
import eliteGrains from "../../assets/vsk_category1/2839-Elite Grains.jpg";
import cocoTeak from "../../assets/vsk_category1/2843-Coco Teak.jpg";
import desertTeak from "../../assets/vsk_category1/2845-Desert Teak.jpg";
import royalWood from "../../assets/vsk_category1/2851-Royal Wood.jpg";
import desertMarble from "../../assets/vsk_category1/2852-Desert Marble.jpg";
import brownPattern from "../../assets/vsk_category1/2859-Brown Pattern.jpg";
import calaisEiche from "../../assets/vsk_category1/2865-Calais Eiche.jpg";
import wisconsinWalnut from "../../assets/vsk_category1/2913-Wisconsin Walnut.jpg";
import fijeanHorizonWood from "../../assets/vsk_category1/2934- Fijean Horizon Wood.jpg";
import raminLight from "../../assets/vsk_category1/2935-Ramin Light.jpg";
import raminDark from "../../assets/vsk_category1/2936-Ramin Dark.jpg";
import pascalWood from "../../assets/vsk_category1/2966-Pascal Wood.jpg";
import kayokoWood from "../../assets/vsk_category1/2967-Kayoko Wood.jpg";
import highlandPine from "../../assets/vsk_category1/7251-Highland Pine.jpg";
import straightPine from "../../assets/vsk_category1/7254-Straight Pine.jpg";
import mahogany from "../../assets/vsk_category1/7285-Mahogany.jpg";
import legalMahogany from "../../assets/vsk_category1/7288-Legal Mahogany.jpg";
import mountainMaple from "../../assets/vsk_category1/7303-Mountain Maple.jpg";
import albertaMaple from "../../assets/vsk_category1/7305-Alberta Maple.jpg";
import ashOak from "../../assets/vsk_category1/7416-Ash Oak.png";
import miamiWalnut from "../../assets/vsk_category1/7712-Miami walnut.jpg";
import vegasWalnut from "../../assets/vsk_category1/7717-Vegas Walnut.jpg";
import wellowTreeWhite from "../../assets/vsk_category1/7771-Wellow Tree White.jpg";
import diamondStone from "../../assets/vsk_category1/1424-Diamond Stone.jpg";

// --- 2. Special Finishes Imports (vsk_category2) ---
import tweedGray from "../../assets/vsk_category2/1353-Tweed Gray.jpg";
import slateDust from "../../assets/vsk_category2/1384-Slate Dust.jpg";
import chocoDust from "../../assets/vsk_category2/1385-CHOCO DUST.jpg";
import greenDust from "../../assets/vsk_category2/1386-Green Dust.jpg";
import lightAluminium from "../../assets/vsk_category2/1411-Light Aluminium.jpg";
import nordicTerra from "../../assets/vsk_category2/1422-NORDIC-TERRA.jpg";
import greyStone from "../../assets/vsk_category2/1423-Grey Stone.jpg";
import zebrawoodMarble from "../../assets/vsk_category2/1458-Zebrawood Marble.jpg";
import biancoCarraraVenato from "../../assets/vsk_category2/1462-Bianco Carrara Venato.jpg";
import newPinara from "../../assets/vsk_category2/1468-New Pinara.jpg";
import blackPinara from "../../assets/vsk_category2/1469-Black Pinara.jpg";
import pietraMarble from "../../assets/vsk_category2/1480-Pietra Marble.jpg";
import puntinatoMarble from "../../assets/vsk_category2/1481-Puntinato Marble.jpg";
import landraGrain from "../../assets/vsk_category2/1489-Landra Grain.jpg";
import dustZinger from "../../assets/vsk_category2/1490-Dust Zinger.jpg";
import blueMarble from "../../assets/vsk_category2/1492-Blue Marble.jpg";
import fontia from "../../assets/vsk_category2/1553-Fontia.jpg";
import letizia from "../../assets/vsk_category2/1554-Letizia.jpg";
import saltyPepper from "../../assets/vsk_category2/1568-Salty Pepper.jpg";
import fireStone from "../../assets/vsk_category2/1608-Fire Stone.jpg";
import versiliaWhite from "../../assets/vsk_category2/1609-Versilia White.jpg";
import orientBrown from "../../assets/vsk_category2/1610-Orient Brown.jpg";
import sorayaGrey from "../../assets/vsk_category2/1635-Soraya Grey.jpg";
import frausinBlack from "../../assets/vsk_category2/1649-Frausin Black.jpg";
import brecciaGrey from "../../assets/vsk_category2/1650-Breccia Grey.jpg";
import fradellaGrey from "../../assets/vsk_category2/1651-Fradella Grey.jpg";
import travenGreyMin from "../../assets/vsk_category2/1652-Traven Grey-min.jpg";
import perlinaGrey from "../../assets/vsk_category2/1653-Perlina Grey.jpg";
import peytonGrey from "../../assets/vsk_category2/1654-Peyton Grey.jpg";
import haydenBeige from "../../assets/vsk_category2/1655-Hayden Beige.jpg";
import adrianWhite from "../../assets/vsk_category2/1656-Adrian White.jpg";
import eltonRed from "../../assets/vsk_category2/1657-Elton Red.jpg";
import duncanBlue from "../../assets/vsk_category2/1658-Duncan Blue.jpg";
import lenoraOrange from "../../assets/vsk_category2/1659-Lenora Orange.jpg";
import yarmouthBlueScaled from "../../assets/vsk_category2/1667-Yarmouth-Blue-scaled.jpg";
import greyLines from "../../assets/vsk_category2/2844-Grey Lines.jpg";
import bengalMarble from "../../assets/vsk_category2/2853-Bengal Marble.jpg";
import quintiaGrey from "../../assets/vsk_category2/2964-Quintia Grey.jpg";
import harumiBeige from "../../assets/vsk_category2/2965-Harumi Beige.jpg";
import octiviaGrey from "../../assets/vsk_category2/2969-Octivia Grey.jpg";

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
  ["1965 Dense Oak", denseOak],
  ["7251 Highland Pine", highlandPine],
  ["2303 Polar Birch", polarBirch],
  ["2319 Rovere Cristallo", rovereCristallo],
  ["2334 Pin Oak", pinOak],
  ["2804 Meribo Wood", meriboWood],
  ["2833 Ligno Horizontal Wood", lignoHorizontalWood],
  ["2803 Meribo Oak", meriboOak],
  ["2838 Teak Classical", teakClassical],
  ["2839 Elite Grains", eliteGrains],
  ["7771 Wellow Tree White", wellowTreeWhite],
  ["7303 Mountain Maple", mountainMaple],
  ["7305 Alberta Maple", albertaMaple],
  ["2082 Weeping Beech", weepingBeech],
  ["2966 Pascal Wood", pascalWood],
  ["2967 Kayoko Wood", kayokoWood],
  ["7416 Ash Oak", ashOak],
  ["2845 Desert Teak", desertTeak],
  ["2851 Royal Wood", royalWood],
  ["2461 Hydra Teak", hydraTeak],
  ["2865 Calais Eiche", calaisEiche],
  ["2913 Wisconsin Walnut", wisconsinWalnut],
  ["2381 Hadfiled Walnut", hadfiledWalnut],
  ["1981 Orlando Walnut", orlandoWalnut],
  ["2835 Naina Teak", nainaTeak],
  ["7254 Straight Pine", straightPine],
  ["7285 Mahogany", mahogany],
  ["7288 Legal Mahogany", legalMahogany],
  ["2202 Raw Charm", rawCharm],
  ["2859 Brown Pattern", brownPattern],
  ["2234 Juglan Burch", juglanBurch],
  ["7717 Vegas Walnut", vegasWalnut],
  ["2843 Cocoa Teak", cocoTeak],
  ["7712 Miami Walnut", miamiWalnut],
  ["1424 Diamond Stone", diamondStone],
  ["2852 Desert Marble", desertMarble],
  ["2934 Fijean Horizon Wood", fijeanHorizonWood],
  ["2935 Ramin Light", raminLight],
  ["2936 Ramin Dark", raminDark]
];

const specialFinishes = [
  ["1353 Tweed Gray", tweedGray],
  ["1411 Light Aluminium", lightAluminium],
  ["1384 Slate Dust", slateDust],
  ["1481 Puntinato Marble", puntinatoMarble],
  ["1489 Landra Grain", landraGrain],
  ["1490 Dust Zinger", dustZinger],
  ["1653 Perlina Gery", perlinaGrey],
  ["1650 Breccia Grey", brecciaGrey],
  ["1652 Traven Grey", travenGreyMin],
  ["1480 Pietra Marble", pietraMarble],
  ["1468 New Pinara", newPinara],
  ["1469 Black Pinara", blackPinara],
  ["1656 Adrian White", adrianWhite],
  ["1654 Peyton Grey", peytonGrey],
  ["1655 Hayden Beige", haydenBeige],
  ["2853 Bengal Marble", bengalMarble],
  ["2964 Quintia Grey", quintiaGrey],
  ["2965 Harumi Beige", harumiBeige],
  ["1568 Salty Pepper", saltyPepper],
  ["1553 Fontia", fontia],
  ["1609 Versilia", versiliaWhite],
  ["1667 Yarmouth Blue", yarmouthBlueScaled],
  ["2969 Octivia Grey", octiviaGrey],
  ["2844 Grey Lines", greyLines],
  ["1651 Fradella Grey", fradellaGrey],
  ["1635 Soraya Grey", sorayaGrey],
  ["1649 Frausin Black", frausinBlack],
  ["1492 Blue Marble", blueMarble],
  ["1608 Fire Stone", fireStone],
  ["1554 Letizia", letizia],
  ["1659 Lenora Orange", lenoraOrange],
  ["1423 Grey Stone", greyStone],
  ["1458 Zebrawood Marble", zebrawoodMarble],
  ["1385 Choco Dust", chocoDust],
  ["1386 Green Dust", greenDust],
  ["1422 Nordic Terra", nordicTerra],
  ["1610 Orient Brown", orientBrown],
  ["1657 Elton Red", eltonRed],
  ["1658 Duncan Blue", duncanBlue],
  ["1462 Bianco Carrara Venato", biancoCarraraVenato]
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

  

  const finishes = activeFinishes.map(([name, value]) => ({
    name,
    value,
    isImage: finishCategory !== "standard",
  }));



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
                <span
                  style={
                    finish.isImage
                      ? {}
                      : { backgroundColor: finish.value }
                  }
                >
                  {finish.isImage && (
                    <img
                      src={finish.value}
                      alt={finish.name}
                      loading="lazy"
                    />
                  )}
                </span>
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