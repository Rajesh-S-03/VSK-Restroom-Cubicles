import './Hero3.css';
import bgImg from '../../assets/heroimg.png';

// =========================================================
// ICONS (small, drawn with strokes)
// =========================================================

const icons = {
  vision: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  purpose: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  ),
  mission: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21V4" />
      <path d="M5 4h12l-2.5 4L17 12H5" />
    </svg>
  ),
};

// =========================================================
// CARDS
// =========================================================

const cards = [
  {
    key: 'vision',
    title: 'Vision',
    text: 'VSK Enterprises is founded on simple though lofty ideals in the relentless pursuit of excellence. An unwavering commitment to integrity; a strong belief in delivering value; and a consistent delivery in quality, with a keen eye for the craft and craftsmanship.',
  },
  {
    key: 'purpose',
    title: 'Purpose',
    text: 'We exist to consistently, credibly, and continually deliver the experience of excellence. Every activity in our process driven approach is to deliver excellence; in every aspect of quality; design; functionality; durability; aesthetics; product mix, craftsmanship; installation; and every other attribute that gives each customer the experience of excellence.',
  },
  {
    key: 'mission',
    title: 'Mission',
    text: 'With our roots in executing projects, our DNA is a mixture of projects and products. We have a practical & realistic approach to every assignment. We are not easily distracted, while others make design choices that render the product to one end of the spectrum or the other on either the cost, design, creativity, or quality, we focus on delivering value. It is our hallmark.',
  },
];

// =========================================================
// HERO3
// =========================================================

const Hero3 = () => {
  // soft spotlight follows the cursor
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div className="hero3-stage">
      <div className="hero3-sticky">

        {/* BACKGROUND */}
        <div
          className="hero3-bg-img"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="hero3-bg-wash" />
        <div className="hero3-blob blob-a" />
        <div className="hero3-blob blob-b" />
        <div className="hero3-blob blob-c" />
        <div className="hero3-grid" />

        <div className="hero3-inner">

          {/* HEADER */}
          <div className="hero3-head">
            <div className="hero3-label">OUR FOUNDATION</div>

            <h2 className="hero3-title">
              What Drives <span>VSK Forward</span>
            </h2>
          </div>

          {/* CARDS */}
          <div className="hero3-cards">
            {cards.map((c) => (
              <div key={c.key} className="hero3-card-wrap">
                <article className="hero3-card" onMouseMove={handleMove}>
                  <span className="card-corner card-corner-tl" />
                  <span className="card-corner card-corner-br" />

                  <div className="card-head">
                    <span className="card-icon">{icons[c.key]}</span>
                    <h3 className="card-title">{c.title}</h3>
                  </div>

                  <div className="card-divider" />

                  <p className="card-text">{c.text}</p>
                </article>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero3;