import React from "react";
import { Link } from "react-router-dom";
import "./OurClients.css";

// =========================================================
// CLIENT LOGOS
// Keep these paths aligned with the actual filenames in
// src/assets/clients/
// =========================================================

import client01 from "../../assets/clients/ADITYA INTERNATIONAL SCHOOL.png";
import client02 from "../../assets/clients/ADYA.png";
import client03 from "../../assets/clients/Asset 1@288x.png";
import client04 from "../../assets/clients/CAPGEMINI.png";
import client05 from "../../assets/clients/CAT.png";
import client06 from "../../assets/clients/CLOUD NINE.png";
import client07 from "../../assets/clients/CONGNIZANT.png";
import client08 from "../../assets/clients/DHANALAKSHMI COLLEGE.png";
import client09 from "../../assets/clients/DHANALAKSHMI TECHNOLOGY.png";
import client10 from "../../assets/clients/H FOXCONN.png";
import client11 from "../../assets/clients/HINDUSTAN.png";
import client12 from "../../assets/clients/HYUNDA GLOVIS.png";
import client13 from "../../assets/clients/HYUNDA MOBIS.png";
import client14 from "../../assets/clients/HYUNDA.png";
import client15 from "../../assets/clients/JOHN DEWEY-WOMENS COLLEGE.jpg";
import client16 from "../../assets/clients/JS GLOBAL SCHOOL.png";
import client17 from "../../assets/clients/KONGU SCHOOL.png";
import client18 from "../../assets/clients/NATIONAL MODEL SCHOOL.png";
import client19 from "../../assets/clients/OCEAN.png";
import client20 from "../../assets/clients/PHOENIX.png";
import client21 from "../../assets/clients/POTHYS.png";
import client22 from "../../assets/clients/RAKKI CINEMAS.jpg";
import client23 from "../../assets/clients/SCAD.jpg";
import client24 from "../../assets/clients/SKCL.png";
import client25 from "../../assets/clients/SOBHA.png";
import client26 from "../../assets/clients/SRI CITY.png";
import client27 from "../../assets/clients/SRM.png";
import client28 from "../../assets/clients/TCCASW COLLEGE.png";
import client29 from "../../assets/clients/THE NEST SCHOOL.png";
import client30 from "../../assets/clients/TIPS EXTRAORDINARY.png";
import client31 from "../../assets/clients/VIVEKANANDA SCHOOL.png";
import client32 from "../../assets/clients/ZMHSS.png";

// =========================================================
// CLIENT CATEGORIES
// Each logo is assigned explicitly instead of using slices.
// Some classifications are provisional where the filename
// alone does not identify the organization's exact business.
// =========================================================

const clientCategories = [
  {
    id: "education",
    number: "01",
    eyebrow: "EDUCATION & ACADEMIA",
    title: "Schools, Colleges & Educational Institutions",
    description:
      "Restroom solutions for schools, colleges and learning environments, designed around everyday use, durability and practical maintenance.",
    logos: [
      { image: client01, name: "Aditya International School" },
      { image: client08, name: "Dhanalakshmi College" },
      { image: client09, name: "Dhanalakshmi Technology" },
      { image: client03, name: "Other Client" },
      { image: client15, name: "John Dewey Women's College" },
      { image: client16, name: "JS Global School" },
      { image: client17, name: "Kongu School" },
      { image: client18, name: "National Model School" },
      { image: client23, name: "SCAD" },
      { image: client27, name: "SRM" },
      { image: client28, name: "TCCASW College" },
      { image: client29, name: "The Nest School" },
      { image: client30, name: "TIPS Extraordinary" },
      { image: client31, name: "Vivekananda School" },
      { image: client32, name: "ZMHSS" },
    ],
  },
  {
    id: "corporate",
    number: "02",
    eyebrow: "CORPORATE & IT",
    title: "Corporate Offices & Technology Companies",
    description:
      "Solutions for professional workplaces and technology environments where functionality, clean design and dependable performance matter.",
    logos: [
      { image: client02, name: "ADYA" },
      { image: client04, name: "Capgemini" },
      { image: client07, name: "Cognizant" },
    ],
  },
  {
    id: "industrial",
    number: "03",
    eyebrow: "AUTOMOTIVE & INDUSTRIAL",
    title: "Manufacturing, Automotive & Industrial Facilities",
    description:
      "Durable restroom systems for industrial and manufacturing environments that experience frequent use and demanding operating conditions.",
    logos: [
      { image: client05, name: "CAT" },
      { image: client06, name: "Cloudnine" },
      { image: client10, name: "Foxconn" },
      { image: client12, name: "Hyundai Glovis" },
      { image: client13, name: "Hyundai Mobis" },
      { image: client14, name: "Hyundai" },
      { image: client26, name: "Sri City" },
    ],
  },
  {
    id: "commercial",
    number: "04",
    eyebrow: "RETAIL & ENTERTAINMENT",
    title: "Retail, Shopping & Entertainment Spaces",
    description:
      "Restroom solutions for public-facing commercial spaces where visitor comfort, appearance and efficient maintenance are important.",
    logos: [
      { image: client20, name: "Phoenix" },
      { image: client21, name: "Pothys" },
      { image: client22, name: "Rakki Cinemas" },
    ],
  },
  {
    id: "infrastructure",
    number: "05",
    eyebrow: "INFRASTRUCTURE & OTHER ORGANIZATIONS",
    title: "Infrastructure, Real Estate & Other Institutions",
    description:
      "Flexible restroom solutions for construction, property, institutional and other projects with different site requirements.",
    logos: [
      { image: client11, name: "Hindustan" },
      { image: client19, name: "Ocean" },
      { image: client24, name: "SKCL" },
      { image: client25, name: "Sobha" },
    ],
  },
];

