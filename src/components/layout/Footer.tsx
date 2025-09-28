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
    <footer className="lg:px-36 pt-12 px-12">
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
      <div className="flex justify-center items-center md:justify-between">
        <div className="pt-10 pb-5 grid grid-cols-2 gap-10 items-center justify-between md:flex md:flex-row md:justify-start md:gap-20">
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
        </div>
        <div className="hidden md:block">
          <Image
            src={"/images/logo-4.png"}
            height={300}
            width={300}
            alt="Sycamore.co"
            className="rounded-md"
          />
        </div>
      </div>
      <Separator />

      <p className="cursor-pointer py-4 text-center text-muted-foreground">
        &copy; 2025 Sycamore,co.{" "}
        <span className="hover:text-primary">
          <a
            href="https://onyx-devs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Powered by ONYX-DEVs
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
