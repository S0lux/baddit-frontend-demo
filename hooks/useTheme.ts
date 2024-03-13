import { useEffect, useState } from "react";

export type Themes = "light" | "dark" | "system" | undefined;

export const useTheme = () => {
  const [theme, setTheme] = useState<Themes>();

  // Get saved theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    } else setTheme("system");
  }, []);

  // Set theme in local storage and apply it to the document
  useEffect(() => {
    if (theme === "system") localStorage.removeItem("theme");
    if (theme === "light") localStorage.setItem("theme", "light");
    if (theme === "dark") localStorage.setItem("theme", "dark");

    if (theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return [theme, setTheme] as const;
};
