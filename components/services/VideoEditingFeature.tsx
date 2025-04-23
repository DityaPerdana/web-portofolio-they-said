"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  IconVideo,
  IconEdit,
  IconDeviceTv,
  IconMovie,
  IconBrandYoutube,
  IconBrandTiktok,
  IconPresentation,
} from "@tabler/icons-react";

const videoServices = [
  {
    id: "commercial",
    title: "Commercial Videos",
    description:
      "Professional promotional videos that showcase your products or services with cinematic quality.",
    icon: <IconDeviceTv className="h-8 w-8" />,
  },
  {
    id: "social",
    title: "Social Media Content",
    description:
      "Engaging short-form videos optimized for platforms like Instagram, TikTok, and YouTube.",
    icon: <IconBrandTiktok className="h-8 w-8" />,
  },
  {
    id: "corporate",
    title: "Corporate Videos",
    description:
      "Polished corporate communications, testimonials, and company culture videos.",
    icon: <IconPresentation className="h-8 w-8" />,
  },
  {
    id: "training",
    title: "Training Videos",
    description:
      "Clear, instructional content for employee onboarding, training, and education.",
    icon: <IconEdit className="h-8 w-8" />,
  },
  {
    id: "motion",
    title: "Motion Graphics",
    description:
      "Dynamic animations and visual effects that bring your brand and messages to life.",
    icon: <IconMovie className="h-8 w-8" />,
  },
  {
    id: "youtube",
    title: "YouTube Strategy",
    description:
      "Complete YouTube channel management, content creation, and growth strategy.",
    icon: <IconBrandYoutube className="h-8 w-8" />,
  },
];

export function VideoEditingFeature() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
            <IconVideo className="mr-2 h-4 w-4" />
            Video Production
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Professional Video Editing Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            From concept to final cut, we create compelling video content that
            captivates your audience and drives engagement.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Video preview section */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl"
            href="https://drive.google.com/file/d/1e0jwLQBKYhxoDURi0zSn4xhAUSscMqO_/view?usp=drive_link"
            target="_blank"
          >
            <div className="absolute inset-0 z-10"></div>
            {/* Video thumbnail or video player would go here */}
            <img
              src="/thumbnail.png"
              alt="Video Editing Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </div>
          </motion.a>

          {/* Services list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Video Production Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our video production team combines technical expertise with
              creative storytelling to deliver videos that leave a lasting
              impression on your audience.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {videoServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setActiveVideo(service.id)}
                  onMouseLeave={() => setActiveVideo(null)}
                  className={`rounded-lg border p-4 transition-all ${
                    activeVideo === service.id
                      ? "border-pink-500 bg-pink-50 dark:border-pink-500/50 dark:bg-pink-900/10"
                      : "border-gray-200 bg-white hover:border-pink-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-pink-700"
                  }`}
                >
                  <div className="flex items-start">
                    <div
                      className={`mr-3 rounded-full p-2 ${
                        activeVideo === service.id
                          ? "bg-pink-500 text-white"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">
                        {service.title}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-pink-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600"
              >
                Explore Our Video Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
