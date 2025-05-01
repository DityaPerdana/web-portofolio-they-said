"use client";
import { motion } from "motion/react";

export function ServiceHero() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-purple-50 to-white py-24 dark:from-purple-950/20 dark:to-black">
      <div className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/3 rounded-full bg-blue-200 opacity-20 blur-3xl filter dark:bg-blue-700"></div>
      <div className="absolute right-0 bottom-1/4 h-64 w-64 translate-x-1/3 rounded-full bg-purple-200 opacity-20 blur-3xl filter dark:bg-purple-700"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Our Services
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Transforming{" "}
              <span className="text-blue-600 dark:text-blue-400">ideas</span>{" "}
              into digital reality
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
              From web and mobile development to video production and IT
              infrastructure, we offer comprehensive digital solutions to help
              businesses thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#allService"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                View All Services
              </motion.a>
              <motion.a
                href="https://wa.me/6283869916635?text=Hello,%20I%20need%20a%20technology%20solution%20for%20my%20needs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Schedule Consultation
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 -m-16 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 blur-2xl filter dark:from-blue-900/20 dark:to-purple-900/20"></div>

            <div className="relative rounded-xl bg-white p-3 shadow-2xl dark:bg-gray-800">
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    title: "Web Development",
                    color: "bg-blue-500",
                    icon: "🌐",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20web%20development%20for%20my%20business"
                  },
                  {
                    title: "Mobile Apps",
                    color: "bg-green-500",
                    icon: "📱",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20mobile%20app%20development%20for%20my%20business"
                  },
                  {
                    title: "UI/UX Design",
                    color: "bg-purple-500",
                    icon: "🎨",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20UI%20%UX20development%20for%20my%20business"
                  },
                  {
                    title: "Video Editing",
                    color: "bg-pink-500",
                    icon: "🎬",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20video%20editing%20for%20my%20business"
                  },
                  {
                    title: "IT Infrastructure",
                    color: "bg-slate-500",
                    icon: "🖥️",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20IT%20Infrastucture%20solution%20for%20my%20business"
                  },
                  {
                    title: "Automation",
                    color: "bg-teal-500",
                    icon: "🤖",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20automation%20for%20my%20business"
                  },
                  {
                    title: "Digital Marketing",
                    color: "bg-orange-500",
                    icon: "📈",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20digital%20marketing%20for%20my%20business"
                  },
                  {
                    title: "Education",
                    color: "bg-amber-500",
                    icon: "🎓",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20education%20solution%20for%20my%20needs"
                  },
                  {
                    title: "Cloud Services",
                    color: "bg-blue-500",
                    icon: "☁️",
                    link: "https://wa.me/6283869916635?text=Hello%20i%20need%20cloud%20solution%20for%20my%20business"
                  },
                ].map((service, index) => (
                  <motion.a
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    href={service.link}
                    className="flex flex-col rounded-lg bg-white p-4 shadow-md dark:bg-gray-900"
                  >
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${service.color} text-xl text-white`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white text-wrap">
                      {service.title}
                    </h3>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
