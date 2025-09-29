import React from "react";
import OperationCard from "../layout/OperationCard";
import { Bike } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <OperationCard title="Take a Ride with us" color="text-primary" />
      <div className="mt-6 flex flex-col items-center gap-5 px-12">
        <Bike size={100} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;
