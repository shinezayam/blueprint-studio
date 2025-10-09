"use client";

import Link from "next/link";
import SplineHero from "@/components/SplineHero";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <section className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="text-center md:text-left space-y-6 fade-in-up relative z-10" style={{ animationDelay: "120ms" }}>
          <p className="text-sm uppercase tracking-widest text-foreground drop-shadow-sm">{t("eyebrow")}</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight -mt-2 sm:-mt-3 fade-in-up text-foreground" style={{ animationDelay: "60ms" }}>
            {t("title")}
          </h1>
          <p className="max-w-2xl text-foreground/90 drop-shadow-sm">{t("desc")}</p>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Link href="portfolio" className="inline-flex rounded-md bg-foreground text-background px-4 py-2 text-sm hover:opacity-90">{t("ctaWork")}</Link>
            <Link href="contact" className="inline-flex rounded-md border border-foreground/20 px-4 py-2 text-sm hover:bg-foreground/10 text-foreground">{t("ctaContact")}</Link>
          </div>
        </div>
        <div className="fade-in-up" style={{ animationDelay: "80ms" }}>
          <SplineHero />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 fade-in-up" style={{ animationDelay: "220ms" }}>
        <div className="rounded-xl border border-foreground/20 p-5">
          <h3 className="font-medium mb-1 text-foreground">{t("features.ios.title")}</h3>
          <p className="text-sm text-foreground/70">{t("features.ios.desc")}</p>
        </div>
        <div className="rounded-xl border border-foreground/20 p-5">
          <h3 className="font-medium mb-1 text-foreground">{t("features.web.title")}</h3>
          <p className="text-sm text-foreground/70">{t("features.web.desc")}</p>
        </div>
        <div className="rounded-xl border border-foreground/20 p-5">
          <h3 className="font-medium mb-1 text-foreground">{t("features.outcomes.title")}</h3>
          <p className="text-sm text-foreground/70">{t("features.outcomes.desc")}</p>
        </div>
      </div>
    </section>
  );
}


