"use client";
import React, { useState, useEffect } from "react";
import { ProjectHeroMobile } from "./ProjectHeroMobile";
import { ProjectHeroDesktop } from "./ProjectHeroDesktop";

export function ProjectHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <ProjectHeroMobile /> : <ProjectHeroDesktop />}</>;
}
