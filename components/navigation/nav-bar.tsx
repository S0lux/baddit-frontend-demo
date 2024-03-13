import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const NavBar = ({ title, children, className }: { title: string; children: ReactNode; className?: string }) => {
  return (
    <div className={twMerge("sticky top-0 flex h-16 items-center bg-[#121212] px-28 py-2", className)}>
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <div className="ml-auto flex items-center gap-5">{children}</div>
    </div>
  );
};
