"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SplitType from "split-type";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  stagger = 0.03,
  as: Tag = "div",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.textContent = text;

    const split = new SplitType(element, {
      types: "chars,words",
    });

    gsap.set(split.chars, {
      opacity: 0,
      y: 20,
    });

    gsap.to(split.chars, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: "power2.out",
    });

    return () => {
      split.revert();
    };
  }, [text, delay, duration, stagger]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      aria-label={text}
    />
  );
}
