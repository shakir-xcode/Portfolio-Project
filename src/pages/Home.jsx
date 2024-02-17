import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import HeroSection from "../components/hero-section/HeroSection";

export default function Home() {
  return (
    <div className="app border border-color-bg max-w-[1470px] mx-auto mb-12 relative min-h-[100svh] overflow-x-hidden ">
      <Navbar />
      <div className=" px-5 md:px-10 lg:px-16 ">
        <HeroSection />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
}
