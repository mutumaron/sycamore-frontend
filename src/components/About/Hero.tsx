import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col mt-7 lg:flex-row items-center justify-center">
      <div className="flex flex-col flex-1">
        <div className=" flex flex-col gap-5">
          <h1 className="text-7xl font-bold">About </h1>
          <h2 className="text-primary font-bold text-5xl">Sycamore</h2>
          <h3 className="text-2xl font-bold">
            Clean, Reliable, and Equitable Mobility.
          </h3>
          <p className="text-muted-foreground text-lg">
            To make electric mobility accessible and worry-free for every Kenyan
            rider by providing affordable, reliable maintenance through a
            trusted network of certified mechanics.
          </p>
          <p className="text-muted-foreground text-lg">
            A future where electric vehicles power Africa's roads, supported by
            a sustainable ecosystem of skilled mechanics and accessible
            maintenance infrastructure
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
