import type { LucideIcon } from "lucide-react";
import {
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Globe,
  Server,
  Sparkles,
  Wand2,
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
    "Full—Stack, Backend, Data Engineering, and ML Systems",
  summary:
    "I build production-minded backend, data, and ML systems — from reliable pipelines and analytics APIs to deployment-ready inference services. My background spans quantum computing and ML, with a focus on correctness, reproducibility, and measurable impact.",
  resumePath: "/resume.pdf",
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
    slug: "amcast-ai",
    title: "AmCast AI — Amtrak Delay Prediction (In Progress)",
    description:
      "End-to-end machine learning system for predicting train delays using historical rail data, combining data pipelines, feature engineering, and API-based inference.",
    stack: [
      "Python",
      "pandas",
      "scikit-learn",
      "FastAPI",
      "PyTorch",
      "MLflow",
      "Spring API",
      "Java",
      "JavaScript",
      "PostgreSQL",
      "Airflow",
      "Docker",
      "Time-series",
    ],
    impact:
      "Highlights practical ML and data engineering skills by tackling real-world transportation reliability, with a focus on pipeline design, feature construction, and deployable prediction services.",
    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/amitkov-sudo/amcast-ai",
      },
    },
    details: [
      "Building a data pipeline to ingest, clean, and store historical Amtrak delay and route data.",
      "Engineering temporal and route-level features to capture patterns in delays.",
      "Developing baseline and iterative ML models for delay prediction.",
      "Designing a FastAPI service for serving predictions to downstream applications.",
      "Planned extensions include automated retraining, monitoring, and real-time data ingestion.",
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
      "Showcases end-to-end ML engineering: reproducible runs, operational thinking, and a credible path from training to deployment and monitoring.",
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
    impact:
  "Surfaces key conversion bottlenecks across the onboarding funnel, quantifies cohort-level behavior, and translates insights into testable, data-driven product decisions.",
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
  {
    slug: "language-families-java",
    title: "Language Families — Object-Oriented Modeling in Java",
    description:
      "Java-based object-oriented system modeling relationships between language families using inheritance, polymorphism, and linguistic features such as word order.",
    stack: [
      "Java",
      "OOP",
      "Inheritance",
      "Polymorphism",
      "Class design",
    ],
    impact:
      "Demonstrates strong understanding of object-oriented design principles and the ability to model real-world hierarchical systems in clean, extensible Java code.",
    links: {
      github: {
        label: "GitHub",
        href: "https://github.com/amitkov-sudo/language-families-java",
      },
    },
    details: [
      "Designed a base Language class with shared properties and behaviors across language families.",
      "Implemented specialized subclasses (e.g., Mayan, Sino-Tibetan) using inheritance and method overriding.",
      "Modeled linguistic variation such as subject-verb-object vs subject-object-verb ordering.",
      "Focused on clean class structure, readability, and extensibility of the system.",
    ],
  }
];

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["Java", "JavaScript", "Python", "SQL", "Bash", "Fortran"] },
  { label: "Frameworks", items: ["Next.js", "React", "FastAPI", "Spring API"] },
  {
    label: "Data / ML",
    items: [
      "Data modeling",
      "ETL/ELT",
      "Feature engineering",
      "Experiment design",
      "Model evaluation",
      "Time series basics",
    ],
  },
  {
    label: "Cloud / DevOps",
    items: ["Docker", "CI/CD basics", "Infrastructure concepts", "Monitoring"],
  },
  {
    label: "Tools",
    items: ["Git", "PostgreSQL", "dbt", "Airflow concepts", "Jupyter", "FastAPI", "Kafka", "Spring Boot", "Hybernate", "Qiskit"],
  },
];

export const TIMELINE: TimelineItem[] = [
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
    title: "Quantum Computing • UC Merced (M.S. in Theoretical Chemistry)",
    org: "University of California, Merced",
    timeframe: "2024 — 2026",
    icon: GraduationCap,
    bullets: [
      "Worked on quantum computing, quantum control, and quantum error correction research with strong computational components.",
      "Built simulation workflows and analysis tooling; emphasized reproducibility and clear reporting.",
      "Collaborated across disciplines; communicated results to both technical and non-technical audiences during seminars, poster conferenses, and group meetings.",
    ],
  },
  {
  title: "AI • Monash University (MCS in Artificial Intelligence)",
  org: "Monash University",
  timeframe: "2026 — 2028",
  icon: Database,
  bullets: [
    "Incoming MCS student in Artificial Intelligence at Monash University.",
    "Learning machine learning, deep learning, and NLP to build intelligent systems.",
    "Developing skills in Python, optimization, and scalable AI system design.",
  ],
},
];

