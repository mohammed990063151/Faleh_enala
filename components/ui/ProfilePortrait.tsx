"use client";

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
  glow = "mixed",
}: ProfilePortraitProps) {
  return (
    <ImageCard
      src={src}
      alt={alt}
      size={size}
      glow={glow}
      priority={priority}
      className={cn("mx-0", className)}
    />
  );
}
