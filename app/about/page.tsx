import { MissionSection } from "@/components/about/MissionSection";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { AboutHero } from "@/components/about/AboutHero";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "About Us | NyctOwl Studio",
  description: "Learn more about our mission, team, and values.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <ValuesSection />
    </main>
  );
}
