---
name: mvl-seo
description: SEO/GEO contract for moritzvanlaack.com (personal-brand site). Use for any work on metadata, canonical/hreflang, sitemap, robots, llms.txt, JSON-LD (Person/WebSite/FAQPage), or the weekly SEO audit of this repo.
---

# moritzvanlaack.com — SEO/GEO contract

Personal-brand site for Moritz van Laack: procurement expert, CEO/co-founder of Sourcera (sourcera.ai), founder of van Laack & partners. Cologne, Germany. The entity to strengthen is the **Person** (knowledge-graph identity), with `worksFor` links to both ventures.

## Architecture

- Next.js 16 App Router + next-intl v4: `[locale]` segment, locales `en` (default) + `de`, `/` 308-redirects to `/en` via `src/proxy.ts`. Deploys: Vercel Git integration, push to `main` = production.
- Metadata: root `src/app/layout.tsx` (metadataBase, title template `%s | Moritz van Laack`) + `src/app/[locale]/layout.tsx` `generateMetadata` (OG, canonical, hreflang). Legal pages own their canonical via server wrappers (`page.tsx` + `*Client.tsx`).
- Constants: `src/lib/constants.ts` (SITE_URL, SITE_NAME, SITE_DESCRIPTION). Copy: `src/messages/{en,de}.json`.
- JSON-LD: `src/components/JsonLd.tsx` → Person + WebSite + FAQPage, rendered from `[locale]/page.tsx`. FAQ answers come from message files — schema and rendered FAQ share the source by construction.
- Artifacts: `src/app/sitemap.ts` (6 URLs × hreflang), `src/app/robots.ts`, `src/app/manifest.ts`, dynamic OG image `src/app/opengraph-image.tsx`, `public/llms.txt`.
- Blog routes are stubs that redirect to the locale home — keep them OUT of the sitemap until real content exists.

## Audit contract

`expectations.json` in this directory is the per-URL contract (canonical, hreflang, title fragment, JSON-LD types). Weekly audit = fetch live URLs, diff against it, verify sitemap/robots/llms.txt integrity and that every llms.txt link resolves.

## Rules

- **Report-only automation.** The weekly routine files/refreshes GitHub issues (`[seo-bot]` prefix, fingerprint dedupe) — it never commits, never opens auto-merge PRs. There is no CI gate in this repo; a human makes every change.
- Person schema facts (roles, ventures, address, sameAs) must stay consistent with sourcera.ai's Organization schema — same names, same URLs. On conflict, fix here to match sourcera.ai, not the reverse, unless the facts themselves changed.
- Keep EN as default locale; both locales must stay content-complete.
- No tracking additions outside the consent-gated GA4 + Vercel Analytics already present.
