'use client';

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Datenschutz() {
  const t = useTranslations("datenschutz");
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

        <div className="space-y-8 text-neutral-700">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">{t("section1Title")}</h2>
            <p>{t("section1Text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">{t("section2Title")}</h2>
            <h3 className="text-lg font-medium mb-2 text-neutral-800">{t("responsiblePartyTitle")}</h3>
            <p className="whitespace-pre-line">{t("responsiblePartyText")}</p>
            <p className="mt-4">{t("responsiblePartyNote")}</p>
            <h3 className="text-lg font-medium mt-6 mb-2 text-neutral-800">{t("yourRightsTitle")}</h3>
            <p>{t("yourRightsText")}</p>
            <p className="mt-4">{t("yourRightsText2")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">{t("section3Title")}</h2>

            <h3 className="text-lg font-medium mb-2 text-neutral-800">{t("localStorageTitle")}</h3>
            <p>{t("localStorageText")}</p>

            <h3 className="text-lg font-medium mt-6 mb-2 text-neutral-800">{t("serverLogsTitle")}</h3>
            <p>{t("serverLogsText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">{t("section4Title")}</h2>
            <p>{t("section4Text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-neutral-900">{t("section5Title")}</h2>
            <p>{t("section5Intro")}</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong>{t("rightAccess").split(":")[0]}:</strong>{t("rightAccess").split(":").slice(1).join(":")}</li>
              <li><strong>{t("rightRectification").split(":")[0]}:</strong>{t("rightRectification").split(":").slice(1).join(":")}</li>
              <li><strong>{t("rightErasure").split(":")[0]}:</strong>{t("rightErasure").split(":").slice(1).join(":")}</li>
              <li><strong>{t("rightRestriction").split(":")[0]}:</strong>{t("rightRestriction").split(":").slice(1).join(":")}</li>
              <li><strong>{t("rightPortability").split(":")[0]}:</strong>{t("rightPortability").split(":").slice(1).join(":")}</li>
              <li><strong>{t("rightObjection").split(":")[0]}:</strong>{t("rightObjection").split(":").slice(1).join(":")}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
