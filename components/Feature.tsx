"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconChartBar,
  IconRocket,
  IconPalette,
  IconShield,
  IconCode,
  IconDeviceLaptop,
  IconBrandAndroid,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function Feature() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-700 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-700 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-700 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://i.ppy.sh/867617a4e64b070fc4ccff60251842f0b526f6d1/68747470733a2f2f692e6962622e636f2f5979435859624a2f4b6c65652e6a7067"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-700">How can I help you today?</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-700">I need support with my order</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  );
};

// New skeleton components
const SkeletonSix = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col">
      <div className="flex flex-col space-y-2 p-4">
        <div className="flex justify-center space-x-1 my-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`h-2 w-2 rounded-full cursor-pointer ${active === i ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"}`}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center justify-center bg-white dark:bg-black p-4 rounded-xl border border-neutral-200 dark:border-white/[0.1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={active}
          transition={{ duration: 0.3 }}
        >
          {active === 0 && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <IconRocket className="h-8 w-8 text-blue-500" />
              </div>
              <p className="mt-3 text-sm font-medium">Fast Delivery</p>
            </div>
          )}
          {active === 1 && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <IconShield className="h-8 w-8 text-green-500" />
              </div>
              <p className="mt-3 text-sm font-medium">Secure Payments</p>
            </div>
          )}
          {active === 2 && (
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <IconPalette className="h-8 w-8 text-purple-500" />
              </div>
              <p className="mt-3 text-sm font-medium">Customizable Designs</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const SkeletonSeven = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const stats = [
    { label: "Users", value: "10K+", color: "from-blue-400 to-blue-600" },
    { label: "Downloads", value: "25K+", color: "from-pink-400 to-pink-600" },
    { label: "Reviews", value: "4.9/5", color: "from-green-400 to-green-600" },
  ];

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-4">
      <div className="grid grid-cols-3 gap-2 w-full">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={`rounded-lg bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.1] p-3 flex flex-col items-center justify-center`}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ y: -5 }}
          >
            <motion.div
              className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              animate={{
                scale: hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-xs text-neutral-700 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SkeletonEight = () => {
  const [progress, setProgress] = useState(65);

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-4">
      <div className="w-full h-full flex flex-col justify-center space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">Project Progress</div>
          <div className="text-sm font-semibold">{progress}%</div>
        </div>

        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        <div className="flex justify-between">
          <motion.button
            className="px-3 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-xs"
            onClick={() => setProgress(Math.max(0, progress - 10))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Decrease
          </motion.button>
          <motion.button
            className="px-3 py-1 bg-indigo-500 text-white rounded text-xs"
            onClick={() => setProgress(Math.min(100, progress + 10))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Increase
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const SkeletonNine = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] items-center justify-center">
      <div className="relative w-40 h-40">
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x = Math.cos(angle) * 50;
          const y = Math.sin(angle) * 50;

          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-indigo-500 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: "-6px",
                marginTop: "-6px",
              }}
              animate={{
                x,
                y,
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-16 h-16 bg-white dark:bg-black rounded-full border-2 border-indigo-400 flex items-center justify-center shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <IconRocket className="h-8 w-8 text-indigo-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// NEW SKELETON #1: Interactive Code Editor
const SkeletonTen = () => {
  const codeLines = [
    "function greet() {",
    '  return "Hello, world!";',
    "}",
    "",
    "console.log(greet());",
  ];

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-4">
      <div className="w-full h-full flex flex-col rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <div className="bg-neutral-100 dark:bg-neutral-900 p-2 flex items-center justify-between">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs font-mono text-neutral-700">script.js</div>
          <div className="w-4"></div>
        </div>

        {/* Code content */}
        <div className="flex-1 bg-white dark:bg-black font-mono text-xs p-3 overflow-hidden">
          <div className="flex flex-col">
            {codeLines.map((line, index) => (
              <div key={index} className="flex">
                <div className="w-5 text-neutral-400 mr-2">{index + 1}</div>
                <div className="flex-1">
                  <motion.span
                    className={`${index === 1 ? "text-green-500 dark:text-green-400" : "text-blue-600 dark:text-blue-400"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {line}
                  </motion.span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-900 p-2 flex justify-center">
          <div className="text-xs flex items-center space-x-1 text-neutral-700">
            <IconCode className="h-3 w-3" />
            <span>Clean Code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// NEW SKELETON #2: Interactive Device Preview
const SkeletonEleven = () => {
  const [currentDevice, setCurrentDevice] = useState("phone");
  const devices = ["phone", "tablet", "laptop"];
  const deviceIcons = {
    phone: <IconBrandAndroid className="h-8 w-8 text-green-500" />,
    tablet: <IconPalette className="h-8 w-8 text-purple-500" />,
    laptop: <IconDeviceLaptop className="h-8 w-8 text-blue-500" />,
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-4">
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-center space-x-4 mb-4">
          {devices.map((device) => (
            <motion.button
              key={device}
              className={`px-3 py-1.5 rounded-full text-xs ${
                currentDevice === device
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentDevice(device)}
            >
              {device.charAt(0).toUpperCase() + device.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            key={currentDevice}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            {currentDevice === "phone" && (
              <div className="w-24 h-48 rounded-xl border-4 border-black dark:border-white overflow-hidden flex flex-col">
                <div className="h-4 bg-black dark:bg-white flex justify-center">
                  <div className="w-8 h-2 bg-neutral-800 dark:bg-neutral-200 rounded-b-lg"></div>
                </div>
                <div className="flex-1 bg-white dark:bg-neutral-900 flex items-center justify-center">
                  {deviceIcons[currentDevice]}
                </div>
                <div className="h-4 bg-black dark:bg-white"></div>
              </div>
            )}

            {currentDevice === "tablet" && (
              <div className="w-40 h-56 rounded-xl border-4 border-black dark:border-white overflow-hidden flex flex-col">
                <div className="h-4 bg-black dark:bg-white"></div>
                <div className="flex-1 bg-white dark:bg-neutral-900 flex items-center justify-center">
                  {deviceIcons[currentDevice]}
                </div>
                <div className="h-6 bg-black dark:bg-white flex justify-center items-center">
                  <div className="w-8 h-3 rounded-full bg-neutral-600 dark:bg-neutral-400"></div>
                </div>
              </div>
            )}

            {currentDevice === "laptop" && (
              <div className="flex flex-col items-center">
                <div className="w-64 h-40 rounded-t-lg border-4 border-black dark:border-white overflow-hidden flex flex-col">
                  <div className="h-4 bg-black dark:bg-white flex justify-center">
                    <div className="w-2 h-2 mt-1 bg-neutral-600 dark:bg-neutral-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white dark:bg-neutral-900 flex items-center justify-center">
                    {deviceIcons[currentDevice]}
                  </div>
                </div>
                <div className="w-72 h-4 bg-neutral-800 dark:bg-neutral-700 rounded-b-lg"></div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "Dynamic Content",
    description: (
      <span className="text-sm">
        We provide dynamic and interactive website interfaces.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Professional Content",
    description: (
      <span className="text-sm">
        Delivering professional-grade content for all your needs.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Complete Security",
    description: (
      <span className="text-sm">
        We ensure your data remains fully protected.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Passionate Development",
    description: (
      <span className="text-sm">
        Our team works with dedication and expertise.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Customer Support",
    description: (
      <span className="text-sm">Friendly and responsive service.</span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Key Features",
    description: (
      <span className="text-sm">Explore what makes our service special.</span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-1",
    icon: <IconRocket className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Growing Community",
    description: (
      <span className="text-sm">
        Join thousands of satisfied users worldwide.
      </span>
    ),
    header: <SkeletonSeven />,
    className: "md:col-span-1",
    icon: <IconChartBar className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Track Progress",
    description: (
      <span className="text-sm">
        Monitor and manage your project development.
      </span>
    ),
    header: <SkeletonEight />,
    className: "md:col-span-1",
    icon: <IconPalette className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Innovative Solutions",
    description: (
      <span className="text-sm">
        Cutting-edge approaches to meet modern challenges.
      </span>
    ),
    header: <SkeletonNine />,
    className: "md:col-span-1",
    icon: <IconShield className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Code Excellence",
    description: (
      <span className="text-sm">
        Clean, maintainable code that follows best practices.
      </span>
    ),
    header: <SkeletonTen />,
    className: "md:col-span-1",
    icon: <IconCode className="h-4 w-4 text-neutral-700" />,
  },
  {
    title: "Multi-Device Support",
    description: (
      <span className="text-sm">
        Perfectly optimized for all screens and devices.
      </span>
    ),
    header: <SkeletonEleven />,
    className: "md:col-span-1",
    icon: <IconDeviceLaptop className="h-4 w-4 text-neutral-700" />,
  },
];
