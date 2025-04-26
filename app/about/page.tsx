import { MissionSection } from "@/components/about/MissionSection";
import { TeamSection } from "@/components/about/TeamSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { AboutHero } from "@/components/about/AboutHero";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "About Us | NyctOwl Studio",
  description: "Learn more about our mission, team, and values.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading hero...
          </div>
        }
      >
        <AboutHero />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Loading mission...
          </div>
        }
      >
        <MissionSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Loading team...
          </div>
        }
      >
        <TeamSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-20 flex items-center justify-center">
            Loading values...
          </div>
        }
      >
        <ValuesSection />
      </Suspense>
    </main>
  );
}
