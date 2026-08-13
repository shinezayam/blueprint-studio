"use client";

import {Suspense} from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

type ProjectImage = {
  src: string;
  width: number;
  height: number;
  isWide?: boolean;
  isSignIn?: boolean;
  isCentered?: boolean;
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
  link?: string;
  customLayout?: "gerege" | "befit" | "dbox";
  images: ProjectImage[];
};

const zoomImg = "object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]";
const frame = "relative group rounded-xl overflow-hidden border border-foreground/10 bg-background";

function ProjectHeader({ item, index }: { item: ProjectItem; index: number }) {
  return (
    <div className="flex items-start gap-4 sm:gap-5 px-6 sm:px-8 pt-7 sm:pt-9">
      <span className="text-cta text-4xl sm:text-5xl font-semibold tabular-nums leading-none select-none">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="space-y-2 pt-0.5">
        <h3 className="font-semibold text-2xl sm:text-3xl tracking-[-0.02em] text-foreground">{item.title}</h3>
        <p className="text-sm text-foreground/50">{item.type}</p>
      </div>
    </div>
  );
}

function ProjectGallery({ item }: { item: ProjectItem }) {
  const shell = "bg-gradient-to-b from-white/[0.04] to-transparent px-4 sm:px-6 pt-6 pb-4 sm:pb-6";

  if (item.images.length === 0) return null;

  if (item.customLayout === "gerege") {
    const wide = item.images.filter((img) => img.isWide);
    const signIn = item.images.find((img) => img.isSignIn);
    const mobile = item.images.filter((img) => !img.isWide && !img.isSignIn);
    return (
      <div className={`${shell} space-y-4`}>
        {wide.length > 0 && (
          <div className="space-y-4">
            {wide.map((img, idx) => (
              <div key={idx} className={`w-full ${frame}`} style={{ aspectRatio: `${img.width}/${img.height}` }}>
                <Image src={img.src} alt={`${item.title} screenshot ${idx + 1}`} fill className={zoomImg} sizes="100vw" />
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {signIn && (
            <div className={frame} style={{ width: "240px", height: `${(240 * signIn.height) / signIn.width}px`, maxHeight: "400px" }}>
              <Image src={signIn.src} alt={`${item.title} sign in`} fill className={zoomImg} sizes="240px" />
            </div>
          )}
          {mobile.map((img, idx) => (
            <div key={idx} className={frame} style={{ width: "180px", height: `${(180 * img.height) / img.width}px`, maxHeight: "400px" }}>
              <Image src={img.src} alt={`${item.title} mobile screenshot ${idx + 1}`} fill className={zoomImg} sizes="180px" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (item.customLayout === "befit" || item.customLayout === "dbox") {
    const centered = item.images.find((img) => img.isCentered);
    const mobile = item.images.filter((img) => !img.isCentered);
    return (
      <div className={`${shell} space-y-4`}>
        {centered && (
          <div className="flex justify-center">
            <div className={frame} style={{ width: "100%", maxWidth: "800px", aspectRatio: `${centered.width}/${centered.height}` }}>
              <Image src={centered.src} alt={`${item.title} preview`} fill className={zoomImg} sizes="(max-width: 800px) 100vw, 800px" />
            </div>
          </div>
        )}
        {mobile.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {mobile.map((img, idx) => (
              <div key={idx} className={frame} style={{ width: "180px", height: `${(180 * img.height) / img.width}px`, maxHeight: "400px" }}>
                <Image src={img.src} alt={`${item.title} mobile screenshot ${idx + 1}`} fill className={zoomImg} sizes="180px" />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default: split by aspect ratio
  const wide = item.images.filter((img) => img.width / img.height > 1.2);
  const tall = item.images.filter((img) => img.width / img.height <= 1.2);
  return (
    <div className={shell}>
      {wide.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {wide.map((img, idx) => (
            <div key={idx} className={`w-full ${frame}`} style={{ aspectRatio: `${img.width}/${img.height}` }}>
              <Image src={img.src} alt={`${item.title} screenshot ${idx + 1}`} fill className={zoomImg} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      )}
      {tall.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4">
          {tall.map((img, idx) => (
            <div key={idx} className={frame} style={{ width: "200px", height: `${(200 * img.height) / img.width}px`, maxHeight: "450px" }}>
              <Image src={img.src} alt={`${item.title} mobile screenshot ${idx + 1}`} fill className={zoomImg} sizes="200px" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="pl-4 border-l border-foreground/15">
      <div className="text-[0.68rem] uppercase tracking-wider text-foreground/45 font-medium">{label}</div>
      <div className="text-sm text-foreground/85 mt-1 leading-snug">{value}</div>
    </div>
  );
}

function ProjectDetails({ item }: { item: ProjectItem }) {
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
    <div className="border-t border-foreground/10 p-6 sm:p-8 space-y-6">
      <p className="text-foreground/70 leading-relaxed text-base sm:text-lg max-w-3xl">{item.summary}</p>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cta hover:underline"
        >
          {item.link.replace(/^https?:\/\//, "")} ↗
        </a>
      )}

      {meta.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
          {meta.map(([label, value]) => (
            <MetaRow key={label} label={label} value={value} />
          ))}
        </div>
      )}

      {item.features && (
        <div>
          <div className="text-[0.68rem] uppercase tracking-wider text-foreground/45 font-medium mb-2">Key features</div>
          <p className="text-sm text-foreground/75 leading-relaxed max-w-3xl">{item.features}</p>
        </div>
      )}

      {item.outcome && (
        <div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 p-5 sm:p-6">
          <div className="mb-1.5 text-[0.68rem] uppercase tracking-wider font-semibold text-cta">Outcome</div>
          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">{item.outcome}</p>
        </div>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

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
      link: "https://geclub.mn",
      images: [
        { src: "/GeClub/geclub-1.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-2.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-3.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-4.png", width: 1242, height: 2688 },
        { src: "/GeClub/geclub-5.png", width: 1242, height: 2688 },
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
      title: t("items.1.title"),
      type: t("items.1.type"),
      summary: t("items.1.summary"),
      stack: t("items.1.stack"),
      team: t("items.1.team"),
      duration: t("items.1.duration"),
      features: t("items.1.features"),
      outcome: t("items.1.outcome"),
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
      title: t("items.2.title"),
      type: t("items.2.type"),
      summary: t("items.2.summary"),
      users: t("items.2.users"),
      team: t("items.2.team"),
      role: t("items.2.role"),
      features: t("items.2.features"),
      outcome: t("items.2.outcome"),
      customLayout: "gerege",
      images: [
        { src: "/Gerege app/image 168.png", width: 1800, height: 1080, isWide: true },
        { src: "/Gerege app/image 169.png", width: 1800, height: 1080, isWide: true },
        { src: "/Gerege app/image 170.png", width: 393, height: 852, isSignIn: true },
        { src: "/Gerege app/IMG_2282.png", width: 393, height: 852 },
        { src: "/Gerege app/IMG_2283.png", width: 393, height: 852 },
        { src: "/Gerege app/IMG_2286.png", width: 393, height: 852 },
        { src: "/Gerege app/IMG_2287 1.png", width: 393, height: 852 },
      ],
    },
    {
      title: t("items.3.title"),
      type: t("items.3.type"),
      summary: t("items.3.summary"),
      stack: t("items.3.stack"),
      features: t("items.3.features"),
      outcome: t("items.3.outcome"),
      customLayout: "befit",
      images: [
        { src: "/BeFit FitnessHelper/image 184.png", width: 1800, height: 1080, isCentered: true },
        { src: "/BeFit FitnessHelper/IMG_2289.png", width: 393, height: 852 },
        { src: "/BeFit FitnessHelper/IMG_2290.png", width: 393, height: 852 },
        { src: "/BeFit FitnessHelper/IMG_2291.png", width: 393, height: 852 },
        { src: "/BeFit FitnessHelper/IMG_2292.png", width: 393, height: 852 },
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
      customLayout: "dbox",
      images: [
        { src: "/dbox/image 157.png", width: 2013, height: 1278, isCentered: true },
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
      stack: t("items.5.stack"),
      team: t("items.5.team"),
      role: t("items.5.role"),
      outcome: t("items.5.outcome"),
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
  ];

  return (
    <Suspense fallback={null}>
      <div className="space-y-16">
        <PageHeader eyebrow="Portfolio" title={t("title")} description={t("intro")} />

        <div className="space-y-16 sm:space-y-24">
          {items.map((item, i) => (
            <article
              key={i}
              className="card overflow-hidden scroll-mt-24 transition-colors duration-300 hover:border-foreground/20"
            >
              <ProjectHeader item={item} index={i} />
              <ProjectGallery item={item} />
              <ProjectDetails item={item} />
            </article>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
