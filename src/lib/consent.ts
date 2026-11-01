export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export type Consent = 'granted' | 'denied' | null;

const KEY = 'cookie-consent';
const FALLBACK_KEY = 'cookie-consent-fallback';
let memoryConsent: Consent | undefined;
let revoking = false;

function parseConsent(value: unknown): Consent {
  return value === 'granted' || value === 'denied' ? value : null;
}

export function readConsent(): Consent {
  if (memoryConsent !== undefined) return memoryConsent;
  try {
    const fallback = parseConsent(window.sessionStorage.getItem(FALLBACK_KEY));
    if (fallback) return fallback;
  } catch {
    // Memory still works when browser storage is unavailable.
  }
  try {
    return parseConsent(window.localStorage.getItem(KEY));
  } catch {
    return null;
  }
}

function revokeAnalytics() {
  if (revoking) return;
  revoking = true;
  const analyticsWindow = window as unknown as Window & {
    [key: `ga-disable-${string}`]: boolean;
    gtag?: (command: 'consent', action: 'update', value: { analytics_storage: 'denied' }) => void;
  };
  if (GA_ID) analyticsWindow[`ga-disable-${GA_ID}`] = true;
  try {
    analyticsWindow.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  } finally {
    try {
      const domains = ['', `; domain=${window.location.hostname}`, '; domain=.moritzvanlaack.com'];
      for (const cookie of document.cookie.split(';')) {
        const name = cookie.trim().split('=')[0];
        if (name === '_ga' || name.startsWith('_ga_')) {
          for (const domain of domains) {
            document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
          }
        }
      }
    } finally {
      window.location.reload();
    }
  }
}

export function writeConsent(value: Exclude<Consent, null>) {
  memoryConsent = value;
  let stored = false;
  try {
    window.localStorage.setItem(KEY, value);
    stored = true;
  } catch {
    // Keep the user's choice in memory even if persistence fails.
  }
  try {
    // Preserve failed writes across the mandatory revocation reload if possible.
    if (stored) window.sessionStorage.removeItem(FALLBACK_KEY);
    else window.sessionStorage.setItem(FALLBACK_KEY, value);
  } catch {
    // Fall back to the in-memory choice when both stores are unavailable.
  }
  if (stored) memoryConsent = undefined;
  if (value === 'denied') revokeAnalytics();
  window.dispatchEvent(new Event('cookie-consent-update'));
}

export function subscribeToConsent(onChange: (consent: Consent) => void) {
  const update = (consent: Consent) => {
    if (consent === 'denied') revokeAnalytics();
    onChange(consent);
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key !== KEY && event.key !== null) return;
    memoryConsent = undefined;
    try {
      window.sessionStorage.removeItem(FALLBACK_KEY);
    } catch {
      // The event value remains authoritative without storage access.
    }
    update(parseConsent(event.newValue));
  };
  const onConsent = () => update(readConsent());
  window.addEventListener('storage', onStorage);
  window.addEventListener('cookie-consent-update', onConsent);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener('cookie-consent-update', onConsent);
  };
}
