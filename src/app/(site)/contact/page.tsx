import { ContactForm } from "@/components/Contact/ContactForm";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Don't be shy talk to us for any Inquiries",
  description:
    "Get in touch with Sycamore for support, inquiries, or partnership opportunities.",
};

const ContactPage = () => {
  return (
    <div className="px-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:px-36">
      <div className="flex flex-col gap-7 flex-1">
        <h1 className="lg:text-5xl font-bold text-3xl ">
          Schedule a time with the Sycamore team to:{" "}
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center bg-primary rounded-full h-5 w-5 p-1">
              <Check size={20} />
            </div>
            <p className="text-sm text-muted-foreground">
              Get a live walkthrough of the Sycamore Platform
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center bg-primary rounded-full h-5 w-5 p-1">
              <Check size={20} />
            </div>
            <p className="text-sm text-muted-foreground">
              Get a live walkthrough of the Sycamore Platform
            </p>
          </div>{" "}
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center bg-primary rounded-full h-5 w-5 p-1">
              <Check size={20} />
            </div>
            <p className="text-sm text-muted-foreground">
              Get a live walkthrough of the Sycamore Platform
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
      <Card className="p-5 flex-1">
        <ContactForm />
      </Card>
    </div>
  );
};

export default ContactPage;
