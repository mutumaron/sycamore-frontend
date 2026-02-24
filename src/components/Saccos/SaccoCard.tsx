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
import Link from "next/link";

const SaccoCard = () => {
  return (
    <Card className="flex flex-col gap-5 items-center bg-primary p-12  text-white  ">
      <CardHeader className="w-full text-center">
        <CardTitle className="text-4xl font-bold">
          Protect Your Portfolio
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg text-wrap  text-emerald-100/80">
          We turn your high-risk borrowers into consistent payers. Join our
          growing network of partner saccos.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={"/sign-up?role=sacco"}>
          <Button
            size={"lg"}
            className=" text-white underline cursor-pointer font-semibold"
          >
            Partner With Us <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SaccoCard;
