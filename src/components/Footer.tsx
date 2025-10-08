import Link from "next/link";
import {useLocale} from "next-intl";

export default function Footer() {
  const locale = typeof document !== "undefined" ? document.documentElement.lang || "en" : "en";
  return (
    <footer className="border-t border-black/5 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left text-black/70 dark:text-white/70">
          © {new Date().getFullYear()} Blueprint Studio — Crafted by Chinguun & Shinezaya for Uulen
        </p>
        <nav className="flex items-center gap-4">
          <Link href={`/${locale}/privacy`} className="hover:opacity-80">Privacy</Link>
          <Link href={`/${locale}/terms`} className="hover:opacity-80">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}


