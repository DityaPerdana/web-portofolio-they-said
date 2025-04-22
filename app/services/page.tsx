import { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonial";
import { ITSolutionsFeature } from "@/components/services/ITSolutionFeature";
import { VideoEditingFeature } from "@/components/services/VideoEditingFeature";

export const metadata: Metadata = {
  title: "Our Services | Burung Hantu Digital Agency",
  description:
    "Explore our comprehensive range of digital services designed to transform your online presence and drive results.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero />
      <ServiceOverview />
      <ServiceDetails />
      <VideoEditingFeature />
      <ITSolutionsFeature />
      <ServiceProcess />
      <ServiceTestimonials />
    </main>
  );
}
