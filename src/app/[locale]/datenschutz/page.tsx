import { getTranslations } from "next-intl/server";
import { languageAlternates } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import DatenschutzClient from "./DatenschutzClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "datenschutz" });
  return {
    title: t("title"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/datenschutz`,
      languages: languageAlternates('/datenschutz'),
    },
  };
}

export default function Page() {
  return <DatenschutzClient />;
}
