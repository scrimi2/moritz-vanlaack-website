'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const projects = [
  {
    title: 'IT & Professional Services Procurement',
    industry: 'Pharmaceutical Sales',
    metric: 'Spend > EUR 500M',
    description:
      'Interim Head of IT & Professional Services in Procurement, reporting to CPO. 8-month engagement leading procurement transformation.',
  },
  {
    title: 'Global Category Management',
    industry: 'Pharma Wholesaler',
    metric: 'Spend > EUR 500M',
    description:
      'Led international team of Category Managers and Shared Service Center. Developed global procurement and cost reduction strategies.',
  },
  {
    title: 'International Ivalua Roll-Out',
    industry: 'Automotive Supplier',
    metric: 'Project > EUR 1.4M',
    description:
      'Coordinated all work streams and led end-to-end process design for a global Ivalua implementation.',
  },
  {
    title: 'S4/HANA Implementation',
    industry: 'Global Battery Manufacturer',
    metric: 'Project > EUR 3M',
    description:
      'S2P process analysis, implementation roadmap design, requirement workshops with international stakeholders.',
  },
  {
    title: 'Global Coupa Roll-Out',
    industry: 'Paper & Packaging',
    metric: 'Project > EUR 1M',
    description:
      'Full S2C & P2P implementation including integration with multiple legacy systems.',
  },
  {
    title: 'ZBx Digital Transformation',
    industry: 'Chemicals Company',
    metric: 'Project > EUR 10M',
    description:
      'Zero-Based Strategy evaluation and design of digital transformation procurement roadmap at Accenture Strategy.',
  },
  {
    title: 'Best-of-Breed Procurement Tools',
    industry: 'Retail Group',
    metric: 'Project > EUR 8M',
    description:
      'Implementation of Sievo, Bonsai, and PerAngusta for an international building materials retailer.',
  },
];

export default function ProjectsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="projects" className="py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase"
          >
            Selected<br />Projects.
          </motion.h2>

          <div className="mt-8 md:mt-0 flex items-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-neutral-900 hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" strokeWidth={1} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="text-neutral-900 hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" strokeWidth={1} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-neutral-200 bg-white p-8 min-h-[260px]"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
                  {project.industry}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 uppercase">{project.title}</h3>
                <p className="mt-2 text-sm font-semibold text-neutral-500">{project.metric}</p>
                <p className="mt-4 text-base leading-relaxed text-neutral-600">
                  {project.description}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
