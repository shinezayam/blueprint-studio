import type { Metadata } from "next";
import { pageAlternates } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: "Terms", alternates: pageAlternates(locale, "/terms") };
}

export default function TermsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <div className="space-y-3 max-w-2xl text-black/80 dark:text-white/80">
        <p>
          By accessing or using Blueprint Studio, you agree to use the site responsibly and lawfully. All
          content is provided for informational and portfolio purposes only and may change without notice.
        </p>
        <p>
          We retain ownership of all materials unless stated otherwise. You may not copy or redistribute
          content without permission. The site is provided “as is” without warranties of any kind.
        </p>
        <p>
          If you have questions about these terms, contact us via the form on the Contact page.
        </p>
      </div>
    </section>
  );
}
