"use client";
import { motion } from "motion/react";
import { useState } from "react";

interface FeaturedProject {
  id: number;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  highlights: string[];
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "NyctOwl Nimbus",
    client: "Personal project by Raditya Alfarisi",
    description: "online code editor with communication features.",
    technologies: ["Next.js", "TailwindCSS", "Convex", "Clerk"],
    imageUrl: "project/nimbusCommunity.webp",
    link: "https://nyctowl-nimbus.vercel.app/",
    highlights: [
      "Implemented advanced search with filters",
      "Created fully responsive design system",
    ],
  },
];

export function FeaturedProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = featuredProjects[currentIndex];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            Featured Projects
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Our Best Work
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover our most impactful projects and the results we've delivered
            for our clients.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            key={`image-${currentIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={currentProject.imageUrl}
                alt={currentProject.title}
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-2">
                    {currentProject.client}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {currentProject.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            key={`details-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {currentProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Key Highlights:
              </h4>
              <ul className="space-y-2">
                {currentProject.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <svg
                      className="h-5 w-5 mr-2 text-blue-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
