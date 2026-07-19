import { getTranslations } from "next-intl/server";
import { SITE_URL } from "@/lib/constants";
import ImpressumClient from "./ImpressumClient";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "impressum" });
  return {
    title: t("title"),
    alternates: {
      canonical: `${SITE_URL}/${locale}/impressum`,
      languages: {
        en: `${SITE_URL}/en/impressum`,
        de: `${SITE_URL}/de/impressum`,
      },
    },
  };
}

export default function Page() {
  return <ImpressumClient />;
}
