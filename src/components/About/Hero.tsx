import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { Dot } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col px-5 lg:px-36 mt-7 lg:flex-row items-center justify-center">
      <div className="flex flex-col flex-1">
        <div className=" flex flex-col gap-5">
          <h1 className="text-7xl font-bold">About</h1>
          <h2 className="text-primary font-bold text-5xl">Sycamore</h2>
          <h3 className="text-2xl font-bold">
            Clean, Reliable, and Equitable Mobility.
          </h3>
          <p className="text-muted-foreground text-lg">
            We saw a broken system: petrol bikes are expensive, polluting, and
            offer riders no path to asset ownership, while Electric mobility is
            the solution, the initial cost is too high, and existing ownership
            paths are expensive in the long run.
          </p>
          <p className="text-muted-foreground text-lg">
            Sycamore solves the financing challenge first. We don't just rent
            bikes; , we provide a transparent, risk-free managed savings
            platform that guarantees the rider owns a valuable EV asset. We also
            allow small delivery businesess to outsource transport services
            while excluding fuel and maintenance costs from business owners.
          </p>
        </div>
      </div>
      <div className="flex">
        <Image
          src={"/images/about-hero.svg"}
          alt="About main svg"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default Hero;
