import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/**
 * Content-Security-Policy-Report-Only: observe-only, not enforcing. Sources
 * reflect what the site actually loads — next-themes' inline no-flash script
 * and next/font self-hosted fonts (`'unsafe-inline'` on script/style covers
 * the former; fonts need no external host), GA4 (googletagmanager.com +
 * the google-analytics.com / analytics.google.com collection endpoints),
 * and Vercel Analytics/Speed Insights, which are same-origin
 * (`/_vercel/...`) and so covered by 'self'. No `report-uri` — we don't run
 * a collector, so violations only show up in each visitor's own browser
 * console. Promote to an enforcing `Content-Security-Policy` once a few
 * days of console reports confirm nothing legitimate is flagged.
 */
const reportOnlyCsp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com",
  "media-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy-Report-Only", value: reportOnlyCsp },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
