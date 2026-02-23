import Features from "@/components/Saccos/Features";
import Hero from "@/components/Saccos/Hero";
import SaccoCard from "@/components/Saccos/SaccoCard";
import SaccosSection from "@/components/Saccos/SaccosSection";
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
          A Broken Bike
          <span className="text-primary"> Doesn't Pay a Loan.</span>
        </h1>
        <p className="text-center text-muted-foreground">
          Your biggest cause of default isn't unwillingness to pay—it's the
          inability to earn due to mechanical downtime. Sycamore Shield protects
          your collateral by ensuring every bike in your fleet stays
          roadworthy.{" "}
        </p>

        <Button className="md:mt-10" size={"lg"}>
          Partner With Us <ArrowRight />
        </Button>
      </section>
      <Features />
      <Separator />
      <SaccosSection />
      <SaccoCard />
    </div>
  );
};

export default page;
