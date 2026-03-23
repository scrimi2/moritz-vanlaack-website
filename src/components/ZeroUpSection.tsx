'use client';

import { motion } from 'framer-motion';
import { Search, TrendingUp, Award } from 'lucide-react';

const phases = [
  {
    icon: Search,
    number: 1,
    title: 'Discovery Phase',
    duration: '22 Days',
    description:
      'Data-driven opportunity identification. We analyze your processes, org structure, and governance to identify and validate 5+ savings opportunities.',
  },
  {
    icon: TrendingUp,
    number: 2,
    title: 'Execution Phase',
    duration: '3 Months',
    description:
      'Tenders launched in Coupa with Sourcera AI. Realize measurable savings to fund transformation while identifying additional opportunities.',
  },
  {
    icon: Award,
    number: 3,
    title: 'Excellence Phase',
    duration: '9 Months',
    description:
      'Define tool landscape and digital roadmap. Streamline data quality, execute process and organizational improvements for sustainable performance.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function ZeroUpSection() {
  return (
    <section
      id="zero-up"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #f0f0ff 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            The Zero-Up Approach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Our proven methodology that delivers savings from day one — fully funded by us. We only
            earn when you save.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {phases.map((phase) => (
            <motion.div
              key={phase.title}
              variants={cardVariants}
              className="relative overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-md)]"
            >
              {/* Top accent line */}
              <div className="h-1 w-full bg-[var(--color-primary)]" />

              <div className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  {/* Phase number circle */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">{phase.title}</h3>
                    <span className="text-sm font-medium text-[var(--color-primary)]">
                      {phase.duration}
                    </span>
                  </div>
                </div>

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary)]/10">
                  <phase.icon className="h-5 w-5 text-[var(--color-primary)]" />
                </div>

                <p className="text-sm leading-relaxed text-neutral-600">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-[var(--color-primary)]/20 bg-white/80 px-8 py-6 text-center shadow-[var(--shadow-sm)] backdrop-blur-sm"
        >
          <p className="text-lg font-semibold text-neutral-900">
            Powered by{' '}
            <span className="text-[var(--color-primary)]">van Laack & partners</span>
            {' + '}
            <span className="text-[var(--color-accent)]">Sourcera AI</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
