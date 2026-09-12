"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  /* "the message didn't send" is not enough to act on. A provider rejection
     (expired Gmail grant, bad template) is our problem and the visitor should
     email us instead; a network failure is worth retrying. */
  const [errorKind, setErrorKind] = useState<"provider" | "network" | "generic">("generic");

  const contactEmail = t("email");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        // Any HTTP response means we reached our server; the failure is ours.
        setErrorKind("provider");
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      // fetch only throws when the request never completed.
      setErrorKind(error instanceof TypeError ? "network" : "generic");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-foreground">
          {t("form.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("form.namePh")}
          required
          className="w-full rounded-lg border border-foreground/15 bg-[color:var(--surface-2)] px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--ring)] transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
          {t("form.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("form.emailPh")}
          required
          className="w-full rounded-lg border border-foreground/15 bg-[color:var(--surface-2)] px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--ring)] transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-foreground">
          {t("form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={t("form.messagePh")}
          required
          className="w-full rounded-lg border border-foreground/15 bg-[color:var(--surface-2)] px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--ring)] transition-colors"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {isSubmitting ? t("form.sending") : t("form.submit")}
      </button>

      {/* Status. role=status/alert so screen readers announce the outcome
          rather than leaving it to a visual-only colour change. */}
      {submitStatus === "success" && (
        <div role="status" className="p-3 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200">
          <p className="text-sm">{t("form.ok")}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div role="alert" className="p-3 rounded-md border border-red-500/30 bg-red-500/10 text-red-900 dark:text-red-200 space-y-1">
          <p className="text-sm">
            {errorKind === "provider"
              ? t("form.errProvider")
              : errorKind === "network"
                ? t("form.errNetwork")
                : t("form.errGeneric")}
          </p>
          <a href={`mailto:${contactEmail}`} className="text-sm font-semibold underline underline-offset-2 break-all">
            {contactEmail}
          </a>
        </div>
      )}
    </form>
  );
}
