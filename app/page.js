import React from "react";
import Nav from "../components/Nav";
import HeroSection from "@/components/Hero";
import FeatureHighlights from "@/components/Highlight";
import DemoPreview from "@/components/Demo";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <FeatureHighlights />
      <DemoPreview />
      <Footer />
    </div>
  );
};

export default page;
