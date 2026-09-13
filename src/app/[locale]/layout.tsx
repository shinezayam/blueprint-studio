import type { Metadata } from "next";
import {Suspense} from "react";
import { Montserrat, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { SITE_URL } from "@/lib/site";

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin", "cyrillic"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const TITLE = "Blueprint Studio — Chinguun Khongor & Shinezaya | iOS, Android & web";
const DESCRIPTION =
  "Blueprint Studio is Chinguun Khongor and Shinezaya — a two-person product studio in Ulaanbaatar shipping iOS, Android, and web products end to end, from design system to production release.";

/* Unknown segments (e.g. a stray /favicon.png) 404 instead of rendering the
   landing page under a bogus locale — those soft-404s get indexed. */
export const dynamicParams = false;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s • Blueprint Studio" },
  description: DESCRIPTION,
  keywords: [
    "Chinguun Khongor",
    "Chinguun",
    "Shinezaya",
    "Blueprint Studio",
    "product studio",
    "iOS developer Mongolia",
    "Android development",
    "UI UX design",
    "Ulaanbaatar",
  ],
  authors: [{ name: "Chinguun Khongor", url: SITE_URL }, { name: "Shinezaya", url: SITE_URL }],
  creator: "Chinguun Khongor",
  openGraph: {
    type: "website",
    siteName: "Blueprint Studio",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

/* Structured data so search engines connect the people's names to this site.
   Add profile URLs (LinkedIn, GitHub, …) to sameAs — they are the strongest
   signal that this "Chinguun Khongor" is the same person as those profiles. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#studio`,
      name: "Blueprint Studio",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      founder: [{ "@id": `${SITE_URL}/#chinguun` }, { "@id": `${SITE_URL}/#shinezaya` }],
      address: { "@type": "PostalAddress", addressLocality: "Ulaanbaatar", addressCountry: "MN" },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#chinguun`,
      name: "Chinguun Khongor",
      givenName: "Chinguun",
      familyName: "Khongor",
      alternateName: ["Chinguun", "Чингүүн"],
      jobTitle: "iOS + Web Developer",
      url: SITE_URL,
      image: `${SITE_URL}/chinguun/image%20187.png`,
      worksFor: { "@id": `${SITE_URL}/#studio` },
      sameAs: [],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#shinezaya`,
      name: "Shinezaya",
      jobTitle: "UI/UX Designer + Web Developer",
      url: SITE_URL,
      worksFor: { "@id": `${SITE_URL}/#studio` },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Blueprint Studio", url: SITE_URL, publisher: { "@id": `${SITE_URL}/#studio` } },
  ],
};

export function generateStaticParams() {
  return [{locale: "en"}, {locale: "mn"}];
}

async function loadMessages(locale: string) {
  try {
    const messages: Record<string, unknown> = (await import(`@/messages/${locale}.json`)).default;
    return messages;
  } catch {
    return {} as Record<string, unknown>;
  }
}

export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const {children, params} = props;
  const {locale} = await params;
  // Intentional swap: /en displays Mongolian, /mn displays English.
  const displayLocale = locale === "en" ? "mn" : "en";
  const messages = await loadMessages(displayLocale);
  const nav = messages.nav as Record<string, string> | undefined;
  const skipLabel = nav?.skipToContent ?? "Skip to main content";

  return (
    <html lang={displayLocale} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
        />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){localStorage.setItem('theme','dark');t='dark';}var m=document.querySelector('meta[name="color-scheme"]');if(t==='dark'){document.documentElement.classList.add('dark');if(m)m.setAttribute('content','dark');}else{document.documentElement.classList.remove('dark');if(m)m.setAttribute('content','light');}}catch(e){}})();`
          }}
        />
        {/* Swallow benign empty async rejections from @splinetool/react-spline
            (v4 has no onError; its loader rejects with `undefined`). Registered
            in the capture phase before Next's runtime so it intercepts first.
            Real errors (with a message) still surface. */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{window.addEventListener('unhandledrejection',function(e){var r=e&&e.reason;var t=(typeof r==='string')?r:((r&&r.message)||'');if(r==null||r===''||/spline|splinecode|runtime|wasm/i.test(String(t))){if(e.stopImmediatePropagation)e.stopImmediatePropagation();if(e.preventDefault)e.preventDefault();}},true);}catch(_){}})();`
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${geistMono.variable} antialiased`}>
        <Providers locale={locale} messages={messages}>
          {/* First tab stop, so keyboard users can jump the nav (WCAG 2.4.1) */}
          <a href="#main" className="skip-link">{skipLabel}</a>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main id="main" tabIndex={-1} className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


