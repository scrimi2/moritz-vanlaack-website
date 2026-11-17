import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const localize = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64');
  const policy = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''}`,
    "script-src-attr 'none'",
    "style-src 'self' 'unsafe-inline'",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com",
    "img-src 'self' data:",
    "font-src 'self'",
    "media-src 'self'",
    "frame-src 'none'",
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "report-uri /api/csp-report",
  ].join('; ');

  // next-intl forwards these headers with its locale rewrite. Overwrite any
  // client-provided nonce/policy before Next renders framework inline scripts.
  request.headers.set('x-nonce', nonce);
  request.headers.set('Content-Security-Policy', policy);
  const response = localize(request);
  response.headers.set('Content-Security-Policy', policy);
  response.headers.set('Cache-Control', 'private, no-store');
  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|icon(?:/|$)|opengraph-image(?:/|$)|.*\\..*).*)'],
};
