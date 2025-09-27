import React from "react";
import Image from "next/image";

const MiddleHero = () => {
  return (
    <section className="flex flex-col gap-10 lg:flex-row lg:pt-20 px-36">
      <div className="flex flex-col gap-5 flex-1">
        <h3 className="font-bold text-xl lg:w-3/4">
          OUR MISSION:TO BOOST YOUR ONLINE PRESENCE
        </h3>
        <p>
          Our team of skilled professionals is dedicated to transforming your
          vision into a dynamic online presence, whether it’s through an
          engaging website or a user-friendly mobile app. We believe that
          technology should work seamlessly to enhance your business, and we’re
          here to make that happen.
        </p>
        <p>
          Our approach to web development combines creativity with technical
          expertise, ensuring that every website we create is not only visually
          stunning but also highly functional. From responsive designs to
          interactive features, we build websites that captivate your audience
          and drive results.
        </p>
        <p>
          With a track record of successful projects and satisfied clients, we
          are confident in our ability to deliver results that exceed your
          expectations. Whether you need a robust website, a cutting-edge mobile
          app,
        </p>
        <p>
          In the mobile arena, we craft intuitive apps that offer exceptional
          user experiences across various devices and platforms.{" "}
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
