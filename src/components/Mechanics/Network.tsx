import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Banknote,
  Users,
  GraduationCap,
  Check,
  ArrowRight,
} from "lucide-react";

const JoinNetwork = () => {
  const benefits = [
    {
      icon: <Banknote className="text-primary size-5" />,
      title: "Guaranteed Payment",
      description:
        "Money hits your phone the moment the job is verified. No more haggling.",
    },
    {
      icon: <Users className="text-primary size-5" />,
      title: "Steady Traffic",
      description:
        "We direct our fleet of 2,000+ riders exclusively to your shop.",
    },
    {
      icon: <GraduationCap className="text-primary size-5" />,
      title: "Free Up-skilling",
      description:
        "Get trained on the latest Electric Vehicle (EV) technology at no cost.",
    },
  ];

  return (
    <section className="">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              For Mechanics
            </h4>
            <h2 className="text-4xl font-bold lg:text-5xl font-extraboldleading-tight">
              Join Our Network <br />
              <span className="text-primary">It's Free</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Be part of Kenya's largest e-bike mechanic network. No joining
              fees, no hidden costs. Just opportunities to grow your skills and
              income.
            </p>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h5 className="font-bold ">{benefit.title}</h5>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            size={"lg"}
            className="bg-primary hover:bg-primary/90 text-white font-semibold"
          >
            Apply to Join <ArrowRight />
          </Button>
        </div>

        {/* Right Side: Stats Card */}
        <Card className="bg-[#1e7344] border-none rounded-[2.5rem] p-10 lg:p-16 text-white flex flex-col items-center justify-center shadow-2xl">
          <div className="text-center space-y-2">
            <span className="text-8xl font-black">0</span>
            <h3 className="text-2xl font-bold">Joining Fee</h3>
            <p className="text-emerald-100/80">Start earning from day one</p>
          </div>

          <div className="w-full h-px bg-white/20 my-10" />

          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="text-center">
              <span className="text-3xl lg:text-4xl font-bold">150+</span>
              <p className="text-sm text-emerald-100/80 uppercase tracking-tighter mt-1">
                Active Mechanics
              </p>
            </div>
            <div className="text-center">
              <span className="text-3xl lg:text-4xl font-bold">KES 45K</span>
              <p className="text-sm text-emerald-100/80 uppercase tracking-tighter mt-1">
                Avg. Monthly Earnings
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default JoinNetwork;
