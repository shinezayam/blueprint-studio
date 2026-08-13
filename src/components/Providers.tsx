"use client";

import { SessionProvider } from "next-auth/react";
import { NextIntlClientProvider } from "next-intl";

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}

export default function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextIntlClientProvider
        locale={locale} 
        messages={messages}
        timeZone="Asia/Ulaanbaatar"
      >
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
