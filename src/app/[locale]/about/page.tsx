"use client";

import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";
import {useTranslations} from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-2xl text-black/80 dark:text-white/80">{t("intro")}</p>
      </header>

      <Section title={t("glance.title")} description={t("glance.desc")}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Age" value="25" hint="Starting line" />
          <StatCard label="Current Net Worth" value="$53,820" hint="Goal: $1M by 35" />
          <StatCard label="Primary Focus" value="iOS + Frontend" hint="Swift, React, Vue" />
          <StatCard label="Savings Rate" value="30%" hint="Growing to 50%+" />
        </div>
      </Section>

      <Section title={t("whatWeDo.title")} description={t("whatWeDo.desc")}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
            <h3 className="font-medium mb-1">{t("whatWeDo.cards.ios.title")}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{t("whatWeDo.cards.ios.desc")}</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
            <h3 className="font-medium mb-1">{t("whatWeDo.cards.web.title")}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{t("whatWeDo.cards.web.desc")}</p>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/20 p-5">
            <h3 className="font-medium mb-1">{t("whatWeDo.cards.ux.title")}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{t("whatWeDo.cards.ux.desc")}</p>
          </div>
        </div>
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-black/80 dark:text-white/80">
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Pay yourself first — invest 30-50% monthly</li>
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Time in market &gt; timing the market</li>
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Increase income aggressively (remote iOS)</li>
          <li className="rounded-xl border border-black/10 dark:border-white/20 p-5">Live below your means; avoid lifestyle creep</li>
        </ul>
      </Section>

      <Section title={t("next.title")} description={t("next.desc")}>
        <div className="rounded-xl border border-black/10 dark:border-white/20 p-5 flex items-center justify-between gap-3">
          <div className="text-sm text-black/80 dark:text-white/80">{t("ctaText")}</div>
          <a href="/contact" className="inline-flex rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 dark:bg-white dark:text-black">{t("cta")}</a>
        </div>
      </Section>
    </div>
  );
}


