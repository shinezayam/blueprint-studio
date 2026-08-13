"use client";

import {useTranslations} from "next-intl";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export default function ServicesPage() {
  const t = useTranslations("services");
  const cards = [
    { key: "ios", icon: "iphone" },
    { key: "web", icon: "domain" },
    { key: "ux", icon: "design" },
    { key: "backend", icon: "server" },
    { key: "content", icon: "drone" },
  ] as const;

  return (
    <div className="space-y-12">
      <PageHeader eyebrow="Services" title={t("title")} description={t("intro")} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.key} className="card card-hover p-7">
            <div className="icon-tile mb-5" aria-hidden><Icon name={c.icon} size={26} /></div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">{t(`cards.${c.key}.title`)}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{t(`cards.${c.key}.desc`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}