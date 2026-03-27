'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { DecorativeFlowLines } from './DecorativeLines';

const ventures = [
  {
    year: 'Founded 2025',
    title: 'Sourcera AI',
    subtitle: 'CEO & Co-Founder',
    description:
      'The first end-to-end Opportunity-to-Savings (O2S) platform. Sourcera connects ERPs, Spend Cubes, and S2C platforms into one source of truth, using AI to transform fragmented procurement data into optimized tenders and measurable savings.',
    stats: ['10-20% Additional Savings', '90% Less Manual Work', '10x Faster Execution'],
    customers: 'Trusted by Phoenix Group, Zalando, Tesa',
    link: { label: 'sourcera.ai', href: 'https://sourcera.ai' },
  },
  {
    year: 'Founded 2021',
    title: 'van Laack & partners',
    subtitle: 'CEO & Managing Director',
    description:
      "360-degree supply chain management and procurement consulting. A team of 20 specialized consultants across Europe delivering enterprise-grade procurement transformation for the world's leading companies.",
    stats: ['25+ Projects', '22 Partners', '20 Consultants'],
    customers: 'Serving Schaeffler, Mercedes-Benz, BASF, Siemens Energy, VW',
    link: { label: 'vanlaack-partners.com', href: 'https://vanlaack-partners.com' },
  },
];

export default function VenturesSection() {
  return (
    <section id="ventures" className="relative py-32 bg-neutral-50 overflow-hidden">
      <DecorativeFlowLines />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-20"
        >
          My Ventures.
        </motion.h2>

        <div className="space-y-12">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              className="rounded-2xl bg-white p-10 md:p-14 border border-neutral-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
                {/* Left side */}
                <div className="lg:w-[60%]">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                    {venture.year}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-2 uppercase">{venture.title}</h3>
                  <p className="text-base font-medium text-neutral-500 mb-6">{venture.subtitle}</p>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">{venture.description}</p>
                  <p className="text-sm text-neutral-400 mb-6">{venture.customers}</p>
                  <a
                    href={venture.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-neutral-900 hover:text-primary transition-colors"
                  >
                    {venture.link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Right side - Stats */}
                <div className="mt-10 lg:mt-0 lg:w-[40%]">
                  <div className="space-y-4">
                    {venture.stats.map((stat) => (
                      <div
                        key={stat}
                        className="rounded-xl bg-neutral-50 px-6 py-5 text-base font-semibold text-neutral-800 border border-neutral-100 border-l-4 border-l-primary"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
