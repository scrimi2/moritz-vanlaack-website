import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', changeFrequency: 'monthly' as const, priority: 1 },
    { path: '/impressum', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/datenschutz', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${page.path}`])
        ),
      },
    }))
  );
}
