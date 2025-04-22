"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  IconHeart,
  IconBulb,
  IconUsers,
  IconRocket,
  IconLeaf,
  IconZoomQuestion,
} from "@tabler/icons-react";
import { Handshake, Rocket } from "lucide-react";

type Value = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const values: Value[] = [
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We embrace change and constantly push boundaries to discover new possibilities. Innovation drives everything we do, from our internal processes to the solutions we deliver.",
    icon: <IconBulb className="h-8 w-8" />,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "Honesty and transparency form the foundation of our relationships. We believe in doing what's right, even when it's challenging, and holding ourselves to the highest ethical standards.",
    icon: <Handshake className="h-8 w-8" />,
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    id: "passion",
    title: "Passion",
    description:
      "Genuine enthusiasm fuels our work. We're deeply committed to what we do and approach every project with energy, dedication, and a drive to exceed expectations.",
    icon: <IconHeart className="h-8 w-8" />,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "We believe great things happen when we work together. By combining diverse perspectives and expertise, we create solutions that are greater than the sum of their parts.",
    icon: <IconUsers className="h-8 w-8" />,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    id: "impact",
    title: "Impact",
    description:
      "Beyond metrics and deliverables, we measure success by the meaningful difference our work makes. We're driven to create positive change for our clients and the communities they serve.",
    icon: <Rocket className="h-8 w-8" />,
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "We're committed to building for the future, creating solutions that are environmentally responsible and that support long-term social and economic well-being.",
    icon: <IconLeaf className="h-8 w-8" />,
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
];

export function ValuesSection() {
  const [activeValue, setActiveValue] = useState<string>(values[0].id);

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
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-1 text-sm font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
            Our Core
          </div>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            The Values That Guide Us
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Our values aren't just words on a page—they're the principles that
            influence our decisions, shape our culture, and define who we are.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col lg:flex-row lg:gap-10">
          {/* Values navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-wrap justify-center gap-3 lg:mb-0 lg:w-1/3 lg:flex-col lg:justify-start"
          >
            {values.map((value) => (
              <button
                key={value.id}
                onClick={() => setActiveValue(value.id)}
                className={`flex items-center rounded-lg px-4 py-3 text-left transition-all ${
                  activeValue === value.id
                    ? "bg-white shadow-md dark:bg-gray-800"
                    : "hover:bg-white/50 dark:hover:bg-gray-800/50"
                }`}
              >
                <div
                  className={`mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${value.color}`}
                >
                  {value.icon}
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      activeValue === value.id
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {value.title}
                  </h3>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Active value details */}
          <motion.div
            key={activeValue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            {values.map(
              (value) =>
                value.id === activeValue && (
                  <div
                    key={value.id}
                    className="overflow-hidden rounded-xl bg-white shadow-lg dark:bg-gray-800"
                  >
                    <div
                      className={`h-2 w-full ${value.color.split(" ")[0]}`}
                    ></div>
                    <div className="p-8">
                      <div className="mb-6 flex items-center">
                        <div
                          className={`mr-4 flex h-16 w-16 items-center justify-center rounded-lg ${value.color}`}
                        >
                          {value.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {value.title}
                        </h3>
                      </div>

                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {value.description}
                      </p>

                      <div className="mt-8 rounded-lg bg-gray-50 p-6 dark:bg-gray-700/30">
                        <h4 className="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                          <IconZoomQuestion className="mr-2 h-5 w-5 text-teal-500" />
                          How we put this into practice
                        </h4>

                        <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                          {value.id === "innovation" && (
                            <>
                              <li>
                                Dedicated time for research and experimentation
                              </li>
                              <li>
                                Regular workshops to explore emerging
                                technologies
                              </li>
                              <li>
                                Innovation challenges to solve real-world
                                problems
                              </li>
                            </>
                          )}
                          {value.id === "integrity" && (
                            <>
                              <li>
                                Transparent communication with clients and team
                                members
                              </li>
                              <li>
                                Ethical decision-making frameworks for all
                                projects
                              </li>
                              <li>
                                Honest feedback and accountability at all levels
                              </li>
                            </>
                          )}
                          {value.id === "passion" && (
                            <>
                              <li>
                                Team members work on projects they're genuinely
                                excited about
                              </li>
                              <li>
                                Celebrating achievements and sharing success
                                stories
                              </li>
                              <li>
                                Continuous learning opportunities to fuel
                                personal growth
                              </li>
                            </>
                          )}
                          {value.id === "collaboration" && (
                            <>
                              <li>
                                Cross-functional teams working together on
                                projects
                              </li>
                              <li>
                                Regular knowledge sharing sessions and
                                mentorship programs
                              </li>
                              <li>
                                Collaborative tools and processes that
                                facilitate teamwork
                              </li>
                            </>
                          )}
                          {value.id === "impact" && (
                            <>
                              <li>
                                Measuring project success beyond technical
                                metrics
                              </li>
                              <li>
                                Pro bono work for mission-driven organizations
                              </li>
                              <li>
                                Feedback loops to understand real-world effects
                                of our work
                              </li>
                            </>
                          )}
                          {value.id === "sustainability" && (
                            <>
                              <li>
                                Environmentally conscious office practices
                              </li>
                              <li>
                                Designing digital products with energy
                                efficiency in mind
                              </li>
                              <li>
                                Supporting clients in achieving their
                                sustainability goals
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
