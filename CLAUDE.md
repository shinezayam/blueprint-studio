# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blueprint Studio is a portfolio website for Chinguun & Shinezaya built with Next.js 15, featuring internationalization (English/Mongolian), dark mode theming, interactive 3D elements via Spline, and EmailJS integration for contact forms. This is a production site deployed on Vercel.

## Development Commands

```bash
# Development
npm run dev          # Start dev server with Turbopack (port 3000)

# Build & Preview
npm run build        # Production build with Turbopack
npm run preview      # Build and start production server
npm start            # Start production server

# Quality
npm run lint         # Run ESLint

# Static export (limited Next.js features)
npm run export       # Generate static HTML to out/
```

## Architecture

### Routing & Internationalization

The app uses Next.js 15 App Router with locale-based routing (`src/app/[locale]/`). All routes are dynamic segments under `[locale]` with two supported locales: `en` (English) and `mn` (Mongolian).

**Key files:**
- [next-intl.config.ts](next-intl.config.ts): Defines supported locales (`en`, `mn`), default locale (`en`), and timezone (`Asia/Ulaanbaatar`)
- [src/i18n/request.ts](src/i18n/request.ts): Server-side i18n configuration using `next-intl/server`
- [src/app/[locale]/layout.tsx](src/app/[locale]/layout.tsx): Root layout that loads locale messages from `src/messages/{locale}.json` and wraps children with `Providers`
- [src/components/Providers.tsx](src/components/Providers.tsx): Client component wrapping `NextIntlClientProvider` and `SessionProvider`
- [src/messages/](src/messages/): Translation files (`en.json`, `mn.json`) containing all UI strings organized by page/component

**How translations work:**
- Server components can use `useTranslations` from `next-intl` by importing it (auto-async in Server Components)
- Client components must be wrapped in `NextIntlClientProvider` (done in layout via Providers)
- Use `t('key')` for simple strings, `t.raw('key')` to get structured data (arrays/objects)
- Translation keys follow dot notation: `home.title`, `about.profiles.chinguun.name`, etc.

### Pages Structure

- [src/app/[locale]/page.tsx](src/app/[locale]/page.tsx): Home page with hero, features grid, and SplineHero component
- [src/app/[locale]/about/page.tsx](src/app/[locale]/about/page.tsx): About page featuring ProfileSwitcher component with dual profiles
- [src/app/[locale]/portfolio/page.tsx](src/app/[locale]/portfolio/page.tsx): Portfolio projects showcase
- [src/app/[locale]/services/page.tsx](src/app/[locale]/services/page.tsx): Services offered
- [src/app/[locale]/contact/page.tsx](src/app/[locale]/contact/page.tsx): Contact page with ContactForm component
- [src/app/[locale]/privacy/page.tsx](src/app/[locale]/privacy/page.tsx): Privacy policy
- [src/app/[locale]/terms/page.tsx](src/app/[locale]/terms/page.tsx): Terms of service

### Theming System

The site uses a manual light/dark theme toggle (not system preference-based):

- Default theme: **light** (set in layout head and localStorage init script)
- Theme persistence: `localStorage.getItem/setItem('theme')`
- CSS: Tailwind v4 with class-based dark mode (`darkMode: "class"` in [tailwind.config.ts](tailwind.config.ts))
- Color tokens: `--background` and `--foreground` defined in [src/app/globals.css](src/app/globals.css)
- Theme toggle: [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx) manipulates `.dark` class on `<html>`
- Inline script in layout prevents flash by applying theme before React hydration

**Important:** When adding new UI, always use `text-foreground`, `bg-background`, `border-foreground/20` Tailwind classes to respect theme switching.

### Key Components

