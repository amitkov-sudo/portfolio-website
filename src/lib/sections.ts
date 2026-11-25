export type SectionId =
  | "top"
  | "research"
  | "work"
  | "services"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export const SECTION_IDS: SectionId[] = [
  "top",
  "research",
  "work",
  "services",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];

export type NavItem = { id: Exclude<SectionId, "top">; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "research", label: "Research" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
