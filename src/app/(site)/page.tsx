import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import MiddleHero from "@/components/Home/MiddleHero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16 px-8 lg:px-36">
      <div>
        <Image
          src="/images/bg-hero-2.png"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center -z-10"
        />
        <Hero />
      </div>
      <MiddleHero />
      <Features />
    </div>
  );
}
