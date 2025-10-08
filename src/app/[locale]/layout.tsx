import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {NextIntlClientProvider} from "next-intl";

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
    const messages = (await import(`@/messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    return {} as any;
  }
}

export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const {children, params} = props;
  const {locale} = await params;
  const messages = await loadMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


