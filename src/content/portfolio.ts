import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Brain,
  Briefcase,
  CalendarCheck,
  ClipboardCheck,
  FlaskConical,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MousePointerClick,
  Palette,
  Sparkles,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  impact: string;
  links: {
    github?: ProjectLink;
    demo?: ProjectLink;
  };
  details: string[];
};

export type SkillGroup = { label: string; items: string[] };

export type TimelineItem = {
  title: string;
  org: string;
  timeframe: string;
  location?: string;
  icon: LucideIcon;
  bullets: string[];
};

export const SITE = {
  name: "Alex Mitkov",
  roleLine: "AI researcher and engineer",
  headline: "AI research and engineering.",
  tagline: "Custom web experiences. AI-integrated intelligent business workflows.",
  summary:
    "I study how reinforcement learning shapes model behavior as an AI Research Fellow at Algoverse, with a focus on AI safety. I also design and build interactive websites for small businesses, with online booking, motion and AI features that save owners hours.",
  resumePath: "/api/resume",
  locationLine: "Las Vegas, NV • Remote research and client work",
  pricing: "Per website project, depending on scope.",
} as const;

export type ResearchItem = {
  slug: string;
  title: string;
  org: string;
  timeframe: string;
  status?: string;
  icon: LucideIcon;
  summary: string;
  points: string[];
  tags: string[];
};

export const RESEARCH: ResearchItem[] = [
  {
    slug: "algoverse-fellowship",
    title: "AI Research Fellow",
    org: "Algoverse",
    timeframe: "Sept 2026 – Present",
    icon: FlaskConical,
    summary:
      "I work on a four-person team, mentored by an AI safety researcher, studying how RL post-training changes model behavior and safety.",
    points: [
      "Proposed research directions and ran feasibility pilots on small open models",
      "Team paper aimed at ICLR 2027 workshops",
    ],
    tags: ["Reinforcement learning", "Post-training", "AI safety"],
  },
  {
    slug: "reward-hacking-routes",
    title: "Does reward hacking look the same inside a model, however it was learned?",
    org: "Independent research question",
    timeframe: "2026",
    status: "Proposal",
    icon: Brain,
    summary:
      "A model can learn to game its tests through prompting, supervised fine-tuning or RL. I ask whether those routes leave the same internal signature, and whether a detector trained on one route catches the others.",
    points: [
      "Linear probes and crosscoder features on Qwen3-4B, compared across prompted, SFT and GRPO-trained models",
      "Clean control runs and a KL-from-base axis so the routes compare fairly",
    ],
    tags: ["Interpretability", "Reward hacking", "GRPO", "Probes", "Crosscoders"],
  },
  {
    slug: "ai-evaluation",
    title: "Expert AI evaluation tasks",
    org: "Mercor (contract)",
    timeframe: "2026",
    icon: ClipboardCheck,
    summary:
      "I write and calibrate hard computational-science tasks that test the limits of frontier AI models.",
    points: [],
    tags: ["Evaluation", "Computational chemistry"],
  },
  {
    slug: "uc-merced",
    title: "Quantum computing and computational chemistry",
    org: "UC Merced, MS in Computational Chemistry",
    timeframe: "2024 – 2026",
    icon: Atom,
    summary:
      "Graduate research on quantum control, quantum molecular simulation and quantum error correction, with heavy computational work.",
    points: [
      "Built simulation workflows and analysis tooling with reproducible reporting",
      "Presented results at seminars, poster conferences and group meetings",
    ],
    tags: ["Quantum computing", "Quantum control", "Molecular simulation"],
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Custom websites",
    description:
      "A site designed around your brand, built by hand and tuned to load fast on any phone.",
    icon: Palette,
    points: ["Custom design and copy", "Mobile-first layouts", "SEO and analytics setup"],
  },
  {
    title: "Booking and payments",
    description:
      "Clients book, pay deposits and get reminders without a phone call.",
    icon: CalendarCheck,
    points: ["Online scheduling", "Deposits and memberships", "Calendar and email reminders"],
  },
  {
    title: "Interactive experiences",
    description:
      "Animations, quizzes and tools that give visitors a reason to stay and come back.",
    icon: MousePointerClick,
    points: ["Scroll and hover motion", "Style finders and quizzes", "Click-to-edit content for owners"],
  },
  {
    title: "AI workflows",
    description:
      "Assistants and automations that answer questions, sort requests and draft replies for you.",
    icon: Bot,
    points: ["Website chat assistants", "Lead and inbox triage", "Document and data pipelines"],
  },
];

export type ClientProject = {
  slug: string;
  client: string;
  title: string;
  status: string;
  description: string;
  features: string[];
  aiTool?: {
    name: string;
    description: string;
    points: string[];
  };
  stack: string[];
};

