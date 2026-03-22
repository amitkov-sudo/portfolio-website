## Portfolio Website (Next.js App Router)

Modern, dark-first showcasing portfolio in a timeline and toolkit-first fashion. 

### Tech

- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle motion)
- **Accessible + responsive** UI

### Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Where to edit content (high-signal)

- **Primary content file**: `src/content/portfolio.ts`
  - `SITE`: name, headline, summary, resume path
  - `SOCIALS`: GitHub / LinkedIn / Email links
  - `PROJECTS`: all project cards + modal details
  - `SKILLS`: grouped skill chips
  - `TIMELINE`: experience/education timeline entries

### Resume

- Replace `src/content/resume.pdf` with your PDF (same filename). It is served by `src/app/api/resume/route.ts`.
- The “Download Resume” button in the navbar + hero links to `/api/resume`.

### Branding / metadata

- Update SEO in `src/app/layout.tsx` (title, description, `metadataBase`, OpenGraph, Twitter card).

### Component structure

- `src/components/nav/navbar.tsx`: sticky navbar, mobile menu, active section highlight
- `src/components/sections/*`: page sections (Hero, About, Projects, Skills, Experience, Contact)
- `src/components/ui/*`: reusable primitives (Button, Badge, Card, Modal, Container)
- `src/components/active-section.tsx`: IntersectionObserver-based active nav section tracking

### Deploy

This repo is deploy-ready for platforms like Vercel:

```bash
npm run build
npm run start
```

