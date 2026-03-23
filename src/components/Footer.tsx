import { Heart } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/moritzvanlaack',
    icon: LinkedInIcon,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/moritzvanlaack',
    icon: InstagramIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h3 className="text-2xl font-bold tracking-tight">
            Moritz van Laack
          </h3>
          <p className="mt-2 max-w-md text-neutral-400">
            Procurement expert, entrepreneur, and digital strategist. Building
            the future of procurement through AI and strategic consulting.
          </p>
        </div>

        <div className="h-px w-full bg-neutral-700" />

        {/* Middle section */}
        <div className="flex flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center">
          {/* Navigation links */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition-colors hover:bg-primary hover:text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-neutral-700" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-neutral-500 md:flex-row">
          <p>&copy; 2026 Moritz van Laack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="/impressum"
              className="transition-colors hover:text-white"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="transition-colors hover:text-white"
            >
              Datenschutz
            </a>
          </div>

          <p className="flex items-center gap-1">
            Made in Cologne with{' '}
            <Heart size={14} className="fill-red-500 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
