"use client";

import { useEffect } from "react";

/**
 * Route-level error boundary for the portfolio (Products) page. Catches any
 * render exception so the app shows a recoverable fallback instead of a blank
 * crash. (Kept dependency-free so it can't fail for the same reason.)
 */
export default function PortfolioError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Portfolio route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-5 py-20 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Couldn&apos;t load this page</h1>
      <p className="max-w-md text-foreground/60">
        Something went wrong while loading the projects. Please try again.
      </p>
      <button onClick={() => reset()} className="btn btn-primary">
        Try again
      </button>
    </div>
  );
}
