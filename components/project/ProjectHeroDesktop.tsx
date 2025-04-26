"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { motion } from "motion/react";

export function ProjectHeroDesktop() {
  return (
    <>
      <div className="min-h-screen w-full">
        <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50/80 to-purple-50/80 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl filter dark:bg-blue-900/20" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 rounded-full bg-purple-300/20 blur-3xl filter dark:bg-purple-900/20" />

          <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10" />

          <div className="container relative z-10 mx-auto flex h-full items-center px-4">
            <div className="grid grid-cols-2 items-center gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-6"
                >
                  Our Portfolio
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
                >
                  <span className="block">Transforming</span>
                  <span className="text-blue-600 dark:text-blue-400">
                    Ideas
                  </span>{" "}
                  into Digital{" "}
                  <span className="text-purple-600 dark:text-purple-400">
                    Reality
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                >
                  Explore our portfolio of innovative digital solutions that
                  have helped businesses elevate their online presence and
                  achieve their goals.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#featured-projects"
                    className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-blue-700"
                  >
                    Explore Our Work
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
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

                  <motion.a
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/6283869916635?text=Hello,%20I%20need%20a%20technology%20solution%20for%20my%20needs"
                    className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-lg transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-900"
                  >
                    Start Your Project
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative aspect-square"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    src="/project/nimbusScreenshot.webp"
                    alt="Project Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-10 -left-10 z-0 rounded-2xl overflow-hidden shadow-2xl w-3/4 h-3/4 transform -rotate-6 opacity-70">
                  <img
                    src="/project/visionScreenshot.webp"
                    alt="Project Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -right-12 -top-4 z-20 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg transform rotate-6">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <p className="text-sm font-medium">Live Projects</p>
                  </div>
                  <p className="text-xl font-bold mt-1">{products.length}+</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <span className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Scroll to explore projects
              </span>
              <svg
                className="h-6 w-6 text-gray-600 dark:text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </section>
      </div>
      <HeroParallax products={products} />
    </>
  );
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
