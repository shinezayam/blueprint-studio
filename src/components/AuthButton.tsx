"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="rounded-md border border-foreground/20 px-3 py-2 text-sm text-foreground">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn("google")}
        className="rounded-md border border-foreground/20 px-3 py-2 text-sm hover:bg-foreground/10 text-foreground"
      >
        Sign in with Google
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-foreground/70">
        {session.user?.name || session.user?.email}
      </span>
      <button
        onClick={() => signOut()}
        className="rounded-md bg-foreground text-background px-3 py-2 text-sm hover:opacity-90"
      >
        Sign out
      </button>
    </div>
  );
}


