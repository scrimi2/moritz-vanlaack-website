'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { useTranslations } from 'next-intl';
import { clientLogos } from '@/data/clientLogos';
// Start at 2025 (first item)
const initialSlideIndex = 0;

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex);
  const swiperRef = useRef<SwiperType | null>(null);
  const t = useTranslations('timeline');

  const timelineItems = [
    { year: t('items.item1.year'), title: t('items.item1.title'), logo: '/images/sourcera-logo-transparent.png', darkLogo: null, darkInvert: false, role: t('items.item1.role'), description: t('items.item1.description') },
    { year: t('items.item2.year'), title: t('items.item2.title'), logo: '/images/logos/phoenix.png', darkLogo: null, darkInvert: false, role: t('items.item2.role'), description: t('items.item2.description') },
    { year: t('items.item3.year'), title: t('items.item3.title'), logo: '/images/vlp-logo-transparent.png', darkLogo: '/images/vlp-logo-transparent-dark.png', darkInvert: false, role: t('items.item3.role'), description: t('items.item3.description') },
    { year: t('items.item4.year'), title: t('items.item4.title'), logo: '/images/logos/harvard.png', darkLogo: '/images/logos/harvard-dark.png', darkInvert: false, role: t('items.item4.role'), description: t('items.item4.description') },
    { year: t('items.item5.year'), title: t('items.item5.title'), logo: '/images/logos/accenture.png', darkLogo: '/images/logos/accenture-dark.png', darkInvert: false, role: t('items.item5.role'), description: t('items.item5.description') },
    { year: t('items.item6.year'), title: t('items.item6.title'), logo: '/images/logos/hhl.png', darkLogo: '/images/logos/hhl-dark.png', darkInvert: false, role: t('items.item6.role'), description: t('items.item6.description') },
    { year: t('items.item7.year'), title: t('items.item7.title'), logo: '/images/logos/mhp.svg', darkLogo: null, darkInvert: false, role: t('items.item7.role'), description: t('items.item7.description') },
    { year: t('items.item8.year'), title: t('items.item8.title'), logo: '/images/logos/rewe.svg', darkLogo: null, darkInvert: false, role: t('items.item8.role'), description: t('items.item8.description') },
    { year: t('items.item9.year'), title: t('items.item9.title'), logo: '/images/logos/hanyang-transparent.png', darkLogo: null, darkInvert: false, role: t('items.item9.role'), description: t('items.item9.description') },
    { year: t('items.item10.year'), title: t('items.item10.title'), logo: '/images/logos/eufh.png', darkLogo: null, darkInvert: false, role: t('items.item10.role'), description: t('items.item10.description') },
  ];

  // Get unique years and the first timeline index for each year
  const uniqueYears = timelineItems.reduce<{ year: string; index: number }[]>((acc, item, i) => {
    if (!acc.some((entry) => entry.year === item.year)) {
      acc.push({ year: item.year, index: i });
    }
    return acc;
  }, []);

  // Determine which unique year is currently active
  const activeYear = timelineItems[activeIndex]?.year;

  return (
    <section id="track-record" className="relative py-32 bg-background overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-8"
        >
          {t('title').split('\n').map((line: string, i: number) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.h2>

        {/* Year navigation - unique years only */}
        <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
          {uniqueYears.map((entry) => (
            <button
              key={entry.year}
              onClick={() => {
                setActiveIndex(entry.index);
                swiperRef.current?.slideTo(entry.index);
              }}
              className={`shrink-0 font-black transition-all duration-300 ${
                entry.year === activeYear
                  ? 'text-[clamp(2rem,5vw,4.5rem)] text-primary leading-none'
                  : 'text-[clamp(1rem,2.5vw,2rem)] text-neutral-300 hover:text-neutral-400 leading-none'
              }`}
            >
              {entry.year}
            </button>
          ))}
        </div>

        {/* Timeline line */}
        <div className="relative mb-12">
          <div className="h-[2px] w-full bg-neutral-900/10 dark:bg-white/10" />
        </div>

        {/* Swiper content */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={32}
          initialSlide={initialSlideIndex}
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
                  <div className="mb-3 h-12">
                    {item.darkLogo ? (
                      <>
                        <Image
                          src={item.logo}
                          alt={`${item.title} logo`}
                          height={48}
                          width={160}
                          className="object-contain object-left h-12 w-auto dark:hidden"
                        />
                        <Image
                          src={item.darkLogo}
                          alt={`${item.title} logo`}
                          height={48}
                          width={160}
                          className="object-contain object-left h-12 w-auto hidden dark:block"
                        />
                      </>
                    ) : (
                      <Image
                        src={item.logo}
                        alt={`${item.title} logo`}
                        height={48}
                        width={160}
                        className={`object-contain object-left h-12 w-auto ${item.darkInvert ? 'dark:brightness-0 dark:invert' : ''}`}
                      />
                    )}
                  </div>
                )}
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-neutral-500 mb-3">{item.role}</p>
                <p className="text-base text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Client logos carousel */}
        <div className="mt-20 pt-12 border-t border-neutral-900/10 dark:border-white/10">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
            <motion.div
              className="flex w-max items-center gap-16"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { duration: 40, repeat: Infinity, ease: 'linear' } }}
            >
              {[...clientLogos, ...clientLogos].map((item, i) => (
                <div key={`${item.name}-${i}`} className="shrink-0 flex items-center justify-center h-10">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    width={120}
                    height={36}
                    className={`h-8 w-auto object-contain opacity-50 grayscale ${item.darkInvert ? 'dark:brightness-0 dark:invert' : ''}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
