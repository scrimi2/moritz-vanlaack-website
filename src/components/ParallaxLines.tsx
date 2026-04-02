'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'next-themes';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const LIGHT_STROKE = '#7c3aed';
const LIGHT_STROKE_ON_PURPLE = 'rgba(255, 255, 255, 0.35)';
const DARK_STROKE = '#a78bfa';
const DARK_STROKE_ON_PURPLE = 'rgba(255, 255, 255, 0.35)';

export default function ParallaxLines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerARefs = useRef<(SVGPathElement | SVGRectElement | null)[]>([]);
  const layerBRefs = useRef<(SVGPathElement | SVGRectElement | null)[]>([]);
  const layerCRefs = useRef<(SVGPathElement | SVGRectElement | null)[]>([]);
  const overPurpleRef = useRef(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const getStroke = (isDark: boolean, onPurple: boolean) => {
    if (onPurple) return isDark ? DARK_STROKE_ON_PURPLE : LIGHT_STROKE_ON_PURPLE;
    return isDark ? DARK_STROKE : LIGHT_STROKE;
  };

  // Update stroke colors when theme changes
  useEffect(() => {
    const allEls = [
      ...layerARefs.current,
      ...layerBRefs.current,
      ...layerCRefs.current,
    ].filter(Boolean);
    if (allEls.length === 0) return;
    const isDark = resolvedTheme === 'dark';
    const stroke = getStroke(isDark, overPurpleRef.current);
    allEls.forEach((el) => el?.setAttribute('stroke', stroke));
  }, [resolvedTheme]);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const allStrokeElements = [
        ...layerARefs.current,
        ...layerBRefs.current,
        ...layerCRefs.current,
      ].filter(Boolean);

      // Fade in after hero
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: '#about',
            start: 'top 95%',
            end: 'top 60%',
            scrub: true,
          },
        }
      );

      // Parallax: each layer translates at a different rate (skip if reduced motion)
      if (!prefersReducedMotion) {
        gsap.fromTo(
          containerRef.current?.querySelectorAll('[data-parallax-layer="a"]') ?? [],
          { yPercent: 30 },
          {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1.5 },
          }
        );

        gsap.fromTo(
          containerRef.current?.querySelectorAll('[data-parallax-layer="b"]') ?? [],
          { yPercent: 15 },
          {
            yPercent: -15,
            ease: 'none',
            scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1.5 },
          }
        );

        gsap.fromTo(
          containerRef.current?.querySelectorAll('[data-parallax-layer="c"]') ?? [],
          { yPercent: 8 },
          {
            yPercent: -8,
            ease: 'none',
            scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1.5 },
          }
        );
      }

      const isDark = () => document.documentElement.classList.contains('dark');

      ScrollTrigger.create({
        trigger: '#zero-up',
        start: 'top 80%',
        onEnter: () => {
          overPurpleRef.current = true;
          gsap.to(allStrokeElements, {
            attr: { stroke: getStroke(isDark(), true) },
            duration: 0.5,
            overwrite: true,
          });
        },
        onLeaveBack: () => {
          overPurpleRef.current = false;
          gsap.to(allStrokeElements, {
            attr: { stroke: getStroke(isDark(), false) },
            duration: 0.5,
            overwrite: true,
          });
        },
      });

      ScrollTrigger.create({
        trigger: '#zero-up',
        start: 'bottom 20%',
        onLeave: () => {
          overPurpleRef.current = false;
          gsap.to(allStrokeElements, {
            attr: { stroke: getStroke(isDark(), false) },
            duration: 0.5,
            overwrite: true,
          });
        },
        onEnterBack: () => {
          overPurpleRef.current = true;
          gsap.to(allStrokeElements, {
            attr: { stroke: getStroke(isDark(), true) },
            duration: 0.5,
            overwrite: true,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  const setRef = (
    layer: React.MutableRefObject<(SVGPathElement | SVGRectElement | null)[]>,
    index: number
  ) => (el: SVGPathElement | SVGRectElement | null) => {
    layer.current[index] = el;
  };

  const content = (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0"
      aria-hidden="true"
      style={{ opacity: 0, zIndex: 9999 }}
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
      >
        {/* Layer A — foreground, fastest parallax */}
        <g data-parallax-layer="a" style={{ willChange: 'transform' }}>
          <path
            ref={setRef(layerARefs, 0)}
            d="M-60 80 H300 Q360 80 360 140 V340 Q360 400 420 400 H750 Q810 400 810 460 V660 Q810 720 870 720 H1500"
            stroke={LIGHT_STROKE}
            strokeWidth="2.5"
            opacity="0.45"
          />
          <path
            ref={setRef(layerARefs, 1)}
            d="M1500 180 H1150 Q1090 180 1090 240 V440 Q1090 500 1030 500 H680 Q620 500 620 560 V760 Q620 820 560 820 H-60"
            stroke={LIGHT_STROKE}
            strokeWidth="2.5"
            opacity="0.4"
          />
          <rect
            ref={setRef(layerARefs, 2)}
            x="980" y="60" width="280" height="190" rx="36"
            stroke={LIGHT_STROKE}
            strokeWidth="2.5"
            opacity="0.35"
            fill="none"
          />
        </g>

        {/* Layer B — midground */}
        <g data-parallax-layer="b" style={{ willChange: 'transform' }}>
          <path
            ref={setRef(layerBRefs, 0)}
            d="M1500 120 H1050 Q990 120 990 180 V400 Q990 460 930 460 H580 Q520 460 520 520 V740 Q520 800 460 800 H-60"
            stroke={LIGHT_STROKE}
            strokeWidth="2"
            opacity="0.35"
          />
          <path
            ref={setRef(layerBRefs, 1)}
            d="M-60 300 H350 Q410 300 410 360 V560 Q410 620 470 620 H800 Q860 620 860 680 V860 Q860 920 920 920 H1500"
            stroke={LIGHT_STROKE}
            strokeWidth="2"
            opacity="0.3"
          />
          <rect
            ref={setRef(layerBRefs, 2)}
            x="100" y="160" width="240" height="170" rx="32"
            stroke={LIGHT_STROKE}
            strokeWidth="2"
            opacity="0.25"
            fill="none"
          />
        </g>

        {/* Layer C — background, slowest parallax */}
        <g data-parallax-layer="c" style={{ willChange: 'transform' }}>
          <path
            ref={setRef(layerCRefs, 0)}
            d="M-60 250 H420 Q480 250 480 310 V530 Q480 590 540 590 H900 Q960 590 960 650 V850 Q960 910 1020 910 H1500"
            stroke={LIGHT_STROKE}
            strokeWidth="1.5"
            opacity="0.25"
          />
          <path
            ref={setRef(layerCRefs, 1)}
            d="M1500 400 H1000 Q940 400 940 460 V680 Q940 740 880 740 H500 Q440 740 440 800 V900"
            stroke={LIGHT_STROKE}
            strokeWidth="1.5"
            opacity="0.22"
          />
        </g>
      </svg>
    </div>
  );

  // Portal to body to bypass all stacking contexts
  if (!mounted) return null;
  return createPortal(content, document.body);
}
