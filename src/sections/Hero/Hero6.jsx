import React from "react";
import "./Hero6.css";

import airportsImg from "../../assets/applications/airports.jpg";
import educationImg from "../../assets/applications/educational-institutions.jpg";
import gymsImg from "../../assets/applications/gyms.jpg";
import hospitalsImg from "../../assets/applications/hospitals.jpg";
import hotelsImg from "../../assets/applications/hotels.jpg";
import mallsImg from "../../assets/applications/malls.jpg";
import officesImg from "../../assets/applications/offices.jpg";
import restaurantImg from "../../assets/applications/restaurant.jpg";
import ComparisonSlider from "../Cubicles/Comparision_slider";

const applications = [
  {
    title: "Corporate Offices",
    description:
      "Modern restroom solutions designed for professional workplaces and everyday employee use.",
    image: officesImg,
  },
  {
    title: "Educational Institutions",
    description:
      "Durable and easy-to-maintain solutions for schools, colleges and educational campuses.",
    image: educationImg,
  },
  {
    title: "Malls & Retail",
    description:
      "Contemporary restroom systems designed for busy shopping and retail environments.",
    image: mallsImg,
  },
  {
    title: "Airports",
    description:
      "Reliable solutions built to perform in high-footfall transportation environments.",
    image: airportsImg,
  },
  {
    title: "Gyms & Fitness",
    description:
      "Functional and hygienic restroom solutions suited for active fitness spaces.",
    image: gymsImg,
  },
  {
    title: "Restaurants",
    description:
      "Clean and stylish restroom solutions that complement modern dining environments.",
    image: restaurantImg,
  },
  {
    title: "Hotels & Hospitality",
    description:
      "Premium restroom solutions combining durability, functionality and refined aesthetics.",
    image: hotelsImg,
  },
  {
    title: "Hospitals",
    description:
      "Reliable restroom systems designed with hygiene, durability and frequent use in mind.",
    image: hospitalsImg,
  },
];

const Hero6 = () => {
  return (
    <>
    <section className="hero6">
      {/* Background Effects */}
      <div className="hero6-glow hero6-glow-left"></div>
      <div className="hero6-glow hero6-glow-right"></div>

      {/* Heading */}
      <div className="hero6-heading">
        <span className="hero6-label">APPLICATIONS</span>

        <h2>
          Where <span>VSK Solutions</span> Are Used
        </h2>

        <p>
          Designed to deliver durability, functionality and a refined finish
          across a wide range of spaces and environments.
        </p>
      </div>

      {/* Horizontal Moving Cards */}
      <div className="hero6-slider">
        <div className="hero6-track">
          {[...applications, ...applications].map((item, index) => (
            <article
              className="hero6-card"
              key={`${item.title}-${index}`}
            >
              <div className="hero6-image">
                <img src={item.image} alt={item.title} />

                <div className="hero6-image-overlay"></div>

                <span className="hero6-number">
                  {String((index % applications.length) + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="hero6-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="hero6-card-line"></div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="hero6-bottom-fade"></div>
    </section>
    <ComparisonSlider/>
    </>
  );
};

export default Hero6;