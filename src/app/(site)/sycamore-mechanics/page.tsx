import Features from "@/components/Mechanics/Features";
import Hero from "@/components/Mechanics/Hero";
import JoinNetwork from "@/components/Mechanics/Network";
import MechanicRequirements from "@/components/Mechanics/Requirements";
import RideCard from "@/components/Ride/RideCard";
import RideTabs from "@/components/Ride/RideTabs";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
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

const MechanicsPage = () => {
  return (
    <div className="space-y-16 lg:px-36 px-8">
      <Hero />
      <section className="flex flex-col gap-4 lg:w-3/4 items-center mx-auto">
        <h1 className="lg:text-6xl text-center font-bold text-lg ">
          Join Kenya's Largest
          <span className="text-primary"> E-Bike Network</span>
        </h1>
        <p className="text-center text-muted-foreground">
          Free to join. Earn steady income. Build your reputation as a certified
          e-bike mechanic. Sycamore Mechanics is more than a gig—it's a
          community of skilled professionals powering Kenya's green
          transportation revolution.
        </p>

        <Button className="" size={"lg"}>
          Apply Now - For Free ! <ArrowRight />
        </Button>
      </section>
      <Features />
      <Card className="relative flex flex-col gap-6 py-12 overflow-hidden border-none shadow-xl min-h-[400px] justify-end bg-transparent">
        {/* The Actual Image Background */}
        <div
          className="absolute inset-0 z-0 "
          style={{
            backgroundImage: `url('/images/repair-work-DusznQ4I.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* The Gradient Overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-primary via-primary/15 to-transparent" />

        {/* Content Container (Needs z-10 to be above the divs) */}
        <div className="relative z-10 flex flex-col gap-4 px-6">
          <h1 className="md:text-3xl text-lg font-bold text-white">
            No More Haggling. Instant Pay. Every Time.
          </h1>
          <p>
            Tired of riders bargaining for hours or asking for credit? Join the
            Sycamore Certified Network. We send pre-approved jobs to your shop.
            You do the work, and our system pays your M-Pesa instantly before
            the bike even leaves your stand.
          </p>
        </div>
      </Card>
      <Separator />
      <JoinNetwork />
      <MechanicRequirements />
    </div>
  );
};

export default MechanicsPage;
