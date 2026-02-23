import React from "react";
import OperationCard from "../layout/OperationCard";
import { Bike, GraduationCap, Handshake, Wrench } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <OperationCard title="Build a Better Future" color="text-primary" />
      <div className="mt-6 flex flex-col items-center gap-5 px-12">
        <GraduationCap size={70} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
