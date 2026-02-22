import Features from "@/components/Ride/Features";
import Hero from "@/components/Ride/Hero";
import RideCard from "@/components/Ride/RideCard";
import RideTabs from "@/components/Ride/RideTabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BriefcaseBusiness,
  Check,
  ExternalLink,
  Handshake,
  Link,
  UserPen,
} from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sycamore Ride | Electric Bike Ownership & Rentals",
  description:
    "Choose between bike ownership or flexible rental options with Sycamore Ride. Affordable, sustainable, and backed by clean energy.",
};

const RidePage = () => {
  return (
    <div className="space-y-16 lg:px-36 px-8">
      <Hero />
      <section className="flex flex-col gap-4 w-3/4 items-center mx-auto">
        <h1 className="md:text-6xl text-lg text-center font-bold ">
          Keep Your Cash.{" "}
          <span className="text-primary">We pay the Mechanic.</span>
        </h1>
        <p className="text-center text-muted-foreground">
          Stop letting a broken chain or a worn brake pad wipe out your week's
          earnings. For just KES 100 a day, Sycamore Shield covers your repairs,
          labor, and spare parts. No surprise bills. No begging for soft loans.
          Just ride, earn, and go home to your family with your full pocket.
        </p>
        <div className="space-x-4">
          <Button className="" size={"lg"}>
            Start your Coverage
          </Button>
          <Button size={"lg"} variant={"outline"} className="">
            See Pricing <ExternalLink />
          </Button>
        </div>
      </section>
      <Features />
      <Card className="bg-primary/75 flex flex-col items-center gap-6 py-12">
        <h1 className="text-center text-2xl font-bold text-white">
          Just KES 100 Per Day
        </h1>
        <p className="text-center text-white md:w-1/2 mx-auto">
          That's less than a cup of coffee. Join thousands of riders who ride
          worry-free knowing they're always covered.
        </p>
        <section className="flex gap-5 items-center text-sm">
          <div className="flex gap-2">
            <Check className="text-primary" />
            No Hidden Fees
          </div>
          <div className="flex gap-2 text-sm">
            <Check className="text-primary" />
            No Hidden Fees
          </div>{" "}
          <div className="flex gap-2 text-sm">
            <Check className="text-primary" />
            No Hidden Fees
          </div>
        </section>
      </Card>
      <Separator />
      <RideTabs />
    </div>
  );
};

export default RidePage;
