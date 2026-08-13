import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Bare domain (QR target) → Mongolian by default
  async redirects() {
    return [{ source: "/", destination: "/mn", permanent: false }];
  },
};

export default withNextIntl(nextConfig);
