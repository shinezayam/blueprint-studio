"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useLocale} from "next-intl";

export default function LangToggle() {
  const locale = useLocale();
  // /en displays Mongolian and /mn displays English, so the label shows
  // the language actually on screen (the opposite of the URL locale).
  const displayLocale = locale === "en" ? "mn" : "en";
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function toggle() {
    const next = locale === "en" ? "mn" : "en";
    const current = pathname || "/";
    const parts = current.split("/").filter(Boolean);
    if (parts.length > 0 && (parts[0] === "en" || parts[0] === "mn")) {
      parts[0] = next;
    } else {
      parts.unshift(next);
    }
    const qs = searchParams.toString();
    const target = "/" + parts.join("/") + (qs ? `?${qs}` : "");
    router.push(target);
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex h-11 items-center rounded-lg border border-foreground/15 px-3 text-sm font-medium text-foreground hover:bg-foreground/[0.06] transition-colors"
      aria-label="Toggle language"
    >
      {displayLocale.toUpperCase()}
    </button>
  );
}


