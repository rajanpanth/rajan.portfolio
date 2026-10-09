# Rajan Pantha — Portfolio

Source for [rajanpantha.vercel.app](https://rajanpantha.vercel.app), the portfolio of Rajan Pantha, a full-stack and Web3 engineer building on Solana.

The app lives in [`portfolio/`](portfolio): Next.js 16 (App Router, static export), React 19, Tailwind CSS 4 and Framer Motion.

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000. On Windows, `start-portfolios.bat` starts the dev server and opens the browser.

## Edit the content

Most of the content is plain data in `portfolio/src/data/`:

| File | What it controls |
|---|---|
| `projects.ts` | Project cards and case-study pages |
| `achievements.ts` | "Proof of Work" entries |
| `blogs.ts` | "Recommended Reading" cards |
| `skills.ts` | "Capabilities" groups |
| `navigation.ts` | Navbar links |

The site URL used for canonical links, the sitemap and social previews is set in `portfolio/src/lib/site.ts`. Colours are CSS variables in `portfolio/src/app/globals.css`, exposed to Tailwind as `text-muted`, `bg-card`, `border-border` and so on.

## Build and deploy

```bash
cd portfolio
npm run build
```

This writes a static site to `portfolio/out/`. Vercel deploys `main` to production.
