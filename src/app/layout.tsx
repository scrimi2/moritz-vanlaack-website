import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | Procurement Expert & Entrepreneur`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Moritz van Laack",
    "procurement",
    "Sourcera AI",
    "van Laack partners",
    "digital procurement",
    "supply chain",
    "procurement consulting",
    "Cologne",
    "Einkauf",
    "Beschaffung",
    "Digitale Transformation",
    "AI procurement",
    "Opportunity-to-Savings",
    "procurement transformation",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Procurement Expert & Entrepreneur`,
    description:
      "CEO & co-founder of Sourcera AI, founder of van Laack & partners. Transforming procurement through AI and strategic consulting.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
