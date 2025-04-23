"use client";

import { motion } from "motion/react";

export function AboutHero() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-32 dark:bg-black">
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/80 dark:bg-black/40"></div>

      {/* Optional: Background image */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[url('https://pict.sindonews.net/dyn/850/pena/news/2022/07/13/767/825341/5-foto-alam-semesta-pertama-yang-direkam-teleskop-james-webb-semua-spektakuler-uxx.jpg')] bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h1
            className="text-center text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-center text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Meet the team behind the creativity, innovation, and technology
            shaping digital experiences.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
