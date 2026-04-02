const logos = [
  {
    id: '1',
    name: 'Sharp (Original)',
    description: 'Medium overlap with sharp corners — the baseline.',
    src: '/images/logos/logo-m4c-sharp.svg',
  },
  {
    id: '2',
    name: 'Rounded — Small',
    description: 'Slightly rounded corners (8px radius).',
    src: '/images/logos/logo-m4c-round-sm.svg',
  },
  {
    id: '3',
    name: 'Rounded — Medium',
    description: 'Moderately rounded corners (16px radius).',
    src: '/images/logos/logo-m4c-round-md.svg',
  },
  {
    id: '4',
    name: 'Rounded — Large',
    description: 'Heavily rounded corners (24px radius).',
    src: '/images/logos/logo-m4c-round-lg.svg',
  },
];

export default function LogoPreviewPage() {
  return (
    <div className="min-h-screen bg-neutral-100 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-black uppercase text-neutral-900">
          Logo Options
        </h1>
        <p className="mb-12 text-neutral-600">
          Pick your favorite. Each option shown on light and dark backgrounds at multiple sizes.
        </p>

        <div className="space-y-16">
          {logos.map((logo) => (
            <section key={logo.id} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">
                  Option {logo.id} — {logo.name}
                </h2>
                <p className="text-sm text-neutral-500">{logo.description}</p>
              </div>

              {/* Light background */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Light Background
                </p>
                <div className="flex items-end gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <img src={logo.src} alt={logo.name} className="h-40 w-40 object-contain" />
                    <span className="text-xs text-neutral-400">160px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src={logo.src} alt={logo.name} className="h-16 w-16 object-contain" />
                    <span className="text-xs text-neutral-400">64px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src={logo.src} alt={logo.name} className="h-8 w-8 object-contain" />
                    <span className="text-xs text-neutral-400">32px</span>
                  </div>
                </div>
              </div>

              {/* Dark background */}
              <div className="rounded-2xl bg-neutral-900 p-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-neutral-500">
                  Dark Background
                </p>
                <div className="flex items-end gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <img src={logo.src} alt={logo.name} className="h-40 w-40 object-contain" />
                    <span className="text-xs text-neutral-500">160px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src={logo.src} alt={logo.name} className="h-16 w-16 object-contain" />
                    <span className="text-xs text-neutral-500">64px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img src={logo.src} alt={logo.name} className="h-8 w-8 object-contain" />
                    <span className="text-xs text-neutral-500">32px</span>
                  </div>
                </div>
              </div>

              {/* Nav simulation */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Nav Preview
                </p>
                <div className="flex items-center gap-3 border-t-[3px] border-primary pt-3">
                  <img src={logo.src} alt={logo.name} className="h-8 w-8 shrink-0 object-contain" />
                  <span className="text-base font-medium text-neutral-900">Moritz van Laack</span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
