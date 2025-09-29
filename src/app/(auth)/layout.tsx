import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Join us at Sycamore | Register today",
  description:
    "Register With us and get E-Mobility solutions for ownership and rentals.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
