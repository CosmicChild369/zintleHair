import React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef(function Input({ className, type = "text", ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-full border border-input bg-white px-4 py-2 text-sm outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-200",
        className
      )}
      {...props}
    />
  );
});