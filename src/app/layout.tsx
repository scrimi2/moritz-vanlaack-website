import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moritz van Laack | Procurement Expert & Entrepreneur",
  description:
    "Procurement expert, entrepreneur, and digital strategist based in Cologne. Founder of Sourcera AI and van Laack & partners. 12+ years experience, EUR 70B+ optimized spend.",
  keywords: [
    "Moritz van Laack",
    "procurement",
    "Sourcera AI",
    "van Laack partners",
    "digital procurement",
    "supply chain",
    "procurement consulting",
    "Cologne",
  ],
  openGraph: {
    title: "Moritz van Laack | Procurement Expert & Entrepreneur",
    description:
      "Founder of Sourcera AI & van Laack & partners. Transforming procurement through AI and strategic consulting.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
