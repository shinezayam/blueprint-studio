"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const t = useTranslations("contact");
  return (
    <Suspense fallback={null}>
      <div className="space-y-12">
        <PageHeader eyebrow="Contact" title={t("title")} description={t("intro")} />

        <div className="card p-6 sm:p-8 max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </Suspense>
  );
}