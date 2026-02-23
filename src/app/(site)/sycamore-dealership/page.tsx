import DealershipCard from "@/components/Dealership/DealershipCard";
import DealershipSection from "@/components/Dealership/DealershipSection";
import Features from "@/components/Dealership/Features";
import Hero from "@/components/Dealership/Hero";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import React from "react";

const DataPage = () => {
  return (
    <div className="space-y-16 lg:px-36 px-8">
      <Hero />
      <section className="flex flex-col gap-4 lg:w-3/4 items-center mx-auto">
        <h1 className="lg:text-6xl text-center font-bold text-lg ">
          Don't Just Sell a Bike.
          <span className="text-primary"> Sell a Guarantee.</span>
        </h1>
        <p className="text-center text-muted-foreground">
          In a crowded market, how do you stand out? By bundling Sycamore Shield
          with your sales, you offer the only electric motorcycle in Kenya that
          comes with "0% Maintenance Anxiety." It's not just a bike; it's a
          promise of reliability and peace of mind that your customers won't
          find anywhere else.
        </p>

        <Button className="md:mt-10" size={"lg"}>
          Apply Now - For Free ! <ArrowRight />
        </Button>
      </section>
      <Features />
      <Separator />
      <DealershipSection />
      <DealershipCard />
    </div>
  );
};

export default DataPage;
