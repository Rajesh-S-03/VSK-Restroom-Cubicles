import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Hero1 from "./sections/Hero/Hero1";
import Hero2 from "./sections/Hero/Hero2";
import Hero3 from "./sections/Hero/Hero3";
import Hero4 from "./sections/Hero/Hero4";
import Hero5 from "./sections/Hero/Hero5";
import Hero6 from "./sections/Hero/Hero6";
import Footer from "./components/Footer";
import About from "./sections/About/AboutUs";
import RestroomCubicles from "./sections/Cubicles/RestroomCubicles";
import OurClients from "./sections/Clients/OurClients";
import ContactUs from "./sections/ContactUs/ContactUs";

function Home() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restroom-cubicles" element={<RestroomCubicles />} />  
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;