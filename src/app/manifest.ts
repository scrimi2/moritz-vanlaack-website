import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Moritz van Laack — Procurement Expert & Entrepreneur',
    short_name: 'Moritz van Laack',
    description:
      'Procurement expert, entrepreneur, and AI innovator. Founder of Sourcera AI and van Laack & partners.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
