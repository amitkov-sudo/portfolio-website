export type SectionId =
  | "top"
  | "services"
  | "work"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export const SECTION_IDS: SectionId[] = [
  "top",
  "services",
  "work",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];

export type NavItem = { id: Exclude<SectionId, "top">; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
