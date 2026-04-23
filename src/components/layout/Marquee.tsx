"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 20,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden whitespace-nowrap flex items-center",
        className
      )}
    >
      <div
        className={cn(
          "flex gap-1 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="flex gap-1 shrink-0">{children}</span>
        <span className="flex gap-1 shrink-0" aria-hidden="true">{children}</span>
      </div>
    </div>
  );
}

export function MarqueeBar({
  text,
  className,
  speed = 25,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  return (
    <Marquee className={className} speed={speed}>
      <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider">
        {text}
      </span>
      <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider">
        {"///"}
      </span>
      <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider">
        {text}
      </span>
      <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider">
        {"///"}
      </span>
    </Marquee>
  );
}
