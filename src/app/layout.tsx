import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explore the Sycamore Platform | Official website for Sycamore.Co",
  description:
    "E-Mobility solutions for ownership and rentals.Get yourself an affordable Electric Boda Boda",
  icons: {
    icon: "/images/bolt.svg",
    shortcut: "/images/bolt.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
