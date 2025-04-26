"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconPalette,
  IconBrandSpeedtest,
  IconShieldCheck,
} from "@tabler/icons-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  background: string;
}

export function FeatureShowcase3D() {
  const features: Feature[] = [
    {
      title: "Responsive Design",
      description:
        "Our websites look perfect on any device, from desktop computers to smartphones and tablets.",
      icon: <IconDeviceDesktop className="h-8 w-8" />,
      color: "text-blue-600 dark:text-blue-400",
      background:
        "from-blue-500/20 to-blue-600/5 dark:from-blue-900/30 dark:to-blue-800/5",
    },
    {
      title: "Mobile Optimization",
      description:
        "Specialized mobile experiences with touch-friendly interfaces and fast loading times.",
      icon: <IconDeviceMobile className="h-8 w-8" />,
      color: "text-green-600 dark:text-green-400",
      background:
        "from-green-500/20 to-green-600/5 dark:from-green-900/30 dark:to-green-800/5",
    },
    {
      title: "Visual Excellence",
      description:
        "Beautiful designs that capture attention and create memorable brand experiences.",
      icon: <IconPalette className="h-8 w-8" />,
      color: "text-purple-600 dark:text-purple-400",
      background:
        "from-purple-500/20 to-purple-600/5 dark:from-purple-900/30 dark:to-purple-800/5",
    },
    {
      title: "Lightning Performance",
      description:
        "Optimized for speed with fast load times and smooth interactions across all pages.",
      icon: <IconBrandSpeedtest className="h-8 w-8" />,
      color: "text-red-600 dark:text-red-400",
      background:
        "from-red-500/20 to-red-600/5 dark:from-red-900/30 dark:to-red-800/5",
    },
    {
      title: "Robust Security",
      description:
        "Advanced security measures to protect your website and your users' data.",
      icon: <IconShieldCheck className="h-8 w-8" />,
      color: "text-amber-600 dark:text-amber-400",
      background:
        "from-amber-500/20 to-amber-600/5 dark:from-amber-900/30 dark:to-amber-800/5",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            Advanced Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            What Sets Us Apart
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Our websites don't just look good—they're built with cutting-edge
            features that deliver results
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Card3D key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card3D({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  function onMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function onMouseEnter() {
    setIsHovered(true);
  }

  function onMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative h-[340px] perspective-1000"
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered
            ? "0 20px 40px -15px rgba(0, 0, 0, 0.1)"
            : "0 10px 30px -15px rgba(0, 0, 0, 0.05)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 17 },
          boxShadow: { duration: 0.3 },
        }}
        className="h-full w-full rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800"
      >
        <div className="relative h-full">
          {/* Glowing gradient background */}
          <div
            className={cn(
              "absolute -inset-3 rounded-xl bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500",
              isHovered ? "opacity-70" : "opacity-0",
              feature.background,
            )}
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col">
            <div
              className={cn(
                "mb-6 flex h-16 w-16 items-center justify-center rounded-xl",
                `${isHovered ? "bg-gradient-to-br " + feature.background + " " + feature.color : "bg-gray-100 dark:bg-gray-700"}`,
              )}
            >
              {feature.icon}
            </div>

            <h3
              className={cn(
                "mb-2 text-xl font-bold",
                isHovered ? feature.color : "text-gray-900 dark:text-white",
              )}
            >
              {feature.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
