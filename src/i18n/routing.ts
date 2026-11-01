import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  localeDetection: false,
  // HTML <link hreflang> and sitemap are the source of truth (with x-default -> /en);
  // the middleware Link header would point x-default at the unprefixed URL instead.
  alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];
