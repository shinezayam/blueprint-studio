"use client";

import {useTranslations} from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  
  const items = [
    { title: t("items.0.title"), summary: t("items.0.summary") },
    { title: t("items.1.title"), summary: t("items.1.summary") },
    { title: t("items.2.title"), summary: t("items.2.summary") },
  ];

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-2xl text-black/80 dark:text-white/80">{t("intro")}</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-black/10 dark:border-white/20 p-5">
            <h3 className="font-medium mb-1">{item.title}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}