'use client';

import { motion } from 'framer-motion';

const clientLogos = [
  'Phoenix', 'BASF', 'Schaeffler', 'Mercedes-Benz', 'Volkswagen',
  'Siemens Energy', 'BMW', 'Zalando', 'Tesa', 'ADAC',
  'Knauf', 'Stadler', 'HHLA', 'Progroup', 'Bizerba',
];

export default function LogoCarousel() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
        <h3 className="text-base font-black uppercase tracking-[0.1em] text-neutral-900">
          Proof of Brands
        </h3>
      </div>

      {/* Scrolling logos */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          className="flex w-max gap-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="shrink-0 flex items-center justify-center h-14"
            >
              <span className="text-lg font-bold text-neutral-300 whitespace-nowrap uppercase tracking-wide">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
