import Link from "next/link";

export default function Footer() {
  const locale = typeof document !== "undefined" ? document.documentElement.lang || "en" : "en";
  return (
    <footer className="border-t border-foreground/10 mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, var(--cta-from), var(--cta-to))" }}>B</span>
          <p className="text-foreground/55">
            © {new Date().getFullYear()} Blueprint Studio — Crafted by Chinguun &amp; Shinezaya
          </p>
        </div>
        <nav className="flex items-center gap-5 text-foreground/60">
          <Link href={`/${locale}/privacy`} className="hover:text-foreground transition-colors">Privacy</Link>
          <Link href={`/${locale}/terms`} className="hover:text-foreground transition-colors">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}


