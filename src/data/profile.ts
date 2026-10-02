export const siteConfig = {
  name: "Iker",
  fullName: "Iker Nistal Fernandez",
  username: "Niistal",
  logo: "NIISTAL.DEV",
  headline: "Full Stack Software Engineer",
  subheadline: "Enterprise .NET software, cybersecurity and applied AI.",
  tagline: ".NET · DevSecOps · Cybersecurity · Data · AI · Agentic Systems",
  description:
    "I'm Iker, a Full Stack developer from Elgoibar (Gipuzkoa). By day I build ERP and business software on the Microsoft stack at GIP 2019 — C#, VB.NET, WinForms, SQL Server. After hours: cybersecurity, developer tooling and local-first AI.",
  url: "https://niistal.github.io",
  locale: "en_US",
  location: "Elgoibar, Gipuzkoa",
  role: "Software Engineer at GIP 2019 S.L.",
  github: "https://github.com/Niistal",
  githubUsername: "Niistal",
  // Leave empty to hide the button — do not invent URLs.
  linkedin: "https://www.linkedin.com/in/ikernistal/",
  email: "ikernistal7@gmail.com",
  cvUrl: "/cv/CV_Iker_Nistal_2026.pdf",
  avatar: "/images/avatar.webp",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Background", href: "#journey" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;

export type Socials = {
  github: string;
  linkedin: string;
  email: string;
};

export const socials: Socials = {
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  email: siteConfig.email,
};

export const languages = [
  { language: "Castellano", level: "C1" },
  { language: "Euskera", level: "B2" },
  { language: "Inglés", level: "B2" },
] as const;
