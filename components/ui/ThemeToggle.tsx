"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until component is mounted (to avoid hydration mismatch)
  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="mt-1 text-sm p-2 shadow-lg hover:shadow-xl rounded-md text-white font-light hover:text-gray-300 transition duration-200 ease-linear cursor-pointer flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4 text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
