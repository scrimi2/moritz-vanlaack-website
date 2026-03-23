'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Global Category Management',
    industry: 'Pharma Wholesaler',
    metric: 'Spend > EUR 500M',
    description:
      'Led international team of Category Managers and Shared Service Center. Developed global procurement and cost reduction strategies.',
    color: '#7c3aed',
  },
  {
    title: 'International Ivalua Roll-Out',
    industry: 'Automotive Supplier',
    metric: 'Project > EUR 1.4M',
    description:
      'Coordinated all work streams and led end-to-end process design for a global Ivalua implementation.',
    color: '#2563eb',
  },
  {
    title: 'S4/HANA Implementation',
    industry: 'Global Battery Manufacturer',
    metric: 'Project > EUR 3M',
    description:
      'S2P process analysis, implementation roadmap design, requirement workshops with international stakeholders.',
    color: '#059669',
  },
  {
    title: 'Global Coupa Roll-Out',
    industry: 'Paper & Packaging',
    metric: 'Project > EUR 1M',
    description:
      'Full S2C & P2P implementation including integration with multiple legacy systems.',
    color: '#d97706',
  },
  {
    title: 'ZBx Digital Transformation',
    industry: 'Chemicals Company',
    metric: 'Project > EUR 10M',
    description:
      'Zero-Based Strategy evaluation and design of digital transformation procurement roadmap at Accenture Strategy.',
    color: '#dc2626',
  },
  {
    title: 'Best-of-Breed Procurement Tools',
    industry: 'Retail Group',
    metric: 'Project > EUR 8M',
    description:
      'Implementation of Sievo, Bonsai, and PerAngusta for an international building materials retailer.',
    color: '#0891b2',
  },
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
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Selected Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="min-w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-md)] transition-shadow hover:shadow-[var(--shadow-lg)]"
            >
              {/* Industry color stripe */}
              <div className="h-1.5 w-full" style={{ backgroundColor: project.color }} />

              <div className="p-6">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: project.color }}
                >
                  {project.industry}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-neutral-900">{project.title}</h3>

                <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">
                  {project.metric}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
