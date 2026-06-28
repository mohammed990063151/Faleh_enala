"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ImageCard, type ImageCardGlow, type ImageCardSize } from "@/components/ui/ImageCard";

interface ProfilePortraitProps {
  src: string;
  alt: string;
  size?: ImageCardSize;
  className?: string;
  priority?: boolean;
  animated?: boolean;
  glow?: ImageCardGlow;
}

export function ProfilePortrait({
  src,
  alt,
  size = "hero",
  className,
  priority = false,
  animated = true,
  glow = "mixed",
}: ProfilePortraitProps) {
  const [canParallax, setCanParallax] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    setCanParallax(finePointer.matches);
    const onChange = (e: MediaQueryListEvent) => setCanParallax(e.matches);
    finePointer.addEventListener("change", onChange);
    return () => finePointer.removeEventListener("change", onChange);
  }, []);

  const enableParallax = animated && size === "hero" && canParallax;

  return (
    <motion.div
      className="relative shrink-0"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      {...(enableParallax
        ? {
            onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) / 20;
              const y = (e.clientY - rect.top - rect.height / 2) / 20;
              el.style.transform = `perspective(900px) rotateY(${-x}deg) rotateX(${y}deg)`;
            },
            onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.transform = "";
            },
          }
        : {})}
    >
      <ImageCard
        src={src}
        alt={alt}
        size={size}
        glow={glow}
        priority={priority}
        className={cn("mx-0 transition-transform duration-300", className)}
      />
    </motion.div>
  );
}
