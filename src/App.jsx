
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Hero1 from "./sections/Hero/Hero1";
import Hero2 from "./sections/Hero/Hero2";
import Hero3 from "./sections/Hero/Hero3";
import Hero4 from "./sections/Hero/Hero4";
import Hero5 from "./sections/Hero/Hero5";
import Hero6 from "./sections/Hero/Hero6";
import Hero7 from "./sections/Hero/Hero7";

import Footer from "./components/Footer";
import About from "./sections/About/AboutUs";
import OurClients from "./sections/Clients/OurClients";
import ContactUs from "./sections/ContactUs/ContactUs";
import Gallery from "./sections/Gallery/Gallery";
import Cubicles from "./sections/Cubicles/Cubicles";

import ScrollTop from "./components/ScrollTop";
import Whatsappbutton from "./components/Whatsappbutton";

// HOME PAGE
function Home() {
  return (
    <>
      <Helmet>
        <title>
          VSK Enterprises | Restroom Cubicles & Modular Solutions
        </title>

        <meta
          name="description"
          content="Explore VSK Enterprises for restroom cubicles, modular furniture, interior solutions and exterior cladding for commercial spaces in Chennai and across India."
        />

        <link
          rel="canonical"
          href="https://www.vskenterprises.in/"
        />
      </Helmet>

      <main className="hero-stage">
        <div className="hero-stack">
          <Hero />
          <Hero1 />
        </div>
      </main>

      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
    </>
  );
}

// ABOUT PAGE
function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | VSK Enterprises</title>

        <meta
          name="description"
          content="Learn about VSK Enterprises, our expertise, quality standards and solutions for restroom cubicles, modular furniture and commercial interiors."
        />

        <link
          rel="canonical"
          href="https://www.vskenterprises.in/about"
        />
      </Helmet>

      <About />
    </>
  );
}

// RESTROOM CUBICLES PAGE
function CubiclesPage() {
  return (
    <>
      <Helmet>
        <title>Restroom Cubicles | VSK Enterprises</title>

        <meta
          name="description"
          content="Discover restroom cubicle solutions from VSK Enterprises, including SS pipe, nylon, anodized and compact laminate partition systems."
        />

        <link
          rel="canonical"
          href="https://www.vskenterprises.in/restroom-cubicles"
        />
      </Helmet>

      <Cubicles />
    </>
  );
}

// CLIENTS PAGE
function ClientsPage() {
  return (
    <>
      <Helmet>
        <title>Our Clients & Projects | VSK Enterprises</title>

        <meta
          name="description"
          content="Explore VSK Enterprises' clients and project experience across commercial buildings, offices, educational institutions, hospitals and other facilities."
        />

        <link
          rel="canonical"
          href="https://www.vskenterprises.in/our-clients"
        />
      </Helmet>

      <OurClients />
    </>
  );
}

// GALLERY PAGE
function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Project Gallery | VSK Enterprises</title>

        <meta
          name="description"
          content="View VSK Enterprises' restroom cubicle installations, modular solutions and commercial interior project gallery."
        />

        <link
          rel="canonical"
          href="https://www.vskenterprises.in/gallery"
        />
      </Helmet>

      <Gallery />
    </>
  );
}

// CONTACT PAGE
function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact VSK Enterprises | Chennai</title>

        <meta
          name="description"
          content="Contact VSK Enterprises for restroom cubicles, modular furniture, interior solutions and exterior cladding. Discuss your project with our team."
        />

        <link
          rel="canonical"
          href="https://www.vskenterprises.in/contact-us"
        />
      </Helmet>

      <ContactUs />
    </>
  );
}

// MAIN APP
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <ScrollTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/restroom-cubicles"
          element={<CubiclesPage />}
        />
        <Route
          path="/our-clients"
          element={<ClientsPage />}
        />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>

      <Whatsappbutton />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
