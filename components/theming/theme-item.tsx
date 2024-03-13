import { twMerge } from "tailwind-merge";
import { themeConfig } from "@/configs/themes";

export const ThemeItem = ({ theme, className }: { theme: string | undefined; className?: string }) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      {themeConfig[theme || "light"].icon} {themeConfig[theme || "light"].name}
    </div>
  );
};
