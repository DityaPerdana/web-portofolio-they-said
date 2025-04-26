"use client";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { IconQuote, IconStar, IconStarFilled } from "@tabler/icons-react";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
  service: string;
  image: string;
}

const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   content: "Working with the team was transformative for our business.",
  //   author: "Sarah Johnson",
  //   position: "CEO, TechStart Inc.",
  //   rating: 5,
  //   service: "Web Development",
  //   image: "https://i.pravatar.cc/150?img=32",
  // },
];

export function ServiceTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (testimonials.length === 0) {
    return (
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 dark:from-black dark:to-gray-900/70">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Client Success Stories
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              No client yet, be our first client
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 dark:from-black dark:to-gray-900/70">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Client Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it. See what our clients have to say
            about working with us.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="relative h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 300 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x:
                    activeIndex === index
                      ? 0
                      : activeIndex > index
                        ? -300
                        : 300,
                  zIndex: activeIndex === index ? 10 : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
              >
                <div className="flex w-full max-w-4xl flex-col rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800 md:flex-row md:items-center">
                  <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-8">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-purple-100 dark:border-purple-900/30 md:h-32 md:w-32">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          {i < testimonial.rating ? (
                            <IconStarFilled className="h-5 w-5" />
                          ) : (
                            <IconStar className="h-5 w-5" />
                          )}
                        </span>
                      ))}
                    </div>

                    <div className="relative">
                      <IconQuote className="absolute -left-2 -top-2 h-8 w-8 text-purple-200 dark:text-purple-800" />
                      <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-300">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="font-bold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}
                      </p>
                      <div className="mt-2 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        {testimonial.service}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-purple-600"
                    : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
