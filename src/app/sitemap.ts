import type { MetadataRoute } from "next";
import { PAGES, SITE_URL, languageAlternates } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) =>
    (["en", "mn"] as const).map((locale) => ({
      url: `${SITE_URL}/${locale}${page}`,
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.7,
      alternates: { languages: languageAlternates(page) },
    })),
  );
}
