import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "mn"],
  defaultLocale: "mn",
  localePrefix: "always"
});

export const config = {
  // Exclude Next.js internals, static assets and specific public asset folders
  // Prevents next-intl from treating asset filenames as locales (e.g., apple-touch-icon.png)
  matcher: [
    "/((?!api|_next|_vercel|animated-shape_blend|.*\\..*).*)"
  ]
};


