"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [loadingText, setLoadingText] = useState("Loading");

  // Add dots animation to the loading text
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((text) => {
        if (text === "Loading...") return "Loading";
        return text + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* You can replace this with your logo */}
        <div className="relative h-20 w-20 mx-auto mb-6">
          <img
            src="/whitelogonobg.png"
            alt="NyctOwl Studio Logo"
            className="absolute inset-0 h-full w-full object-contain hidden dark:block"
          />
          <img
            src="/logonobg.png"
            alt="NyctOwl Studio Logo"
            className="absolute inset-0 h-full w-full object-contain block dark:hidden"
          />
        </div>

        <motion.h2
          className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {loadingText}
        </motion.h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
          Trying to provide the best experience for you
        </p>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="h-1 bg-blue-600 dark:bg-blue-500 mt-8 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}
