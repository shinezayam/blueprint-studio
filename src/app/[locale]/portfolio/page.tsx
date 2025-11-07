"use client";

import {Suspense} from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  const items = [
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
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{t("title")}</h1>
      <p className="max-w-2xl text-foreground/80">{t("intro")}</p>
      </header>

      <div className="space-y-12">
        {items.map((item, i) => {
          // Custom layout for Gerege App
          if (item.customLayout === "gerege") {
            const wideImages = item.images.filter(img => (img as { isWide?: boolean }).isWide === true);
            const signInImage = item.images.find(img => (img as { isSignIn?: boolean }).isSignIn === true);
            const mobileImages = item.images.filter(img => !(img as { isWide?: boolean }).isWide && !(img as { isSignIn?: boolean }).isSignIn);

            return (
              <div key={i} className="rounded-xl border border-foreground/20 overflow-hidden bg-background">
                {/* Image Gallery - Custom Gerege Layout */}
                <div className="bg-foreground/5 p-4 sm:p-6 space-y-4">
                  {/* Wide Screenshots - Stacked Vertically */}
                  {wideImages.length > 0 && (
                    <div className="space-y-4">
                      {wideImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative w-full rounded-lg overflow-hidden border border-foreground/10 bg-background"
                          style={{ aspectRatio: `${img.width}/${img.height}` }}
                        >
                          <Image
                            src={img.src}
                            alt={`${item.title} screenshot ${idx + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mobile Screenshots - Horizontal Row with Sign-in */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {signInImage && (
                      <div
                        className="relative rounded-lg overflow-hidden border border-foreground/10 bg-background"
                        style={{
                          width: '240px',
                          height: `${(240 * signInImage.height) / signInImage.width}px`,
                          maxHeight: '400px'
                        }}
                      >
                        <Image
                          src={signInImage.src}
                          alt={`${item.title} sign in`}
                          fill
                          className="object-contain"
                          sizes="240px"
                        />
                      </div>
                    )}
                    {mobileImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-lg overflow-hidden border border-foreground/10 bg-background"
                        style={{
                          width: '180px',
                          height: `${(180 * img.height) / img.width}px`,
                          maxHeight: '400px'
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={`${item.title} mobile screenshot ${idx + 1}`}
                          fill
                          className="object-contain"
                          sizes="180px"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                      <p className="text-sm text-foreground/60 mt-1">{item.type}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{item.summary}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/70 pt-2">
                    {item.stack && <p><strong className="text-foreground">Stack:</strong> {item.stack}</p>}
                    {item.team && <p><strong className="text-foreground">Team:</strong> {item.team}</p>}
                    {item.duration && <p><strong className="text-foreground">Duration:</strong> {item.duration}</p>}
                    {item.users && <p><strong className="text-foreground">Users:</strong> {item.users}</p>}
                    {item.role && <p className="sm:col-span-2"><strong className="text-foreground">Role:</strong> {item.role}</p>}
                    {(item as { lead?: string }).lead && <p><strong className="text-foreground">Lead:</strong> {(item as { lead?: string }).lead}</p>}
                    {(item as { tools?: string }).tools && <p><strong className="text-foreground">Tools:</strong> {(item as { tools?: string }).tools}</p>}
                    {item.features && <p className="sm:col-span-2"><strong className="text-foreground">Features:</strong> {item.features}</p>}
                    {item.outcome && <p className="sm:col-span-2"><strong className="text-foreground">Outcome:</strong> {item.outcome}</p>}
                  </div>
                </div>
              </div>
            );
          }

          // Custom layout for BeFit and DBox (wide image centered, then mobile screenshots)
          if (item.customLayout === "befit" || item.customLayout === "dbox") {
            const centeredImage = item.images.find(img => (img as { isCentered?: boolean }).isCentered === true);
            const mobileImages = item.images.filter(img => !(img as { isCentered?: boolean }).isCentered);

            return (
              <div key={i} className="rounded-xl border border-foreground/20 overflow-hidden bg-background">
                {/* Image Gallery - Centered Wide + Mobile */}
                <div className="bg-foreground/5 p-4 sm:p-6 space-y-4">
                  {/* Centered Wide Screenshot */}
                  {centeredImage && (
                    <div className="flex justify-center">
                      <div
                        className="relative rounded-lg overflow-hidden border border-foreground/10 bg-background"
                        style={{
                          width: '100%',
                          maxWidth: '800px',
                          aspectRatio: `${centeredImage.width}/${centeredImage.height}`
                        }}
                      >
                        <Image
                          src={centeredImage.src}
                          alt={`${item.title} preview`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </div>
                    </div>
                  )}

                  {/* Mobile Screenshots */}
                  {mobileImages.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-4">
                      {mobileImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative rounded-lg overflow-hidden border border-foreground/10 bg-background"
                          style={{
                            width: '180px',
                            height: `${(180 * img.height) / img.width}px`,
                            maxHeight: '400px'
                          }}
                        >
                          <Image
                            src={img.src}
                            alt={`${item.title} mobile screenshot ${idx + 1}`}
                            fill
                            className="object-contain"
                            sizes="180px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                      <p className="text-sm text-foreground/60 mt-1">{item.type}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{item.summary}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/70 pt-2">
                    {item.stack && <p><strong className="text-foreground">Stack:</strong> {item.stack}</p>}
                    {item.team && <p><strong className="text-foreground">Team:</strong> {item.team}</p>}
                    {item.duration && <p><strong className="text-foreground">Duration:</strong> {item.duration}</p>}
                    {item.users && <p><strong className="text-foreground">Users:</strong> {item.users}</p>}
                    {item.role && <p className="sm:col-span-2"><strong className="text-foreground">Role:</strong> {item.role}</p>}
                    {item.features && <p className="sm:col-span-2"><strong className="text-foreground">Features:</strong> {item.features}</p>}
                    {item.outcome && <p className="sm:col-span-2"><strong className="text-foreground">Outcome:</strong> {item.outcome}</p>}
                  </div>
                </div>
              </div>
            );
          }

          // Default layout for other projects
          // Separate images by aspect ratio
          const wideImages = item.images.filter(img => img.width / img.height > 1.2);
          const tallImages = item.images.filter(img => img.width / img.height <= 1.2);

          return (
            <div key={i} className="rounded-xl border border-foreground/20 overflow-hidden bg-background">
              {/* Image Gallery */}
              <div className="bg-foreground/5 p-4 sm:p-6">
                {/* Wide/Desktop Screenshots */}
                {wideImages.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {wideImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative w-full rounded-lg overflow-hidden border border-foreground/10 bg-background"
                        style={{ aspectRatio: `${img.width}/${img.height}` }}
                      >
                        <Image
                          src={img.src}
                          alt={`${item.title} screenshot ${idx + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Tall/Mobile Screenshots */}
                {tallImages.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-4">
                    {tallImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-lg overflow-hidden border border-foreground/10 bg-background"
                        style={{
                          width: '200px',
                          height: `${(200 * img.height) / img.width}px`,
                          maxHeight: '450px'
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={`${item.title} mobile screenshot ${idx + 1}`}
                          fill
                          className="object-contain"
                          sizes="200px"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-xl text-foreground">{item.title}</h3>
                    <p className="text-sm text-foreground/60 mt-1">{item.type}</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">{item.summary}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/70 pt-2">
                  {item.stack && <p><strong className="text-foreground">Stack:</strong> {item.stack}</p>}
                  {item.team && <p><strong className="text-foreground">Team:</strong> {item.team}</p>}
                  {item.duration && <p><strong className="text-foreground">Duration:</strong> {item.duration}</p>}
                  {item.users && <p><strong className="text-foreground">Users:</strong> {item.users}</p>}
                  {item.role && <p className="sm:col-span-2"><strong className="text-foreground">Role:</strong> {item.role}</p>}
                  {(item as { lead?: string }).lead && <p><strong className="text-foreground">Lead:</strong> {(item as { lead?: string }).lead}</p>}
                  {(item as { tools?: string }).tools && <p><strong className="text-foreground">Tools:</strong> {(item as { tools?: string }).tools}</p>}
                  {item.features && <p className="sm:col-span-2"><strong className="text-foreground">Features:</strong> {item.features}</p>}
                  {item.outcome && <p className="sm:col-span-2"><strong className="text-foreground">Outcome:</strong> {item.outcome}</p>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </Suspense>
  );
}
