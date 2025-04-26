export function ProjectHeroMobile() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50/80 to-purple-50/80 dark:from-blue-950/20 dark:to-purple-950/20" />

      <div className="absolute top-1/4 left-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl filter dark:bg-blue-900/20" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-purple-300/20 blur-3xl filter dark:bg-purple-900/20" />
      <div className="container relative z-10 mx-auto px-4 py-32 md:py-40">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="max-w-xl">
            <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
              Our Portfolio
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white mb-6">
              Transforming{" "}
              <span className="text-blue-600 dark:text-blue-400">Ideas</span>{" "}
              into Digital{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Reality
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore our portfolio of innovative digital solutions that have
              helped businesses elevate their online presence and achieve their
              goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#featured-projects"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-colors hover:bg-blue-700"
              >
                Explore Our Work
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 shadow-lg transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Scroll to explore
          </span>
          <svg
            className="h-6 w-6 text-gray-600 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
