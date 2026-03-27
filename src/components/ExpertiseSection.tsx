'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Target, Truck, Rocket, Users, Bot } from 'lucide-react';
import { DecorativeFlowLinesReverse } from './DecorativeLines';

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

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-32 px-6 lg:px-10 bg-neutral-50 overflow-hidden">
      <DecorativeFlowLinesReverse />
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-20"
        >
          Expertise &amp;<br />Platforms.
        </motion.h2>

        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3 bg-neutral-200 rounded-2xl overflow-hidden">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white p-10 group"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 uppercase">{card.title}</h3>
              <p className="mt-3 text-base text-neutral-500 leading-relaxed">{card.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
