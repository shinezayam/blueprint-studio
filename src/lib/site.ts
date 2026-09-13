export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blueprintstudio.cc";

/* Indexable routes under /[locale]. */
export const PAGES = ["", "/portfolio", "/services", "/contact", "/privacy", "/terms"] as const;

/* Route locale ≠ content language: /en displays Mongolian and /mn displays
   English (see [locale]/layout.tsx), so hreflang must follow the content. */
export function languageAlternates(page: string) {
  return {
    mn: `${SITE_URL}/en${page}`,
    en: `${SITE_URL}/mn${page}`,
    "x-default": `${SITE_URL}/en${page}`,
  };
}

/* Self-referencing canonical + hreflang for one page. Set per route so a
   subpage never inherits the home page's canonical. */
export function pageAlternates(locale: string, page: string) {
  return { canonical: `${SITE_URL}/${locale}${page}`, languages: languageAlternates(page) };
}
