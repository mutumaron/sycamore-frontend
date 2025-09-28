import React from "react";
import ProcessUI from "./ProcessUI";
import { ownershipProcess } from "@/data/data";
import Image from "next/image";

const OwnershipTab = () => {
  return (
    <div className="pt-5 flex flex-col gap-5  md:flex-row items-center justify-between">
      <Image src={"/images/bike-1.svg"} alt="bike-1" width={400} height={400} />
      <ProcessUI process={ownershipProcess} />
    </div>
  );
};

export default OwnershipTab;
