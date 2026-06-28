"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 120, damping: 20 });
  const springY = useSpring(my, { stiffness: 120, damping: 20 });
  const rotateY = useTransform(springX, [-40, 40], [3, -3]);
  const rotateX = useTransform(springY, [-40, 40], [-3, 3]);

  const handleMove = (e: React.MouseEvent) => {
    if (!animated || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - rect.left - rect.width / 2);
    my.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative shrink-0"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={animated && size === "hero" ? { rotateY, rotateX, perspective: 900 } : undefined}
    >
      <ImageCard
        src={src}
        alt={alt}
        size={size}
        glow={glow}
        priority={priority}
        className={cn("mx-0", className)}
      />
    </motion.div>
  );
}
