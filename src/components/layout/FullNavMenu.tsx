"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Lock } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Sycamore Riders",
    href: "/sycamore-riders",
    description:
      "Affordable electric bikes for clean, efficient, and reliable urban transport.",
  },
  {
    title: "Sycamore Mechanics",
    href: "/sycamore-mechanics",
    description:
      "Clean energy solutions powering sustainable mobility and communities.",
  },
  {
    title: "Sycamore Dealership",
    href: "/sycamore-dealership",
    description:
      "AI-powered analytics for smarter decisions in mobility, energy, and finance.",
  },
  {
    title: "Sycamore Saccos",
    href: "/sycamore-saccos",
    description:
      "AI-powered analytics for smarter decisions in mobility, energy, and finance.",
  },
  {
    title: "Sycamore Careers",
    href: "/sycamore-careers",
    description:
      "AI-powered analytics for smarter decisions in mobility, energy, and finance.",
  },
];

export function FullNavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={"/images/logo-4.png"}
                      alt="logo"
                      height={250}
                      width={250}
                      className="items-center"
                    />
                    <div className="mb-2 mt-4 text-lg text-primary font-bold">
                      Sycamore
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Clean, Reliable, and Equitable Mobility
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="About Sycamore Co">
                Know all About Sycamore.We offer Clean, Reliable, and Equitable
                Mobility.
              </ListItem>

              <ListItem href="/contact" title="Contact us">
                Get in touch with Our experienced Sycamore Team for Inquiries.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
          </NavigationMenuList>
        </NavigationMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
const ListItem = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<"div">, "ref"> & {
    href: string;
    title: string;
  }
>(({ className, title, children, href = "/", ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} passHref>
          <div
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default ListItem;
