import React, { useEffect, useRef, useState } from 'react';
import './ContactUs.css';
import { useLocation } from "react-router-dom";

const PHONE_1 = '+91-97911 28296';
const PHONE_2 = '+91-73051 28296';
const EMAIL = 'varun@vskenterprises.in';
const WEBSITE = 'https://www.vskenterprises.in';
const WHATSAPP_NUMBER = '919791128296';

const MAP_QUERY = 'Malayambakkam South, Kanchipuram, Chennai 600069';
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_LINK = `https://maps.app.goo.gl/qYpi9HxJqCnX6JLo9`;

const SERVICES = ['Restroom Cubicles', 'Modular Furniture', 'Interiors and Exterior Cladding'];

const Icon = ({ children }) => (
  <div className="card-icon">
    <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
  </div>
);

export default function ContactUs() {

  const location = useLocation();

useEffect(() => {
  if (location.hash === "#register") {
    requestAnimationFrame(() => {
      document.getElementById("register")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}, [location]);

  const rootRef = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', service: SERVICES[0], message: '' });
  const [error, setError] = useState('');

  // Scroll reveal (same pattern as the About Us page)
  useEffect(() => {
    const els = rootRef.current.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('reveal-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('reveal-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const resetForm = () => {
  setForm({
    name: '',
    phone: '',
    service: SERVICES[0],
    message: '',
  });

  setError('');
};

  const buildText = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please enter your name and phone number.');
      return null;
    }
    setError('');
    return `Name: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nRequirement: ${form.service}\nDetails: ${form.message.trim()}`;
  };

const sendEmail = () => {
  const text = buildText();
  if (!text) return;

  const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
    'Enquiry from website'
  )}&body=${encodeURIComponent(text)}`;

  window.location.href = mailtoUrl;

  resetForm();
};

const sendWhatsApp = () => {
  const text = buildText();
  if (!text) return;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  const newWindow = window.open(
    whatsappUrl,
    '_blank',
    'noopener,noreferrer'
  );

  if (newWindow) {
    resetForm();
  }
};

  return (
    <div className="contact-us-container" ref={rootRef}>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-glow" />
        <div className="hero-content reveal">
          <div className="badge">
            <span className="badge-dot" />
            Contact Us
          </div>
          <h1>
            Let's build your space <span>together</span>
          </h1>
          <p className="hero-subtitle">
            Restroom cubicles, modular furniture, interiors and exterior cladding. Call, message or visit us for a quote.
          </p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="contact-info">
        <div className="info-card reveal">
          <Icon>
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
          </Icon>
          <h3>Call us</h3>
          <a href={`tel:${PHONE_1.replace(/[^+\d]/g, '')}`}>{PHONE_1}</a>
          <a href={`tel:${PHONE_2.replace(/[^+\d]/g, '')}`}>{PHONE_2}</a>
        </div>

        <div className="info-card reveal">
          <Icon>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </Icon>
          <h3>Email</h3>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>

        <div className="info-card reveal">
          <Icon>
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
          </Icon>
          <h3>Website</h3>
          <a href={WEBSITE} target="_blank" rel="noopener noreferrer">www.vskenterprises.in</a>
        </div>

        <div className="info-card reveal">
          <Icon>
            <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </Icon>
          <h3>Visit us</h3>
          <p>1134/1A1B, Malayambakkam (South), Kanchipuram, Chennai - 600069</p>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="contact-main" id="register">
        <div className="reveal">
          <span className="eyebrow">Enquiry</span>
          <h2>Tell us what you need</h2>
          <p className="lead" >
            Share a few details and we will get back to you with a quote.
          </p>

          <div className="form-card">
            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <div className="form-row">
                <div>
                  <label htmlFor="cu-name">Your name</label>
                  <input id="cu-name" name="name" value={form.name} onChange={onChange} autoComplete="name" required />
                </div>
                <div>
                  <label htmlFor="cu-phone">Phone number</label>
                  <input id="cu-phone" name="phone" type="tel" value={form.phone} onChange={onChange} autoComplete="tel" required />
                </div>
              </div>

              <label htmlFor="cu-service">What do you need?</label>
              <select id="cu-service" name="service" value={form.service} onChange={onChange}>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
                <option>Something else</option>
              </select>

              <label htmlFor="cu-message">Project details</label>
              <textarea
                id="cu-message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Location, size, quantity, timeline"
              />

              <div className="form-actions">
                <button type="button" className="btn-pill btn-navy" onClick={sendEmail}>
                  Send by email <span className="arrow">&rarr;</span>
                </button>
                <button type="button" className="btn-pill btn-green" onClick={sendWhatsApp}>
                  WhatsApp <span className="arrow">&rarr;</span>
                </button>
              </div>
              <p className="form-error" role="alert">{error}</p>
            </form>
          </div>
        </div>

        <div className="reveal map-col">
          <span className="eyebrow">Find us</span>
          <h2>Visit our workshop</h2>
          <p className="lead">Malayambakkam (South), Chennai.</p>
          <div className="map-card">
            <iframe
              title="VSK Enterprises location on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-bar">
              <span>1134/1A1B, Malayambakkam (South)</span>
              <a className="btn-pill btn-navy" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                Directions <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-strip">
        <span className="eyebrow">What we do</span>
        <ul>
          {SERVICES.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      {/* QUOTE / CTA */}

 
      {/* <section className="contact-vision">
        <div className="vision-glow" />
        <h2 className="reveal">"Clean restrooms reflect responsible citizens and a healthy society"</h2>
        <p className="reveal">Ready to talk about your project? Give us a call.</p>
        <a className="btn-pill btn-white" href={`tel:${PHONE_1.replace(/[^+\d]/g, '')}`}>
          Call now <span className="arrow">&rarr;</span>
        </a>
      </section>  */}
    </div>
  );
}