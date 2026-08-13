"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="inline-flex h-10 items-center rounded-lg border border-foreground/15 px-3 text-sm text-foreground/60">
        Loading…
      </div>
    );
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn("google")}
        className="inline-flex h-10 items-center rounded-lg border border-foreground/15 px-3 text-sm font-medium text-foreground hover:bg-foreground/[0.06] transition-colors"
      >
        Sign in
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <span className="hidden lg:inline text-sm text-foreground/60 max-w-[12rem] truncate">
        {session.user?.name || session.user?.email}
      </span>
      <button
        onClick={() => signOut()}
        className="btn btn-primary h-10 !py-0"
      >
        Sign out
      </button>
    </div>
  );
}


