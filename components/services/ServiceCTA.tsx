"use client";
import { motion } from "motion/react";

export function ServiceCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
          <div className="relative px-8 py-16 text-center md:py-24">
            {/* Background decorative elements */}
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
                  href="#contact"
                  className="rounded-lg bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition-colors hover:bg-blue-50"
                >
                  Schedule a Consultation
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#portfolio"
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

        {/* Additional service cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Custom Quote",
              description:
                "Get a tailored quote based on your specific project requirements.",
              cta: "Request Quote",
              icon: "💰",
              color: "bg-green-500",
            },
            {
              title: "Service Packages",
              description:
                "Explore our pre-designed service packages for common business needs.",
              cta: "View Packages",
              icon: "📦",
              color: "bg-orange-500",
            },
            {
              title: "Client Resources",
              description:
                "Access guides, tools, and resources to help you make informed decisions.",
              cta: "View Resources",
              icon: "📚",
              color: "bg-purple-500",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-xl bg-white p-8 shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-gray-800"
            >
              <div className="mb-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${card.color} text-2xl text-white`}
                >
                  {card.icon}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mb-6 flex-1 text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                {card.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
