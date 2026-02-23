import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <div className="py-12 ">
      <h1 className="py-10 font-bold text-primary text-2xl lg:text-center lg:text-3xl">
        Our Team
      </h1>
      <div className="grid gap-10 lg:grid-cols-2">
        <Card className="border-none shadow-none flex flex-col p-0 pb-5">
          <Image
            src={"/images/lewis.jpeg"}
            alt="Leaders"
            width={400}
            height={400}
            className="w-full rounded-md"
          />
          <div className="flex items-center gap-10 pt-4 justify-between px-5">
            <div>
              <h1 className="font-bold text-lg">Lewis Minda</h1>
              <p className="text-sm text-gray-500">Founder & CEO</p>
            </div>
            <Linkedin size={30} />
          </div>
        </Card>
        <Card className="border-none shadow-none flex flex-col p-0 pb-5">
          <Image
            src={"/images/ronny-1.jpg"}
            alt="Leaders"
            width={400}
            height={400}
            className=" rounded-md  w-full"
          />
          <div className="flex items-center gap-10 pt-4 justify-between px-5">
            <div>
              <h1 className="font-bold text-lg">Ronny Mutembei</h1>
              <p className="text-sm text-gray-500">
                Co-Founder & CTO - Technical
              </p>
            </div>
            <Linkedin size={30} />
          </div>
        </Card>
        <Card className="border-none shadow-none flex flex-col p-0 pb-5">
          <Image
            src={"/images/person.svg"}
            alt="Leaders"
            width={100}
            height={100}
            className="w-full rounded-md"
          />
          <div className="flex items-center gap-10 pt-4 justify-between px-5">
            <div>
              <h1 className="font-bold text-lg">Steve Odeyo</h1>
              <p className="text-sm text-gray-500">
                Co-Founder & CFO - Finance
              </p>
            </div>
            <Linkedin size={30} />
          </div>
        </Card>
        <Card className="border-none shadow-none flex flex-col p-0 pb-5">
          <Image
            src={"/images/person.svg"}
            alt="Leaders"
            width={100}
            height={100}
            className="w-full rounded-md"
          />
          <div className="flex items-center gap-10 pt-4 justify-between px-5 ">
            <div>
              <h1 className="font-bold text-lg">Sylvia Monare</h1>
              <p className="text-sm text-gray-500">
                Co-Founder & COO - Operations
              </p>
            </div>
            <Linkedin size={30} />
          </div>
        </Card>
        <Card className="border-none shadow-none flex flex-col p-0 pb-5">
          <Image
            src={"/images/person.svg"}
            alt="Leaders"
            width={100}
            height={100}
            className="w-full rounded-md"
          />
          <div className="flex items-center gap-10 pt-4 justify-between px-5 ">
            <div>
              <h1 className="font-bold text-lg">Gregory Ochieng</h1>
              <p className="text-sm text-gray-500">Operations</p>
            </div>
            <Linkedin size={30} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;
