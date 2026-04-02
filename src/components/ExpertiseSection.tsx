'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Target, Truck, Rocket, Users, Bot } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ExpertiseSection() {
  const t = useTranslations('expertise');

  const icons = [ShoppingCart, Target, Truck, Rocket, Users, Bot];
  const cardKeys = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'] as const;
  const expertiseCards = cardKeys.map((key, i) => ({
    icon: icons[i],
    title: t(`cards.${key}.title`),
    description: t(`cards.${key}.description`),
    tags: t(`cards.${key}.tags`).split(', '),
  }));

  return (
    <section id="expertise" className="relative py-32 px-6 lg:px-10 bg-neutral-50 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-20"
        >
          {t('title').split('\n').map((line: string, i: number) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.h2>

        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3 bg-neutral-900/10 dark:bg-white/10 rounded-2xl overflow-hidden">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-background p-10 group relative overflow-hidden"
            >
              {/* Watermark background icon */}
              <card.icon className="absolute -bottom-4 -right-4 h-32 w-32 text-primary opacity-[0.04]" />
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <card.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="relative text-xl font-bold text-neutral-900 uppercase">{card.title}</h3>
              <p className="relative mt-3 text-base text-neutral-500 leading-relaxed">{card.description}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">
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
