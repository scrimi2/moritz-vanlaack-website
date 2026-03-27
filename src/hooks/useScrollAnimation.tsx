"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface UseScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
}

export function useScrollAnimation(
  animationFn: (element: HTMLElement, gsapInstance: typeof gsap) => void,
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      animationFn(element, gsap);
    }, element);

    return () => ctx.revert();
  }, [animationFn]);

  return ref;
}

export function useScrollReveal(options: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: options.start || "top 85%",
          once: options.once !== false,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [options.start, options.once]);

  return ref;
}
