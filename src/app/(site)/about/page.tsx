import Hero from "@/components/About/Hero";
import Team from "@/components/About/Team";
import Values from "@/components/About/Values";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us | Sycamore",
  description:
    "Learn more about Sycamore, our vision for clean mobility, and how we are transforming the future of transport in Africa.",
};

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
