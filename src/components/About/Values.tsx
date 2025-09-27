import { ValuesData } from "@/data/data";
import React from "react";
import SingleValue from "./SingleValue";

const Values = () => {
  return (
    <div className="flex flex-col gap-10  px-5 py-5 lg:py-12 lg:px-36 lg:grid lg:grid-cols-3 lg:gap-12">
      <h1 className="text-4xl font-bold">
        Our <span className="text-primary">Values</span>
      </h1>
      {ValuesData.map((valData) => (
        <div key={valData.id}>
          <SingleValue value={valData} />
        </div>
      ))}
    </div>
  );
};

export default Values;
