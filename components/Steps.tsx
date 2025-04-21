"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconBrush,
  IconCode,
  IconDeviceDesktop,
  IconUserSearch,
} from "@tabler/icons-react";
import { Rocket, RocketIcon } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  isActive: boolean;
  onClick: () => void;
}

const Step: React.FC<StepProps> = ({
  icon,
  title,
  description,
  stepNumber,
  isActive,
  onClick,
}) => {
  return (
    <motion.div
      className={cn(
        "relative flex cursor-pointer items-start rounded-lg border p-4 transition-all",
        isActive
          ? "border-blue-500 bg-blue-50 dark:border-blue-500/70 dark:bg-blue-900/20"
          : "border-neutral-200 bg-white hover:border-neutral-300 dark:border-neutral-800 dark:bg-black dark:hover:border-neutral-700",
      )}
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div
        className={cn(
          "mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full",
          isActive
            ? "bg-blue-500 text-white"
            : "bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400",
        )}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <div
            className={cn(
              "mr-2 rounded-full px-2 py-0.5 text-xs font-medium",
              isActive
                ? "bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-300"
                : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400",
            )}
          >
            Step {stepNumber}
          </div>
          <h3
            className={cn(
              "text-lg font-semibold",
              isActive
                ? "text-blue-700 dark:text-blue-300"
                : "text-neutral-800 dark:text-neutral-200",
            )}
          >
            {title}
          </h3>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export function Steps() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      icon: <IconUserSearch className="h-6 w-6" />,
      title: "Discovery",
      description:
        "We begin by understanding your needs, goals, and target audience to establish a clear project direction.",
      stepNumber: 1,
    },
    {
      icon: <IconBrush className="h-6 w-6" />,
      title: "Design",
      description:
        "Our designers create visually stunning mockups and prototypes that align with your brand identity.",
      stepNumber: 2,
    },
    {
      icon: <IconCode className="h-6 w-6" />,
      title: "Development",
      description:
        "Expert developers build your solution using the latest technologies, ensuring performance and scalability.",
      stepNumber: 3,
    },
    {
      icon: <IconDeviceDesktop className="h-6 w-6" />,
      title: "Testing",
      description:
        "Rigorous quality assurance ensures your product is bug-free and works perfectly across all devices.",
      stepNumber: 4,
    },
    {
      icon: <RocketIcon className="h-6 w-6" />,
      title: "Launch",
      description:
        "We deploy your project and provide ongoing support to ensure everything runs smoothly post-launch.",
      stepNumber: 5,
    },
  ];

  return (
    <section className="mx-auto my-20 max-w-7xl px-4">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-4xl md:text-5xl"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400"
        >
          Our proven process delivers results, from initial concept to
          successful launch.
        </motion.p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <Step
            key={step.stepNumber}
            icon={step.icon}
            title={step.title}
            description={step.description}
            stepNumber={step.stepNumber}
            isActive={activeStep === step.stepNumber}
            onClick={() => setActiveStep(step.stepNumber)}
          />
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-center mx-auto sm:hidden md:block ">
        <div className="relative mb-8 h-20 w-full max-w-3xl mx-auto overflow-hidden hidden md:block">
          {steps.map((step) => (
            <motion.div
              key={step.stepNumber}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeStep === step.stepNumber ? 1 : 0,
                x:
                  activeStep === step.stepNumber
                    ? 0
                    : activeStep > step.stepNumber
                      ? -100
                      : 100,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center w-full px-4">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {step.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 max-w-3xl rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-black"
      >
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Ready to start your project?
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Let's work together to bring your vision to life with our proven
          process.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white shadow-lg transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Get Started Today
        </motion.button>
      </motion.div>
    </section>
  );
}
