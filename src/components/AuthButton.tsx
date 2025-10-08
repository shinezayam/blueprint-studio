"use client";

import { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";

type SessionUser = { name?: string | null; email?: string | null; image?: string | null };

export default function AuthButton() {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    // Lazy get session without server helpers; simple client-only approach
    (async () => {
      const res = await fetch("/api/auth/session");
      if (res.ok) {
        const data = await res.json();
        setUser(data?.user ?? null);
      }
    })();
  }, []);

  if (!user) {
    return (
      <button
        onClick={() => signIn("google")}
        className="rounded-md border border-black/10 dark:border-white/20 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
      >
        Sign in with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-black/70 dark:text-white/70">{user.name || user.email}</span>
      <button
        onClick={() => signOut()}
        className="rounded-md bg-black text-white px-3 py-2 text-sm hover:opacity-90 dark:bg-white dark:text-black"
      >
        Sign out
      </button>
    </div>
  );
}


