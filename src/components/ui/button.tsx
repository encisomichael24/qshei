"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const buttonVariants = {
  primary: "bg-[var(--color-terracotta)] text-white hover:bg-[var(--color-terracotta-hover)] shadow-[0_8px_30px_rgb(201,122,99,0.3)]",
  secondary: "bg-[var(--color-navy)] text-white hover:bg-[#253245] shadow-[0_8px_30px_rgb(26,36,51,0.2)]",
  outline: "border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white",
  ghost: "hover:bg-[var(--color-sage)] text-[var(--color-navy)]",
};

const buttonSizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-10 text-lg",
  icon: "h-12 w-12",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...(props as HTMLMotionProps<"button">)}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
