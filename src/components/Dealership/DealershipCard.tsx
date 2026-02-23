import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const DealershipCard = () => {
  return (
    <Card className="flex flex-col gap-5 items-center bg-[#1e7344] p-12  text-white  ">
      <CardHeader className="w-full text-center">
        <CardTitle className="text-4xl font-bold">Move More Units</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg text-wrap  text-emerald-100/80">
          Offload the headache of after-sales service to us, while you focus on
          growing your dealership.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button size={"lg"}>
          Apply as A Dealer Partner <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DealershipCard;
