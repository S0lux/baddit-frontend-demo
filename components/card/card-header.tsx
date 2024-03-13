import { twMerge } from "tailwind-merge";

export const CardHeader = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={twMerge("mb-1 flex items-center justify-center", className)}>
      <h2 className="text-textPrimary text-2xl font-bold">{title}</h2>
    </div>
  );
};
