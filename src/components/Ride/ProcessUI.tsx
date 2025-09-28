import { ArrowRight, Box } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ProcessItem {
  id: string;
  processTitle: string;
  processContent: string;
}

interface ProcessUIProps {
  process: ProcessItem[];
}

const ProcessUI = ({ process }: ProcessUIProps) => {
  return (
    <section className="flex flex-col">
      {process.map((item) => (
        <div className="flex gap-3" key={item.id}>
          <div className="flex flex-col items-center">
            <Box />
            <hr className="w-0.5 h-32 bg-gray-300 my-4" />
          </div>
          <div>
            <h1 className="pb-5 font-bold text-xl">{item.processTitle}</h1>
            <p className="text-muted-foreground">{item.processContent}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3">
        <Box />
        <Link href={"/sign-up"}>
          <Button className="cursor-pointer">
            Get started <ArrowRight />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProcessUI;
