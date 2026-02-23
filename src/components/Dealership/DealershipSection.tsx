import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Banknote,
  Users,
  GraduationCap,
  Check,
  ArrowRight,
  TrendingUp,
  ChartColumn,
  Bike,
} from "lucide-react";

const DealershipSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="text-primary size-5" />,
      title: "Higher Residual Value",
      description:
        "A Sycamore-maintained bike is worth 30% more at resale than a neglected one.",
    },
    {
      icon: <Users className="text-primary size-5" />,
      title: "Customer Sticky-ness",
      description: "Keep the rider in your ecosystem for the life of the loan.",
    },
    {
      icon: <ChartColumn className="text-primary size-5" />,
      title: "Portfolio Health",
      description:
        "Reduce the 'lemons' in your financed fleet. Fewer breakdowns, fewer defaults.",
    },
  ];

  return (
    <section className="">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              For Dealerships
            </h4>
            <h2 className="text-4xl font-bold lg:text-5xl font-extraboldleading-tight">
              Don't Just Sell a Bike. <br />
              <span className="text-primary">Sell a Guarantee.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              In a crowded market, how do you stand out? By bundling Sycamore
              Shield with your sales, you offer the only electric motorcycle in
              Kenya that comes with "0% Maintenance Anxiety." Offload the
              headache of after-sales service to us, while you focus on moving
              more units.
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
            Partner as A Dealer <ArrowRight />
          </Button>
        </div>

        {/* Right Side: Stats Card */}
        <Card className="bg-[#1e7344] border-none rounded-[2.5rem] p-10 lg:p-16 text-white flex flex-col items-center justify-center shadow-2xl">
          <div className="text-center space-y-2 flex flex-col items-center">
            <Bike className="text-8xl font-black text-center" size={50} />

            <h3 className="text-2xl font-bold">0% Maintenance Anxiety</h3>
            <p className="text-emerald-100/80">
              The only electric motorcycle in Kenya that comes with a guarantee
            </p>
          </div>

          <div className="w-full h-px bg-white/20 my-10" />

          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="text-center">
              <span className="text-3xl lg:text-4xl font-bold">30%</span>
              <p className="text-sm text-emerald-100/80 uppercase tracking-tighter mt-1">
                Higher Resale Value.
              </p>
            </div>
            <div className="text-center">
              <span className="text-3xl lg:text-4xl font-bold">12+</span>
              <p className="text-sm text-emerald-100/80 uppercase tracking-tighter mt-1">
                Dealer Partnerships Nationwide.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DealershipSection;
