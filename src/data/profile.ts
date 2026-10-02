export const siteConfig = {
  name: "Iker",
  fullName: "Iker Nistal Fernandez",
  username: "Niistal",
  logo: "NIISTAL.DEV",
  headline: "Full Stack Software Engineer",
  subheadline: "Building secure software, developer tools and intelligent systems.",
  tagline: ".NET · DevSecOps · Cybersecurity · Data · AI · Agentic Systems",
  description:
    "Full Stack Software Engineer focused on .NET, enterprise software, cybersecurity, DevSecOps, Data and AI. I build enterprise ERP software, cross-platform apps, developer tooling and AI systems oriented to security and automation.",
  url: "https://niistal.github.io",
  locale: "en_US",
  location: "Elgoibar, Gipuzkoa",
  github: "https://github.com/Niistal",
  githubUsername: "Niistal",
  // Leave empty to hide the button — do not invent URLs.
  linkedin: "",
  email: "ikernistal7@gmail.com",
  cvUrl: "/cv/CV_Iker_Nistal_2026.pdf",
  availability: "Available for collaboration",
  avatar: "/images/avatar.webp",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
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
