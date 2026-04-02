'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useTranslations } from 'next-intl';
import 'swiper/css';

export default function ProjectsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations('projects');

  const projectKeys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'] as const;
  const projects = projectKeys.map((key) => ({
    title: t(`items.${key}.title`),
    industry: t(`items.${key}.industry`),
    metric: t(`items.${key}.metric`),
    description: t(`items.${key}.description`),
  }));

  return (
    <section id="projects" className="py-32 bg-background overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase"
          >
            {t('title').split('\n').map((line: string, i: number) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
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
          autoHeight={false}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          wrapperClass="swiper-wrapper !items-stretch"
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title} className="!h-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-neutral-900/10 dark:border-white/10 bg-background p-8 h-full flex flex-col"
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
