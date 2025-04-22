"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  IconServer,
  IconRobot,
  IconCloudComputing,
  IconDevices,
  IconShield,
  IconChartBar,
  IconArrowsRightLeft,
  IconAd2,
} from "@tabler/icons-react";

const itSolutions = [
  {
    id: "infrastructure",
    title: "IT Infrastructure",
    icon: <IconServer />,
    description:
      "Robust, scalable infrastructure solutions designed for reliability and performance.",
    features: [
      "Cloud and on-premises infrastructure",
      "System architecture design",
      "Network optimization",
      "Security implementation",
      "24/7 monitoring and support",
    ],
    color: "slate",
  },
  {
    id: "automation",
    title: "Process Automation",
    icon: <IconRobot />,
    description:
      "Streamline operations with intelligent automation that saves time and reduces errors.",
    features: [
      "Business process automation",
      "Custom automation workflows",
      "Integration between systems",
      "Data migration and processing",
      "RPA implementation",
    ],
    color: "teal",
  },
  {
    id: "advertisement",
    title: "Digital Advertising",
    icon: <IconAd2 />,
    description:
      "Targeted ad campaigns that reach your ideal audience and maximize ROI.",
    features: [
      "PPC campaign management",
      "Social media advertising",
      "Display ad networks",
      "Retargeting strategies",
      "Campaign optimization",
    ],
    color: "amber",
  },
];

export function ITSolutionsFeature() {
  const [activeSolution, setActiveSolution] = useState("infrastructure");

  const currentSolution =
    itSolutions.find((solution) => solution.id === activeSolution) ||
    itSolutions[0];

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <IconDevices className="mr-2 h-4 w-4" />
            Enterprise Solutions
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            IT Solutions That Drive Business Growth
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Leverage technology to streamline operations, enhance security, and
            accelerate your business.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
          {/* Left side - Solution selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Our IT Solutions
              </h3>
              <div className="space-y-3">
                {itSolutions.map((solution) => (
                  <motion.button
                    key={solution.id}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveSolution(solution.id)}
                    className={`flex w-full items-center rounded-lg p-3 text-left transition-colors ${
                      activeSolution === solution.id
                        ? `bg-${solution.color}-500 text-white`
                        : `bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700`
                    }`}
                  >
                    <div
                      className={`mr-3 rounded-lg ${
                        activeSolution === solution.id
                          ? "bg-white/20"
                          : `bg-${solution.color}-100 text-${solution.color}-600 dark:bg-${solution.color}-900/20 dark:text-${solution.color}-400`
                      } p-2`}
                    >
                      {solution.icon}
                    </div>
                    <span className="font-medium">{solution.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Solution details */}
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <div
              className={`rounded-xl border-2 border-${currentSolution.color}-500 bg-white p-6 shadow-xl dark:bg-gray-800`}
            >
              <div className="mb-6 flex items-center space-x-4">
                <div
                  className={`rounded-full bg-${currentSolution.color}-100 p-3 text-${currentSolution.color}-600 dark:bg-${currentSolution.color}-900/20 dark:text-${currentSolution.color}-400`}
                >
                  {currentSolution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentSolution.title}
                </h3>
              </div>

              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                {currentSolution.description}
              </p>

              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                  Key Features:
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {currentSolution.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <svg
                        className={`mr-2 h-5 w-5 text-${currentSolution.color}-500`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-lg bg-${currentSolution.color}-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-${currentSolution.color}-700`}
                >
                  Learn More About {currentSolution.title}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits section */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <IconShield className="h-8 w-8" />,
              title: "Enhanced Security",
              description:
                "Protect your critical data and systems with enterprise-grade security solutions.",
              color: "red",
            },
            {
              icon: <IconChartBar className="h-8 w-8" />,
              title: "Increased Efficiency",
              description:
                "Streamline operations and reduce manual tasks through intelligent automation.",
              color: "green",
            },
            {
              icon: <IconCloudComputing className="h-8 w-8" />,
              title: "Scalable Solutions",
              description:
                "Our infrastructure grows with your business needs without disruption.",
              color: "blue",
            },
            {
              icon: <IconArrowsRightLeft className="h-8 w-8" />,
              title: "Seamless Integration",
              description:
                "Connect your existing systems and tools for unified operations.",
              color: "purple",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div
                className={`mb-4 inline-flex rounded-full bg-${benefit.color}-100 p-3 text-${benefit.color}-600 dark:bg-${benefit.color}-900/20 dark:text-${benefit.color}-400`}
              >
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
