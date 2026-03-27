'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const phases = [
  {
    number: 1,
    title: 'Discovery Phase',
    duration: '22 Days',
    description:
      'Data-driven opportunity identification. We analyze your processes, org structure, and governance to identify and validate 5+ savings opportunities.',
  },
  {
    number: 2,
    title: 'Execution Phase',
    duration: '3 Months',
    description:
      'Tenders launched in Coupa with Sourcera AI. Realize measurable savings to fund transformation while identifying additional opportunities.',
  },
  {
    number: 3,
    title: 'Excellence Phase',
    duration: '9 Months',
    description:
      'Define tool landscape and digital roadmap. Streamline data quality, execute process and organizational improvements for sustainable performance.',
  },
];

export default function ZeroUpSection() {
  return (
    <section id="zero-up" className="py-32 px-6 lg:px-10 bg-primary text-white overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-white uppercase mb-8"
        >
          The Zero-Up<br />Approach.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl leading-relaxed text-white/70 max-w-3xl mb-20"
        >
          Our proven methodology that delivers savings from day one — fully funded by us.
          We only earn when you save.
        </motion.p>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-primary">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase">{phase.title}</h3>
                    <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                      {phase.duration}
                    </span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-white/70">{phase.description}</p>
              </div>

              {index < phases.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-white/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <a
            href="#contact"
            className="inline-block rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
          >
            Schedule a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
