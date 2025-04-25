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
      id="Steps"
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
    </section>
  );
}
