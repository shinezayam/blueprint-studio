"use client";

import {Suspense} from "react";
import {useTranslations} from "next-intl";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  
  const items = [
    { title: t("items.0.title"), summary: t("items.0.summary") },
    { title: t("items.1.title"), summary: t("items.1.summary") },
    { title: t("items.2.title"), summary: t("items.2.summary") },
  ];

  return (
    <Suspense fallback={null}>
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{t("title")}</h1>
      <p className="max-w-2xl text-foreground/80">{t("intro")}</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-foreground/20 p-5">
            <h3 className="font-medium mb-1 text-foreground">{item.title}</h3>
          <p className="text-sm text-foreground/70">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
    </Suspense>
  );
}