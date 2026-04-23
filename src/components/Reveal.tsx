"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: keyof HTMLElementTagNameMap;
}

const directionMap: Record<Direction, (d: number) => string> = {
  up: (d) => `translateY(${d}px)`,
  down: (d) => `translateY(-${d}px)`,
  left: (d) => `translateX(${d}px)`,
  right: (d) => `translateX(-${d}px)`,
  none: () => "none",
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 32,
  once = true,
  className = "",
  style,
  as: Tag = "div" as keyof HTMLElementTagNameMap,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = directionMap[direction](distance);
    el.style.transition = `opacity ${duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform ${duration}s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0,0)";
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, duration, distance, once]);

  const Component = Tag as string;

  return (
    // @ts-expect-error -- dynamic tag
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}
