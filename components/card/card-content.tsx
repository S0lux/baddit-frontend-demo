import { twMerge } from "tailwind-merge";

export const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={twMerge("text-textSecondary flex flex-col items-center gap-5 px-20 py-6", className)}>
      {children}
    </div>
  );
};
