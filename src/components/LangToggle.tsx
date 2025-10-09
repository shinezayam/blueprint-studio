"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useLocale} from "next-intl";

export default function LangToggle() {
  const locale = useLocale();
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
      className="rounded-md border border-foreground/20 px-3 py-2 text-sm hover:bg-foreground/10 text-foreground"
      aria-label="Toggle language"
    >
      {locale.toUpperCase()}
    </button>
  );
}


