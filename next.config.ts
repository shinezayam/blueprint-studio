import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Bare domain → /en, which displays Mongolian (the primary audience)
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default withNextIntl(nextConfig);
