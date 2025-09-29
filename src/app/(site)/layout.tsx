import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import MobileNavbar from "@/components/layout/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <MobileNavbar />
      <NavBar />
      <section className="lg:mt-12 mt-28">{children}</section>
      <Footer />
    </section>
  );
}
