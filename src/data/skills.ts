export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Backend", items: ["C#", ".NET", "ASP.NET Core", "EF Core", "Node.js", "NestJS", "Spring Boot", "Python"] },
  { title: "Desktop", items: ["WinForms", ".NET Framework", "JavaFX"] },
  { title: "Frontend", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"] },
  { title: "Mobile", items: ["Android", "Kotlin", "Java", "React Native", "Expo"] },
  { title: "Systems", items: ["Rust", "C", "C++"] },
  { title: "Database", items: ["SQL Server", "PostgreSQL", "MySQL/MariaDB", "MongoDB", "SQLite", "Supabase"] },
  { title: "DevOps", items: ["Git", "GitHub", "Docker", "GitHub Actions", "CI/CD", "PowerShell", "Bash"] },
  {
    title: "AI / Data",
    items: ["Python", "RAG", "LLMs", "Ollama", "MCP", "ACP", "Machine Learning", "Data Engineering", "NiFi"],
  },
  {
    title: "Security",
    items: ["OWASP", "DevSecOps", "Secure Coding", "Hardening", "Secrets Management", "API Security"],
  },
];

export type Specialization = {
  title: string;
  description: string;
  points: string[];
};

export const specializations: Specialization[] = [
  {
    title: "Software Engineering",
    description: "Full-stack systems built to last.",
    points: ["Clean architecture", "APIs & integrations", "Maintainable code"],
  },
  {
    title: "Enterprise & .NET",
    description: "Real business software, real data.",
    points: ["C# / VB.NET / WinForms", "SQL Server / T-SQL", "ERP & modernization"],
  },
  {
    title: "Cybersecurity & DevSecOps",
    description: "Secure by design, automated by default.",
    points: ["OWASP / hardening", "CI/CD & secrets", "Threat modeling"],
  },
  {
    title: "AI & Data",
    description: "Verifiable intelligent systems.",
    points: ["RAG / agents / MCP", "Local-first AI", "Data engineering"],
  },
  {
    title: "Developer Tooling & Automation",
    description: "Leverage for engineering teams.",
    points: ["CLI & workflows", "Automation-first", "Observability"],
  },
];
