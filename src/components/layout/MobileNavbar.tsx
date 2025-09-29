"use client";

// components/MobileNavbar.js
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MobileNavlinks from "./MobileNavlinks";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const MobileNavbar = () => {
  const { resolvedTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="flex md:hidden fixed top-0 left-0 w-full z-50 justify-between items-center px-8 py-3 bg-background shadow-sm">
        {/* Hamburger menu button */}
        <button
          onClick={toggleSidebar}
          className="p-2 shadow-sm rounded-sm cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo and Agency Name */}
        <Link href={"/"} className="flex items-center gap-2">
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
        </Link>

        <ModeToggle />
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed md:hidden inset-0 bg-black z-40 transition-opacity duration-300 ease-in-out ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-full w-3/4 bg-background z-50 shadow-lg p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
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
          <button
            onClick={toggleSidebar}
            className="font-bold cursor-pointer shadow-sm rounded-sm p-1"
          >
            <X />
          </button>
        </div>
        {/* Navigation Links */}
        <MobileNavlinks onLinkClick={closeSidebar} />
      </div>
    </>
  );
};

export default MobileNavbar;
