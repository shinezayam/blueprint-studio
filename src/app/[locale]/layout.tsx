import type { Metadata } from "next";
import {Suspense} from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Blueprint Studio — Portfolio of Chinguun & Shinezaya", template: "%s • Blueprint Studio" },
  description: "Blueprint Studio is the personal portfolio of Chinguun & Shinezaya — showcasing iOS, React, and Vue work.",
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
  const messages = await loadMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){localStorage.setItem('theme','light');t='light';}var m=document.querySelector('meta[name="color-scheme"]');if(t==='dark'){document.documentElement.classList.add('dark');if(m)m.setAttribute('content','dark');}else{document.documentElement.classList.remove('dark');if(m)m.setAttribute('content','light');}}catch(e){}})();`
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers locale={locale} messages={messages}>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


