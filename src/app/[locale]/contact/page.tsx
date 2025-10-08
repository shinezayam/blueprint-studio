"use client";

import {useTranslations} from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="max-w-2xl text-black/80 dark:text-white/80">{t("intro")}</p>
      </header>

      <form className="max-w-xl space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">{t("form.name")}</label>
          <input
            type="text"
            id="name"
            placeholder={t("form.namePh")}
            className="w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">{t("form.email")}</label>
          <input
            type="email"
            id="email"
            placeholder={t("form.emailPh")}
            className="w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">{t("form.message")}</label>
          <textarea
            id="message"
            rows={5}
            placeholder={t("form.messagePh")}
            className="w-full rounded-md border border-black/10 dark:border-white/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
          />
        </div>
        <button
          type="submit"
          className="inline-flex rounded-md bg-black text-white px-4 py-2 text-sm hover:opacity-90 dark:bg-white dark:text-black"
        >
          {t("form.submit")}
        </button>
      </form>
    </div>
  );
}