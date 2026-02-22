import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const MechanicRequirements = () => {
  const requirements = [
    "Basic mechanical skills or willingness to learn",
    "Valid National ID",
    "Smartphone with internet access",
    "Own basic tools (we help you upgrade)",
    "Commitment to quality service",
    "Pass our certification training",
  ];

  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold  mb-4">
          What You Need to Join
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Simple requirements to become a certified Sycamore mechanic
        </p>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {requirements.map((req, index) => (
            <Card
              key={index}
              className="flex items-center gap-4 p-6 border-none shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="text-primary size-6" />
              </div>
              <p className="text-left font-medium  leading-tight">{req}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanicRequirements;
