import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={twMerge("bg-backgroundSecondary rounded py-10 shadow-md", className)}>{children}</div>;
};
