import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MovingIcon from "../components/MovingIcon";
import ServicesSection from "../components/ServicesSection";
import AIPlatformSection from "../components/AIPlatformSection";
import TechnologyPlatforms from "../components/TechnologyPlatforms";
import PowerBIDemo from "../components/PowerBIDemo";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
const Bright = () => {
  return (
    <main className="min-h-screen bg-[#0a0826]">
      <Header />
      <HeroSection />
      <MovingIcon />
      <ServicesSection />
      <AIPlatformSection />
      <TechnologyPlatforms />
      <PowerBIDemo />
      <AboutUs />
      <OurTeam />
      <Footer />
    </main>
  );
};


export default  Bright;
