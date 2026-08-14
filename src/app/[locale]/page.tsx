"use client";

import Link from "next/link";
import {useRef} from "react";
import SplineHero from "@/components/SplineHero";
import Icon from "@/components/Icon";
import ProductCard, {useScrollEffects, type ProjectItem} from "@/components/ProductCard";
import {useLocale, useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const tp = useTranslations("portfolio");
  const locale = useLocale();

  const showcaseRef = useRef<HTMLDivElement>(null);
  useScrollEffects(showcaseRef);

  // Featured works shown in full on the home page (like the portfolio page)
  const showcaseItems: ProjectItem[] = [
    {
      title: tp("items.7.title"),
      type: tp("items.7.type"),
      summary: tp("items.7.summary"),
      stack: tp("items.7.stack"),
      team: tp("items.7.team"),
      role: tp("items.7.role"),
      features: tp("items.7.features"),
      outcome: tp("items.7.outcome"),
      links: [{ href: "https://geclub.mn", label: "geclub.mn" }],
      images: [
        { src: "/GeClub/geclub-1.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-2.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-3.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-4.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-5.png", width: 1242, height: 2688 },
      ],
    },
    {
      title: tp("items.10.title"),
      type: tp("items.10.type"),
      summary: tp("items.10.summary"),
      role: tp("items.10.role"),
      tools: tp("items.10.tools"),
      features: tp("items.10.features"),
      outcome: tp("items.10.outcome"),
      images: [
        { src: "/chess-federation/chess-1.png", width: 3840, height: 2332 },
        { src: "/chess-federation/chess-2.png", width: 3840, height: 2330 },
        { src: "/chess-federation/chess-3.png", width: 3838, height: 2328 },
      ],
    },
    {
      title: tp("items.11.title"),
      type: tp("items.11.type"),
      summary: tp("items.11.summary"),
      role: tp("items.11.role"),
      tools: tp("items.11.tools"),
      features: tp("items.11.features"),
      outcome: tp("items.11.outcome"),
      images: [
        { src: "/simple-kiosk/kiosk-01.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-02.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-03.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-04.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-05.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-06.png", width: 1280, height: 1024 },
      ],
    },
    {
      title: tp("items.15.title"),
      type: tp("items.15.type"),
      summary: tp("items.15.summary"),
      role: tp("items.15.role"),
      tools: tp("items.15.tools"),
      features: tp("items.15.features"),
      outcome: tp("items.15.outcome"),
      images: [
        { src: "/cancer-center/cancer-01.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-02.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-03.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-04.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-05.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-06.png", width: 1440, height: 1024 },
      ],
    },
    {
      title: tp("items.18.title"),
      type: tp("items.18.type"),
      summary: tp("items.18.summary"),
      role: tp("items.18.role"),
      tools: tp("items.18.tools"),
      features: tp("items.18.features"),
      outcome: tp("items.18.outcome"),
      images: [
        { src: "/appointment/appt-01.png", width: 750, height: 1624 },
        { src: "/appointment/appt-02.png", width: 750, height: 1624 },
        { src: "/appointment/appt-03.png", width: 750, height: 1624 },
        { src: "/appointment/appt-04.png", width: 750, height: 1624 },
        { src: "/appointment/appt-05.png", width: 750, height: 1624 },
        { src: "/appointment/appt-06.png", width: 750, height: 1624 },
        { src: "/appointment/appt-07.png", width: 750, height: 1624 },
      ],
    },
  ];

  const features = [
    { key: "ios", icon: "iphone" },
    { key: "web", icon: "domain" },
    { key: "ux", icon: "design" },
    { key: "branding", icon: "paint-palette" },
    { key: "marketing", icon: "video-editing" },
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

      {/* Portfolio showcase — full works like the portfolio page */}
      <div ref={showcaseRef} className="space-y-8 sm:space-y-12">
        <div className="space-y-3 max-w-2xl fade-in-up">
          <span className="eyebrow">{t("showcase.eyebrow")}</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-foreground">
            {t("showcase.title")}
          </h2>
        </div>

        <div className="space-y-14 sm:space-y-24">
          {showcaseItems.map((item, i) => (
            <ProductCard key={item.title} item={item} index={i} dragLabel={tp("dragHint")} />
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Link href={`/${locale}/portfolio`} className="btn btn-primary">
            {t("showcase.cta")}
            <span aria-hidden>→</span>
          </Link>
        </div>
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
