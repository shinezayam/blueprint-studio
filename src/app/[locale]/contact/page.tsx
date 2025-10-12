"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const t = useTranslations("contact");
  return (
    <Suspense fallback={null}>
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{t("title")}</h1>
          <p className="max-w-2xl text-foreground/80">{t("intro")}</p>
        </header>

        <ContactForm />
      </div>
    </Suspense>
  );
}