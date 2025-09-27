"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { NavbarMenu } from "./NavbarMenu";
import { useTheme } from "next-themes";
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";

const NavBar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <nav className="flex justify-between items-center shadow-xs py-4 px-36">
      <div className="flex items-center justify-between gap-1">
        {mounted && (
          <Image
            src={
              resolvedTheme === "dark"
                ? "/images/logo-1-dark.svg"
                : "/images/sycamore-logo.svg"
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
      </div>
      <NavbarMenu />
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="flex gap-4 items-center">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/login">Login</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/sign-up">Sign Up</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </nav>
  );
};

export default NavBar;
