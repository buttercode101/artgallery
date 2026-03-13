# ARK Contemporary — Premium Gallery Demo

A full-stack ready Next.js + Tailwind + Framer Motion concept for a museum-grade digital gallery presence.

## Included experience
- Cinematic homepage with current exhibition hero and editorial typography
- Exhibition system (current + archive) with available works grid
- Artists index and dynamic artist profile routes
- Collector-focused inquiry contact page
- Visit page with destination storytelling
- Demo private online viewing room route
- Demo admin dashboard structure for CMS integration

## Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion

## Planned production integrations
- Sanity CMS for artists, artworks, exhibitions, pages
- Cloudinary for optimized asset delivery
- Supabase tables for inquiries and admin auth

## Vercel deployment readiness
- `vercel.json` includes framework/build settings, FRA region targeting, and baseline security headers.
- `.nvmrc` pins Node 20 and `.npmrc` enforces engine consistency in CI/builds.
- `.env.example` provides deploy-time environment variable template.
- `app/api/health/route.ts` adds a no-cache health endpoint at `/api/health`.
- `app/layout.tsx` includes metadata base + Open Graph/Twitter metadata tied to `NEXT_PUBLIC_SITE_URL`.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Vercel
1. Import this repo into Vercel.
2. Set runtime to Node 20 (or use project default from `.nvmrc`).
3. Add env vars from `.env.example` in Vercel Project Settings.
4. Deploy. The build command is `npm run build`.
5. Verify `/api/health` returns status `ok`.
