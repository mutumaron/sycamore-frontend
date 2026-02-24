import React from "react";

const Features = () => {
  return (
    <div className="md:flex justify-between grid grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">2</h1>
        <p className="text-muted-foreground">Active Riders</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">0</h1>
        <p className="text-muted-foreground">Repairs Completed</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">24hrs</h1>
        <p className="text-muted-foreground">Avg. Repair Time</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">150+</h1>
        <p className="text-muted-foreground">Certified Mechanics</p>
      </div>
    </div>
  );
};

export default Features;
