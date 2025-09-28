import React from "react";
import ProcessUI from "./ProcessUI";
import { individualRentalProcess } from "@/data/data";
import Image from "next/image";

const IndividualTab = () => {
  return (
    <div className="pt-5 flex flex-col gap-5  md:flex-row items-center justify-between">
      <Image src={"/images/bike-3.svg"} alt="bike-1" width={400} height={400} />

      <ProcessUI process={individualRentalProcess} />
    </div>
  );
};

export default IndividualTab;
