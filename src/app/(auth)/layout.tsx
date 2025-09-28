import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sycamore | Register",
  description:
    "Register With us and get E-Mobility solutions for ownership and rentals.",
  icons: {
    icon: "/images/bolt.svg",
    shortcut: "/images/bolt.svg",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
