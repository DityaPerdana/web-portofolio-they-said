"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconCode,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconBrush,
  IconChevronDown,
  IconVideo,
  IconRobot,
  IconServer,
  IconAd2,
} from "@tabler/icons-react";

const services = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: <IconDeviceDesktop className="h-6 w-6" />,
    description:
      "We create custom websites and web applications that deliver exceptional user experiences and drive business results.",
    features: [
      "Custom website development",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "Content Management Systems",
      "API development and integration",
      "Web application development",
    ],
    technologies: [
      "React",
      "Next.js",
      "Vue",
      "Node.js",
      "PHP",
      "WordPress",
      "Shopify",
    ],
    color: "blue",
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    icon: <IconDeviceMobile className="h-6 w-6" />,
    description:
      "We build mobile applications that engage users with smooth performance and intuitive interfaces across all devices.",
    features: [
      "Native iOS development",
      "Native Android development",
      "Cross-platform development",
      "App Store optimization",
      "App maintenance and support",
      "Mobile app strategy",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    color: "green",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: <IconBrush className="h-6 w-6" />,
    description:
      "We craft delightful user experiences with beautiful interfaces that balance aesthetics with functionality.",
    features: [
      "User research & personas",
      "User journey mapping",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Design systems",
      "Usability testing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"],
    color: "purple",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    icon: <IconVideo className="h-6 w-6" />,
    description:
      "We create compelling video content that captures attention, tells your story, and drives engagement across platforms.",
    features: [
      "Marketing videos",
      "Product demonstrations",
      "Social media content",
      "Training & educational videos",
      "Event coverage",
      "Motion graphics & animation",
    ],
    technologies: [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "Final Cut Pro",
      "Cinema 4D",
    ],
    color: "pink",
  },
  {
    id: "automation",
    title: "Process Automation",
    icon: <IconRobot className="h-6 w-6" />,
    description:
      "We help businesses automate repetitive tasks and workflows to increase efficiency, reduce errors, and free up human resources.",
    features: [
      "Workflow automation",
      "Business process optimization",
      "Custom automation scripts",
      "Integration between systems",
      "RPA (Robotic Process Automation)",
      "Automated reporting",
    ],
    technologies: [
      "Power Automate",
      "Zapier",
      "Python",
      "Node.js",
      "UiPath",
      "Ansible",
    ],
    color: "teal",
  },
  {
    id: "advertisement",
    title: "Digital Advertising",
    icon: <IconAd2 className="h-6 w-6" />,
    description:
      "We create and manage strategic ad campaigns that target your ideal audience and maximize your return on investment.",
    features: [
      "PPC campaign management",
      "Social media advertising",
      "Display advertising",
      "Retargeting campaigns",
      "A/B testing",
      "Ad performance analytics",
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "LinkedIn Ads",
      "Twitter Ads",
      "TikTok Ads",
      "Programmatic",
    ],
    color: "amber",
  },
  {
    id: "infrastructure",
    title: "IT Infrastructure",
    icon: <IconServer className="h-6 w-6" />,
    description:
      "We design, implement, and manage secure, scalable IT infrastructure solutions tailored to your business needs.",
    features: [
      "Cloud infrastructure setup",
      "Network design & security",
      "Server management",
      "Backup & disaster recovery",
      "System monitoring",
      "Infrastructure optimization",
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "VMware",
    ],
    color: "slate",
  },
  {
    id: "custom-dev",
    title: "Custom Development",
    icon: <IconCode className="h-6 w-6" />,
    description:
      "We deliver tailored software solutions to address your unique business challenges and opportunities.",
    features: [
      "Custom software development",
      "Legacy system modernization",
      "Enterprise applications",
      "Integration services",
      "DevOps & CI/CD implementation",
      "Maintenance & support",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C#",
      ".NET",
      "AWS",
      "Azure",
    ],
    color: "indigo",
  },
];

export function ServiceDetails() {
  const [activeService, setActiveService] = useState(services[0].id);
  const [expandedFeatures, setExpandedFeatures] = useState(true);
  const [expandedTechnologies, setExpandedTechnologies] = useState(true);

  const handleServiceChange = (serviceId: string) => {
    setActiveService(serviceId);
    setExpandedFeatures(true);
    setExpandedTechnologies(true);
  };

  const getActiveService = () => {
    return (
      services.find((service) => service.id === activeService) || services[0]
    );
  };

  // Group services into rows for better display
  const serviceRows = [
    services.slice(0, 4), // First row
    services.slice(4), // Second row
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Our Expertise in Detail
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Deep dive into our core services and discover how we can help you
            achieve your goals.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col space-y-3">
            {serviceRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-4"
              >
                {row.map((service) => (
                  <motion.button
                    key={service.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceChange(service.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-full px-6 py-3 font-medium transition-colors",
                      activeService === service.id
                        ? `bg-${service.color}-600 text-white`
                        : `bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700`,
                    )}
                  >
                    {service.icon}
                    <span>{service.title}</span>
                  </motion.button>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800"
              >
                {/* Header with service info */}
                <div
                  className={`bg-${getActiveService().color}-600 p-8 text-white`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                      {getActiveService().icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">
                        {getActiveService().title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-lg text-white/90">
                    {getActiveService().description}
                  </p>
                </div>

                {/* Features section */}
                <div className="p-8">
                  <div className="mb-6">
                    <button
                      onClick={() => setExpandedFeatures(!expandedFeatures)}
                      className="flex w-full items-center justify-between"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        What We Offer
                      </h4>
                      <IconChevronDown
                        className={`h-5 w-5 transition-transform ${expandedFeatures ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedFeatures && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {getActiveService().features.map(
                              (feature, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-2"
                                >
                                  <div
                                    className={`h-2 w-2 rounded-full bg-${getActiveService().color}-500`}
                                  ></div>
                                  <span className="text-gray-700 dark:text-gray-300">
                                    {feature}
                                  </span>
                                </motion.div>
                              ),
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Technologies section */}
                  <div className="mt-6 border-t border-gray-200 pt-6 dark:border-gray-700">
                    <button
                      onClick={() =>
                        setExpandedTechnologies(!expandedTechnologies)
                      }
                      className="flex w-full items-center justify-between"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Technologies We Use
                      </h4>
                      <IconChevronDown
                        className={`h-5 w-5 transition-transform ${expandedTechnologies ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {expandedTechnologies && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 flex flex-wrap gap-2">
                            {getActiveService().technologies.map(
                              (tech, index) => (
                                <motion.span
                                  key={index}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: index * 0.05 }}
                                  className={`rounded-full bg-${getActiveService().color}-100 px-3 py-1 text-sm font-medium text-${getActiveService().color}-800 dark:bg-${getActiveService().color}-900/20 dark:text-${getActiveService().color}-300`}
                                >
                                  {tech}
                                </motion.span>
                              ),
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-8 text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`rounded-lg bg-${getActiveService().color}-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-${getActiveService().color}-700`}
                    >
                      Learn More About {getActiveService().title}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
