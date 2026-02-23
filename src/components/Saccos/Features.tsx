import React from "react";

const Features = () => {
  return (
    <div className="md:flex justify-around  grid grid-cols-2 gap-8">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">25+</h1>
        <p className="text-muted-foreground">Sacco Partnerships</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">KES 2M+</h1>
        <p className="text-muted-foreground">Paid in Commissions</p>
      </div>{" "}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-primary">40%</h1>
        <p className="text-muted-foreground">Default Reduction</p>
      </div>{" "}
    </div>
  );
};

export default Features;
