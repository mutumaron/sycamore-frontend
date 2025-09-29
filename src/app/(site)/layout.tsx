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

export const metadata: Metadata = {
  title: "Explore the Sycamore Platform| Official website for Sycamore.Co",
  description:
    "E-Mobility solutions for ownership and rentals.Get yourself an affordable Electric Boda Boda",
  icons: {
    icon: "/images/bolt.svg",
    shortcut: "/images/bolt.svg",
  },
};

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