- **[Navbar](src/components/Navbar.tsx)**: Navigation with LangToggle, ThemeToggle, and conditional AuthButton
- **[Footer](src/components/Footer.tsx)**: Site-wide footer with links
- **[SplineHero](src/components/SplineHero.tsx)**: 3D interactive Spline scene on homepage (hidden on mobile)
- **[ProfileSwitcher](src/components/ProfileSwitcher.tsx)**: Complex dual-profile switcher on About page with animated background Spline robot arm, profile images, toggle buttons, and slide-in profile cards. Uses translation data for profiles (names, bios, certificates, awards, skills)
- **[ContactForm](src/components/ContactForm.tsx)**: EmailJS-powered contact form requiring environment variables (see below)
- **[LangToggle](src/components/LangToggle.tsx)**: Language switcher (EN/MN) using Next.js router
- **[ThemeToggle](src/components/ThemeToggle.tsx)**: Light/dark mode toggle
- **[Timeline](src/components/Timeline.tsx)**: Timeline component for About page
- **[StatCard](src/components/StatCard.tsx)**, **[Section](src/components/Section.tsx)**: Reusable UI primitives

### Authentication

NextAuth configured with Google OAuth:
- [src/app/api/auth/[...nextauth]/route.ts](src/app/api/auth/[...nextauth]/route.ts): NextAuth handler
- Requires `.env.local` variables: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`
- SessionProvider wraps app in Providers component
- [AuthButton](src/components/AuthButton.tsx) shows sign-in/out UI

### EmailJS Integration

Contact form sends emails via EmailJS. Requires environment variables:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

If not set, form will fail silently with fallback values. Update [ContactForm.tsx:32-34](src/components/ContactForm.tsx#L32-L34).

### Styling & Animation

- **Tailwind CSS v4** (new inline @theme syntax in globals.css)
- **Font:** Geist Sans and Geist Mono from `next/font/google`
- **Custom animations:** `fade-in-up`, `animate-float`, `animate-pulse-subtle` defined in [globals.css](src/app/globals.css)
- **Responsive:** Mobile-first design; Spline components hidden on small screens

## Technical Conventions

### TypeScript

- Strict mode enabled (check [tsconfig.json](tsconfig.json))
- Path alias: `@/` maps to `src/`
- Use explicit types for props interfaces
- Async Server Components are common in App Router

### Client vs Server Components

- Default is Server Component (no `"use client"` directive)
- Mark as `"use client"` when using: `useState`, `useEffect`, event handlers, browser APIs, or client-only hooks like `useTranslations` from next-intl in interactive contexts
- Providers, forms, theme toggles, language switchers are client components

### Image Handling

- Use `next/image` with `fill` prop for responsive containers
- Public assets live in `public/` (Spline files, PDFs, profile images)
- Profile images and certificates referenced from translation JSON files (e.g., `/chinguun/image 187.png`, `/Porfolio Chinguun/...`)

### Spline Integration

- Uses `@splinetool/react-spline` library
- Scene files (`.splinecode`) stored in `public/` (e.g., `/robot_arm/scene.splinecode`)
- Components check for scene availability before rendering (HEAD request pattern)
- Fallback: emoji or simple placeholder if Spline fails

## Common Tasks

### Adding a New Page

1. Create `src/app/[locale]/new-page/page.tsx`
2. Add translations to `src/messages/en.json` and `src/messages/mn.json`
3. Update Navbar links if needed
4. Use `useTranslations('newPage')` in component

### Adding New Translation Strings

1. Edit both `src/messages/en.json` and `src/messages/mn.json`
2. Maintain identical structure in both files
3. Use `t('key')` for strings, `t.raw('key')` for arrays/objects
4. Restart dev server if translations don't hot-reload

### Modifying Theme Colors

1. Update CSS variables in [src/app/globals.css](src/app/globals.css) (both `:root` and `.dark`)
2. Use Tailwind utility classes like `bg-background`, `text-foreground`, `border-foreground/20`
3. Test both light and dark modes

### Working with Environment Variables

Create `.env.local` (not in git):

```
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Public vars must start with `NEXT_PUBLIC_` to be available in browser.

## Deployment

- Primary deployment: Vercel (Next.js recommended platform)
- Static export is possible (`npm run export`) but disables dynamic features (API routes, server components, i18n routing)
- Environment variables must be configured in Vercel dashboard
