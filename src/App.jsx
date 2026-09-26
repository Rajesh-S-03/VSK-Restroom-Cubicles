import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Hero1 from "./sections/Hero/Hero1";
import Hero2 from "./sections/Hero/Hero2";

function App() {
  return (
    <>
      <Navbar />
      <main className="hero-stage">
        <div className="hero-stack">
          <Hero />
          <Hero1 />
        </div>
      </main>
      <Hero2 />
    </>
  );
}
export default App;
