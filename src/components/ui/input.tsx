import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md  bg-background px-3 py-2 text-sm ring-offset-background  file:bg-transparent file:rounded-lg file:text-sm file:font-medium file:text-indigo-500 file:mr-8 file:border file:border-indigo-500/40 file placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50 bg-gray-900 outline-none border border-white/20  focus:border focus:border-indigo-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
