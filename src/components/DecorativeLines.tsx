'use client';

/**
 * Decorative flowing SVG lines — stair-step pattern with rounded
 * rectangles connected by curves. Uses direct hex color (#7c3aed)
 * instead of CSS vars for SVG compatibility.
 */
export function DecorativeFlowLines({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1400 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main flowing path — left to right stair-step */}
      <path
        d="M-50 120 H300 Q360 120 360 180 V340 Q360 400 420 400 H750 Q810 400 810 460 V620 Q810 680 870 680 H1500"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.25"
      />
      {/* Second flowing path — offset */}
      <path
        d="M-50 250 H180 Q240 250 240 310 V480 Q240 540 300 540 H620 Q680 540 680 600 V760 Q680 820 740 820 H1500"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.18"
      />
      {/* Rounded rectangle accent — top right */}
      <rect
        x="1050" y="60" width="260" height="180" rx="40"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.2"
      />
      {/* Rounded rectangle accent — mid */}
      <rect
        x="420" y="140" width="200" height="160" rx="36"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.18"
      />
    </svg>
  );
}

export function DecorativeFlowLinesReverse({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1400 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Reversed stair-step — right to left */}
      <path
        d="M1500 140 H1100 Q1040 140 1040 200 V380 Q1040 440 980 440 H650 Q590 440 590 500 V660 Q590 720 530 720 H-50"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.25"
      />
      <path
        d="M1500 300 H1220 Q1160 300 1160 360 V520 Q1160 580 1100 580 H780 Q720 580 720 640 V800 Q720 860 660 860 H-50"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.18"
      />
      {/* Rounded rectangle accent — left */}
      <rect
        x="80" y="80" width="240" height="170" rx="38"
        stroke="#7c3aed"
        strokeWidth="2"
        opacity="0.2"
      />
    </svg>
  );
}

/**
 * Solid purple accent shapes — positioned behind images.
 */
export function AccentBlock({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-3xl ${className}`}
      style={{ backgroundColor: '#7c3aed' }}
    />
  );
}
