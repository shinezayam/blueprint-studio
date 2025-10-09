"use client";

import {useTranslations} from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("services");
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{t("title")}</h1>
      <p className="max-w-2xl text-foreground/80">{t("intro")}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-foreground/20 p-5">
          <h3 className="font-medium mb-1 text-foreground">{t("cards.ios.title")}</h3>
          <p className="text-sm text-foreground/70">{t("cards.ios.desc")}</p>
        </div>
        <div className="rounded-xl border border-foreground/20 p-5">
          <h3 className="font-medium mb-1 text-foreground">{t("cards.web.title")}</h3>
          <p className="text-sm text-foreground/70">{t("cards.web.desc")}</p>
        </div>
        <div className="rounded-xl border border-foreground/20 p-5">
          <h3 className="font-medium mb-1 text-foreground">{t("cards.ux.title")}</h3>
          <p className="text-sm text-foreground/70">{t("cards.ux.desc")}</p>
        </div>
      </div>
    </div>
  );
}