import { Metadata } from "next";
import ClientGlitchText from "@/components/ClientGlitchText";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ClientGlitchText speed={1} enableShadows={true} className="custom-class">
        404 Not Found
      </ClientGlitchText>
    </div>
  );
}
