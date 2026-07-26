# WT Market

Modular Next.js storefront for WT Market, rebuilt to match the original dark neon visual direction.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4, Prisma schema, PostgreSQL-ready, Vercel-ready.

## Structure

- `app/`: route and global styles
- `components/`: small UI components grouped by feature
- `data/`: typed catalog data
- `prisma/`: database schema for the next backend phase

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The storefront preview does not require a database yet, so it will not fail when `DATABASE_URL` is missing.

## Deploy

Import this repo into Vercel. Build command is `next build`, no environment variable is required for the static storefront preview. Add `DATABASE_URL` later when enabling Prisma-backed products, stock, orders, and payments.

The website is independent and not affiliated with Gaijin. Selling or transferring game accounts may violate the game's terms of service.
