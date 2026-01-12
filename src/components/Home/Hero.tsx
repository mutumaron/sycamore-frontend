import Image from "next/image";
import React from "react";
import OperationCard from "../layout/OperationCard";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { BrainCircuit, GlobeLock, Sprout, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex justify-center w-full">
      <div className="flex flex-col items-center gap-5">
        <OperationCard
          title="Start Your EV journey with Us"
          color="text-primary"
        />
        <div className="mt-6 flex flex-col items-center gap-5">
          <h1 className="font-bold text-3xl text-center max-w-3xl">
            The Future of <span className="text-primary">Mobility</span>, Built
            on <span className="text-primary">OwnerShip</span> .Own Your Ride.
            Power Your Future.
          </h1>
          <p className="text-center max-w-xl text-lg text-muted-foreground ">
            Sycamore is building the most secure path to e-bike ownership for
            commercial riders in Nairobi. We offer premium packages for delivery
            service businesess with eliminated fuel costs that turn payments
            into guaranteed savings towards your business.
          </p>
          <Link href={"/sycamore-ride"}>
            <Button className="rounded-md mt-4 cursor-pointer">
              Get Your E-Bike Today
            </Button>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 justify-between w-full">
          <Card>
            <CardContent>
              <Zap className="text-primary" />
              <p className="mt-2 text-muted-foreground">Reliable Charging</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <GlobeLock className="text-primary" />
              <p className="mt-2 text-muted-foreground">Secure Payment</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Sprout className="text-primary" />

              <p className="mt-2 text-muted-foreground">Green Energy</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <BrainCircuit className="text-primary" />

              <p className="mt-2 text-muted-foreground">AI Powered Analysis</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
