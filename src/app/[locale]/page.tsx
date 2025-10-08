"use client";

import Link from "next/link";
import SplineHero from "@/components/SplineHero";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <section className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="text-center md:text-left space-y-6 fade-in-up" style={{ animationDelay: "120ms" }}>
          <p className="text-sm uppercase tracking-widest text-black/60 dark:text-white/60">{t("eyebrow")}</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight -mt-2 sm:-mt-3 fade-in-up" style={{ animationDelay: "60ms" }}>
            {t("title")}
          </h1>
          <p className="max-w-2xl text-black/80 dark:text-white/80">{t("desc")}</p>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Link href="portfolio" className="inline-flex rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 dark:bg-white dark:text-black">{t("ctaWork")}</Link>
            <Link href="contact" className="inline-flex rounded-md border border-black/10 dark:border-white/20 px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">{t("ctaContact")}</Link>
          </div>
        </div>
        <div className="fade-in-up" style={{ animationDelay: "80ms" }}>
          <SplineHero />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 fade-in-up" style={{ animationDelay: "220ms" }}>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">{t("features.ios.title")}</h3>
          <p className="text-sm text-black/70 dark:text-white/70">{t("features.ios.desc")}</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">{t("features.web.title")}</h3>
          <p className="text-sm text-black/70 dark:text-white/70">{t("features.web.desc")}</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
          <h3 className="font-medium mb-1">{t("features.outcomes.title")}</h3>
          <p className="text-sm text-black/70 dark:text-white/70">{t("features.outcomes.desc")}</p>
        </div>
      </div>
    </section>
  );
}


