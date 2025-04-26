"use client";
import React, { useState } from "react";
import { Twitter, Disc, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    null | "success" | "error"
  >(null);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-24 dark:from-black dark:to-gray-900/70">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3 relative h-12 w-12 flex-shrink-0">
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
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    NyctOwl Studio
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    From Pixels to Impact
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Turning digital visions into meaningful change. We blend
                cutting-edge tech with compelling storytelling to empower
                brands.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href="https://www.instagram.com/nyctowlstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-pink-600 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-pink-600 dark:hover:text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://github.com/NyctOwl-Studio"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-900 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Website
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-gray-200 py-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} NyctOwl Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="/sitemap"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Accessibility
              </a>
              <a
                href="#top"
                className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
