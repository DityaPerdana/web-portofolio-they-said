"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function ProjectHeroDesktop() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "NyctOwl Nimbus",
    link: "https://nyctowl-nimbus.vercel.app",
    thumbnail: "/project/nimbusScreenshot.webp",
  },
  {
    title: "NyctOwl Vision",
    link: "https://nyctowlvision.vercel.app",
    thumbnail: "/project/visionScreenshot.webp",
  },
];
