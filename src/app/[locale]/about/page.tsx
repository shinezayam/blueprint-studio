"use client";

import Section from "@/components/Section";
import StatCard from "@/components/StatCard";
import Timeline from "@/components/Timeline";
import ProfileSwitcher from "@/components/ProfileSwitcher";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();
  return (
    <div className="space-y-10 overflow-x-hidden">
      <PageHeader eyebrow="About" title={t("title")} description={t("intro")} />

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
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Education & Career</h3>
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
            <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">Programs & Certifications</h3>
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
          items={[
            ...(t.raw("timeline.items") as Array<{period: string; title: string; desc: string}>).map((item) => ({
              title: item.period,
              subtitle: item.title,
              details: item.desc,
            })),
          ]}
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


