"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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

function Lightbox({ images, index, title, onClose, onNavigate }: {
  images: ProjectImage[];
  index: number;
  title: string;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const count = images.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNavigate((index - 1 + count) % count);
      else if (e.key === "ArrowRight") onNavigate((index + 1) % count);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, count, onClose, onNavigate]);

  const img = images[index];
  const btn = "inline-flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60";

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10 fade-in-up"
      style={{ animationDuration: "160ms" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} images`}
    >
      <button type="button" onClick={onClose} aria-label="Close" className={`${btn} absolute top-4 right-4 h-11 w-11`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>

      {count > 1 && (
        <button type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + count) % count); }} className={`${btn} absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={`${title} preview ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[86vh] max-w-[92vw] h-auto w-auto rounded-xl object-contain shadow-2xl"
      />

      {count > 1 && (
        <button type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % count); }} className={`${btn} absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      )}

      {count > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md tabular-nums">
          {index + 1} / {count}
        </div>
      )}
    </div>,
    document.body
  );
}

function ProductGallery({ item, dragLabel }: { item: ProjectItem; dragLabel: string }) {
  const [hintHidden, setHintHidden] = useState(false);
  const [active, setActive] = useState<number | null>(null);
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
              role="button"
              tabIndex={0}
              onClick={() => setActive(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(idx); }
              }}
              aria-label={`Open ${item.title} preview ${idx + 1}`}
              className={`${wide ? "gallery-frame w-[min(88vw,780px)]" : "gallery-frame h-[340px] sm:h-[430px]"} cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]`}
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
      {active !== null && (
        <Lightbox
          images={item.images}
          index={active}
          title={item.title}
          onClose={() => setActive(null)}
          onNavigate={setActive}
        />
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
