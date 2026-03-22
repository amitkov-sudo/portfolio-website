# Portfolio Website

A personal portfolio built with Next.js. The UI is dark-themed by default, with a project timeline, skills, and a contact form. Layout is responsive and built with accessibility in mind.

## Tech stack

| Area | Technology |
|------|------------|
| Framework | Next.js (App Router), TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| UI | Accessible, responsive components |

## Prerequisites

- Node.js 18+ (or the version your deployment target requires)
- npm (or compatible package manager)

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Site content

Most copy and structured data live in **`src/content/portfolio.ts`**:

| Export | Purpose |
|--------|---------|
| `SITE` | Name, role, headline, summary, resume link |
| `SOCIALS` | GitHub, LinkedIn, email |
| `PROJECTS` | Project cards and detail modals |
| `SKILLS` | Grouped skill lists |
| `TIMELINE` | Experience and education |

### Resume

Place your PDF at **`src/content/resume.pdf`** (keep this filename). It is served by the API route at **`src/app/api/resume/route.ts`**. The navbar and hero “Download Resume” actions point to **`/api/resume`**.

### SEO and branding

Edit **`src/app/layout.tsx`** for page title, description, `metadataBase`, Open Graph, and Twitter card metadata.

## Project structure

| Path | Role |
|------|------|
| `src/components/nav/navbar.tsx` | Sticky navigation, mobile menu, active section |
| `src/components/sections/*` | Page sections (Hero, About, Projects, Skills, Experience, Contact) |
| `src/components/ui/*` | Shared UI (buttons, cards, modal, container, etc.) |
| `src/components/active-section.tsx` | Tracks the active section via `IntersectionObserver` for nav highlighting |
| `src/app/api/contact/` | Contact form submission handler |

## Deployment

The app is suitable for static-friendly or Node hosts (for example Vercel). Build and run a production server locally with:

```bash
npm run build
npm run start
```

Ensure environment variables required by **`src/app/api/contact/route.ts`** (e.g. Resend and contact addresses) are set in your hosting provider if you use the contact form.
