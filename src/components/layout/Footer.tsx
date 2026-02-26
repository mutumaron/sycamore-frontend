"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";
import Link from "next/link";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="lg:px-36 md:mt-24 mt-12 px-8">
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
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7">
            <Link
              href="/"
              className="font-semibold cursor-pointer hover:underline"
            >
              Platform
            </Link>
            <Link
              href="/"
              className="font-semibold cursor-pointer hover:underline"
            >
              Solutions
            </Link>
            <Link
              href="/"
              className="font-semibold cursor-pointer hover:underline"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="font-semibold cursor-pointer hover:underline"
            >
              Contact Sales
            </Link>
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
        <div className="pt-10 pb-5 grid grid-cols-2 gap-10 items-start justify-between md:flex md:flex-row md:justify-start md:gap-20">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-primary">Platform</h1>
            <Link
              className="cursor-pointer text-muted-foreground hover:underline"
              href={"/"}
            >
              Overview
            </Link>
            <Link
              className="cursor-pointer text-muted-foreground hover:underline"
              href={"/about"}
            >
              About
            </Link>
            <Link
              className="cursor-pointer text-muted-foreground hover:underline"
              href={"/contact"}
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-primary">Solutions</h1>
            <Link
              className="cursor-pointer text-muted-foreground hover:underline"
              href={"/sycamore-ride"}
            >
              Ride
            </Link>
            <Link
              className="cursor-pointer text-muted-foreground hover:underline"
              href={"/sycamore-ride"}
            >
              Power
            </Link>
            <Link
              className="cursor-pointer text-muted-foreground hover:underline"
              href={"/sycamore-ride"}
            >
              Data
            </Link>
            <Link
              className="cursor-pointer text-muted-foreground hover:underline"
              href={"/sycamore-ride"}
            >
              Finance
            </Link>
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
        &copy; 2026 Sycamore Dynamics,co.{" "}
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
