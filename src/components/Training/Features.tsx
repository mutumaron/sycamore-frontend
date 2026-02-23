import React from "react";

const Features = () => {
  return (
    <div className="md:flex justify-around  grid grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">4 Weeks</h1>
        <p className="text-muted-foreground">Program Duration</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">Flexible</h1>
        <p className="text-muted-foreground">Schedule Options</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">100%</h1>
        <p className="text-muted-foreground">Job Placement Guarantee</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">Certified</h1>
        <p className="text-muted-foreground">Industry Recognition</p>
      </div>{" "}
    </div>
  );
};

export default Features;
