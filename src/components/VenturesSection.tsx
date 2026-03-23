'use client';

import { motion } from 'framer-motion';

const ventures = [
  {
    year: 'Founded 2025',
    title: 'Sourcera AI',
    subtitle: 'CEO & Co-Founder',
    description:
      'The first end-to-end Opportunity-to-Savings (O2S) platform. Sourcera connects ERPs, Spend Cubes, and S2C platforms into one source of truth, using AI to transform fragmented procurement data into optimized tenders and measurable savings.',
    stats: ['10-20% Additional Savings', '90% Less Manual Work', '10x Faster Execution'],
    customers: 'Trusted by Phoenix Group, Zalando, Tesa',
    link: { label: 'Visit sourcera.ai', href: 'https://sourcera.ai' },
    theme: 'primary' as const,
  },
  {
    year: 'Founded 2021',
    title: 'van Laack & partners',
    subtitle: 'CEO & Managing Director',
    description:
      "360-degree supply chain management and procurement consulting. A team of 20 specialized consultants across Europe delivering enterprise-grade procurement transformation for the world's leading companies.",
    stats: ['25+ Projects', '22 Partners', '20 Consultants'],
    customers: 'Serving Schaeffler, Mercedes-Benz, BASF, Siemens Energy, VW',
    link: { label: 'Visit vanlaack-partners.com', href: 'https://vanlaack-partners.com' },
    theme: 'accent' as const,
  },
];

export default function VenturesSection() {
  return (
    <section id="ventures" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">My Ventures</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Building the future of procurement through consulting and AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${
                venture.theme === 'primary' ? 'border-primary' : 'border-accent'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Year badge */}
              <span
                className={`inline-block text-sm font-semibold px-3 py-1 rounded-full mb-4 ${
                  venture.theme === 'primary'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-accent/10 text-accent'
                }`}
              >
                {venture.year}
              </span>

              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{venture.title}</h3>
              <p
                className={`text-sm font-medium mb-4 ${
                  venture.theme === 'primary' ? 'text-primary' : 'text-accent'
                }`}
              >
                {venture.subtitle}
              </p>

              <p className="text-neutral-600 leading-relaxed mb-6">{venture.description}</p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {venture.stats.map((stat) => (
                  <div
                    key={stat}
                    className={`text-center py-3 rounded-lg text-sm font-medium ${
                      venture.theme === 'primary'
                        ? 'bg-primary/5 text-primary'
                        : 'bg-accent/5 text-accent'
                    }`}
                  >
                    {stat}
                  </div>
                ))}
              </div>

              {/* Customers */}
              <p className="text-sm text-neutral-400 mb-6">{venture.customers}</p>

              {/* Link */}
              <a
                href={venture.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center font-semibold text-sm ${
                  venture.theme === 'primary'
                    ? 'text-primary hover:text-primary-dark'
                    : 'text-accent hover:text-accent-dark'
                } transition-colors`}
              >
                {venture.link.label} &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
