"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function Button({
  variant = "primary",
  children,
  className,
  href,
  onClick,
  external,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold to-gold-light text-navy-950 shadow-[0_4px_24px_rgba(201,169,98,0.35),0_0_40px_rgba(201,169,98,0.15)] hover:shadow-[0_6px_32px_rgba(201,169,98,0.45),0_0_60px_rgba(201,169,98,0.2)] hover:scale-[1.03]",
    outline:
      "border border-gold/35 text-gold bg-white/[0.03] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-gold/60 hover:bg-gold/[0.08] hover:shadow-[0_0_30px_rgba(201,169,98,0.12)]",
    ghost: "text-cream/70 hover:text-gold",
  };

  const content = (
    <>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.55 }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    const isExternal = external ?? href.startsWith("http");
    return (
      <motion.a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(base, variants[variant], className)}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
