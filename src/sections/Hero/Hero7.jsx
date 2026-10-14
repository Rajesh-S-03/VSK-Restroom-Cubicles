import React, { useState } from "react";
import "./Hero7.css";
import {
  FaStar,
  FaQuoteLeft,
  FaGoogle,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Kapil Vasanthan",
    place: "Tenkasi",
    review:
      "We are very satisfied with the restroom cubicle installation by VSK Enterprises. The material quality, finishing, and overall design were excellent. The team completed the work professionally and maintained good attention to detail.",
  },

  {
    id: 2,
    name: "Irfana Assiff",
    place: "Chennai",
    review:
      "VSK Enterprises provided a clean and professional restroom solution for our commercial space. The cubicles look modern, strong, and well-finished. Their team was responsive and completed the installation as discussed.",
  },

  {
    id: 3,
    name: "Rajesh S",
    place: "Sivaganga",
    review:
      "Good quality restroom cubicles with a professional finish. We were impressed with the material selection and installation work. The VSK team understood our requirements and delivered a neat and practical solution.",
  },
];

const REVIEW_LIMIT = 140;


/* =========================================================
   TESTIMONIAL CARD
========================================================= */

const TestimonialCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = item.review.length > REVIEW_LIMIT;

  const displayText =
    expanded || !isLong
      ? item.review
      : item.review.slice(0, REVIEW_LIMIT).trim() + "...";

  return (
    <div className="testimonial-cell">

      <div
        className={`testimonial-card ${
          expanded ? "is-expanded" : ""
        }`}
      >

        {/* Quote Icon */}
        <FaQuoteLeft className="quote-icon" />


        {/* Stars */}
        <div className="stars">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

        </div>


        {/* Review */}
        <p className="review-text">

          "{displayText}"

          {isLong && (
            <button
              type="button"
              className="read-more-btn"
              onClick={() =>
                setExpanded((prev) => !prev)
              }
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}

        </p>


        {/* Customer */}
        <div className="customer">

          <div className="avatar">
            {item.name.charAt(0).toUpperCase()}
          </div>

          <div className="customer-info">

            <h4>
              {item.name}
            </h4>

            {item.place && (
              <span>
                {item.place}
              </span>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   HERO 7 - CUSTOMER REVIEWS
========================================================= */

const Hero7 = () => {
  return (
    <section className="testimonial-section">

      {/* Section Label */}
      <span className="testimonial-tag">
        CLIENT FEEDBACK
      </span>


      {/* Heading */}
      <h2 className="testimonial-title">

        Trusted by

        <span>
          {" "}Our Clients
        </span>

      </h2>


      {/* Subtitle */}
      <p className="testimonial-subtitle">
        Quality materials, professional installation, and
        reliable restroom solutions that our clients can trust.
      </p>


      {/* Reviews */}
      <div className="testimonial-container">

        {reviews.map((item) => (
          <TestimonialCard
            item={item}
            key={item.id}
          />
        ))}

      </div>


      {/* Google Reviews Button */}
      <div className="review-btn">

        <a
          href="https://www.google.com/maps/place/VSK+ENTERPRISES/@13.0137658,80.0834451,17z/data=!4m8!3m7!1s0x3a528bc0cd6b56bb:0x3794bddfba73b554!8m2!3d13.0137658!4d80.08602!9m1!1b1!16s%2Fg%2F11z3zzcnp6?hl=en&entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="review-btn-link"
        >

          <FaGoogle className="google-icon" />

          <span>
            View More Reviews
          </span>

        </a>

      </div>

    </section>
  );
};


export default Hero7;