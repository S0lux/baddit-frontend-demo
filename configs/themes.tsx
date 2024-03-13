import { ReactNode } from "react";
import { MdBrightnessAuto, MdLightMode, MdDarkMode } from "react-icons/md";

export const themeConfig: { [key: string]: { icon: ReactNode; name: string } } = {
  light: {
    icon: <MdLightMode />,
    name: "Light",
  },
  dark: {
    icon: <MdDarkMode />,
    name: "Dark",
  },
  system: {
    icon: <MdBrightnessAuto />,
    name: "System",
  },
};
