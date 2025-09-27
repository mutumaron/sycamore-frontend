import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import MiddleHero from "@/components/Home/MiddleHero";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <MiddleHero />
      <Features />
    </div>
  );
}
