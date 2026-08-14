"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type ProjectItem = {
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

/* Reveal-on-scroll + focus-glow observers, shared by portfolio & home */
export function useScrollEffects(root: React.RefObject<HTMLDivElement | null>) {
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
              className={wide ? "gallery-frame w-[min(88vw,780px)]" : "gallery-frame h-[340px] sm:h-[430px]"}
              style={{ aspectRatio: `${img.width} / ${img.height}` }}
            >
              <Image
                src={img.src}
                alt={`${item.title} preview ${idx + 1}`}
                fill
                className="object-contain"
                sizes={wide ? "(max-width: 768px) 88vw, 780px" : "(max-width: 768px) 55vw, 220px"}
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

export default function ProductCard({ item, index, dragLabel }: { item: ProjectItem; index: number; dragLabel: string }) {
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
