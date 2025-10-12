"use client";

import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";
import ProfileSwitcher from "@/components/ProfileSwitcher";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{t("title")}</h1>
        <p className="max-w-2xl text-foreground/80">{t("intro")}</p>
      </header>

      {/* Profile Switcher Section */}
      <Section title="Meet the Team" description="Get to know the people behind Blueprint Studio.">
        <div className="mt-32">
          <ProfileSwitcher />
        </div>
      </Section>

      <Section title={t("glance.title")} description={t("glance.desc")}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Team" value="2" hint="Husband & Wife duo" />
          <StatCard label="Active Users" value="23,000+" hint="Gerege App nationwide" />
          <StatCard label="Primary Focus" value="iOS + Frontend" hint="Swift, React, Vue" />
          <StatCard label="Projects Shipped" value="6+" hint="From GovTech to E-commerce" />
        </div>
      </Section>

      <Section title={t("whatWeDo.title")} description={t("whatWeDo.desc")}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-foreground/20 p-5">
            <h3 className="font-medium mb-1 text-foreground">{t("whatWeDo.cards.ios.title")}</h3>
            <p className="text-sm text-foreground/70">{t("whatWeDo.cards.ios.desc")}</p>
          </div>
          <div className="rounded-xl border border-foreground/20 p-5">
            <h3 className="font-medium mb-1 text-foreground">{t("whatWeDo.cards.web.title")}</h3>
            <p className="text-sm text-foreground/70">{t("whatWeDo.cards.web.desc")}</p>
          </div>
          <div className="rounded-xl border border-foreground/20 p-5">
            <h3 className="font-medium mb-1 text-foreground">{t("whatWeDo.cards.ux.title")}</h3>
            <p className="text-sm text-foreground/70">{t("whatWeDo.cards.ux.desc")}</p>
          </div>
        </div>
      </Section>

      <Section title={t("achievements.title")} description={t("achievements.desc")}>
        <div className="space-y-6">
          {/* Education & Career */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Education & Career</h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">🎓 Chinguun</strong> — {t("achievements.items.chinguunBachelor")}
              </li>
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">💼 Chinguun</strong> — {t("achievements.items.chinguunGerege")}
              </li>
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">🩺 Shinezaya</strong> — {t("achievements.items.shinezayaMedical")}
              </li>
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">🎨 Shinezaya</strong> — {t("achievements.items.shinezayaGerege")}
              </li>
            </ul>
          </div>

          {/* Programs & Certifications */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Programs & Certifications</h3>
            <ul className="space-y-3 text-sm text-foreground/80">
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">Grow with Google Mongolia (2025)</strong> — {t("achievements.items.google")}
              </li>
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">Coursera Certificates</strong> — {t("achievements.items.coursera")}
              </li>
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">User Experience Academy</strong> — {t("achievements.items.uxAcademy")}
              </li>
              <li className="rounded-xl border border-foreground/20 p-5">
                <strong className="text-foreground">Always Learning</strong> — {t("achievements.items.mindset")}
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title={t("timeline.title")} description={t("timeline.desc")}>
        <Timeline
          items={[
            { title: t("timeline.items.0.period"), subtitle: t("timeline.items.0.title"), details: t("timeline.items.0.desc") },
            { title: t("timeline.items.1.period"), subtitle: t("timeline.items.1.title"), details: t("timeline.items.1.desc") },
            { title: t("timeline.items.2.period"), subtitle: t("timeline.items.2.title"), details: t("timeline.items.2.desc") },
            { title: t("timeline.items.3.period"), subtitle: t("timeline.items.3.title"), details: t("timeline.items.3.desc") },
            { title: t("timeline.items.4.period"), subtitle: t("timeline.items.4.title"), details: t("timeline.items.4.desc") },
            { title: t("timeline.items.5.period"), subtitle: t("timeline.items.5.title"), details: t("timeline.items.5.desc") },
          ]}
        />
      </Section>

      <Section title={t("milestones.title")} description={t("milestones.desc")}>
        <Timeline
          items={[
            { title: "Age 27", subtitle: "$100K net worth", details: "Land remote iOS role" },
            { title: "Age 30", subtitle: "$275K net worth", details: "Senior on track" },
            { title: "Age 32", subtitle: "$500K net worth", details: "Halfway to goal" },
            { title: "Age 35", subtitle: "$1M+ net worth", details: "Goal achieved" },
          ]}
        />
      </Section>

      <Section title={t("principles.title")} description={t("principles.desc")}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-foreground/80">
          <li className="rounded-xl border border-foreground/20 p-5">Pay yourself first — invest 30-50% monthly</li>
          <li className="rounded-xl border border-foreground/20 p-5">Time in market &gt; timing the market</li>
          <li className="rounded-xl border border-foreground/20 p-5">Increase income aggressively (remote iOS)</li>
          <li className="rounded-xl border border-foreground/20 p-5">Live below your means; avoid lifestyle creep</li>
        </ul>
      </Section>

      <Section title={t("next.title")} description={t("next.desc")}>
        <div className="rounded-xl border border-foreground/20 p-5 flex items-center justify-between gap-3">
          <div className="text-sm text-foreground/80">{t("ctaText")}</div>
          <Link href={`/${locale}/contact`} className="inline-flex rounded-md bg-foreground text-background px-4 py-2 text-sm hover:opacity-90">{t("cta")}</Link>
        </div>
      </Section>
    </div>
  );
}


