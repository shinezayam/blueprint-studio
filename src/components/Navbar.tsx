"use client";

import Link from "next/link";
import { useState } from "react";
import {useLocale, useTranslations} from "next-intl";
import AuthButton from "@/components/AuthButton";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-foreground/15">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="font-sans text-lg font-semibold tracking-tight text-foreground">
            Blueprint Studio
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-foreground">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="hover:opacity-80 transition-opacity"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <LangToggle />
            <ThemeToggle />
            <AuthButton />
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-foreground/20 px-3 py-2 text-sm text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-foreground/15">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="py-2 text-foreground"
                onClick={() => setOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <LangToggle />
              <ThemeToggle />
              <AuthButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;