export const CLIENT_WORK: ClientProject[] = [
  {
    slug: "marley-bergen-hair-rituals",
    client: "Marley Bergen Hair Rituals",
    title: "Wellness salon site for a Las Vegas hairstylist",
    status: "Launching soon",
    description:
      "A wellness-led site for an independent stylist who focuses on hair treatments, care rituals, cuts and color.",
    features: [
      "Online booking for studio, home and hotel visits, with a dandelion animation when a client confirms",
      "A three-question look finder that matches each visitor to a service",
      "Before and after slider and a filterable lookbook that links each look to booking",
      "Click-to-edit preview so the owner can change text, colors and fonts herself",
    ],
    aiTool: {
      name: "Swipe & Style",
      description:
        "An AI style matcher I built for Marley's clients. Visitors swipe through haircut photos, and a model in their browser learns their taste with each swipe, then suggests the look and the service to book.",
      points: [
        "Online logistic regression over 20 hand-tagged style features, one update per swipe",
        "Active learning: the next photo is the one the model is least sure about",
        "Clients can send their matches to Marley before the appointment",
        "Anonymous style counts show Marley which looks clients love, with no names or device IDs",
      ],
    },
    stack: ["HTML", "CSS", "JavaScript", "Machine learning", "Cloudflare Pages", "Cloudflare KV"],
  },
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/amitkov-sudo", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amitkov/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:alex.mitkov.dev@gmail.com", icon: Mail },
];

export const PROJECTS: Project[] = [
  {
    slug: "railcast-ai",
    title: "RailCast AI: BART Transit Delay Prediction System",
    description:
      "Provides real-time transit delay predictions by combining live GTFS data directly from BART with schedule context, ensuring accurate arrival estimates even when live signals are sparse.",

    stack: [
      "Python",
      "Java",
      "Spring Boot",
      "React",
      "FastAPI",
      "XGBoost",
      "pandas",
      "scikit-learn",
      "PostgreSQL",
      "SQL",
      "Airflow",
      "Docker",
      "GTFS / GTFS-RT",
      "Maven",
    ],

    impact:
      "Engineered a layered prediction stack (live feed → model → schedule), measurable model quality, sub-13ms warm inference after optimization, and disciplined release automation across Python, Java, and frontend builds.",

    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/amitkov-sudo/RailCast-AI",
      },
    },

    details: [
      "Designed a Spring Boot REST API serving a React client: resolving live GTFS-RT stop times using an XGBoost regressor (approx. MAE 1.22 min), and defaulting to static schedule as a last resort across 40,968 ingested rows.",
      "Reduced FastAPI inference to sub-13ms mean over 500 warm calls by profiling the prediction path end-to-end and adding B-tree indexes on high-cardinality PostgreSQL columns.",
      "Automated the full data and model lifecycle with a daily Airflow DAG: enforced releases with a CI script spanning Python, Maven, and frontend builds.",
    ],
  },
  {
    slug: "jpmorgan-forage-midas",
    title: "JPMorgan Chase Advanced Software Engineering Program",
    description:
      "Real-time transaction processing system (Midas Core) which processes and " +
        "validates financial transactions in real time using an " +
        "event-driven architecture, maintaining account balances, " +
        "applying incentives, and exposing up-to-date account state via APIs.",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Kafka",
      "Spring Data JPA",
      "H2",
      "Kafka",
      "REST",
      "JUnit",
      "Maven",
    ],
    impact:
      "Engineered event-driven banking flows: safe consumption of async messages, transactional balance updates, and coordinated HTTP side effects with testable Spring components.",
    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/amitkov-sudo/forage-midas",
      },
    },
    details: [
      "Built Midas Core in Spring Boot: implemented a Kafka listener deserializing Transaction messages into typed Java objects, enforced validation logic against user existence and account balances before commit, and persisted state via Spring Data JPA with H2.",
      "Integrated with an external Incentive API via HTTP POST, applied conditional incentive logic to recipient balances, and exposed a REST endpoint returning JSON-serialized account state.",
    ],
  },
  {
    slug: "scalable-churn-prediction",
    title: "RetentionIQ: Subscriber Churn Prediction System",
    description:
      "Production-style MLOps churn prediction system with drift simulation, automated retraining, FastAPI inference, monitoring, and Dockerized deployment.",
    stack: [
      "Python",
      "scikit-learn",
      "FastAPI",
      "Docker",
      "Monitoring",
      "MLOps",
      "Feature engineering",
    ],
    impact:
      "End-to-end ML engineering: reproducible runs, operational thinking, and a credible path from training to deployment and monitoring.",
    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/amitkov-sudo/retentioniq-churn-prediction-mlops",
      },
    },
    details: [
      "Designed for realistic failure modes: drift, retraining triggers, and safe defaults around inference.",
      "Serves predictions via a FastAPI service and supports monitoring-style reporting.",
      "Packaged for deployment with Docker and a production-oriented project layout.",
    ],
  },
  {
    slug: "sql-analytics-case-study",
    title: "A/B Testing & Conversion Analysis (SQL + Python Case Study)",
    description:
      "Case study analyzing user drop-off, A/B test performance, and conversion behavior across a multi-stage onboarding funnel.",
    stack: ["SQL", "Python", "Analytics", "Experimentation", "Cohorts/Funnels"],
    impact: "Engineered funnel analytics to surface key conversion bottlenecks" +
        " across the onboarding flow, quantify cohort-level behavior," +
        " and translate insights into testable, data-driven product decisions.",
    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/amitkov-sudo/eyeware_funnel_analysis",
      },
    },
    details: [
      "Frames analysis around measurable outcomes: conversion, drop-off points, and segment behavior.",
      "Includes A/B test-oriented thinking and practical interpretation (not just charts).",
      "Maintains clarity: assumptions, edge cases, and a clean narrative for decision-makers.",
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "C++",
      "Fortran",
      "SQL",
      "TypeScript",
      "Bash",
    ],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Flask", "Next.js", "Node.js", "React", "Spring API"],
  },
  {
    label: "Data / ML",
    items: [
      "Data modeling",
      "ETL/ELT",
      "NLP",
      "RAG",
      "Feature engineering",
      "Experiment design",
      "Model evaluation",
      "Time series basics",
    ],
  },
  {
    label: "Cloud / DevOps",
    items: ["AWS Tools", "Docker", "CI/CD basics", "Infrastructure concepts", "Monitoring"],
  },
 {
  label: "Tools",
  items: [
    "Git",
    "PostgreSQL",
    "H2",
    "dbt",
    "Airflow",
    "Kafka",
    "FastAPI",
    "Spring",
    "Hibernate",
    "Jupyter",
    "PyTorch",
    "sklearn",
    "Qiskit",
    "Computer Vision",
    "Vercel"
  ]
}
];

