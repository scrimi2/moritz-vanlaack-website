import { SITE_URL } from '@/lib/constants';
import { routing } from '@/i18n/routing';

/** hreflang map for a locale-independent path ('' for home), incl. x-default -> default locale. */
export function languageAlternates(path = ''): Record<string, string> {
  return {
    ...Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
    'x-default': `${SITE_URL}/${routing.defaultLocale}${path}`,
  };
}
