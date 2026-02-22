import React from "react";
import Image from "next/image";

const MiddleHero = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:pt-20">
      <div className="flex flex-col gap-5 flex-1">
        <h3 className="font-bold text-xl lg:w-3/4">
          <span className="text-primary">OUR MISSION: </span>
          POWERING RELIABILITY IN EVERY RIDE
        </h3>
        <p>
          At Sycamore Dynamics, our mission is to ensure the longevity and
          efficiency of the electric mobility revolution. We believe that for
          sustainable transportation to succeed, it must be supported by
          world-class maintenance and technical expertise that keeps every
          e-bike on the road.
        </p>

        <p>
          Through specialized technical servicing, we provide the backbone for
          electric fleets and individual riders alike. By integrating
          professional diagnostics with our deep understanding of power systems,
          we eliminate downtime and ensure that electric motorcycles and bikes
          remain a dependable, daily reality for our communities.
        </p>

        <p>
          We combine advanced engineering with a commitment to technical
          excellence to solve the unique maintenance challenges of modern
          e-mobility. By optimizing battery health, drivetrain performance, and
          charging infrastructure, Sycamore is dedicated to reducing waste and
          extending the lifecycle of green transportation.
        </p>

        <p>
          Together, we are not just fixing hardware—we are building the trust
          and infrastructure necessary to keep the movement toward smarter,
          cleaner, and more inclusive mobility moving forward.
        </p>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          src={"/images/bike-3.svg"}
          alt="Sycamore Rider"
          height={500}
          width={500}
        />
      </div>
    </section>
  );
};

export default MiddleHero;