export const TIMELINE: TimelineItem[] = [
  {
    title: "AI Research Fellow",
    org: "Algoverse",
    timeframe: "Sept 2026 – Present",
    icon: FlaskConical,
    bullets: [
      "Research on RL post-training and AI safety in a four-person team with an AI safety mentor.",
      "Team paper aimed at ICLR 2027 workshops.",
    ],
  },
  {
    title: "AI/ML Engineering Extern",
    org: "Pfizer (via Extern HQ)",
    timeframe: "Mar 2026 – Present",
    icon: Briefcase,
    bullets: [
      "Developing a multi-engine OCR document processing pipeline in Python (OpenCV, PIL, Tesseract, PaddleOCR, EasyOCR): preprocessing scanned documents and emitting structured JSON with field-level coordinates across multiple document types.",
      "Benchmarked three OCR engines against real pharmaceutical scans; identified accuracy divergence by document type and delivered a data-backed engine recommendation.",
      "Designing document classification and routing logic in Python to categorize incoming files and dispatch them to the correct extraction pipeline: reducing processing ambiguity and enabling modular extension.",
      "Building a RAG retrieval system using LlamaIndex, FAISS/Chroma, and metadata filtering over Gemini and open-source LLMs, surfaced through a Gradio/Streamlit interface.",
    ],
  },
  {
    title: "Software & Machine Learning Projects",
    org: "Independent • Open Source",
    timeframe: "2024 – Present",
    icon: Sparkles,
    bullets: [
      "Building production-style systems including data pipelines, ML workflows, and backend APIs.",
      "Emphasizing scalability, reliability, and clean system design across projects.",
      "Applying strong analytical and experimental thinking to real-world engineering problems.",
    ],
  },
  {
  title: "AI • Monash University (MCS in Artificial Intelligence)",
  org: "Monash University",
  timeframe: "2026 – Present",
  icon: Database,
  bullets: [
    "Incoming MCS student in Artificial Intelligence at Monash University (Remote, Offshore).",
    "Learning machine learning, deep learning, computer vision, and NLP to build intelligent systems.",
    "Developing skills in Python, optimization, and scalable AI system design.",
  ],
},
  {
    title: "Quantum Computing • UC Merced (MS in Computational Chemistry)",
    org: "University of California, Merced",
    timeframe: "2024 – 2026",
    icon: GraduationCap,
    bullets: [
      "Worked on quantum computing, quantum control, quantum molecular simulations, and quantum error correction research with strong computational components.",
      "Built simulation workflows and analysis tooling; emphasized reproducibility and clear reporting.",
      "Collaborated across disciplines; communicated results to both technical and non-technical audiences during seminars, poster conferences, and group meetings.",
    ],
  },
];

