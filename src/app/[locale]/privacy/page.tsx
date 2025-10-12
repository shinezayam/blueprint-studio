export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <div className="space-y-3 max-w-2xl text-black/80 dark:text-white/80">
        <p>
          We respect your privacy. This site collects minimal information necessary to operate, such as
          basic, anonymized analytics and details you voluntarily submit via the contact form.
        </p>
        <p>
          We do not sell your data. Information submitted via the contact form is used solely to respond to
          your inquiry.
        </p>
        <p>
          For any privacy-related requests, please reach out through the Contact page.
        </p>
      </div>
    </section>
  );
}
