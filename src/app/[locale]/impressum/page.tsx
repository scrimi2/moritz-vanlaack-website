'use client';

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Impressum() {
  const t = useTranslations("impressum");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          href={`/${locale}`}
          className="text-primary hover:text-primary-dark mb-8 inline-block"
        >
          {t("backToHome")}
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-neutral-900">{t("title")}</h1>

        <div className="space-y-6 text-neutral-700">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-neutral-900">{t("sectionInfo")}</h2>
            <p className="whitespace-pre-line">
              {t("name")}
              {"\n"}
              {t("address")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-neutral-900">{t("sectionContact")}</h2>
            <p>{t("email")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-neutral-900">{t("sectionResponsible")}</h2>
            <p className="whitespace-pre-line">
              {t("responsibleName")}
              {"\n"}
              {t("responsibleAddress")}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-neutral-900">{t("sectionLiabilityContent")}</h2>
            <p>{t("liabilityContentText1")}</p>
            <p className="mt-4">{t("liabilityContentText2")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-neutral-900">{t("sectionLiabilityLinks")}</h2>
            <p>{t("liabilityLinksText1")}</p>
            <p className="mt-4">{t("liabilityLinksText2")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-neutral-900">{t("sectionCopyright")}</h2>
            <p>{t("copyrightText1")}</p>
            <p className="mt-4">{t("copyrightText2")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
