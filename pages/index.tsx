import React from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BodySection from "@/components/BodySection";

const IndexPage: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <BodySection/>
      <Footer/>
    </div>
  );
};

export default IndexPage;
