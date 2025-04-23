"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "Modern E-commerce Platform",
    category: "Web Development",
    image: "https://source.unsplash.com/random/800x600/?ecommerce",
    description:
      "A fully responsive e-commerce platform with integrated payment processing.",
    link: "/projects/modern-ecommerce",
  },
  {
    id: "project-2",
    title: "Financial Dashboard",
    category: "Web Application",
    image: "https://source.unsplash.com/random/800x600/?dashboard",
    description:
      "Interactive financial dashboard with real-time data visualization.",
    link: "/projects/financial-dashboard",
  },
  {
    id: "project-3",
    title: "Travel Companion App",
    category: "Mobile App",
    image: "https://source.unsplash.com/random/800x600/?travel",
    description:
      "A mobile app for travelers to plan, track, and share their journeys.",
    link: "/projects/travel-app",
  },
  {
    id: "project-4",
    title: "Healthcare Portal",
    category: "Web Development",
    image: "https://source.unsplash.com/random/800x600/?healthcare",
    description:
      "Patient management system with secure access for healthcare providers.",
    link: "/projects/healthcare-portal",
  },
  {
    id: "project-5",
    title: "Real Estate Listings",
    category: "Web Application",
    image: "https://source.unsplash.com/random/800x600/?realestate",
    description: "Property listings with advanced filtering and virtual tours.",
    link: "/projects/real-estate",
  },
  {
    id: "project-6",
    title: "Fitness Tracker",
    category: "Mobile App",
    image: "https://source.unsplash.com/random/800x600/?fitness",
    description: "Personalized workout tracking with progress analytics.",
    link: "/projects/fitness-tracker",
  },
];

const categories = ["All", "Web Development", "Web Application", "Mobile App"];

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory),
      );
    }
  }, [activeCategory]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore our recent projects across various industries and
            technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -10 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600/90 text-white rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    {project.description}
                  </p>
                  <motion.a
                    href={project.link}
                    className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
