export type TimelineStep = {
  title: string;
  description: string;
};

export const journey: TimelineStep[] = [
  { title: "Systems & Networks", description: "Foundations: hardware, OS, networks and troubleshooting." },
  { title: "Software Development", description: "From scripts to real applications and databases." },
  { title: "Full Stack Development", description: ".NET, Java, web and mobile across the stack." },
  { title: "Cybersecurity", description: "Secure coding, OWASP, hardening and threat modeling." },
  { title: "Enterprise Software", description: "ERP, business logic, SQL Server and integrations." },
  { title: "Big Data & AI", description: "Data engineering, ML, RAG and evaluation-driven AI." },
  { title: "Agentic Systems", description: "MCP/ACP orchestration, sandboxing and verifiable agents." },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  current?: boolean;
};

// Experience and education below match the CV.
export const experience: Job[] = [
  {
    role: "Desarrollador de software / FP Dual",
    company: "Gestión Integral de Procesos 2019 S.L. (GIP)",
    period: "Actualidad",
    location: "Enterprise software & ERP",
    current: true,
    points: [
      "Desarrollo y mantenimiento de software empresarial, incluido producto para entornos SITAB.",
      "C# y VB.NET sobre .NET 8 / .NET Core y .NET Framework 4.7.2 / 4.8; WinForms, servicios y APIs.",
      "SQL Server, T-SQL, Stored Procedures y ODBC: incidencias, reglas de negocio, integraciones y mantenimiento.",
      "Modernización de legacy con foco en compatibilidad, seguridad, mantenibilidad y mínima regresión.",
      "Formación dual de IA y Big Data en la misma empresa.",
    ],
  },
  {
    role: "Prácticas — Desarrollo de aplicaciones",
    company: "Comercial Eitua",
    period: "17/02/2025 – 31/05/2025",
    location: "Bizkaia",
    points: [
      "Aplicación comercial Android en Java, persistencia local y sincronización de productos/pedidos.",
      "Android Studio, base de datos local y procesos en segundo plano.",
    ],
  },
  {
    role: "Prácticas Erasmus+",
    company: "Tisalabs",
    period: "05/03/2022 – 31/05/2022",
    location: "Cork, Irlanda",
    points: ["Experiencia tecnológica internacional y trabajo en inglés en un entorno multicultural."],
  },
];

export type Education = {
  title: string;
  detail: string;
};

// Education below matches the CV.
export const education: Education[] = [
  {
    title: "Especialización en Inteligencia Artificial y Big Data",
    detail: "UNI Eibar-Ermua · Actualidad · FP Dual en GIP 2019 S.L.",
  },
  {
    title: "Curso de Especialización en Ciberseguridad en Entornos TI",
    detail: "UNI Eibar-Ermua · Finalizado",
  },
  {
    title: "DAM — Desarrollo de Aplicaciones Multiplataforma",
    detail: "UNI Eibar-Ermua · 2022 – 2025",
  },
  {
    title: "SMR — Sistemas Microinformáticos y Redes",
    detail: "UNI Eibar-Ermua · 2019 – 2022",
  },
];

export const principles = [
  { title: "Security by Design", detail: "Default-deny, least privilege, auditable." },
  { title: "Clean & Maintainable", detail: "Modular architecture, readable code." },
  { title: "Observability", detail: "Logs, traces and verifiable outputs." },
  { title: "Automation First", detail: "CI/CD, scripts, reproducible flows." },
  { title: "Performance", detail: "Measure, then optimize hot paths." },
  { title: "Testability", detail: "Tested contracts and typed tools." },
  { title: "Local-first", detail: "Local-first when it makes sense." },
  { title: "Reliable Data", detail: "Integrity, migrations, backups." },
  { title: "Human-verifiable AI", detail: "Build → test → verify → improve." },
] as const;

export const enterprisePoints = [
  "ERP",
  "Business Logic",
  "Database Integration",
  "Legacy Modernization",
  "Desktop Applications",
  "Enterprise Integrations",
  "Data Integrity",
] as const;
