import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Bare domain → /en, which displays Mongolian (the primary audience)
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: false },
      // The about page became the landing page; keep shared links working.
      { source: "/:locale(en|mn)/about", destination: "/:locale", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
