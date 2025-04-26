"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What services does NyctOwl Studio offer?",
    answer:
      "We provide a comprehensive range of digital services including web development, mobile app development, UI/UX design, video editing, digital marketing, and IT infrastructure solutions. Our team specializes in creating custom digital experiences tailored to your specific business needs.",
    category: "Services",
  },
  {
    question: "What is your design process like?",
    answer:
      "Our design process begins with discovery to understand your goals, brand, and users. We then create wireframes and mockups for your feedback. After refinements, we develop interactive prototypes before moving to full implementation. We prioritize collaboration throughout to ensure the final product aligns with your vision.",
    category: "Process",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer various maintenance and support packages to keep your digital products running smoothly. These can include regular updates, performance monitoring, security patches, content updates, and technical support. We'll recommend the right support plan based on your needs.",
    category: "Support",
  },
  {
    question: "How do you handle project pricing?",
    answer:
      "We offer both fixed-price quotes and hourly billing depending on the project type. After understanding your requirements, we provide detailed proposals outlining all costs with no hidden fees. We can work with you to phase development to fit your budget constraints if needed.",
    category: "Pricing",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our team is proficient in a wide range of modern technologies including React, Next.js, Vue, Node.js, React Native, Flutter, AWS, and more. We select the right technology stack for each project based on your specific requirements and long-term goals.",
    category: "Technology",
  },
];

export function FaqAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(faqItems.map((item) => item.category))),
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Find answers to the most common questions about our services and
            process
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div className="max-w-3xl mx-auto" layout>
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
                className="mb-4"
              >
                <motion.div
                  className={`border ${openItem === faq.question ? "border-purple-300 dark:border-purple-700" : "border-gray-200 dark:border-gray-700"} rounded-lg overflow-hidden`}
                  layout
                >
                  <button
                    onClick={() =>
                      setOpenItem(
                        openItem === faq.question ? null : faq.question,
                      )
                    }
                    className="flex w-full items-center justify-between bg-white p-6 text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-750"
                  >
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <div
                      className={`transform transition-transform duration-200 ${openItem === faq.question ? "rotate-180" : ""}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openItem === faq.question && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-200 p-6 dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-300">
                            {faq.answer}
                          </p>
                          <div className="mt-4 flex">
                            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Can't find the answer you're looking for?
          </p>
          <motion.a
            href="https://wa.me/6283869916635?text=Hello,%20I%20have%20a%20question"
            className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-purple-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Support Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
