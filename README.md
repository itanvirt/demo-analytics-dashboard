# Analytics Dashboard Demo

A multi-source analytics dashboard built with Next.js 15 + Recharts.

**Live demo:** https://demo-analytics-dashboard.vercel.app  
**Portfolio:** https://tanviratuhin.com/portfolio/demo-analytics-dashboard

## What this demonstrates

- Unified view pulling from multiple data sources (GA4, Shopify, Postgres)
- Server-side data fetching with Next.js App Router
- Recharts for responsive, interactive data visualisation
- Dark-themed dashboard UI — responsive from mobile to widescreen
- KPI cards, area charts, bar charts, pie chart, line chart, and data tables

## Tech stack

- Next.js 15 (App Router)
- Recharts
- Tailwind CSS v4
- TypeScript
- Lucide React

## Running locally

```bash
npm install
npm run dev
```

All data is seeded mock data. To connect real sources, implement API routes in `app/api/` and replace the imports in `app/page.tsx`.

## Built by

[Tanvir Tuhin](https://tanviratuhin.com) — AI consultant & full-stack developer, Aberdeen UK.
