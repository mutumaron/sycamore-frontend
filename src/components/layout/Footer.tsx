"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="px-36 pt-12">
      <div className="flex flex-col gap-10 justify-between items-center pb-5 md:flex-row">
        <div className="flex flex-col gap-10 items-center md:flex-row">
          {mounted && (
            <Image
              src={
                resolvedTheme === "dark"
                  ? "/images/logo-dark.svg"
                  : "/images/logo.svg"
              }
              alt="Logo"
              width={170}
              height={170}
            />
          )}
          <div className="flex flex-wrap gap-4 md:gap-10">
            <p className="font-semibold cursor-pointer hover:underline">
              Platform
            </p>
            <p className="font-semibold cursor-pointer hover:underline">
              Solutions
            </p>
            <p className="font-semibold cursor-pointer hover:underline">
              Resources
            </p>
            <p className="font-semibold cursor-pointer hover:underline">
              Enterprise
            </p>
            <p className="font-semibold cursor-pointer hover:underline">
              Pricing
            </p>
            <p className="font-semibold cursor-pointer hover:underline">
              Contact Sales
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Twitter size={20} />
          <Linkedin size={20} />
          <Instagram size={20} />
          <Facebook size={20} />
        </div>
      </div>
      <Separator />
      <div className="pt-10 pb-5 grid grid-cols-2 gap-10 justify-between md:flex md:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-primary">Platform</h1>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Platform Overview
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Integration
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Extensions
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Connected Data
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-primary">Solutions</h1>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Product
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Marketing
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Sales
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Connected Data
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-primary">Platform</h1>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Learn
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Events
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Demos
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Webinars
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-primary">Platform</h1>

          <p className="cursor-pointer text-muted-foreground  hover:underline">
            Resources
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Partners
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Services
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Community
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-primary">Platform</h1>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Company
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            About
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Careers
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Blog
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Status
          </p>
          <p className="cursor-pointer text-muted-foreground hover:underline">
            Newsroom
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex py-4 gap-3">
        <p className="cursor-pointer text-muted-foreground hover:underline">
          &copy; 2025 Sycamore,co.
        </p>
        <p className="cursor-pointer text-muted-foreground hover:underline">
          Security
        </p>
        <p className="cursor-pointer text-muted-foreground hover:underline">
          Privacy
        </p>
        <p className="cursor-pointer text-muted-foreground hover:underline">
          Terms
        </p>
        <p className="cursor-pointer text-muted-foreground hover:underline">
          Cookie Preference
        </p>
      </div>
    </footer>
  );
};

export default Footer;
