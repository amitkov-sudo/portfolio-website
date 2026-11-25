export type SectionId =
  | "top"
  | "services"
  | "work"
  | "process"
  | "pricing"
  | "about"
  | "research"
  | "projects"
  | "skills"
  | "experience"
  | "faq"
  | "contact";

export const SECTION_IDS: SectionId[] = [
  "top",
  "services",
  "work",
  "process",
  "pricing",
  "about",
  "research",
  "projects",
  "skills",
  "experience",
  "faq",
  "contact",
];

export type NavItem = { id: Exclude<SectionId, "top">; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "Founder" },
  { id: "contact", label: "Contact" },
];
