// Run after NEXT_PUBLIC_GA_ID=G-CSPTEST123 npm run build and npm start -- -p 3102.
// Install Playwright without changing dependencies: npm i --no-save --package-lock=false playwright
import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';
const base = process.env.CSP_BASE_URL || 'http://localhost:3102';
const live = !base.includes('localhost');
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const result = { base, pages: [], violations: [], consoleErrors: [], googleRequests: [], failedResponses: [], consent: {}, localVercelStubs: !live };
const context = await browser.newContext();
// Vercel injects these endpoints at the hosting layer; next start has none.
if (!live) await context.route('**/_vercel/**', route => route.fulfill({ status: 200, contentType: 'application/javascript', body: '' }));
await context.exposeBinding('recordViolation', (_, v) => result.violations.push(v));
await context.addInitScript(() => document.addEventListener('securitypolicyviolation', e => window.recordViolation({ page: location.pathname, directive: e.effectiveDirective, blocked: e.blockedURI, disposition: e.disposition })));
context.on('page', page => {
  page.on('response', res => { if (res.status() >= 400) result.failedResponses.push({ status: res.status(), url: res.url() }); });
  page.on('console', msg => { if (msg.type() === 'error') result.consoleErrors.push({ page: page.url(), message: msg.text() }); });
  page.on('pageerror', err => result.consoleErrors.push({ page: page.url(), message: err.message }));
  page.on('request', req => { if (/google-analytics|googletagmanager|analytics.google/.test(req.url())) result.googleRequests.push(new URL(req.url()).origin + new URL(req.url()).pathname); });
});
const page = await context.newPage();
const xml = await (await context.request.get(`${base}/sitemap.xml`)).text();
const paths = new Set([...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname));
// Include all additional application routes, even the unlinked logo preview and blog redirects.
for (const locale of ['en', 'de']) for (const path of ['/logo-preview', '/blog', '/blog/csp-check']) paths.add(`/${locale}${path}`);
paths.add('/');
for (const path of paths) {
  const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 70)); } });
  const policy = response.headers()['content-security-policy'];
  if (!live && (!policy || policy.includes("script-src 'self' 'unsafe-inline'"))) throw new Error(`Missing enforced nonce policy: ${path}`);
  const links = await page.locator('a[href]').evaluateAll(els => els.map(el => el.href));
  for (const link of links) { const u = new URL(link); if (u.origin === new URL(base).origin && !/\.[a-z0-9]+$/i.test(u.pathname)) paths.add(u.pathname); }
  result.pages.push({ path, finalPath: new URL(page.url()).pathname, status: response.status() });
}
result.consent.before = result.googleRequests.length;
await page.goto(`${base}/en`, { waitUntil: 'networkidle' });
await page.getByRole('button', { name: 'Decline', exact: true }).click();
await page.reload({ waitUntil: 'networkidle' });
result.consent.declined = result.googleRequests.length;
await page.evaluate(() => localStorage.removeItem('cookie-consent'));
await page.reload({ waitUntil: 'networkidle' });
await page.getByRole('button', { name: 'Accept', exact: true }).click();
await page.waitForTimeout(5000);
result.consent.accepted = result.googleRequests.length;
result.consent.dataLayer = await page.evaluate(() => (window.dataLayer || []).map(x => x[0]).filter(x => typeof x === 'string'));
await page.reload({ waitUntil: 'networkidle' });
await page.waitForTimeout(2000);
result.consent.persisted = result.googleRequests.length;
await browser.close();
await writeFile(process.env.CSP_RESULT || 'docs/csp-crawl.json', JSON.stringify(result, null, 2));
console.log(JSON.stringify(result, null, 2));
if (!live && (result.violations.length || result.consent.before || result.consent.declined || !result.consent.accepted)) process.exitCode = 1;
