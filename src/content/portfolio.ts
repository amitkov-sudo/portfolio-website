import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  Briefcase,
  CalendarCheck,
  ShieldCheck,
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
  roleLine: "Web development and applied AI",
  headline: "Custom web experiences.",
  summary:
    "Alex Mitkov designs and builds websites, booking systems and AI tools for small businesses. Every project starts with a written scope and quote.",
  resumePath: "/api/resume",
  locationLine: "Las Vegas, NV",
  priceRange: "$1,500 to $5,000+",
  pricing: "Quote prices depend on a variety of things such as project complexity and timeline.",
  serviceArea: "Website builds are available to US residents only.",
} as const;

export const TRUST_POINTS: string[] = [
  "Founded by an AI researcher and engineer",
  "Written scope before any build work",
  "Projects from $1,500",
];

export type Step = { title: string; description: string };

export const PROCESS: Step[] = [
  {
    title: "Discovery call",
    description: "Alex Mitkov and the client walk through goals, pages, features and budget on a first call.",
  },
  {
    title: "Scope and quote",
    description:
      "A written scope lists pages, features, price and launch date before work starts.",
  },
  {
    title: "Design and build",
    description:
      "Design and development run on a private preview link, and the client reviews the real site at each stage.",
  },
  {
    title: "Launch and support",
    description:
      "Launch includes domain, hosting and analytics setup, plus a handover walkthrough.",
  },
];

export const PRICING_FACTORS: string[] = [
  "Number of pages and depth of custom design",
  "Online booking, deposits and memberships",
  "AI tools such as style matchers and chat assistants",
  "Connections to existing calendars, email or payment accounts",
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How much does a website cost?",
    a: "Projects range from $1,500 to $5,000+. Pages, booking and payment features, and AI tools set the final price.",
  },
  {
    q: "How long does a project take?",
    a: "Timelines depend on scope. The written quote gives a launch date before work starts.",
  },
  {
    q: "What does hosting cost after launch?",
    a: "Alex Mitkov picks hosting to fit the budget. Static sites can run on free hosting tiers.",
  },
  {
    q: "Can the owner update the site after launch?",
    a: "Sites can include click-to-edit tools, so owners change text, colors and fonts without a developer.",
  },
  {
    q: "Who owns the domain, content and code?",
    a: "The written scope sets out ownership of the domain, content and code for each project.",
  },
];

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
  github?: string;
};

export const RESEARCH: ResearchItem[] = [
  {
    slug: "algoverse-self-correction",
    title: "Junior AI Researcher",
    org: "Algoverse",
    timeframe: "Sept 2026 – Present",
    status: "Paper incoming",
    icon: FlaskConical,
    summary:
      "Language models can register a wrong reasoning step and still build on the error. Testing whether fine-tuning teaches a model to fix that step without flagging correct ones.",
    points: [
      "Measuring the gap between errors a model detects and errors a model fixes",
      "Comparing GFlowNet-style fine-tuning with GRPO on real fixes against false alarms",
      "Extending the test to safety, where a false alarm means refusing a safe request",
    ],
    tags: ["Reinforcement learning", "Self-correction", "GFlowNets", "GRPO", "AI safety"],
    github: "https://github.com/amitkov-sudo/grpo-vs-gfn-self-correction",
  },
  {
    slug: "ai-evaluation",
    title: "AI Capability Research, Computational Scientist",
    org: "Mercor",
    timeframe: "2026",
    icon: ShieldCheck,
    summary:
      "Researching the capabilities and failure modes of frontier AI models in expert computational science to support AI safety.",
    points: [],
    tags: ["AI safety", "Frontier AI capabilities", "Computational chemistry", "Quantum chemistry", "Scientific computing", "Python"],
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
      "Custom design for each brand, hand-written code and fast loading on phones.",
    icon: Palette,
    points: ["Custom design and copy", "Mobile-first layouts", "SEO and analytics setup"],
  },
  {
    title: "Business systems",
    description:
      "Booking, payments and client records in one connected system that runs the front desk around the clock and builds recurring revenue.",
    icon: CalendarCheck,
    points: [
      "Scheduling, deposits and memberships",
      "Client portals and customer records",
      "Integrations with calendars, email and payment providers",
    ],
  },
  {
    title: "Interactive experiences",
    description:
      "Animations, quizzes and tools that keep visitors on the page.",
    icon: MousePointerClick,
    points: ["Scroll and hover motion", "Style finders and quizzes", "Click-to-edit content for owners"],
  },
  {
    title: "AI workflows",
    description:
      "Assistants and automations that answer questions, sort requests and draft replies.",
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
    title: "Wellness-Forward Hair Salon",
    status: "Launching soon",
    description:
      "Wellness-Centered hair studio nestled in the beautiful Las Vegas valley, offering restorative hair rituals, precision cuts and luminous color, plus in-home and hotel blowouts.",
    features: [
      "End-to-end online booking for studio, in-home and hotel appointments",
      "Guided service discovery that matches each visitor to the right treatment",
      "Interactive lookbook and before-and-after gallery tied to booking",
      "Owner-managed content editing with no developer required",
    ],
    aiTool: {
      name: "Swipe & Style",
      description:
        "A proprietary AI-powered style matching tool that identifies clients’ preferences through an interactive swiping experience and recommends hairstyles and relevant booking services.",
      points: [
        "Personalised hairstyle and service recommendations",
        "Client style preferences shared with the stylist prior to appointments",
        "Anonymous analytics on client preferences and styling trends",
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
      "Provides real-time transit delay predictions by combining live GTFS data from BART with schedule context, ensuring accurate arrival estimates even when live signals are sparse.",

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
    title: "Junior AI Researcher",
    org: "Algoverse",
    timeframe: "Sept 2026 – Present",
    icon: FlaskConical,
    bullets: [
      "Researching whether fine-tuning teaches language models to act on detected errors, in a four-person team with an AI safety mentor.",
      "Paper incoming.",
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
      "Designing document classification and routing logic in Python to categorize incoming files and dispatch each file to the correct extraction pipeline: reducing processing ambiguity and enabling modular extension.",
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

