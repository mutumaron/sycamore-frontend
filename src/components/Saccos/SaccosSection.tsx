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
  Clock,
  ShieldCheck,
  DollarSign,
  ClipboardCheck,
} from "lucide-react";

const SaccosSection = () => {
  const benefits = [
    {
      icon: <Clock className="text-primary size-5" />,
      title: "Zero Down-Time",
      description: "We fix the bike so the rider keeps earning—and paying you.",
    },
    {
      icon: <ShieldCheck className="text-primary size-5" />,
      title: "Asset Preservation",
      description:
        "We maintain the bike's value, protecting your resale price in case of repossession.",
    },
    {
      icon: <DollarSign className="text-primary size-5" />,
      title: "New Revenue Stream",
      description: "New Revenue Stream",
    },
  ];

  return (
    <section className="">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              For Saccos
            </h4>
            <h2 className="text-4xl font-bold lg:text-5xl font-extraboldleading-tight">
              A Broken Bike
              <br />
              <span className="text-primary">Doesn't Pay a Loan.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Your biggest cause of default isn't unwillingness to pay—it's the
              inability to earn due to mechanical downtime. Sycamore Shield
              protects your collateral by ensuring every bike in your fleet
              stays roadworthy. We turn your high-risk borrowers into consistent
              payers.
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
            <ClipboardCheck
              className="text-8xl font-black text-center"
              size={50}
            />

            <h3 className="text-2xl font-bold">Protect Your Fleet</h3>
            <p className="text-emerald-100/80">
              Every roadworthy bike is a performing loan—and a paying customer.
            </p>
          </div>

          <div className="w-full h-px bg-white/20 my-10" />

          <div className="grid grid-cols-2 gap-8 w-full">
            <div className="text-center">
              <span className="text-3xl lg:text-4xl font-bold">25+</span>
              <p className="text-sm text-emerald-100/80 uppercase tracking-tighter mt-1">
                Partner Saccos
              </p>
            </div>
            <div className="text-center">
              <span className="text-3xl lg:text-4xl font-bold">KES 2M+</span>
              <p className="text-sm text-emerald-100/80 uppercase tracking-tighter mt-1">
                Paid in Commissions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SaccosSection;
