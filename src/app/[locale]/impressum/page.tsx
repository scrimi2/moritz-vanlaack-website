import { getTranslations } from "next-intl/server";
import { languageAlternates } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import ImpressumClient from "./ImpressumClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impressum" });
  return {
    title: t("title"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/impressum`,
      languages: languageAlternates('/impressum'),
    },
  };
}

export default function Page() {
  return <ImpressumClient />;
}
