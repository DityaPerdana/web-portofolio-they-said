"use client";
import React, { useState } from "react";
import {
  Twitter,
  Disc,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    null | "success" | "error"
  >(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      if (email && email.includes("@")) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
      }

      // Reset status after 3 seconds
      setTimeout(() => setSubscribeStatus(null), 3000);
    }, 500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-24 dark:from-black dark:to-gray-900/70">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 -translate-x-1/2 h-64 w-64 rounded-full bg-blue-100 opacity-20 blur-3xl filter dark:bg-blue-900/40"></div>
      <div className="absolute right-0 bottom-0 translate-x-1/3 h-64 w-64 rounded-full bg-purple-100 opacity-20 blur-3xl filter dark:bg-purple-900/40"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column - spans 2 columns on large screens */}
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
                  {/* Dark mode logo */}
                  <img
                    src="/whitelogonobg.png"
                    alt="NyctOwl Studio Logo"
                    className="absolute inset-0 h-full w-full object-contain hidden dark:block"
                  />
                  {/* Light mode logo */}
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
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-blue-500 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-500 dark:hover:text-white"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-blue-700 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-pink-600 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-pink-600 dark:hover:text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Discord"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-indigo-600 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-indigo-600 dark:hover:text-white"
                >
                  <Disc size={18} />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-900 hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Navigation Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Company
            </h3>
            <ul className="space-y-4">
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
                  href="/careers"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/services/web-development"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services/mobile-apps"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="/services/ui-ux-design"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="/services/video-editing"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Video Editing
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-marketing"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/resources/documentation"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/resources/help-center"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="/resources/faq"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/resources/tutorials"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="/resources/case-studies"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/gdpr"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom footer with copyright */}
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
