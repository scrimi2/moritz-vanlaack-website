"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {routing.locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          {index > 0 && <span className="text-black/30 dark:text-white/30 mx-1">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`px-1 py-0.5 rounded transition-colors cursor-pointer ${
              locale === loc
                ? "text-black dark:text-white font-bold"
                : "text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white"
            }`}
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
