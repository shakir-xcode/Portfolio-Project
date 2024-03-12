import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import HeroSection from "../components/hero-section/HeroSection";
import { sendMessage } from "../api/webFormsApi";

export default function Home() {
  function gatherUserInfo() {
    return {
      userAgent: navigator.userAgent,
      width: window.screen.width,
      height: window.screen.height,
      platform: navigator?.userAgentData?.platform || navigator.platform,
      mobile:
        navigator?.userAgentData?.mobile ||
        window.matchMedia("(max-width: 560px)").matches,
      timestamp: new Date().toString(),
    };
  }
  useEffect(() => {
    const id = setTimeout(() => {
      sendMessage(gatherUserInfo());
    }, 10);

    return () => {
      clearTimeout(id);
    };
  }, []);

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
