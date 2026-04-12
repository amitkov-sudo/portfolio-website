import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
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
  roleLine: "Fullstack and Backend Engineer • ML & Data Engineer • Quantum + AI",
  headline:
    "Full-Stack SWE, Data Engineering, and ML Systems",
  summary:
    "I build production-minded backend, data, and ML systems — from reliable pipelines and analytics APIs to deployment-ready inference services. My background spans quantum computing and ML, with a focus on correctness, reproducibility, and measurable impact.",
  resumePath: "/api/resume",
  locationLine: "Las Vegas, NV, USA • Open to remote",
} as const;

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
    title: "RailCast AI — BART Transit Delay Prediction System",
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
      "Engineered an event-driven banking-style flows: safe consumption of async messages, transactional balance updates, and coordinated HTTP side effects with testable Spring components.",
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
    title: "RetentionIQ — Churn Prediction (MLOps-style)",
    description:
      "Production-style churn prediction system with drift simulation, automated retraining, FastAPI inference, monitoring, and Dockerized deployment.",
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
      "Engineered an end-to-end ML engineering: reproducible runs, operational thinking, and a credible path from training to deployment and monitoring.",
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
    title: "Eyeware Funnel Analysis (SQL + Python Case Study)",
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
  ]
}
];

export const TIMELINE: TimelineItem[] = [
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
    timeframe: "2024 — Present",
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
  timeframe: "2026 — Present",
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
    timeframe: "2024 — 2026",
    icon: GraduationCap,
    bullets: [
      "Worked on quantum computing, quantum control, quantum molecular simulations, and quantum error correction research with strong computational components.",
      "Built simulation workflows and analysis tooling; emphasized reproducibility and clear reporting.",
      "Collaborated across disciplines; communicated results to both technical and non-technical audiences during seminars, poster conferenses, and group meetings.",
    ],
  },
];

