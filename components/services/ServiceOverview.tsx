"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  IconDeviceDesktop,
  IconDeviceMobile,
  IconBrush,
  IconDatabase,
  IconCloudComputing,
  IconSeo,
  IconBulb,
  IconVideo,
  IconRobot,
  IconAd2,
  IconServer,
} from "@tabler/icons-react";

export function ServiceOverview() {
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies.",
      icon: <IconDeviceDesktop className="h-8 w-8" />,
      color: "blue",
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      icon: <IconDeviceMobile className="h-8 w-8" />,
      color: "green",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging digital experiences.",
      icon: <IconBrush className="h-8 w-8" />,
      color: "purple",
    },
    {
      id: "video-editing",
      title: "Video Editing",
      description:
        "Professional video production and editing for marketing, social media, and training.",
      icon: <IconVideo className="h-8 w-8" />,
      color: "pink",
    },
    {
      id: "automation",
      title: "Process Automation",
      description:
        "Custom automation solutions to streamline your business operations and workflows.",
      icon: <IconRobot className="h-8 w-8" />,
      color: "teal",
    },
    {
      id: "digital-marketing",
      title: "Desktop Development",
      description:
        "Custom desktop applications tailored to your business needs, ensuring performance and reliability.",
      icon: <IconDeviceDesktop className="h-8 w-8" />,
      color: "orange",
    },
    {
      id: "advertisement",
      title: "Digital Advertising",
      description:
        "Strategic ad campaigns across multiple platforms to reach your target audience.",
      icon: <IconAd2 className="h-8 w-8" />,
      color: "amber",
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description:
        "Turn your data into actionable insights and strategic advantages.",
      icon: <IconDatabase className="h-8 w-8" />,
      color: "red",
    },
    {
      id: "infrastructure",
      title: "IT Infrastructure",
      description:
        "Scalable, secure, and reliable infrastructure solutions for your business needs.",
      icon: <IconServer className="h-8 w-8" />,
      color: "slate",
    },
    {
      id: "cloud-services",
      title: "Cloud Services",
      description: "Scalable cloud solutions for businesses of all sizes.",
      icon: <IconCloudComputing className="h-8 w-8" />,
      color: "sky",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic.",
      icon: <IconSeo className="h-8 w-8" />,
      color: "emerald",
    },
    {
      id: "consulting",
      title: "Digital Consulting",
      description:
        "Strategic guidance to navigate your digital transformation.",
      icon: <IconBulb className="h-8 w-8" />,
      color: "indigo",
    },
  ];

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24" id="allService">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We offer a wide range of digital solutions to help your business
            succeed online.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-xl transition-colors duration-300 ${
                    hoveredId === service.id
                      ? `bg-${service.color}-600 text-white`
                      : `bg-${service.color}-100 text-${service.color}-600 dark:bg-${service.color}-900/20 dark:text-${service.color}-400`
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 w-full transition-transform duration-300 ${
                  hoveredId === service.id
                    ? "translate-y-0"
                    : "translate-y-full"
                } bg-${service.color}-500`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
