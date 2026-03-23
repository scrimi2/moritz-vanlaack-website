'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Target, Truck, Rocket, Users, Bot } from 'lucide-react';

const expertiseCards = [
  {
    icon: ShoppingCart,
    title: 'Digital Procurement (S2C & P2P)',
    description: 'End-to-end Source-to-Contract and Procure-to-Pay implementation',
    tags: ['Ariba', 'Coupa', 'Ivalua', 'Jaggaer', 'Fieldglass'],
  },
  {
    icon: Target,
    title: 'Procurement Strategy',
    description: 'Custom procurement strategies, cost reduction, and Zero-Based approaches',
    tags: ['Sievo', 'PerAngusta', 'Bonsai'],
  },
  {
    icon: Truck,
    title: 'Supply Chain Optimization',
    description: 'Process optimization, operational excellence, and sustainable procurement',
    tags: ['SAP S/4', 'R/3', 'MM', 'SRM'],
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description: 'Roadmap design, tool selection, change management, and S4/HANA migrations',
    tags: ['SAP S4/HANA', 'ERP Integration'],
  },
  {
    icon: Users,
    title: 'Project & Program Management',
    description: 'Multi-million EUR project delivery and global rollouts across industries',
    tags: ['Wrike', 'Jira', 'Confluence'],
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'RPA, AI-powered procurement automation, and process mining',
    tags: ['Python', 'Sourcera AI'],
  },
];

const certifications = [
  'Coupa',
  'Ariba',
  'Fieldglass (CWF/SOW)',
  'Ivalua',
  'Wescale/WPS4',
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-neutral-50)]">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Expertise & Platforms
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {expertiseCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="group rounded-2xl bg-white p-6 shadow-[var(--shadow-md)] transition-shadow hover:shadow-[var(--shadow-lg)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10">
                <card.icon className="h-6 w-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{card.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{card.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--color-primary)]/5 px-3 py-1 text-xs font-medium text-[var(--color-primary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Certifications
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-lg border border-[var(--color-primary)]/20 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-[var(--shadow-sm)]"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
