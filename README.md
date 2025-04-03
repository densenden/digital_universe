# 🌌 Studio Sen – The Digital Universe

**A creative fullstack monorepo – blending design, animation, AI, content, and mindful technology into one living system.**  
Built with love, clarity, and radical modularity.

---

## 🧠 Vision

The Studio Sen universe is more than a portfolio – it's an ever-evolving cosmos of interconnected apps, each representing a creative planet.

- Design → is structure.  
- Code → is choreography.  
- Content → is resonance.  
- Mindfulness → is infrastructure.  

This monorepo is both playground and proof of work.

---

## 🛠️ Tech Stack

- Framework: Next.js 14 (App Router)  
- Languages: TypeScript, React 18  
- Styling: Tailwind CSS with custom senMidnight palette  
- Fonts: Google Fonts – Rubik (UI), Bodoni Moda (Headlines)  
- Design System: Centralized via /packages/ui  
- Database: SQLite + Prisma ORM  
- Animations: Framer Motion (subtle, elegant, alive)  
- Repo Structure: Turborepo with pnpm workspaces  
- Hosting: Vercel (multi-app deployment)  

---

## 📁 Structure Overview

/apps  
  /flow       → Main landing: animated intro, cosmic layout  
  /blog       → Markdown blog, essays, dev logs  
  /art        → Generative art, AI pieces, visual playground  
  /design     → Branding, creative direction, rebrands  
  /meditation → Calm tech, custom journeys, audio layers  
  /mentor     → Personal mentoring portal  
  /booking    → Booking system for models / consulting  
  /shop       → Digital + physical products  
  /intern     → Internal dashboards, admin tools  

/packages  
  /ui         → Shared components, layouts, font styles  
  /icons      → Material Symbols (customized)  
  /utils      → Global helpers (dark mode, translations)  

/prisma  
  schema.prisma → Central DB schema: artworks, projects, models, products

---

## 🎨 Design System Highlights

- Fonts:  
  - Rubik – clean sans-serif for interface  
  - Bodoni Moda – elegant display for large headlines, italics, blog

- Color Palette (senMidnight)  
  - #1A2E40 – Midnight (bg)  
  - #023859 – Deep Blue  
  - #364C59 – Slate  
  - #BF947A – Clay  
  - #F2CCB6 – Skin  
  - #732727 – Oxide  
  - #BF391B – Rust  
  - #4C2929 – Bark  
  - #BF3617 – Burnt  

- Layout Principles:  
  - Grid-based (grid-cols-12)  
  - Maximal whitespace  
  - Palantir-inspired: clear sections, visual rhythm  
  - Animations on mount & scroll  
  - Full dark-mode first

---

## 🚀 App Philosophy: Planets in a System

Each app is a living concept, a module, a world:

flow.sen.studio        → /flow       → Cosmic landing page, intro to the universe  
blog.sen.studio        → /blog       → Markdown blog, dev logs, tech thoughts  
art.sen.studio         → /art        → AI, generative art, experimental visuals  
design.sen.studio      → /design     → Branding, case studies, UI/UX work  
meditation.sen.studio  → /meditation → Calm content, immersive meditation tools  
mentor.deniskreuzer.dk → /mentor     → 1:1 sessions, learning journeys  
booking.deniskreuzer.dk→ /booking    → Calendar + request system  
shop.sen.studio        → /shop       → Sen-branded products & downloads  
intern.deniskreuzer.dk → /intern     → Admin dashboard, backend features

---

## 🧪 Local Dev

Start dev servers per app using Turborepo:

pnpm dev --filter @sen/flow  
pnpm dev --filter @sen/blog  

Or use Vercel preview links per subdomain.

---

## 💬 Philosophy

> “We don’t just build software.  
> We build mindful systems that breathe.”

This repo is an expression of code, design, and consciousness.  
A creative playground – infinitely scalable.
