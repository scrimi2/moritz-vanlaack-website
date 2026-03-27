'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const timelineItems = [
  {
    year: '2025',
    title: 'Sourcera AI',
    logo: '/images/sourcera-logo.png',
    role: 'CEO & Co-Founder',
    description: 'Co-founded AI procurement platform. Building the first end-to-end O2S solution.',
  },
  {
    year: '2024',
    title: 'Phoenix Group',
    logo: '/images/logos/phoenix.png',
    role: 'Head of IT & Professional Services in Procurement (Interim)',
    description: 'Interim role reporting to the CPO. Led IT and Professional Services in Procurement with a spend volume exceeding EUR 500M. April 2024 – March 2025.',
  },
  {
    year: '2021',
    title: 'van Laack & partners',
    logo: '/images/vlp-logo.jpg',
    role: 'Founder & CEO',
    description: 'Founded a procurement transformation and strategy consulting firm. Built a team of 20 consultants delivering cost-cutting programs and strategic sourcing for leading enterprises — work that ultimately led to the creation of Sourcera AI.',
  },
  {
    year: '2021',
    title: 'Global Immersion Seminar',
    logo: '/images/logos/harvard.png',
    role: 'Harvard Business School & Babson College, Boston',
    description: 'Intensive executive seminar in Boston exploring entrepreneurship, innovation ecosystems, and global business strategy with sessions at Harvard Business School and Babson College.',
  },
  {
    year: '2020',
    title: 'Accenture Strategy',
    logo: '/images/logos/accenture.png',
    role: 'Manager, Supply Chain & Operations',
    description: 'Led Zero-Based Strategy evaluations and digital transformation roadmaps for Fortune 500 clients.',
  },
  {
    year: '2019',
    title: 'HHL Leipzig',
    logo: '/images/logos/hhl.png',
    role: 'MBA',
    description: 'Executive MBA at HHL Leipzig Graduate School of Management.',
  },
  {
    year: '2017',
    title: 'MHP – A Porsche Company',
    logo: '/images/logos/mhp.svg',
    role: 'Consultant → Senior Consultant',
    description: 'IT project lead for international SAP MM rollouts, Ariba and Fieldglass implementations.',
  },
  {
    year: '2017',
    title: 'REWE Group',
    logo: '/images/logos/rewe.svg',
    role: 'Category Manager',
    description: 'Managed EUR 350M in beverage procurement spend across 210 suppliers.',
  },
  {
    year: '2014',
    title: 'Hanyang University Seoul',
    logo: '/images/logos/hanyang.webp',
    role: 'Exchange Semester – Business & Marketing',
    description: 'Semester abroad focusing on international business strategy, marketing management, and cross-cultural trade in one of Asia\'s leading business programs.',
  },
  {
    year: '2013',
    title: 'EUFH Cologne / REWE Group',
    logo: '/images/logos/eufh.png',
    role: 'BA Trade Management (Dual Studies)',
    description: "Awarded IHK 'Besten Ehrung' for outstanding achievement.",
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="track-record" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-8"
        >
          Work &times; Life &times;<br />High Performance
        </motion.h2>

        {/* Subtitle with red highlight */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl leading-relaxed text-neutral-700 max-w-3xl mb-20"
        >
          A career that seamlessly connects{' '}
          <span className="text-primary font-medium">
            strategic insights, innovation, and practical execution
          </span>{' '}
          — with a clear focus on building future-proof organizations.
        </motion.p>

        {/* Year navigation - large numbers like Burkhardt */}
        <div className="flex items-center gap-4 mb-6">
          {timelineItems.map((item, i) => (
            <button
              key={`${item.year}-${i}`}
              onClick={() => {
                setActiveIndex(i);
                swiperRef.current?.slideTo(i);
              }}
              className={`shrink-0 font-black transition-all duration-300 ${
                i === activeIndex
                  ? 'text-[clamp(2rem,5vw,4.5rem)] text-primary leading-none'
                  : 'text-[clamp(1rem,2.5vw,2rem)] text-neutral-300 hover:text-neutral-400 leading-none'
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* Timeline line */}
        <div className="relative mb-12">
          <div className="h-[2px] w-full bg-neutral-200" />
        </div>

        {/* Swiper content */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={32}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {timelineItems.map((item, i) => (
            <SwiperSlide key={`${item.year}-${item.title}-${i}`}>
              <div className="py-4">
                {item.logo && (
                  <div className="mb-3 h-8">
                    <Image
                      src={item.logo}
                      alt={`${item.title} logo`}
                      height={32}
                      width={120}
                      className="object-contain object-left h-8 w-auto"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-neutral-500 mb-3">{item.role}</p>
                <p className="text-base text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
