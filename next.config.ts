import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Everything under public/ defaults to `max-age=0, must-revalidate` on
  // Vercel, so the ~729KB of Spline scene data was being revalidated on every
  // page load. These files are effectively immutable — rename them if a scene
  // is ever re-exported.
  async headers() {
    return [
      {
        source: "/:dir(animated-shape_blend|robot_arm)/:file*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/:file(logo.svg|logo-light.svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Bare domain → /en, which displays Mongolian (the primary audience)
      { source: "/", destination: "/en", permanent: false },
      // The about page became the landing page; keep shared links working.
      { source: "/:locale(en|mn)/about", destination: "/:locale", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
