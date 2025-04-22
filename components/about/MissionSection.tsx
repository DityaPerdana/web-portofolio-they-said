"use client";

import { motion } from "motion/react";
import { IconBulb, IconTarget, IconEye } from "@tabler/icons-react";

export function MissionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Our Purpose
          </div>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Why We Exist
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
              <IconTarget className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To empower organizations with innovative digital solutions that
              drive meaningful impact and transform how they connect with their
              audience.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
              <IconEye className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A world where technology and creativity converge to create digital
              experiences that are not just functional, but transformative and
              inclusive.
            </p>
          </motion.div>

          {/* Purpose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <IconBulb className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Our Purpose
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To lead the digital revolution with purpose-driven solutions that
              prioritize both human needs and technological advancement.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center shadow-sm dark:from-blue-950/20 dark:to-indigo-950/20 dark:shadow-indigo-900/5"
        >
          <p className="text-xl font-medium text-gray-700 dark:text-gray-200">
            "From pixels to impact – we're not just building websites and apps;
            we're crafting digital experiences that leave lasting impressions
            and drive meaningful change."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
