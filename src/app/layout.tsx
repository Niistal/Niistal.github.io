import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/profile";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Iker | Software Engineer · DevSecOps · AI",
    template: "%s — Iker / Niistal",
  },
  description:
    "Full Stack Software Engineer focused on .NET, enterprise software, cybersecurity, DevSecOps, Data and AI.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    ".NET Developer",
    "C#",
    "DevSecOps",
    "Cybersecurity",
    "AI Engineer",
    "Data Engineering",
    "Rust",
    "Python",
    "Niistal",
  ],
  authors: [{ name: "Iker / Niistal", url: siteConfig.github }],
  creator: "Iker / Niistal",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: "NIISTAL.DEV",
    title: "Iker | Software Engineer · DevSecOps · AI",
    description:
      "Full Stack Software Engineer focused on .NET, enterprise software, cybersecurity, DevSecOps, Data and AI.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NIISTAL — Software Engineering · DevSecOps · Cybersecurity · AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iker | Software Engineer · DevSecOps · AI",
    description:
      "Full Stack Software Engineer focused on .NET, enterprise software, cybersecurity, DevSecOps, Data and AI.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

const themeInit = `(function(){try{var s=localStorage.getItem('niistal-theme');var d=s? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

// Static-host friendly CSP (GitHub Pages cannot send server headers).
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.github.com",
].join("; ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full bg-[#FAFAFC] font-sans text-[#16161D] antialiased dark:bg-[#08080D] dark:text-[#F7F7FA]">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
