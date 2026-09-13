"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";
import ProfileSwitcher from "@/components/ProfileSwitcher";
import SplineHero from "@/components/SplineHero";
import Icon from "@/components/Icon";
import { useLocale, useTranslations } from "next-intl";

/* The landing page. This is the former About page: the studio and the people
   are the pitch, so the generic feature grid and showcase that used to live
   here are gone. The cursor-tracking Spline hero carries over from it. */
export default function LandingPage() {
  const t = useTranslations("about");
  const th = useTranslations("home");
  const tp = useTranslations("portfolio");
  const locale = useLocale();

  /* A visitor should see proof of work without scrolling the whole studio
     story first. One image per project keeps this cheap — the full galleries
     live on the portfolio page. */
  const work = [
    { i: 0, src: "/LaundryZone/image 174.png", w: 1795, h: 1044 },
    { i: 3, src: "/mongolschool/mongolschool-1.png", w: 2400, h: 1500 },
    { i: 4, src: "/sayandent/sayandent-1.png", w: 2400, h: 1500 },
    { i: 1, src: "/dbox/image 157.png", w: 2013, h: 1278 },
    { i: 5, src: "/ahilt/ahilt-01.png", w: 2400, h: 1350 },
  ];

  return (
    <div className="space-y-10">
      {/* Full-bleed cinematic hero. Deliberately NOT wrapped in an
          overflow-clip container: the glow band below spans the viewport with
          w-screen, and an ancestor clip would cut it to the page gutter. */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] -mt-10 w-screen overflow-hidden">
        <div className="hero-glow" aria-hidden />
        <div className="grid-bg" aria-hidden />
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

        {/* The copy column sits above the Spline backdrop, so it must not swallow
            the pointer — otherwise the scene stops tracking the cursor across most
            of its width. Only the text and buttons themselves take events. */}
        <div className="pointer-events-none relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pointer-events-none max-w-2xl py-24 sm:py-36 space-y-8 text-center md:text-left fade-in-up" style={{ animationDelay: "100ms" }}>
            <span className="eyebrow pointer-events-auto">{th("eyebrow")}</span>
            <h1 className="pointer-events-auto text-5xl sm:text-6xl lg:text-[4.75rem] font-semibold tracking-[-0.035em] leading-[0.95]">
              <span className="text-gradient">{th("title")}</span>
            </h1>
            <p className="pointer-events-auto max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-foreground/60 leading-relaxed">
              {t("intro")}
            </p>
            <div className="pointer-events-auto flex flex-wrap items-center gap-3 justify-center md:justify-start pt-2">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {th("ctaContact")}
                <span aria-hidden>→</span>
              </Link>
              <Link href={`/${locale}/portfolio`} className="btn btn-secondary">{th("ctaWork")}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Selected work, above the studio story: proof before biography. */}
      <section aria-labelledby="work-heading" className="space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="eyebrow">{th("showcase.eyebrow")}</span>
            <h2 id="work-heading" className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-foreground">
              {th("showcase.title")}
            </h2>
          </div>
          <Link href={`/${locale}/portfolio`} className="btn btn-secondary shrink-0">
            {th("showcase.cta")}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
          {work.map(({ i, src, w, h }, n) => (
            <li key={src} className={n === 0 ? "lg:col-span-2" : undefined}>
              <Link
                href={`/${locale}/portfolio`}
                className="group block h-full card card-hover overflow-hidden focus-visible:outline-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                  <Image
                    src={src}
                    alt={`${tp(`items.${i}.title`)} — ${tp(`items.${i}.type`)}`}
                    width={w}
                    height={h}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3 p-4">
                  <h3 className="font-medium text-foreground">{tp(`items.${i}.title`)}</h3>
                  <span className="text-xs uppercase tracking-wide text-foreground/45 shrink-0">
                    {tp(`items.${i}.type`)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Section title="Meet the Team" description="Get to know the people behind Blueprint Studio.">
        <ProfileSwitcher />
      </Section>

      <Section title={t("glance.title")} description={t("glance.desc")}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Team" value="2" hint="Husband & Wife duo" />
          <StatCard label="Languages" value="EN · MN" hint="Bilingual delivery" />
          <StatCard label="Primary Focus" value="iOS + Frontend" hint="Swift, React, Vue" />
          <StatCard label="Projects Shipped" value="20+" hint="From GovTech to E-commerce" />
        </div>
      </Section>

      <Section title={t("whatWeDo.title")} description={t("whatWeDo.desc")}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="card p-5">
            <h3 className="font-medium mb-1 text-foreground">{t("whatWeDo.cards.ios.title")}</h3>
            <p className="text-sm text-foreground/70">{t("whatWeDo.cards.ios.desc")}</p>
          </div>
          <div className="card p-5">
            <h3 className="font-medium mb-1 text-foreground">{t("whatWeDo.cards.web.title")}</h3>
            <p className="text-sm text-foreground/70">{t("whatWeDo.cards.web.desc")}</p>
          </div>
          <div className="card p-5">
            <h3 className="font-medium mb-1 text-foreground">{t("whatWeDo.cards.ux.title")}</h3>
            <p className="text-sm text-foreground/70">{t("whatWeDo.cards.ux.desc")}</p>
          </div>
        </div>
      </Section>

      <Section title={t("achievements.title")} description={t("achievements.desc")}>
        <div className="space-y-6">
          {/* Education & Career */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Education &amp; Career</h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="card p-5 flex items-start gap-3">
                <Icon name="graduation-cap" size={20} className="mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Chinguun</strong> — {t("achievements.items.chinguunBachelor")}</span>
              </li>
              <li className="card p-5 flex items-start gap-3">
                <Icon name="briefcase" size={20} className="mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Chinguun</strong> — {t("achievements.items.chinguunGerege")}</span>
              </li>
              <li className="card p-5 flex items-start gap-3">
                <Icon name="stethoscope" size={20} className="mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Shinezaya</strong> — {t("achievements.items.shinezayaMedical")}</span>
              </li>
              <li className="card p-5 flex items-start gap-3">
                <Icon name="paint-palette" size={20} className="mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Shinezaya</strong> — {t("achievements.items.shinezayaGerege")}</span>
              </li>
            </ul>
          </div>

          {/* Programs & Certifications */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Programs &amp; Certifications</h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="card p-5">
                <strong className="text-foreground">Teen Research Program (2026)</strong> — {t("achievements.items.teenMentor")}
              </li>
              <li className="card p-5">
                <strong className="text-foreground">Grow with Google Mongolia (2025)</strong> — {t("achievements.items.google")}
              </li>
              <li className="card p-5">
                <strong className="text-foreground">Coursera Certificates</strong> — {t("achievements.items.coursera")}
              </li>
              <li className="card p-5">
                <strong className="text-foreground">User Experience Academy</strong> — {t("achievements.items.uxAcademy")}
              </li>
              <li className="card p-5">
                <strong className="text-foreground">Always Learning</strong> — {t("achievements.items.mindset")}
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title={t("timeline.title")} description={t("timeline.desc")}>
        <Timeline
          items={(t.raw("timeline.items") as Array<{ period: string; title: string; desc: string }>).map((item) => ({
            title: item.period,
            subtitle: item.title,
            details: item.desc,
          }))}
        />
      </Section>

      <Section title={t("next.title")} description={t("next.desc")}>
        <div className="card p-5 flex items-center justify-between gap-3">
          <div className="text-sm text-foreground/80">{t("ctaText")}</div>
          <Link href={`/${locale}/contact`} className="btn btn-primary shrink-0">{t("cta")}</Link>
        </div>
      </Section>
    </div>
  );
}