// =========================================================
// TRUST POINTS
// =========================================================

const trustPoints = [
  {
    number: "01",
    title: "Quality Materials",
    text: "Durable materials selected to deliver reliable performance and long-term value.",
  },
  {
    number: "02",
    title: "Reliable Solutions",
    text: "Practical restroom solutions designed around different spaces and usage requirements.",
  },
  {
    number: "03",
    title: "Professional Execution",
    text: "Careful planning, precise installation and attention to every project requirement.",
  },
  {
    number: "04",
    title: "Client-Focused Service",
    text: "We work closely with clients to understand their needs and deliver suitable solutions.",
  },
];

function OurClients() {
  const totalClients = clientCategories.reduce(
    (total, category) => total + category.logos.length,
    0
  );

  return (
    <section className="our-clients">
      {/* Background decorations */}
      <div className="clients-bg-grid" />
      <div className="clients-orb clients-orb-one" />
      <div className="clients-orb clients-orb-two" />

      {/* Hero */}
      <div className="clients-hero">
        <div className="clients-hero-line">
          <span />
          <small>VSK ENTERPRISES</small>
          <span />
        </div>

        <span className="clients-eyebrow">OUR CLIENTS</span>

        <h1>
          Trusted by <em>Leading</em>
          <br />
          Organizations
        </h1>

        <p>
          Strong partnerships built through quality, reliability and precision.
        </p>
      </div>

      {/* Statistics */}
      <div className="clients-stats">
        <div className="client-stat stat-one">
          <strong>{totalClients}+</strong>
          <span>Client Logos</span>
        </div>

        <div className="client-stat stat-two">
          <strong>{String(clientCategories.length).padStart(2, "0")}</strong>
          <span>Industry Categories</span>
        </div>

        <div className="client-stat stat-three">
          <strong>Pan-India</strong>
          <span>Project Reach</span>
        </div>

        <div className="client-stat stat-four">
          <strong>100%</strong>
          <span>Quality Focus</span>
        </div>
      </div>

      {/* Client categories */}
      <section className="clients-logo-section">
        <div className="section-heading">
          <span className="section-eyebrow">OUR PARTNERSHIPS</span>

          <h2>
            Organizations That <em>Trust VSK</em>
          </h2>

          <p>
            Explore our client network across education, corporate, healthcare,
            industrial, retail and infrastructure sectors.
          </p>
        </div>

        <div className="client-category-list">
          {clientCategories.map((category, categoryIndex) => (
            <section
              className={`client-category category-${category.id}`}
              key={category.id}
            >
              <div className="category-header">
                <div className="category-number">{category.number}</div>

                <div className="category-heading-content">
                  <span className="category-eyebrow">
                    {category.eyebrow}
                  </span>

                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>

                <div className="category-index">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="category-logos">
                {category.logos.map((logo, index) => (
                  <div
                    className="client-box"
                    key={`${category.id}-${logo.name}`}
                    style={{
                      animationDelay: `${
                        categoryIndex * 0.15 + index * 0.05
                      }s`,
                    }}
                    title={logo.name}
                  >
                    <div className="client-box-inner">
                      <img
                        src={logo.image}
                        alt={logo.name}
                        loading="lazy"
                      />
                    </div>

                    <span className="client-corner corner-top" />
                    <span className="client-corner corner-bottom" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Client count */}
        <div className="client-count">
          <div className="client-count-number">
            <span>{totalClients}</span>
            <small>+</small>
          </div>

          <div className="client-count-text">
            <strong>Growing Client Network</strong>
            <p>
              Education &nbsp;•&nbsp; Corporate &nbsp;•&nbsp; Healthcare
              &nbsp;•&nbsp; Industrial &nbsp;•&nbsp; Retail &nbsp;•&nbsp;
              Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Why VSK */}
      <section className="why-vsk-section">
        <div className="why-vsk-heading">
          <span className="section-eyebrow">WHY VSK IS TRUSTED</span>

          <h2>
            Built on Quality.
            <br />
            <em>Trusted Through Results.</em>
          </h2>

          <p>
            VSK Enterprises focuses on delivering dependable restroom solutions
            through quality products, professional execution and a clear
            understanding of each client&apos;s requirements.
          </p>
        </div>

        <div className="trust-grid">
          {trustPoints.map((item) => (
            <div className="trust-card" key={item.number}>
              <span className="trust-number">{item.number}</span>
              <div className="trust-icon">✓</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="clients-cta">
        <div className="cta-grid" />
        <div className="cta-glow cta-glow-one" />
        <div className="cta-glow cta-glow-two" />

        <div className="cta-content">
          <span className="section-eyebrow">READY TO PARTNER WITH VSK?</span>

          <h2>
            Let&apos;s Build a
            <br />
            <em>Strong Partnership.</em>
          </h2>

          <p>
            Whether you&apos;re planning a new project or looking for a reliable
            restroom solutions partner, let&apos;s work together to create the
            right solution for your space.
          </p>

          <Link to="/contact-us" className="clients-cta-button">
            Let&apos;s Work Together <span>→</span>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default OurClients;
