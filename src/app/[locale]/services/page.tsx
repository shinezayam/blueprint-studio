"use client";

import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";

export default function ServicesPage() {
  const t = useTranslations("services");
  const locale = useLocale();
  const cards = [
    { key: "ios", icon: "iphone" },
    { key: "android", icon: "android-os" },
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

      {/* Closing CTA — no pricing */}
      <div className="card overflow-hidden">
        <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_12%,transparent)] to-transparent">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-foreground">{t("cta.title")}</h2>
              <p className="text-foreground/65 leading-relaxed">{t("cta.desc")}</p>
            </div>
            <Link href={`/${locale}/contact`} className="btn btn-primary shrink-0">{t("cta.cta")}</Link>
          </div>
        </div>
      </div>

    </div>
  );
}