"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Blueprint Studio",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
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
          className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
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
          className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
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
          className="w-full rounded-md border border-foreground/20 bg-transparent px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex rounded-md bg-foreground text-background px-4 py-2 text-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
      >
        {isSubmitting ? "Sending..." : t("form.submit")}
      </button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-3 rounded-md bg-green-100 text-green-800 border border-green-200">
          <p className="text-sm">Thank you! Your message has been sent successfully. We'll get back to you within 1 business day.</p>
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="p-3 rounded-md bg-red-100 text-red-800 border border-red-200">
          <p className="text-sm">Sorry, there was an error sending your message. Please try again or contact us directly.</p>
        </div>
      )}
    </form>
  );
}
