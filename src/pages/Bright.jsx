import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MovingIcon from "../components/MovingIcon";
import ServicesSection from "../components/ServicesSection";
import AIPlatformSection from "../components/AIPlatformSection";
import TechnologyPlatforms from "../components/TechnologyPlatforms";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";

import { Element } from "react-scroll";

const Bright = () => {
  return (
    <main className="min-h-screen bg-[#0a0826]">
      <Header />
      <HeroSection />
      <MovingIcon />

      <Element name="services">
        <ServicesSection />
      </Element>

      <Element name="ai-platform">
        <AIPlatformSection />
      </Element>

      <Element name="platforms">
        <TechnologyPlatforms />
      </Element>

      <Element name="about">
        <AboutUs />
      </Element>

      <Element name="team">
        <OurTeam />
      </Element>

      <Footer />
    </main>
  );
};

export default Bright;
