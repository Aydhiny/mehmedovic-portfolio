# Ajdin Mehmedović — Portfolio CLAUDE.md

## Project Overview

Personal portfolio for Ajdin Mehmedović (alias Aydhiny) — software engineering student, music producer, game developer, and graphic designer. Built with **Next.js 15 App Router + TailwindCSS + Framer Motion**, deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3, global CSS (`src/app/globals.css`)
- **Animation**: Framer Motion 10
- **Fonts**: Geist Sans + Geist Mono (local), DM Sans (Google Fonts)
- **Icons**: react-icons
- **Media**: plyr-react (video), wavesurfer.js (audio), react-confetti
- **Language**: TypeScript (strict mode)

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `main-app-purple` | `#9000FF` | Primary accent, CTAs, scrollbar |
| `main-app-teal` | `#01FEE1` | Secondary accent, chatbot, hover states |
| `main-background-grey` | `#242424` | Page background |

## Directory Structure

```
src/
  app/
    about/page.tsx          — Contact form + social links
    blog/page.tsx           — Placeholder (in development)
    journey/page.tsx        — Timeline / milestones
    next-big-thing/page.tsx — Hunter Mouse 2 game showcase
    projects/
      programming/page.tsx  — Unity/C# project pages
      music/page.tsx        — Music production projects
      design/page.tsx       — Design/marketing work
    pages/Projects/page.tsx — GitHub repos section (used on homepage)
    api/contact/route.ts    — POST handler for contact form
    sitemap.ts              — Auto-generated sitemap
    layout.tsx              — Root server layout + metadata
    globals.css             — Global styles, scrollbar, background pattern
  components/
    ClientLayout.tsx    — "use client" wrapper (Navbar, Footer, AnimatePresence, CustomCursor, ProgressBar)
    Navbar.tsx          — Responsive nav with hamburger + Projects dropdown
    Footer.tsx          — Simple link footer
    Header.tsx          — Hero section with typewriter + profile pic
    Chatbot.tsx         — FAQ chatbot floating button (bottom-right)
    Tech.tsx            — Tech stack icon grid
    Clients.tsx         — Competitions/hackathons section
    TrainTrack.tsx      — Clickable train easter egg animation
    Lines.tsx           — Decorative SVG background lines
    SuccessShowcase.tsx — About me + Achievements cards with confetti
    HunterMouseShowcase.tsx — Hunter Mouse 2 video + feature grid
    Foundation.tsx      — BH Futures Foundation section
    CustomCursor.tsx    — Custom purple circle cursor (desktop only)
    ProgressBar.tsx     — Scroll progress bar
public/
  robots.txt            — Search engine crawl rules
  ajdin_mehmedovic_cv.pdf
  images/success/       — Achievement card images
  videos/huntermouse2.mp4
```

## Homepage Composition

The homepage (`src/app/page.tsx`) assembles these sections in order:
1. `Chatbot` (floating, always visible)
2. `Header` (hero — name, profile pic, CV/GitHub buttons)
3. `Lines` (decorative SVG background, fixed)
4. `TrainTrack` (animated train easter egg)
5. `SuccessShowcase` (About Me + Achievements)
6. `Tech` (tech stack icons)
7. `HunterMouseShowcase` (game video + feature grid)
8. `Clients` (competitions)
9. `Projects` (GitHub repos via API)
10. `Foundation` (BH Futures Foundation)

## Key Conventions

- **Server vs client**: Root `layout.tsx` is a server component. All client interactivity lives in `ClientLayout.tsx` or individual page/component files. Never add `"use client"` to `layout.tsx`.
- **next/image**: Always use the modern API (`fill` prop + `className="object-cover"`, never `layout=` or `objectFit=`).
- **Path aliases**: `@/*` → `src/*`, `@images/*` → `src/images/*`
- **Active nav link**: highlighted with `text-main-app-purple font-bold` via `isActive()` helper (in both Navbar and Footer)
- **Footer visibility**: Footer is hidden on `/next-big-thing`, `/projects/music`, `/journey` — controlled in `ClientLayout.tsx`

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | Contact form email delivery (Resend.com) |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical URL for sitemap/metadata (defaults to `https://mehmedovic-portfolio.vercel.app`) |

## Contact Form

The About page (`/about`) posts to `POST /api/contact`. The route handler at `src/app/api/contact/route.ts` forwards messages via **Resend API** to `ajdin.mehmedovic@edu.fit.ba`. Set `RESEND_API_KEY` in Vercel environment variables before deploying.

## Known Cleanup Items

- `mssql` and `express` in `package.json` are unused — they should be removed with `npm uninstall mssql express @types/...` once confirmed safe
- Blog page (`/blog`) is a placeholder spinner — replace with real content when ready
- Chatbot FAQ answers are hardcoded strings — update when details change

## Commands

```bash
npm run dev    # Start dev server (http://localhost:3000)
npm run build  # Production build
npm run lint   # ESLint
npm run start  # Start production server
```
