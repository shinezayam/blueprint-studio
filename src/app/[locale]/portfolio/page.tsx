"use client";

import {Suspense, useEffect, useRef, useState} from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

type ProjectItem = {
  title: string;
  type: string;
  summary: string;
  stack?: string;
  team?: string;
  duration?: string;
  role?: string;
  users?: string;
  lead?: string;
  tools?: string;
  features?: string;
  outcome?: string;
  links?: { href: string; label: string }[];
  images: ProjectImage[];
};

/* Reveal-on-scroll + focus-glow observers, shared by the whole page */
function useScrollEffects(root: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const revealed = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            revealed.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    el.querySelectorAll(".reveal").forEach((n) => revealed.observe(n));

    const focused = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          e.target.classList.toggle("in-focus", e.isIntersecting);
        }
      },
      { threshold: 0.28 }
    );
    el.querySelectorAll(".product-card").forEach((n) => focused.observe(n));

    return () => {
      revealed.disconnect();
      focused.disconnect();
    };
  }, [root]);
}

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex max-w-full items-baseline gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2">
      <span className="text-[0.62rem] uppercase tracking-wider text-foreground/40 font-semibold shrink-0">{label}</span>
      <span className="text-[0.82rem] text-foreground/80 leading-snug">{value}</span>
    </div>
  );
}

function ProductGallery({ item, dragLabel }: { item: ProjectItem; dragLabel: string }) {
  const [hintHidden, setHintHidden] = useState(false);
  if (item.images.length === 0) return null;
  return (
    <div className="relative">
      <div
        className="snap-strip"
        onScroll={(e) => {
          if (!hintHidden && e.currentTarget.scrollLeft > 24) setHintHidden(true);
        }}
      >
        {item.images.map((img, idx) => {
          const wide = img.width / img.height > 1.2;
          return (
            <div
              key={idx}
              className="gallery-frame h-[340px] sm:h-[430px]"
              style={{ aspectRatio: `${img.width} / ${img.height}`, maxWidth: wide ? "82vw" : "70vw" }}
            >
              <Image
                src={img.src}
                alt={`${item.title} preview ${idx + 1}`}
                fill
                className="object-cover"
                sizes={wide ? "(max-width: 768px) 82vw, 700px" : "(max-width: 768px) 55vw, 200px"}
              />
            </div>
          );
        })}
      </div>
      {item.images.length > 1 && (
        <>
          <div className={`drag-hint ${hintHidden ? "hint-hidden" : ""}`} aria-hidden>
            <span className="drag-arrows">⟷</span>
            {dragLabel}
          </div>
          <div className={`edge-arrow ${hintHidden ? "hint-hidden" : ""}`} aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

function ProductCard({ item, index, dragLabel }: { item: ProjectItem; index: number; dragLabel: string }) {
  const meta = ([
    ["Stack", item.stack],
    ["Team", item.team],
    ["Duration", item.duration],
    ["Users", item.users],
    ["Role", item.role],
    ["Lead", item.lead],
    ["Tools", item.tools],
  ] as [string, string | undefined][]).filter((e): e is [string, string] => Boolean(e[1]));

  return (
    <article className="product-card reveal" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
      {/* Header — big title left, summary right, spaceship-style split */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 lg:gap-10 px-6 sm:px-10 pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="chip"><span className="dot" />{item.type}</span>
            <span className="text-xs tabular-nums text-foreground/30 font-semibold tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="font-semibold text-3xl sm:text-5xl tracking-[-0.03em] text-foreground leading-[1.05]">
            {item.title}
          </h3>
        </div>
        <div className="flex flex-col justify-end gap-3">
          <p className="text-foreground/60 leading-relaxed text-base sm:text-lg">{item.summary}</p>
          {item.links && item.links.length > 0 && (
            <div className="flex flex-wrap gap-2.5">
              {item.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-4 py-2 text-sm font-semibold text-cta transition-all hover:bg-[color-mix(in_srgb,var(--accent)_16%,transparent)] hover:-translate-y-0.5"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <ProductGallery item={item} dragLabel={dragLabel} />

      {/* Details */}
      <div className="px-6 sm:px-10 pb-8 sm:pb-12 pt-4 space-y-6">
        {meta.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {meta.map(([label, value]) => (
              <MetaPill key={label} label={label} value={value} />
            ))}
          </div>
        )}

        {item.features && (
          <p className="text-sm sm:text-[0.95rem] text-foreground/60 leading-relaxed max-w-3xl">{item.features}</p>
        )}

        {item.outcome && (
          <div className="rounded-2xl border border-foreground/10 bg-gradient-to-br from-[color-mix(in_srgb,var(--accent)_10%,transparent)] to-transparent p-5 sm:p-6">
            <div className="mb-1.5 text-[0.65rem] uppercase tracking-[0.18em] font-semibold text-cta">Outcome</div>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">{item.outcome}</p>
          </div>
        )}
      </div>
    </article>
  );
}

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
