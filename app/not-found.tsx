import GlitchText from "@/components/404Components";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "404 Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <GlitchText speed={1} enableShadows={true} className="custom-class">
        404 Not Found
      </GlitchText>
    </div>
  );
}
