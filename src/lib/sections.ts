export type SectionId =
  | "top"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "contact";

export const SECTION_IDS: SectionId[] = [
  "top",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];

export type NavItem = { id: Exclude<SectionId, "top">; label: string };

export const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

