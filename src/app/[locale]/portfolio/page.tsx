"use client";

import {Suspense, useRef} from "react";
import {useTranslations} from "next-intl";
import PageHeader from "@/components/PageHeader";
import ProductCard, {useScrollEffects, type ProjectItem} from "@/components/ProductCard";

function PartnerMarquee({ label, partners }: { label: string; partners: string[] }) {
  const track = [...partners, ...partners];
  return (
    <div className="reveal space-y-5" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
      <p className="text-center text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-foreground/35">{label}</p>
      <div className="marquee py-2">
        <div className="marquee-track">
          {track.map((name, i) => (
            <span
              key={i}
              className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground/25 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const t = useTranslations("portfolio");
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollEffects(rootRef);

  const partners = [
    "LaundryZone",
    "Dream Box MN",
    "Mongol School",
    "Sayan Dent",
    "Ahilt House Construction",
    "Women's Federation of Darkhan",
  ];

  const items: ProjectItem[] = [
    {
      title: t("items.0.title"),
      type: t("items.0.type"),
      summary: t("items.0.summary"),
      stack: t("items.0.stack"),
      team: t("items.0.team"),
      duration: t("items.0.duration"),
      features: t("items.0.features"),
      outcome: t("items.0.outcome"),
      links: [{ href: "https://laundryzone.mn", label: "laundryzone.mn" }],
      images: [
        { src: "/LaundryZone/image 174.png", width: 1795, height: 1044 },
        { src: "/LaundryZone/image 175.png", width: 1800, height: 1037 },
        { src: "/LaundryZone/image 176.png", width: 1789, height: 1038 },
        { src: "/LaundryZone/image 180.png", width: 481, height: 1044 },
        { src: "/LaundryZone/image 181.png", width: 480, height: 1044 },
        { src: "/LaundryZone/image 182.png", width: 480, height: 1044 },
        { src: "/LaundryZone/image 183.png", width: 1798, height: 1038 },
      ],
    },
    {
      title: t("items.3.title"),
      type: t("items.3.type"),
      summary: t("items.3.summary"),
      tools: t("items.3.tools"),
      features: t("items.3.features"),
      outcome: t("items.3.outcome"),
      links: [{ href: "https://mongolschool.mn", label: "mongolschool.mn" }],
      images: [
        { src: "/mongolschool/mongolschool-1.png", width: 2400, height: 1500 },
        { src: "/mongolschool/mongolschool-2.png", width: 2400, height: 1500 },
        { src: "/mongolschool/mongolschool-3.png", width: 2400, height: 1500 },
        { src: "/mongolschool/mongolschool-mobile.png", width: 780, height: 1688 },
      ],
    },
    {
      title: t("items.4.title"),
      type: t("items.4.type"),
      summary: t("items.4.summary"),
      stack: t("items.4.stack"),
      features: t("items.4.features"),
      outcome: t("items.4.outcome"),
      links: [{ href: "https://sayandent.vercel.app", label: "sayandent.vercel.app" }],
      images: [
        { src: "/sayandent/sayandent-1.png", width: 2400, height: 1500 },
        { src: "/sayandent/sayandent-2.png", width: 2400, height: 1500 },
        { src: "/sayandent/sayandent-3.png", width: 2400, height: 1500 },
        { src: "/sayandent/sayandent-mobile.png", width: 780, height: 1688 },
      ],
    },
    {
      title: t("items.1.title"),
      type: t("items.1.type"),
      summary: t("items.1.summary"),
      stack: t("items.1.stack"),
      team: t("items.1.team"),
      duration: t("items.1.duration"),
      features: t("items.1.features"),
      outcome: t("items.1.outcome"),
      images: [
        { src: "/dbox/image 157.png", width: 2013, height: 1278 },
        { src: "/dbox/IMG_2275.png", width: 590, height: 1278 },
        { src: "/dbox/IMG_2276.png", width: 590, height: 1278 },
        { src: "/dbox/IMG_2277.png", width: 590, height: 1278 },
        { src: "/dbox/IMG_2278.png", width: 590, height: 1278 },
        { src: "/dbox/IMG_2279.png", width: 590, height: 1278 },
        { src: "/dbox/Screenshot 2025-10-12 at 19.12.20 1.png", width: 590, height: 1278 },
        { src: "/dbox/image 158.png", width: 589, height: 1278 },
      ],
    },
    {
      title: t("items.5.title"),
      type: t("items.5.type"),
      summary: t("items.5.summary"),
      role: t("items.5.role"),
      tools: t("items.5.tools"),
      features: t("items.5.features"),
      outcome: t("items.5.outcome"),
      links: [{ href: "/downloads/ahilt-brand-guide.pdf", label: "Download PDF" }],
      images: [
        { src: "/ahilt/ahilt-01.png", width: 2400, height: 1350 },
        { src: "/ahilt/ahilt-02.png", width: 2400, height: 1350 },
        { src: "/ahilt/ahilt-03.png", width: 2400, height: 1350 },
        { src: "/ahilt/ahilt-04.png", width: 2400, height: 1350 },
        { src: "/ahilt/ahilt-05.png", width: 2400, height: 1350 },
        { src: "/ahilt/ahilt-06.png", width: 2400, height: 1350 },
        { src: "/ahilt/ahilt-07.png", width: 2400, height: 1350 },
        { src: "/ahilt/ahilt-08.png", width: 2400, height: 1350 },
      ],
    },
  ];

  return (
    <Suspense fallback={null}>
      <div ref={rootRef} className="space-y-14 sm:space-y-20">
        <div className="reveal">
          <PageHeader eyebrow={t("eyebrow")} title={t("title")} description={t("intro")} />
        </div>

        <PartnerMarquee label={t("partnersLabel")} partners={partners} />

        <div className="space-y-14 sm:space-y-24">
          {items.map((item, i) => (
            <ProductCard key={item.title} item={item} index={i} dragLabel={t("dragHint")} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
