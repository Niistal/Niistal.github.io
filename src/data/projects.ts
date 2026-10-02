export type ProjectStatus = "Flagship" | "Active" | "Lab" | "Archived" | "Concept";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  stack: string[];
  badges: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "terminalai",
    name: "TerminalAI",
    tagline: "Local-first, security-first agentic platform for terminal-first engineering.",
    description:
      "Agentic local-first and security-first platform to research, implement, run, test and deliver verifiable results from a terminal-first environment. Rust control plane, Python AI/data/evals, TypeScript reserved for a future web UI. Built around MCP, ACP, agent orchestration, sandboxing, capability-based security, default-deny, typed tools and auditability.",
    category: "AI / Agents / Security / Developer Tooling",
    stack: ["Rust", "Python", "TypeScript", "MCP", "ACP", "Ollama"],
    badges: ["Rust", "AI", "Security", "Agents"],
    status: "Flagship",
    githubUrl: "https://github.com/Niistal",
    featured: true,
  },
  {
    slug: "niistal-optimizer",
    name: "niistal_optimizer",
    tagline: "Automation and optimization with hardening, CI/CD and integrations.",
    description:
      "Automation and optimization project with special attention to hardening, security, CI/CD and integrations. PowerShell-driven workflows with a Node.js/Express service layer, PostgreSQL/Supabase persistence, Docker and GitHub Actions.",
    category: "Automation / DevOps / Security",
    stack: ["PowerShell", "Node.js", "Express", "PostgreSQL", "Supabase", "Docker", "GitHub Actions"],
    badges: [".NET", "DevOps", "Security", "SQL"],
    status: "Active",
    githubUrl: "https://github.com/Niistal",
    featured: true,
  },
  {
    slug: "cnc-guard",
    name: "CNC Guard",
    tagline: "Applied AI for CNC / industrial environments and preventive maintenance.",
    description:
      "Project exploring AI applied to CNC/industrial environments and predictive maintenance. Python, data processing, machine learning and AI experimentation. Capabilities are only described as implemented — no unverified claims.",
    category: "AI / Industrial / Predictive Maintenance",
    stack: ["Python", "Data", "Machine Learning", "AI"],
    badges: ["Python", "AI", "Data"],
    status: "Active",
    githubUrl: "https://github.com/Niistal",
    featured: true,
  },
  {
    slug: "eitua-comercial",
    name: "EItua Comercial",
    tagline: "Enterprise Android app for commercial product and order sync.",
    description:
      "Enterprise Android application oriented to commercial workflows: product and order synchronization, offline-oriented commercial use, built with Java, Android, Room and WorkManager.",
    category: "Android / Enterprise",
    stack: ["Java", "Android", "Room", "WorkManager"],
    badges: ["Android", "Java", "SQL"],
    status: "Active",
    githubUrl: "https://github.com/Niistal",
    featured: true,
  },
  {
    slug: "tpv-program",
    name: "TPV Program",
    tagline: "Desktop POS with business management and document generation.",
    description:
      "POS/TPV system with business management, orders and document generation. Desktop enterprise software built with Java, JavaFX and PostgreSQL.",
    category: "Desktop / Enterprise",
    stack: ["Java", "JavaFX", "PostgreSQL"],
    badges: ["Java", "SQL", ".NET"],
    status: "Active",
    githubUrl: "https://github.com/Niistal",
    featured: true,
  },
  {
    slug: "sitab-whatsapp-bot",
    name: "Sitab WhatsApp Bot",
    tagline: "Local-assistant automation experiments over messaging.",
    description:
      "Automation and experimentation with local assistants integrated into messaging. Node.js, WhatsApp Web, Ollama and local LLMs for automation-first assistant workflows.",
    category: "Automation / AI",
    stack: ["Node.js", "WhatsApp Web", "Ollama", "LLM"],
    badges: ["AI", "Automation", "Node"],
    status: "Lab",
    githubUrl: "https://github.com/Niistal",
    featured: false,
  },
  {
    slug: "bigdata-ai-lab",
    name: "Big Data / AI Lab",
    tagline: "Learning lab for data science, ML, RAG and Big Data.",
    description:
      "Repository/lab where I experiment with Python, Data Science, Machine Learning, Orange, FastAPI, LangChain, RAG, datasets, notebooks and Big Data. A learning lab — not presented as a finished commercial product.",
    category: "Data / AI / Learning Lab",
    stack: ["Python", "FastAPI", "LangChain", "RAG", "Notebooks", "Big Data"],
    badges: ["Python", "AI", "Data"],
    status: "Lab",
    githubUrl: "https://github.com/Niistal",
    featured: false,
  },
  {
    slug: "nistalinvaders",
    name: "NistalInvaders",
    tagline: "Multidisciplinary game-development evidence in Unity/C#.",
    description:
      "Game development project built with C# and Unity. Shown as evidence of multidisciplinary engineering range beyond enterprise and AI systems.",
    category: "Game Development",
    stack: ["C#", "Unity"],
    badges: ["C#", "Game"],
    status: "Archived",
    githubUrl: "https://github.com/Niistal",
    featured: false,
  },
];
