"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ImageCardSize = "hero" | "medium" | "small" | "full";
export type ImageCardGlow = "gold" | "purple" | "cyan" | "mixed";

const sizeClasses: Record<ImageCardSize, string> = {
  hero: "w-[160px] xs:w-[175px] sm:w-[190px] md:w-[210px] lg:w-[230px]",
  medium: "w-full max-w-[150px] sm:max-w-[170px] md:max-w-[190px]",
  small: "w-[90px] sm:w-[110px]",
  full: "w-full",
};

const glowClasses: Record<ImageCardGlow, string> = {
  gold: "image-edge-glow-gold",
  purple: "image-edge-glow-purple",
  cyan: "image-edge-glow-cyan",
  mixed: "image-edge-glow-mixed",
};

interface ImageCardProps {
  src: string;
  alt: string;
  size?: ImageCardSize;
  glow?: ImageCardGlow;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  objectPosition?: string;
  caption?: string;
  children?: ReactNode;
  sizes?: string;
}

export function ImageCard({
  src,
  alt,
  size = "full",
  glow = "mixed",
  className,
  imageClassName,
  priority = false,
  objectPosition = "center 15%",
  caption,
  children,
  sizes,
}: ImageCardProps) {
  const defaultSizes =
    size === "hero"
      ? "(max-width: 640px) 175px, (max-width: 1024px) 210px, 230px"
      : size === "medium"
        ? "(max-width: 640px) 150px, 190px"
        : size === "small"
          ? "(max-width: 640px) 90px, 110px"
          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <div className={cn("relative mx-auto", sizeClasses[size], className)}>
      <div className={cn("image-glow-aura", glowClasses[glow])} aria-hidden />
      <div className={cn("image-edge-glow relative overflow-hidden rounded-2xl sm:rounded-3xl", glowClasses[glow])}>
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes ?? defaultSizes}
            className={cn("object-cover", imageClassName)}
            style={{ objectPosition }}
          />
          <div className="absolute inset-0 image-luxury-overlay" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
        {caption && (
          <p className="absolute inset-x-0 bottom-0 z-10 p-3 text-xs font-medium text-gold sm:p-4 sm:text-sm">
            {caption}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
