import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Banknote,
  Users,
  GraduationCap,
  Check,
  ArrowRight,
  TrendingUp,
  ChartColumn,
  Bike,
  Wrench,
  CircleStar,
  Rocket,
  CircleCheckBig,
} from "lucide-react";
import Link from "next/link";

const TrainingSection = () => {
  const benefits = [
    {
      icon: <GraduationCap className="text-primary size-5" />,
      title: "Certified Training",
      description:
        "Get professionally certified in e-bike repair and maintenance.",
    },
    {
      icon: <Wrench className="text-primary size-5" />,
      title: "Hands-On Experience",
      description: "Learn by doing with real e-bikes and professional tools.",
    },
    {
      icon: <CircleStar className="text-primary size-5" />,
      title: "Industry Recognition",
      description: "Earn credentials recognized by dealerships across Kenya.",
    },
    {
      icon: <Rocket className="text-primary size-5" />,
      title: "Job Placement",
      description:
        "Graduate straight into our mechanic network and start earning.",
    },
  ];

  return (
    <section className="">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-8">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">
              For Students
            </h4>
            <h2 className="text-4xl font-bold lg:text-5xl font-extraboldleading-tight">
              Become a Certified <br />
              <span className="text-primary">E-Bike Mechanic</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Launch your career in the growing electric mobility industry. Our
              training program equips you with the skills to repair and maintain
              e-bikes, with guaranteed job placement upon graduation.
            </p>
          </div>

          <div className="space-y-6 grid grid-cols-1 md:grid-cols-2">
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

          <Link href={"/sign-up?role=career"}>
            <Button size={"lg"}>
              Apply Now - For Free ! <ArrowRight />
            </Button>
          </Link>
        </div>

        {/* Right Side: Stats Card */}
        <div className="   grid grid-cols-1 md:grid-cols-2 gap-5 p-2 ">
          <Card className=" bg-primary text-white">
            <CardHeader>
              <h2>Week 1</h2>
              <CardTitle className="font-bold text-xl">
                E-Bike Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex gap-2 text-emerald-100/80">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Electric motor basics
              </p>
              <p className="flex gap-2 text-emerald-100/80">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Battery systems
              </p>{" "}
              <p className="flex gap-2 text-emerald-100/80">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Controller diagnostics
              </p>
            </CardContent>
          </Card>
          <Card className="bg-transparent">
            <CardHeader>
              <h2 className="text-primary">Week 2</h2>
              <CardTitle className="font-bold text-xl">
                Mechanical Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" flex gap-2 text-muted-foreground">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Braking systems
              </p>
              <p className="flex gap-2 text-muted-foreground">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Drivetrain maintenance
              </p>{" "}
              <p className="flex gap-2 text-muted-foreground">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Wheel and tire service
              </p>
            </CardContent>
          </Card>{" "}
          <Card className="bg-transparent">
            <CardHeader>
              <h2 className="text-primary">Week 3</h2>
              <CardTitle className="font-bold text-xl">
                Electrical & Diagnostics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex gap-2 text-muted-foreground">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Wiring and connections
              </p>
              <p className="flex gap-2 text-muted-foreground">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Error code reading
              </p>{" "}
              <p className="flex gap-2 text-muted-foreground">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Troubleshooting techniques
              </p>
            </CardContent>
          </Card>{" "}
          <Card className="bg-primary text-white">
            <CardHeader>
              <h2>Week 4</h2>
              <CardTitle className="font-bold text-xl">
                Professional Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex gap-2 text-emerald-100/80">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Customer service
              </p>
              <p className="flex gap-2 text-emerald-100/80">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Business operations
              </p>{" "}
              <p className="flex gap-2 text-emerald-100/80">
                <span>
                  <CircleCheckBig />
                </span>{" "}
                Certification exam
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
