import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
  // Separate test artifacts from any developer server already running.
  distDir: process.env.TREVVOS_E2E === "1" ? ".next-e2e" : ".next",
  poweredByHeader: false,
};
export default nextConfig;
