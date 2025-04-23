"use client";
import React, { useState, useEffect } from "react";
import { ProjectHeroMobile } from "./ProjectHeroMobile";
import { ProjectHeroDesktop } from "./ProjectHeroDesktop";

export function ProjectHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <ProjectHeroMobile /> : <ProjectHeroDesktop />}</>;
}
