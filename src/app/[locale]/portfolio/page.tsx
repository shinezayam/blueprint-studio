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
    "Gerege Systems",
    "Gerege Pay",
    "GeClub",
    "LaundryZone",
    "Dream Box MN",
    "ai.gerege.mn",
    "Women's Federation of Darkhan",
  ];

  const items: ProjectItem[] = [
    {
      title: t("items.7.title"),
      type: t("items.7.type"),
      summary: t("items.7.summary"),
      stack: t("items.7.stack"),
      team: t("items.7.team"),
      role: t("items.7.role"),
      features: t("items.7.features"),
      outcome: t("items.7.outcome"),
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
      title: t("items.2.title"),
      type: t("items.2.type"),
      summary: t("items.2.summary"),
      users: t("items.2.users"),
      team: t("items.2.team"),
      role: t("items.2.role"),
      features: t("items.2.features"),
      outcome: t("items.2.outcome"),
      links: [
        { href: "https://app.gerege.mn", label: "app.gerege.mn" },
        { href: "https://apps.apple.com/mn/app/gerege/id1427293169", label: "App Store" },
      ],
      images: [
        { src: "/Gerege app/gerege-preview-1.png", width: 1242, height: 2688 },
        { src: "/Gerege app/gerege-preview-2.png", width: 1242, height: 2688 },
        { src: "/Gerege app/gerege-preview-3.png", width: 1242, height: 2688 },
        { src: "/Gerege app/gerege-preview-4.png", width: 1242, height: 2688 },
        { src: "/Gerege app/gerege-preview-5.png", width: 1242, height: 2688 },
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
      title: t("items.5.title"),
      type: t("items.5.type"),
      summary: t("items.5.summary"),
      stack: t("items.5.stack"),
      team: t("items.5.team"),
      role: t("items.5.role"),
      outcome: t("items.5.outcome"),
      links: [{ href: "https://shop.gerege.mn", label: "shop.gerege.mn" }],
      images: [
        { src: "/Gerege shop/image 160.png", width: 1800, height: 1034 },
        { src: "/Gerege shop/image 162.png", width: 1800, height: 1034 },
        { src: "/Gerege shop/image 163.png", width: 1793, height: 1029 },
        { src: "/Gerege shop/image 164.png", width: 1800, height: 1034 },
        { src: "/Gerege shop/image 165.png", width: 476, height: 1034 },
        { src: "/Gerege shop/image 166.png", width: 475, height: 1034 },
        { src: "/Gerege shop/image 167.png", width: 476, height: 1034 },
      ],
    },
    {
      title: t("items.8.title"),
      type: t("items.8.type"),
      summary: t("items.8.summary"),
      features: t("items.8.features"),
      outcome: t("items.8.outcome"),
      links: [{ href: "https://mongolschool.mn", label: "mongolschool.mn" }],
      images: [
        { src: "/mongolschool/mongolschool-1.png", width: 2400, height: 1500 },
        { src: "/mongolschool/mongolschool-2.png", width: 2400, height: 1500 },
        { src: "/mongolschool/mongolschool-3.png", width: 2400, height: 1500 },
        { src: "/mongolschool/mongolschool-mobile.png", width: 780, height: 1688 },
      ],
    },
    {
      title: t("items.9.title"),
      type: t("items.9.type"),
      summary: t("items.9.summary"),
      features: t("items.9.features"),
      outcome: t("items.9.outcome"),
      links: [{ href: "https://sayandent.vercel.app", label: "sayandent.vercel.app" }],
      images: [
        { src: "/sayandent/sayandent-1.png", width: 2400, height: 1500 },
        { src: "/sayandent/sayandent-2.png", width: 2400, height: 1500 },
        { src: "/sayandent/sayandent-3.png", width: 2400, height: 1500 },
        { src: "/sayandent/sayandent-mobile.png", width: 780, height: 1688 },
      ],
    },
    {
      title: t("items.10.title"),
      type: t("items.10.type"),
      summary: t("items.10.summary"),
      role: t("items.10.role"),
      tools: t("items.10.tools"),
      features: t("items.10.features"),
      outcome: t("items.10.outcome"),
      images: [
        { src: "/chess-federation/chess-1.png", width: 3840, height: 2332 },
        { src: "/chess-federation/chess-2.png", width: 3840, height: 2330 },
        { src: "/chess-federation/chess-3.png", width: 3838, height: 2328 },
      ],
    },
    {
      title: t("items.11.title"),
      type: t("items.11.type"),
      summary: t("items.11.summary"),
      role: t("items.11.role"),
      tools: t("items.11.tools"),
      features: t("items.11.features"),
      outcome: t("items.11.outcome"),
      images: [
        { src: "/simple-kiosk/kiosk-01.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-02.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-03.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-04.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-05.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-06.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-07.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-08.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-09.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-10.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-11.png", width: 1280, height: 1024 },
        { src: "/simple-kiosk/kiosk-12.png", width: 1280, height: 1024 },
      ],
    },
    {
      title: t("items.15.title"),
      type: t("items.15.type"),
      summary: t("items.15.summary"),
      role: t("items.15.role"),
      tools: t("items.15.tools"),
      features: t("items.15.features"),
      outcome: t("items.15.outcome"),
      images: [
        { src: "/cancer-center/cancer-01.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-02.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-03.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-04.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-05.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-06.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-07.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-08.png", width: 1440, height: 1024 },
        { src: "/cancer-center/cancer-09.png", width: 2878, height: 2036 },
      ],
    },
    {
      title: t("items.17.title"),
      type: t("items.17.type"),
      summary: t("items.17.summary"),
      role: t("items.17.role"),
      tools: t("items.17.tools"),
      features: t("items.17.features"),
      outcome: t("items.17.outcome"),
      images: [
        { src: "/ekids/ekids-01.png", width: 393, height: 852 },
        { src: "/ekids/ekids-02.png", width: 393, height: 852 },
        { src: "/ekids/ekids-03.png", width: 393, height: 852 },
        { src: "/ekids/ekids-04.png", width: 393, height: 852 },
        { src: "/ekids/ekids-05.png", width: 393, height: 852 },
        { src: "/ekids/ekids-06.png", width: 393, height: 852 },
        { src: "/ekids/ekids-07.png", width: 393, height: 852 },
        { src: "/ekids/ekids-08.png", width: 393, height: 852 },
        { src: "/ekids/ekids-09.png", width: 393, height: 852 },
        { src: "/ekids/ekids-10.png", width: 393, height: 852 },
      ],
    },
    {
      title: t("items.18.title"),
      type: t("items.18.type"),
      summary: t("items.18.summary"),
      role: t("items.18.role"),
      tools: t("items.18.tools"),
      features: t("items.18.features"),
      outcome: t("items.18.outcome"),
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
    {
      title: t("items.4.title"),
      type: t("items.4.type"),
      summary: t("items.4.summary"),
      stack: t("items.4.stack"),
      team: t("items.4.team"),
      duration: t("items.4.duration"),
      features: t("items.4.features"),
      outcome: t("items.4.outcome"),
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
      title: t("items.0.title"),
      type: t("items.0.type"),
      summary: t("items.0.summary"),
      stack: t("items.0.stack"),
      team: t("items.0.team"),
      duration: t("items.0.duration"),
      role: t("items.0.role"),
      features: t("items.0.features"),
      outcome: t("items.0.outcome"),
      links: [{ href: "https://ai.gerege.mn", label: "ai.gerege.mn" }],
      images: [
        { src: "/ai.gerege.mn/image 218.png", width: 1819, height: 1282 },
        { src: "/ai.gerege.mn/image 219.png", width: 1820, height: 1282 },
        { src: "/ai.gerege.mn/image 221.png", width: 2042, height: 1282 },
        { src: "/ai.gerege.mn/image 222.png", width: 2055, height: 1282 },
        { src: "/ai.gerege.mn/Screenshot 2025-11-07 at 13.55.02 1.png", width: 591, height: 1282 },
        { src: "/ai.gerege.mn/image 216.png", width: 589, height: 1282 },
        { src: "/ai.gerege.mn/image 217.png", width: 591, height: 1282 },
        { src: "/ai.gerege.mn/image 220.png", width: 591, height: 1282 },
      ],
    },
    {
      title: t("items.3.title"),
      type: t("items.3.type"),
      summary: t("items.3.summary"),
      stack: t("items.3.stack"),
      features: t("items.3.features"),
      outcome: t("items.3.outcome"),
      images: [
        { src: "/BeFit FitnessHelper/image 184.png", width: 1800, height: 1080 },
        { src: "/BeFit FitnessHelper/IMG_2289.png", width: 393, height: 852 },
        { src: "/BeFit FitnessHelper/IMG_2290.png", width: 393, height: 852 },
        { src: "/BeFit FitnessHelper/IMG_2291.png", width: 393, height: 852 },
        { src: "/BeFit FitnessHelper/IMG_2292.png", width: 393, height: 852 },
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
