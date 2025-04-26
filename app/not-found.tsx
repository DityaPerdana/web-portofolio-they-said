import GlitchText from "@/components/404Components";
import { Metadata } from "next";
import { Suspense } from "react";

const metadata: Metadata = {
  title: "404 Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <GlitchText speed={1} enableShadows={true} className="custom-class">
          404 Not Found
        </GlitchText>
      </div>
    </Suspense>
  );
}
