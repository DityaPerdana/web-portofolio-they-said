import { ProjectMarque } from "@/components/project/ProjectMarque";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { FeaturedProject } from "@/components/project/FeaturedProject";
import { ProjectStats } from "@/components/project/ProjectStats";
import { Metadata } from "next";
import { ProjectHero } from "@/components/project/ProjectHero";
import { PortfolioShowcase } from "@/components/project/PortfolioShowCase";

export const metadata: Metadata = {
  title: "Our Projects | Burung Hantu Digital Agency",
  description:
    "Explore our portfolio of successful projects across web development, mobile apps, and digital marketing.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectHero />
      <FeaturedProject />
      <ProjectStats />
      <ProjectMarque />
      <PortfolioShowcase />
    </main>
  );
}
