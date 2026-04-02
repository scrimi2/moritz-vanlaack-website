import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Moritz van Laack — Procurement Expert, Entrepreneur, and Founder of Sourcera AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#0a0a0a',
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#0a0a0a',
              lineHeight: 1,
              letterSpacing: '-2px',
            }}
          >
            MORITZ
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#0a0a0a',
              lineHeight: 1,
              letterSpacing: '-2px',
            }}
          >
            VAN LAACK
          </div>
        </div>

        {/* Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: '#404040',
              letterSpacing: '1px',
            }}
          >
            PROCUREMENT EXPERT & ENTREPRENEUR
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#737373',
            }}
          >
            Founder of Sourcera AI & van Laack & partners · Cologne, Germany
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
