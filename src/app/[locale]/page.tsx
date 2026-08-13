"use client";

import Link from "next/link";
import SplineHero from "@/components/SplineHero";
import Icon from "@/components/Icon";
import {useLocale, useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  const features = [
    { key: "ios", icon: "iphone" },
    { key: "web", icon: "domain" },
    { key: "ux", icon: "design" },
  ] as const;

  const proof = ["projects", "platforms", "techStack", "languages"] as const;

  return (
    <section className="space-y-24 sm:space-y-32">
      {/* Full-bleed cinematic hero */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] -mt-10 w-screen overflow-hidden">
        <div className="hero-glow" aria-hidden />
        <div className="grid-bg" aria-hidden />
        {/* Spline as immersive backdrop, faded into the black */}
        <div
          className="absolute inset-y-0 right-0 hidden md:block w-[62%] opacity-80"
          ref={(el) => {
            if (el && !el.dataset.wheelGuard) {
              el.dataset.wheelGuard = "1";
              el.addEventListener("wheel", (e) => e.stopPropagation(), { capture: true, passive: true });
            }
          }}
        >
          <SplineHero className="h-full w-full" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl py-24 sm:py-36 space-y-8 text-center md:text-left fade-in-up" style={{ animationDelay: "100ms" }}>
            <span className="eyebrow">{t("eyebrow")}</span>
            <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] font-semibold tracking-[-0.035em] leading-[0.95]">
              <span className="text-gradient">{t("title")}</span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-foreground/60 leading-relaxed">
              {t("desc")}
            </p>
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start pt-2">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {t("ctaContact")}
                <span aria-hidden>→</span>
              </Link>
              <Link href={`/${locale}/portfolio`} className="btn btn-secondary">{t("ctaWork")}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Proof bar */}
      <div className="card grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x fade-in-up" style={{ animationDelay: "160ms" }}>
        {proof.map((k) => (
          <div key={k} className="px-5 py-6 text-center">
            <p className="text-sm font-medium text-foreground/85">{t(`proofBar.${k}`)}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 fade-in-up" style={{ animationDelay: "200ms" }}>
        {features.map((f) => (
          <div key={f.key} className="card card-hover p-7">
            <div className="icon-tile mb-5" aria-hidden><Icon name={f.icon} size={26} /></div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">{t(`features.${f.key}.title`)}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{t(`features.${f.key}.desc`)}</p>
          </div>
        ))}
      </div>

      {/* Closing CTA band */}
      <div className="relative overflow-hidden card p-10 sm:p-16 text-center">
        <div className="hero-glow" aria-hidden />
        <div className="relative space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-gradient">
            {t("finale.title")}
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">{t("finale.desc")}</p>
          <div className="flex justify-center pt-1">
            <Link href={`/${locale}/contact`} className="btn btn-primary">
              {t("finale.cta")}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
