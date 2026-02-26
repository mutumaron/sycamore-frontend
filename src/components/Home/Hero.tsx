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
          title="E-Bike Maintenance Network"
          color="text-primary"
        />
        <div className="mt-6 flex flex-col items-center gap-5">
          <h1 className="font-bold text-3xl text-center max-w-3xl">
            Keep Yur E-Bike <span className="text-primary">Running</span>, For
            Just <span className="text-primary">Kes 100/Day.</span> Grow
            Electric With Sycamore Dynamics.
          </h1>
          <p className="text-center max-w-xl text-lg text-muted-foreground ">
            Sycamore dynamics offers unlimited repairs through our trusted
            network of certified mechanics. No surprises, no hidden fees.Just
            ride
          </p>
          <div className="space-x-5">
            <Link href={"/sign-up?role=rider"}>
              <Button className="rounded-md mt-4 cursor-pointer">
                Start Riding Worry-Free
              </Button>
            </Link>
            <Link href={"/sign-up?role=mechanic"}>
              <Button
                className="rounded-md mt-4 cursor-pointer hover:text-primary"
                variant={"outline"}
              >
                Join as A Mechanic
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 justify-between w-full">
          <Card>
            <CardContent>
              <Zap className="text-primary" />
              <p className="mt-2 text-muted-foreground">Instant Service</p>
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

              <p className="mt-2 text-muted-foreground">Profesional Practice</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
