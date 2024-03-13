import { twMerge } from "tailwind-merge";

export const NavItem = ({ text, href, className }: { text: string; href: string; className?: string }) => {
  return (
    <a href={href}>
      <div className={twMerge("flex min-w-6 items-center text-neutral-300", className)}>{text}</div>
    </a>
  );
};
