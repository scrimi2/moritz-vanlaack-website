'use client';

import { motion } from 'framer-motion';

const clientLogos = [
  'Phoenix', 'BASF', 'Schaeffler', 'Mercedes-Benz', 'Volkswagen',
  'Siemens Energy', 'BMW', 'Zalando', 'Tesa', 'ADAC',
  'Knauf', 'Stadler', 'HHLA', 'Progroup', 'Bizerba',
];

const partnerLogos = [
  'Accenture', 'McKinsey', 'Deloitte', 'PwC', 'Kearney',
  'MHP', 'Horvath', 'SAP', 'Coupa', 'Ivalua',
  'Sievo', 'Ariba', 'Jaggaer',
];

function LogoRow({
  logos,
  label,
  duration = 30,
  direction = 'left',
}: {
  logos: string[];
  label: string;
  duration?: number;
  direction?: 'left' | 'right';
}) {
  const doubled = [...logos, ...logos];

  return (
    <div className="mb-10">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
        {label}
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex w-max gap-4"
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            x: {
              duration,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="shrink-0 rounded-lg bg-neutral-100 px-6 py-3 font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function LogoCarousel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <LogoRow logos={clientLogos} label="Trusted by" duration={35} direction="left" />
        <LogoRow logos={partnerLogos} label="Partner Network" duration={30} direction="right" />
      </div>
    </section>
  );
}
