"use client";

import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  /** Show the trailing arrow icon. Defaults to true. */
  showIcon?: boolean;
  /** "solid" matches the reference screenshot. "outline" is a secondary variant. */
  variant?: "solid" | "outline";
}

/**
 * GradientButton
 * Pill-shaped CTA button. Blue gloss gradient with a soft glow shadow,
 * a subtle lift on hover, and the arrow nudging forward on hover —
 * mirrors the "Book a Free Audit" button in the reference design.
 */
export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, showIcon = true, variant = "solid", className = "", ...props }, ref) => {
    const base =
      "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3B9EF6]";

    const solid =
      "text-white bg-gradient-to-b from-[#3FA0F7] to-[#0A63E0] shadow-[0_12px_28px_-8px_rgba(10,99,224,0.65),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_16px_34px_-8px_rgba(10,99,224,0.75),inset_0_1px_0_rgba(255,255,255,0.45)]";

    const outline =
      "text-[#0A63E0] bg-white border border-[#CFE3FC] shadow-[0_6px_16px_-6px_rgba(10,99,224,0.25)] hover:bg-[#F3F8FF]";

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97, y: 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
        {...props}
      >
        <span>{children}</span>
        {showIcon && (
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        )}
      </motion.button>
    );
  }
);

GradientButton.displayName = "GradientButton";