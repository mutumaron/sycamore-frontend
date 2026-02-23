import React from "react";

const Features = () => {
  return (
    <div className="md:flex justify-around  grid grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">12+</h1>
        <p className="text-muted-foreground">Dealer Partnerships</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">30%</h1>
        <p className="text-muted-foreground">Resale Value</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">0%</h1>
        <p className="text-muted-foreground">Maintenance Anxiety</p>
      </div>{" "}
    </div>
  );
};

export default Features;
