"use client";
import { motion } from "motion/react";
import { useState } from "react";
import {
  IconDownload,
  IconBook,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandPython,
} from "@tabler/icons-react";

interface EducationalResource {
  id: string;
  title: string;
  description: string;
  fileUrl?: string;
  icon: React.ReactNode;
  color: string;
  fileSize?: string;
  fileType?: string;
  isComingSoon?: boolean;
  customIcon?: React.ReactNode;
}

export function ServicesEducation() {
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  const educationalResources: EducationalResource[] = [
    {
      id: "js-ts-fundamentals",
      title: "HTML + CSS",
      description:
        "HTML and CSS are the foundational technologies for building web pages. This resource covers the basics of structuring content with HTML and styling it with CSS, providing a solid starting point for web development..",
      fileUrl: "/resources/JavaScriptFundamentals.pdf",
      icon: "HTML + CSS",
      customIcon: (
        <div className="flex items-center">
          <IconBrandHtml5 className="h-6 w-6 text-orange-500" />
          <span className="mx-0.5">+</span>
          <IconBrandCss3 className="h-6 w-6 text-sky-500" />
        </div>
      ),
      color: "js-ts-gradient",
      fileSize: "1.5 MB",
      fileType: "PDF",
      isComingSoon: true,
    },
    {
      id: "js-ts-fundamentals",
      title: "JavaScript + TypeScript",
      description:
        "Core concepts of JavaScript and TypeScript explained clearly with practical examples for beginners and intermediate developers.",
      fileUrl: "/resources/JavaScriptFundamentals.pdf",
      icon: "TypeScript",
      customIcon: (
        <div className="flex items-center">
          <IconBrandHtml5 className="h-6 w-6 text-orange-500" />
          <span className="mx-0.5">+</span>
          <IconBrandCss3 className="h-6 w-6 text-sky-500" />
        </div>
      ),
      color: "js-ts-gradient",
      fileSize: "1.5 MB",
      fileType: "PDF",
      isComingSoon: true,
    },
    {
      id: "react-patterns",
      title: "React Design Patterns",
      description:
        "Common React patterns and architectures to build scalable and maintainable applications.",
      fileUrl: "/resources/ReactPatterns.pdf",
      icon: <IconBrandReact className="h-6 w-6" />,
      color: "cyan",
      fileSize: "1.8 MB",
      fileType: "PDF",
      isComingSoon: true,
    },
    {
      id: "corvus-lms",
      title: "Python",
      description:
        "Python is a versatile programming language known for its readability and simplicity. This resource covers Python fundamentals, data structures, and practical applications for web development, making it an excellent choice for both beginners and experienced developers.",
      icon: <IconBrandPython className="h-6 w-6" />,
      color: "yellow",
      isComingSoon: true,
    },
    {
      id: "corvus-lms",
      title: "Corvus LMS",
      description:
        "Our comprehensive Learning Management System designed specifically for web development teams and educational institutions.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z"
            clipRule="evenodd"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      ),
      color: "purple",
      isComingSoon: true,
    },
  ];

  const handleDownload = (resource: EducationalResource) => {
    if (resource.isComingSoon || !resource.fileUrl) return;

    setDownloadStarted(resource.id);

    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = resource.fileUrl;
    link.download = resource.title.replace(/\s+/g, "") + ".pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset download status after 2 seconds
    setTimeout(() => {
      setDownloadStarted(null);
    }, 2000);
  };

  const getResourceByColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400";
      case "blue":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400";
      case "yellow":
        return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "cyan":
        return "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400";
      case "green":
        return "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400";
      case "purple":
        return "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400";
      case "js-ts-gradient":
        return "bg-gradient-to-r from-yellow-100 to-blue-100 text-yellow-600 dark:from-yellow-900/20 dark:to-blue-900/20 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
    }
  };

  const getResourceByColorActive = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-orange-600 text-white";
      case "blue":
        return "bg-blue-600 text-white";
      case "yellow":
        return "bg-yellow-600 text-white";
      case "cyan":
        return "bg-cyan-600 text-white";
      case "green":
        return "bg-green-600 text-white";
      case "purple":
        return "bg-purple-600 text-white";
      case "js-ts-gradient":
        return "bg-gradient-to-r from-yellow-500 to-blue-500 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

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
          <div className="inline-flex items-center justify-center rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
            <IconBook className="mr-2 h-4 w-4" />
            Educational Resources
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            Web Development Learning Materials
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Download free resources to help you master web development
            technologies and best practices.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {educationalResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full rounded-xl bg-white border border-gray-200 shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700"
              onMouseEnter={() => setActiveResource(resource.id)}
              onMouseLeave={() => setActiveResource(null)}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 flex-grow">
                <div
                  className={`mb-4 inline-flex rounded-full p-3 ${getResourceByColor(
                    resource.color,
                  )}`}
                >
                  {resource.customIcon || resource.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {resource.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {resource.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                  {resource.fileType && !resource.isComingSoon && (
                    <span className="flex items-center">
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      {resource.fileType}
                    </span>
                  )}
                  {resource.fileSize && !resource.isComingSoon && (
                    <span className="flex items-center">
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        />
                      </svg>
                      {resource.fileSize}
                    </span>
                  )}
                  {resource.isComingSoon && (
                    <span className="flex items-center text-amber-500 dark:text-amber-400">
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6">
                <motion.button
                  whileHover={{ scale: resource.isComingSoon ? 1 : 1.05 }}
                  whileTap={{ scale: resource.isComingSoon ? 1 : 0.95 }}
                  onClick={() => handleDownload(resource)}
                  className={`w-full flex items-center justify-center rounded-lg px-4 py-3 font-medium transition-colors ${
                    resource.isComingSoon
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
                      : downloadStarted === resource.id
                        ? "bg-green-500 text-white"
                        : activeResource === resource.id
                          ? getResourceByColorActive(resource.color)
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                  }`}
                  disabled={downloadStarted !== null || resource.isComingSoon}
                >
                  {resource.isComingSoon ? (
                    <>
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Coming Soon
                    </>
                  ) : downloadStarted === resource.id ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <IconDownload className="mr-2 h-5 w-5" />
                      Download
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 mx-auto max-w-3xl p-8 rounded-xl bg-indigo-50 text-center dark:bg-indigo-950/30"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Need Customized Training Materials?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team can develop specialized learning resources tailored to your
            team's specific needs and technology stack.
          </p>
          <motion.a
            href="https://wa.me/6283869916635?text=Hello,%20I%20need%20a%custom%20education%20for%20my%20needs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-indigo-700"
          >
            Contact Our Education Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
