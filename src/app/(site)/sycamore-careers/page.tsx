import Features from "@/components/Training/Features";
import Hero from "@/components/Training/Hero";
import TrainingSection from "@/components/Training/TrainingSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="space-y-16 lg:px-36 px-8">
      <Hero />
      <section className="flex flex-col gap-4 lg:w-3/4 items-center mx-auto">
        <h1 className="lg:text-6xl text-center font-bold text-lg ">
          Become a Certified
          <span className="text-primary"> E-Bike Mechanic</span>
        </h1>
        <p className="text-center text-muted-foreground">
          Launch your career in electric mobility. Get trained, certified, and
          placed in our network. Join the green revolution and power the future
          of transportation. Apply now to become a Sycamore Certified E-Bike
          Mechanic and drive the change towards sustainable mobility!
        </p>

        <Button className="md:mt-10" size={"lg"}>
          Apply Now - For Free ! <ArrowRight />
        </Button>
      </section>
      <Features />
      <Separator />
      <TrainingSection />
    </div>
  );
};

export default page;
