import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import MiddleHero from "@/components/Home/MiddleHero";

export default function Home() {
  return (
    <div className="space-y-16 px-8 lg:px-36">
      <Hero />
      <MiddleHero />
      <Features />
    </div>
  );
}
