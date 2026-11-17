# Content Security Policy (2026-11-17)

`src/proxy.ts` enforces CSP on page requests. The existing next-intl rewrite forwards the generated request CSP and nonce to Next.js; `headers()` in the locale layout forces dynamic rendering. Each HTML response uses a fresh 128-bit cryptographic nonce and `private, no-store`. This trades static/CDN page caching for script enforcement. Framework bootstrap, next-themes, GA initialization and JSON-LD receive the nonce. Production scripts use neither `unsafe-inline`, `unsafe-eval` nor `strict-dynamic`; only development permits eval for Next debugging.

## Before (verified against production)

```text
Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com; media-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'
```

No report-uri/report-to or collector existed. Historical reports are therefore unavailable; the old policy only reported in visitors' browser consoles.

## After

```text
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-<per-request>' https://www.googletagmanager.com; script-src-attr 'none'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; img-src 'self' data:; font-src 'self'; media-src 'self'; frame-src 'none'; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; report-uri /api/csp-report
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()
```

HSTS (`max-age=63072000; includeSubDomains; preload`), XFO SAMEORIGIN, nosniff and Referrer-Policy origin-when-cross-origin remain enabled.

- `self`: Next bundles, images, self-hosted next/font fonts, Vercel Analytics/Speed Insights (`/_vercel/`), reports and same-origin navigation fetches.
- `www.googletagmanager.com`: consent-gated GA4 `gtag/js` loader. This repository uses gtag directly, not a GTM container.
- `region1.google-analytics.com`: GA4 collection observed in the consent-enabled local browser test; `www.google-analytics.com`: the standard nonregional GA4 collection endpoint for visitors outside the regional routing path. No wildcard domains or analytics.google.com access remains.
- `img-src data:`: inline image data. No remote image/font/frame hosts needed; booking and social URLs are navigation links.
- Style `unsafe-inline` is retained for Framer Motion, GSAP and component style attributes; scripts do not need that exemption.

## Reporting and operations

`POST /api/csp-report` accepts legacy browser `application/csp-report` bodies, limits streamed input to 16 KiB, and logs `csp-violation` with only directive and blocked/document origins. Paths, query strings, script samples, cookies and full policies/nonces are not logged. Reports appear in Vercel runtime function logs after deployment; no external report service or credentials are needed. Retention follows the hosting account's log retention. This public telemetry endpoint is untrusted input, not an audit identity source.

## Browser verification

Run `NEXT_PUBLIC_GA_ID=G-CSPTEST123 npm run build`, `npm start -- -p 3102`, then `node scripts/check-csp.mjs` with Playwright installed and Chrome available. This nonproduction measurement ID exercises the actual Google loader without configuring production analytics locally. `CSP_BASE_URL` and `CSP_RESULT` override the target and result file. The script scrolls every page, discovers same-origin navigation links, and collects browser CSP events and console errors.

The crawl covers all six sitemap routes, both unlinked logo previews, both blog indexes and example dynamic blog redirects, and `/`: 13 requested paths, eight distinct rendered pages. Consent tests include fresh visit, decline plus reload, accept, and remembered acceptance. The live 2026-11-17 site made no Google requests even after acceptance (GA is not configured in the deployed bundle); the local test intentionally enables it. Live Vercel telemetry was exercised without mocks. Local Next does not provide Vercel's injected hosting endpoints, so only `/_vercel/**` is stubbed locally and this is recorded in the result.

The pre-existing locale proxy redirected `/icon` to `/en/icon` (404). Metadata image endpoints now bypass localization. The missing optional next-intl `@swc/helpers` lock entry is also repaired so clean installs work.

Final local crawl: **13 paths, 0 CSP violations, 0 console errors, 0 HTTP errors**. Google requests: 0 before consent, 0 after decline/reload, 2 after accept, 3 after acceptance/reload. Raw results: `csp-crawl.json`; live baseline: `csp-live-crawl.json` (0 violations; the pre-existing icon 404). A separate negative test confirms an unnonced injected inline script is blocked and the browser report receives HTTP 204. Collector rejects incorrect MIME (415), malformed report (400), and oversized input (413). Consecutive request nonces differ and client-supplied nonce/CSP headers are overwritten.

Build/type-check pass. Full lint has 12 existing React hook/ref errors and 10 warnings; new proxy, collector, layout, theme/JSON-LD and crawl files pass targeted lint. Existing GoogleAnalytics consent state initialization is unchanged.

## Rollback

Revert this PR's commit and redeploy main to restore the previous report-only header and static rendering behavior. Prefer correcting a narrowly identified host/nonce regression over broadly allowing scripts. Do not merge or deploy this branch until review.
