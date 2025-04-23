"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  IconBulb,
  IconCode,
  IconTestPipe,
  IconRocket,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { RocketIcon } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, audience, and challenges.",
    details:
      "Our discovery process involves in-depth research, stakeholder interviews, and competitive analysis to establish a solid foundation for your project.",
    icon: <RocketIcon className="h-8 w-8" />,
    color: "yellow",
  },
  {
    id: 2,
    title: "Strategy & Design",
    description:
      "We create a roadmap and design the optimal solution for your needs.",
    details:
      "Our team develops a comprehensive strategy including wireframes, user flows, and visual designs that align with your brand and business objectives.",
    icon: <IconBulb className="h-8 w-8" />,
    color: "purple",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Our experts build your solution using best practices and cutting-edge tech.",
    details:
      "We employ agile methodologies to develop robust, scalable solutions that are maintainable and future-proof, with regular client check-ins throughout.",
    icon: <IconCode className="h-8 w-8" />,
    color: "green",
  },
  {
    id: 4,
    title: "Testing & QA",
    description:
      "Rigorous testing ensures your product works flawlessly across all scenarios.",
    details:
      "Our comprehensive QA process includes functional testing, performance optimization, security audits, and cross-device compatibility checks.",
    icon: <IconTestPipe className="h-8 w-8" />,
    color: "green",
  },
  {
    id: 5,
    title: "Launch",
    description:
      "We carefully deploy your solution and ensure a smooth transition.",
    details:
      "Our launch phase includes final verifications, deployment to production environments, and careful monitoring to guarantee a successful release.",
    icon: <IconRocket className="h-8 w-8" />,
    color: "orange",
  },
  {
    id: 6,
    title: "Support & Growth",
    description:
      "We provide ongoing maintenance and help you evolve your digital presence.",
    details:
      "Post-launch, we offer continuous support, regular updates, performance monitoring, and strategic guidance to help your digital solution grow with your business.",
    icon: <IconHeartHandshake className="h-8 w-8" />,
    color: "red",
  },
];

export function ServiceProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Our Proven Process
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We follow a systematic approach to deliver exceptional results for
            every project.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          {/* Mobile view - Step cards only */}
          <div className="md:hidden space-y-6">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (step.id - 1) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer rounded-xl bg-white p-6 shadow-md transition-all dark:bg-gray-800 ${
                  activeStep === step.id
                    ? `border-l-4 border-${step.color}-500`
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${
                      activeStep === step.id
                        ? `bg-${step.color}-500 text-white`
                        : `bg-${step.color}-100 text-${step.color}-600 dark:bg-${step.color}-900/20 dark:text-${step.color}-400`
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span
                        className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          activeStep === step.id
                            ? `bg-${step.color}-100 text-${step.color}-700 dark:bg-${step.color}-900/30 dark:text-${step.color}-300`
                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Step {step.id}
                      </span>
                      <h3
                        className={`text-xl font-bold ${
                          activeStep === step.id
                            ? `text-${step.color}-700 dark:text-${step.color}-300`
                            : "text-gray-900 dark:text-white"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {activeStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.details}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop view - Timeline */}
          <div className="relative hidden md:block mb-16">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 dark:bg-gray-700"></div>

            {/* Timeline points */}
            <div className="relative z-50">
              {processSteps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: (step.id - 1) * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative mb-16 flex ${step.id % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  {/* Center dot */}
                  <div className="absolute left-1/2 top-0 -mt-1 -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      animate={{
                        scale: activeStep === step.id ? [1, 1.2, 1] : 1,
                        transition: {
                          repeat: activeStep === step.id ? Infinity : 0,
                          duration: 2,
                        },
                      }}
                      onClick={() => setActiveStep(step.id)}
                      className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full z-50 ${
                        activeStep === step.id
                          ? `bg-${step.color}-500 ring-4 ring-${step.color}-200 dark:ring-${step.color}-900/30`
                          : "bg-white dark:bg-gray-800"
                      } border-4 border-gray-200 text-white dark:border-gray-700`}
                    >
                      {activeStep === step.id && (
                        <span className="text-sm font-bold">{step.id}</span>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-1/2 ${step.id % 2 === 0 ? "pr-12 text-left" : "pl-12"}`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      onClick={() => setActiveStep(step.id)}
                      className={`cursor-pointer rounded-xl bg-white p-6 shadow-md transition-all dark:bg-gray-800 ${
                        activeStep === step.id
                          ? `border-l-4 border-${step.color}-500`
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${step.color}-100 text-${step.color}-600 dark:bg-${step.color}-900/20 dark:text-${step.color}-400`}
                        >
                          {step.icon}
                        </div>
                        <div>
                          <span
                            className={`text-xs font-medium text-${step.color}-600 dark:text-${step.color}-400`}
                          >
                            Step {step.id}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Active step details - only visible on desktop */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`mx-auto max-w-3xl rounded-xl z-50 bg-${processSteps[activeStep - 1].color}-50 p-8 shadow-lg dark:bg-${processSteps[activeStep - 1].color}-900/10 hidden md:block`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-${processSteps[activeStep - 1].color}-500 text-white`}
              >
                {processSteps[activeStep - 1].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {processSteps[activeStep - 1].title}
                </h3>
                <p
                  className={`text-${processSteps[activeStep - 1].color}-600 dark:text-${processSteps[activeStep - 1].color}-400`}
                >
                  Step {activeStep} of {processSteps.length}
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              {processSteps[activeStep - 1].details}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
