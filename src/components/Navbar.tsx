"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import ThemeToggle from "@/components/ThemeToggle";
import LangToggle from "@/components/LangToggle";

const navItems: Array<{ href: string; key: "home" | "about" | "services" | "portfolio" | "contact" }> = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/contact", key: "contact" },
];

export function Navbar() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* App-style header: hide on scroll down, reveal on scroll up,
     transparent while at the very top of the page. */
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        const delta = y - lastY;
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 90);
          lastY = y;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const full = `/${locale}${href === "/" ? "" : href}`;
    return href === "/" ? pathname === `/${locale}` || pathname === `/${locale}/` : pathname.startsWith(full);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out ${
        hidden && !open ? "max-md:-translate-y-full" : "translate-y-0"
      } ${
        scrolled || open
          ? "backdrop-blur-md supports-[backdrop-filter]:bg-background/70 border-b border-foreground/10 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="group flex items-center" aria-label="Blueprint Studio — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg?v=2"
              alt="Blueprint Studio"
              className="logo-dark h-5 sm:h-6 w-auto transition-transform group-hover:scale-[1.03]"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-light.svg?v=2"
              alt="Blueprint Studio"
              className="logo-light h-5 sm:h-6 w-auto transition-transform group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className={`rounded-lg px-3 py-2 transition-colors ${
                    active
                      ? "text-foreground bg-foreground/[0.06] font-medium"
                      : "text-foreground/65 hover:text-foreground hover:bg-foreground/[0.04]"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
            <Link href={`/${locale}/contact`} className="btn btn-primary h-11 !py-0">{t("ctaContact")}</Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-foreground/15 h-11 w-11 text-foreground hover:bg-foreground/[0.05] transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-foreground/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={`rounded-lg px-3 py-2.5 transition-colors ${
                  isActive(item.href) ? "text-foreground bg-foreground/[0.06] font-medium" : "text-foreground/70 hover:bg-foreground/[0.04]"
                }`}
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-foreground/10 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LangToggle />
                <ThemeToggle />
              </div>
              <Link href={`/${locale}/contact`} className="btn btn-primary w-full" onClick={() => setOpen(false)}>{t("ctaContact")}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
