import { twMerge } from "tailwind-merge";

export const CardSubheader = ({ subheader, className }: { subheader: string; className?: string }) => {
  return (
    <div className={twMerge("flex items-center justify-center", className)}>
      <h2 className="text-textSecondary text-sm font-normal italic">{subheader}</h2>
    </div>
  );
};
