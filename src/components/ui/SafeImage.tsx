"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SafeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  fallbackClassName?: string;
}

export function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  sizes,
  priority,
  className,
  containerClassName,
  fallbackClassName,
}: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={cn(
          "bg-[#1a1a1a] flex items-center justify-center border border-[#333] overflow-hidden",
          fill ? "absolute inset-0 w-full h-full" : containerClassName
        )}
        style={
          fill
            ? undefined
            : {
                width: width ? `${width}px` : "100%",
                height: height ? `${height}px` : "100%",
              }
        }
      >
        <span className={cn(
          "text-[#555] font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-widest text-center px-4 leading-relaxed",
          fallbackClassName
        )}>
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
