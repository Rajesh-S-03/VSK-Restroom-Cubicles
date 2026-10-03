import { useEffect, useRef, useState } from 'react';
import './AboutUs.css';
import heroImg from '../../assets/heroimg.png';
import glanceImg from '../../assets/glanceimg.png';

// =========================================================
// SCROLL-REVEAL HELPER
// =========================================================

const useInView = (threshold = 0.18) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// =========================================================
// ICONS
// =========================================================

const icons = {
  space: (
    <svg viewBox="0 0 24 24"><path d="M4 4h6v6H4z" /><path d="M14 14h6v6h-6z" /><path d="M4 20h4M20 4h-4" /></svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></svg>
  ),
  clean: (
    <svg viewBox="0 0 24 24"><path d="M9 3v6l-4 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-4-9V3" /><path d="M8 3h8" /></svg>
  ),
  cost: (
    <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /></svg>
  ),
  load: (
    <svg viewBox="0 0 24 24"><path d="M12 3v4M4 21l3-11h10l3 11" /><path d="M4 21h16" /></svg>
  ),
  neat: (
    <svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="m9 12 2 2 4-4" /></svg>
  ),
  wind: (
    <svg viewBox="0 0 24 24"><path d="M3 8h11a3 3 0 1 0-3-3" /><path d="M3 16h14a3 3 0 1 1-3 3" /></svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2s-.6-1.4-.6-2.2c0-1 .8-1.8 1.8-1.8h1.6A4.2 4.2 0 0 0 21 12.8C21 7.4 17 3 12 3Z" /><circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" /><circle cx="16" cy="11" r="1" fill="currentColor" stroke="none" /></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24"><path d="m5 12 5 5 9-11" /></svg>
  ),
  consult: (
    <svg viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 16 0" /><path d="M4 12v4a2 2 0 0 0 2 2h1v-6H5a1 1 0 0 0-1 1Z" /><path d="M20 12v4a2 2 0 0 1-2 2h-1v-6h1a1 1 0 0 1 2 1Z" /></svg>
  ),
  fabricate: (
    <svg viewBox="0 0 24 24"><path d="m3 21 6-6M14 5 19 10 10 19l-5-5 9-9Z" /></svg>
  ),
  install: (
    <svg viewBox="0 0 24 24"><rect x="4" y="4" width="5" height="16" /><rect x="10" y="4" width="4" height="16" /><rect x="15" y="4" width="5" height="16" /></svg>
  ),
  handover: (
    <svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" /><path d="M16 6l-4-4-4 4M12 2v13" /></svg>
  ),
};

// =========================================================
// DATA
// =========================================================

const products = [
  'Toilet Cubicles',
  'Restroom Partitions',
  'Urinal Partitions',
  'Fire Doors',
  'Laminate Sheets',
  'False Flooring Systems',
];

const advantages = [
  { icon: 'space', title: 'Economy of Space', description: '12–35mm board partitions vs. 150+mm traditional walls, maximizing usable floor area.' },
  { icon: 'clock', title: 'Reduced Installation Time', description: 'Factory-made systems — up to 8 cubicles installed in a single day by 2–4 technicians.' },
  { icon: 'clean', title: 'Easy to Maintain', description: 'Hassle-free cleaning with no dead ends; standard 150mm gap from Finished Floor Level.' },
  { icon: 'cost', title: 'Cost Effective', description: 'No masonry walls or tiling required. Modular design for fast, economical installs in high-rises.' },
  { icon: 'load', title: 'Economy of Load', description: 'Minimal floor load with no load-bearing walls needed, enabling fully flexible layouts.' },
  { icon: 'neat', title: 'Neatness of Installation', description: 'Dry construction with zero wet work, keeping job sites spotless and ready for use.' },
];

const process = [
  { icon: 'consult', title: 'Consultation', text: 'Understanding space, layout and client requirements.' },
  { icon: 'fabricate', title: 'Fabrication', text: 'Precision factory manufacturing of every panel and frame.' },
  { icon: 'install', title: 'Installation', text: 'Fast, dry, on-site fitting by a 2–4 person crew.' },
  { icon: 'handover', title: 'Handover', text: 'Quality-checked, spotless and ready to use.' },
];

const stats = [
  { value: '12–35mm', label: 'Slim Board Partitions' },
  { value: '8', label: 'Cubicles Installed / Day' },
  { value: '150mm', label: 'Clearance from FFL' },
  { value: '2–4', label: 'Person Install Crew' },
];

