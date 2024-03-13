import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: string;
}

export const FormTextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, title, error, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col justify-center gap-1">
        <p className="text-textSecondary ml-1 text-sm">{title}</p>
        <input type={type} className="bg-background w-full rounded-md p-2" {...props} ref={ref} />
        {error && <p className="ml-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);
