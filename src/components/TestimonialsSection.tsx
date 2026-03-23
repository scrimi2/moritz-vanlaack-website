'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Sourcera.ai is showing us how procurement efficiency can scale. What once took months of manual work is now generated in days. This is a potential game changer for large and complex organizations like ours.',
    name: 'Dirk Thiemann',
    title: 'CPO, Phoenix Group',
  },
  {
    quote:
      'Sourcera.ai helps us turn data into sourcing actions within days. We can rapidly reclassify spend, detect overlaps and launch initiatives that deliver measurable savings while freeing our teams to focus on strategic decisions instead of repetitive tasks.',
    name: 'Alejandro Basterrechea',
    title: 'CPO, Zalando',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-neutral-50)]">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          What Leaders Say
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="rounded-2xl bg-white p-8 shadow-[var(--shadow-lg)]"
            >
              <Quote className="mb-4 h-8 w-8 text-[var(--color-primary)]/30" />

              <blockquote className="text-base italic leading-relaxed text-neutral-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-4">
                {/* Placeholder avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm font-bold text-[var(--color-primary)]">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