// =========================================================
// ABOUT US PAGE
// =========================================================

const AboutUs = () => {
  return (
    <div className="about-us-container">

      {/* ============ HERO ============ */}
      <header className="about-hero">
        <div className="about-hero-glow" />
        <div className="hero-content">
          <Reveal>
            <span className="badge">
              <span className="badge-dot" />
              Serving with Excellence Since 12.05.2025
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1>About <span>VSK Enterprises</span></h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero-subtitle">
              Premium interior &amp; infrastructure solutions tailored for
              commercial, industrial and institutional projects.
            </p>
          </Reveal>
        </div>
      </header>

      {/* ============ OVERVIEW ============ */}
      <section className="about-overview">
        <div className="section-grid">
          <div className="overview-text">
            <Reveal>
              <span className="eyebrow">WHO WE ARE</span>
              <h2>Building Trust Through Quality &amp; Innovation</h2>
            </Reveal>
            <Reveal delay={100}>
              <p>
                VSK Enterprises is a trusted provider of premium interior and
                infrastructure solutions, committed to delivering high-quality
                products and professional services. With a strong focus on
                innovation, durability, and customer satisfaction, we provide
                modern solutions that meet evolving industry standards.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                We combine functionality, strength, and aesthetic design to
                create reliable and efficient solutions tailored to client
                requirements. Every project is handled with precision, quality
                assurance, and meticulous attention to detail.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                Professionalism, timely execution, and dependable customer
                support are at the core of our business — we believe in
                building long-term relationships through trust, transparency,
                and consistent service excellence.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150} className="products-card">
            <h3>Our Expertise</h3>
            <ul>
              {products.map((item) => (
                <li key={item}>
                  <span className="check-icon">{icons.check}</span> {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ============ IMAGE SHOWCASE ============ */}
      <section className="about-gallery">
        <Reveal className="gallery-frame gallery-frame-lg">
          <img src={heroImg} alt="VSK cubicle installation" />
          <span className="gallery-caption">
            <strong>Cubicle Installation</strong>
            <span>Factory-made panels, fitted on site</span>
          </span>
        </Reveal>

        <Reveal delay={150} className="gallery-frame">
          <img src={glanceImg} alt="VSK finishing and detailing" />
          <span className="gallery-caption">
            <strong>Perfect Finishing</strong>
            <span>Every edge checked before handover</span>
          </span>
        </Reveal>
      </section>

      {/* ============ ADVANTAGES ============ */}
      <section className="advantages-section">
        <Reveal className="section-title">
          <span className="eyebrow">ADVANTAGES</span>
          <h2>Why Choose Our Solutions?</h2>
          <p>Key advantages engineered into every interior installation</p>
        </Reveal>

        <div className="advantages-grid">
          {advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 70} className="advantage-card">
              <div className="card-icon">{icons[adv.icon]}</div>
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="additional-features">
          <div className="feature-item">
            <span className="feature-icon">{icons.wind}</span>
            <strong>Optimal Ventilation</strong>
            <span>Proper air circulation designed without compromising privacy.</span>
          </div>
          <div className="feature-divider" />
          <div className="feature-item">
            <span className="feature-icon">{icons.palette}</span>
            <strong>Aesthetic Variety</strong>
            <span>Available in a vibrant range of colours, textures, and modern designs.</span>
          </div>
        </Reveal>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="stats-strip">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </Reveal>
        ))}
      </section>

      {/* ============ PROCESS ============ */}
      <section className="process-section">
        <Reveal className="section-title">
          <span className="eyebrow">HOW WE WORK</span>
          <h2>From Consultation to Handover</h2>
        </Reveal>

        <div className="process-grid">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="process-card">
              <span className="process-number">0{i + 1}</span>
              <span className="process-icon">{icons[step.icon]}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ VISION / CTA ============ */}
      <section className="about-vision">
        <div className="vision-glow" />
        <Reveal>
          <h2>Our Commitment to Excellence</h2>
        </Reveal>
        <Reveal delay={100}>
          <p>
            Driven by a vision of growth and excellence, VSK Enterprises
            remains dedicated to quality craftsmanship, innovative solutions,
            and customer-focused service — establishing ourselves as your
            most reliable partner in the interior and infrastructure industry.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a href="#contact" className="vision-button">
            <span>GET IN TOUCH</span>
            <span className="vision-arrow">→</span>
          </a>
        </Reveal>
      </section>

    </div>
  );
};

export default AboutUs;