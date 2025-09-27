import Hero from "@/components/About/Hero";
import Team from "@/components/About/Team";
import Values from "@/components/About/Values";
import React from "react";

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <Values />
      <Team />
    </div>
  );
};

export default AboutPage;
