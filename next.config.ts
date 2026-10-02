import type { NextConfig } from "next";

// Static export so the site can be hosted on GitHub Pages
// (IKERNISTAL.github.io), Cloudflare Pages or any static host.
// NOTE: GitHub Pages serves static files and ignores server-side
// `headers()` — security headers are instead enforced via the
// <meta http-equiv="Content-Security-Policy"> tag in app/layout.tsx.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
