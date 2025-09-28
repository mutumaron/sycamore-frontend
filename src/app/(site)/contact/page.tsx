import { ContactForm } from "@/components/Contact/ContactForm";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div className="px-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:px-36">
      <div className="flex flex-col gap-7 flex-1">
        <h1 className="text-5xl font-bold">
          Schedule a time with the Sycamore team to:{" "}
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <div className="bg-primary rounded-full p-1">
              <Check size={15} color="white" />
            </div>
            <p className="text-sm text-muted-foreground">
              Get a live walkthrough of the Sycamore Platform
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-primary rounded-full p-1">
              <Check size={15} color="white" />
            </div>
            <p className="text-sm text-muted-foreground">
              Get a live walkthrough of the Sycamore Platform
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-primary rounded-full p-1">
              <Check size={15} color="white" />
            </div>
            <p className="text-sm text-muted-foreground">
              Get a live walkthrough of the Onyx-Homes platform
            </p>
          </div>
        </div>

        <h1 className="text-muted-foreground">
          Looking for support? Connect with our{" "}
          <span className="text-primary underline cursor-pointer">
            Support team
          </span>
        </h1>
      </div>
      <Card className="p-5">
        <ContactForm />
      </Card>
    </div>
  );
};

export default ContactPage;
