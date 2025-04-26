import { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceTestimonials } from "@/components/services/ServiceTestimonial";
import { ITSolutionsFeature } from "@/components/services/ITSolutionFeature";
import { VideoEditingFeature } from "@/components/services/VideoEditingFeature";
import { ServicesEducation } from "@/components/services/ServicesEducation";
import { FeatureShowcase3D } from "@/components/services/FeatureShowcase";

export const metadata: Metadata = {
  title: "Our Services | NyctOwl Studio",
  description:
    "Explore our comprehensive range of digital services designed to transform your online presence and drive results.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero />
      <ServiceOverview />
      <ServiceDetails />
      <FeatureShowcase3D />
      <VideoEditingFeature />
      <ITSolutionsFeature />
      <ServicesEducation />
      <ServiceProcess />
      <ServiceTestimonials />
    </main>
  );
}
