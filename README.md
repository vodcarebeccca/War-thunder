# WT Market

Rebuilt as a clean Next.js App Router storefront, using React, TypeScript, Tailwind CSS v4, and a Prisma PostgreSQL schema for the future commerce layer.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Import this repo. The preview storefront does not query Prisma at runtime, so it builds without a database connection. Add `DATABASE_URL` later when the admin, stock, and payment layer is connected.

## Structure

- `src/app`: routes and layouts
- `src/components`: small UI components
- `src/data`: demo catalog data
- `src/lib`: formatting and shared utilities
- `src/types`: domain types
- `prisma/schema.prisma`: PostgreSQL data model

The site is independent and not affiliated with Gaijin. Verify marketplace and payment-provider terms before enabling sales.
