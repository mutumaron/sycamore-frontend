"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { NavbarMenu } from "./NavbarMenu";
import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { FullNavMenu } from "./FullNavMenu";

const NavBar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="md:flex justify-between items-center shadow-xs py-4 px-36 hidden">
      <Link href={"/"} className="flex items-center justify-between gap-1">
        {mounted && (
          <Image
            src={
              resolvedTheme === "dark"
                ? "/images/sycamore dynamics-10.svg"
                : "/images/sycamore dynamics-dark.svg"
            }
            height={100}
            width={100}
            alt="Sycamore Logo"
          />
        )}

        {mounted && (
          <Image
            src={
              resolvedTheme === "dark"
                ? "/images/bolt-dark.svg"
                : "/images/bolt.svg"
            }
            height={30}
            width={30}
            alt="Sycamore Logo Zap"
          />
        )}
      </Link>
      {/* <NavbarMenu /> */}
      <FullNavMenu />

      <ModeToggle />
    </nav>
  );
};

export default NavBar;
