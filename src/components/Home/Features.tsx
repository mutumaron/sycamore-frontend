import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Bike, Wrench, Cpu, Zap, ShieldCheck, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Technical Servicing",
    description: "Sycamore Care",
    icon: <Wrench className="text-primary" />,
    content:
      "Our core mission is keeping your fleet in motion. We provide expert maintenance for e-bikes and electric motorcycles, specializing in mechanical integrity and high-performance tuning. From routine check-ups to complex hardware repairs, we ensure every ride is safe and reliable.",
  },
  {
    title: "Battery & Power Systems",
    description: "Sycamore Power",
    icon: <Zap className="text-primary" />,
    content:
      "Leveraging deep expertise in power systems, we offer specialized battery diagnostics, health monitoring, and cell balancing. We optimize your e-bike’s energy storage and charging efficiency, ensuring maximum range and long-term battery lifecycle management.",
  },
  {
    title: "Smart Diagnostics",
    description: "Sycamore Data",
    icon: <Cpu className="text-primary" />,
    content:
      "We move beyond basic repairs using IoT-driven diagnostics. By analyzing real-time data from vehicle controllers and BMS, we identify potential failures before they happen, offering predictive maintenance that saves time and reduces costs for riders and fleet owners.",
  },
  {
    title: "Reliability Assurance",
    description: "Sycamore Support",
    icon: <ShieldCheck className="text-primary" />,
    content:
      "Transitioning to electric shouldn't be risky. We provide comprehensive support frameworks and maintenance contracts that guarantee uptime. Our service ensures that your transition to sustainable mobility is backed by professional engineering support at every kilometer.",
  },
];

const Features = () => {
  return (
    <section className="flex flex-col gap-10 lg:py-20">
      <h1 className="font-bold text-2xl tracking-tight">
        OUR SERVICE ECOSYSTEM
      </h1>
      <div className="grid gap-5 lg:grid-cols-2">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {feature.icon}
                <span className="text-lg">{feature.title}</span>
              </CardTitle>
              <CardDescription className="font-semibold text-primary/80">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {feature.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
