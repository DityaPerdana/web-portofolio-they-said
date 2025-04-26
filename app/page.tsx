import { HeroSectionOne } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { Steps } from "@/components/Steps";
import { FaqAccordion } from "@/components/FaqAccordions";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            Loading hero...
          </div>
        }
      >
        <HeroSectionOne />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-16 flex items-center justify-center">
            Loading features...
          </div>
        }
      >
        <Feature />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-16 flex items-center justify-center">
            Loading steps...
          </div>
        }
      >
        <Steps />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-16 flex items-center justify-center">
            Loading FAQ...
          </div>
        }
      >
        <FaqAccordion />
      </Suspense>
    </>
  );
}
