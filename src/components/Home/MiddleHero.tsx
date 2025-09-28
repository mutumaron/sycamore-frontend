import React from "react";
import Image from "next/image";

const MiddleHero = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:pt-20 px-12 lg:px-36">
      <div className="flex flex-col gap-5 flex-1">
        <h3 className="font-bold text-xl lg:w-3/4">
          <span className="text-primary">OUR MISSION: </span>
          DRIVING SUSTAINABLE MOBILITY FORWARD
        </h3>
        <p>
          At Sycamore, our mission is to accelerate the adoption of clean and
          innovative mobility solutions that empower individuals, businesses,
          and communities. We believe that the future of transportation must be
          sustainable, affordable, and accessible to all.
        </p>
        <p>
          Through Sycamore Ride, we deliver efficient electric bikes designed
          for everyday use; with Sycamore Power, we build the clean energy
          infrastructure that fuels them. Our ecosystem is supported by Sycamore
          Data, where AI-driven insights optimize operations, and Sycamore
          Finance, which ensures that sustainable mobility is within everyone’s
          reach.
        </p>
        <p>
          We combine innovation, technology, and financial accessibility to
          create a holistic solution for the mobility challenges of today and
          tomorrow. By rethinking how we move, power, and finance
          transportation, Sycamore is committed to reducing emissions and
          shaping a greener future.
        </p>
        <p>
          Together, we are not just building vehicles and infrastructure—we are
          building a movement towards smarter, cleaner, and more inclusive
          mobility.
        </p>
      </div>
      <div className="flex-1 flex justify-end bg-white">
        <Image
          src={"/images/motor-rider.svg"}
          alt="Sycamore Rider"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
};

export default MiddleHero;
