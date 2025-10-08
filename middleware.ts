import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "mn"],
  defaultLocale: "en",
});

export const config = {
  // Exclude Next.js internals, API routes and static files
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};


