"use client";

import { Themes, useTheme } from "@/hooks/useTheme";
import { twMerge } from "tailwind-merge";
import { ThemeItem } from "./theme-item";
import { HiChevronDown } from "react-icons/hi2";
import { IconContext } from "react-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { themeConfig } from "@/configs/themes";

export const ThemeSwitcher = ({ color, className }: { color?: string; className?: string }) => {
  const [theme, setTheme] = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <IconContext.Provider value={{ color: color || "#FFF" }}>
      <div className="relative">
        <div
          className={twMerge(
            "flex h-9 w-28 items-center gap-2 rounded-md px-2 text-sm text-neutral-300 outline outline-1 outline-neutral-700 hover:cursor-pointer",
            className,
          )}
          onClick={() => setOpen(!open)}
        >
          <ThemeItem theme={theme} />
          <HiChevronDown className="ml-auto text-lg" />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ width: "10rem", height: 0, opacity: 0 }}
              animate={{ height: "9rem", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="absolute right-0 mt-5 overflow-hidden rounded-md bg-[#121212] shadow-md outline outline-1 outline-neutral-700"
            >
              <div className="flex flex-col gap-1 p-2 text-neutral-300">
                {Object.keys(themeConfig).map((theme) => (
                  <div
                    key={theme}
                    className="rounded-md p-2 hover:bg-[#1E1E1E]"
                    onClick={() => {
                      setTheme(theme as Themes);
                      setOpen(false);
                    }}
                  >
                    <ThemeItem theme={theme} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </IconContext.Provider>
  );
};
