"use client";

import {useTranslations} from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-2xl text-black/80 dark:text-white/80">{t("intro")}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">{t("cards.ios.title")}</h3>
          <p className="text-sm text-black/70 dark:text-white/70">{t("cards.ios.desc")}</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">{t("cards.web.title")}</h3>
          <p className="text-sm text-black/70 dark:text-white/70">{t("cards.web.desc")}</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">{t("cards.ux.title")}</h3>
          <p className="text-sm text-black/70 dark:text-white/70">{t("cards.ux.desc")}</p>
        </div>
      </div>
    </div>
  );
}