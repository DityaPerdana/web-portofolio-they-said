"use client";
import { motion } from "motion/react";

export function ServiceCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
          <div className="relative px-8 py-16 text-center md:py-24">
            <div className="absolute left-0 top-0 -mt-24 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl filter"></div>
            <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl filter"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto max-w-3xl"
            >
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                Let's discuss how our services can help you achieve your
                business goals and create exceptional digital experiences.
              </p>

              <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/6283869916634?text=Hello,%20I%20need%20a%20technology%20solution%20for%20my%20needs"
                  className="rounded-lg bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition-colors hover:bg-blue-50"
                >
                  Start a Consultation
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/project"
                  className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
                >
                  View Our Portfolio
                </motion.a>
              </div>

              <p className="mt-8 text-blue-100">
                No obligations. Let's just chat about your project.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
