"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
    <>
      <button
        type="button"
        className="p-3 border-2 rounded-md dark:border-gray-700 fixed bottom-5 left-5"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? <Sun /> : <Moon />}
      </button>
    </>
  );
};

export default ThemeToggle;
