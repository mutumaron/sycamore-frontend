import React from "react";

const Features = () => {
  return (
    <div className="md:flex justify-between  grid grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">2,500+</h1>
        <p className="text-muted-foreground">Riders To Serve</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">150+</h1>
        <p className="text-muted-foreground">Active Mechanics</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">KES 45K</h1>
        <p className="text-muted-foreground">Avg. Monthly Earnings</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">KES 0</h1>
        <p className="text-muted-foreground">Joining Fee</p>
      </div>
    </div>
  );
};

export default Features;
