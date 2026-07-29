# LubartLab Sales Page

Ukrainian-only, production-like landing page for LubartLab, an AI-powered studio that builds business websites, e-commerce, and integrated web solutions.

The repository currently contains the technical foundation and a temporary `noindex` holding page. Product sections and motion are intentionally paused until the art direction is approved.

## Stack

- Next.js App Router and TypeScript
- Tailwind CSS with a custom LubartLab design system
- Fixel Text and Fixel Display
- Motion for React
- Vercel Web Analytics and Speed Insights
- Vitest and Playwright
- Vercel production deployment through GitHub Actions

## Local setup

Requirements:

- Node.js 24
- pnpm 11.9.0

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

Run `pnpm build` before `pnpm test:e2e`, because Playwright starts the production server.

## Environment

Copy `.env.example` to `.env.local` only when a step needs those values. Never commit real credentials.

The contact form will require:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `SITE_URL`

## Documentation

- [Project brief](docs/PROJECT.md)
- [Decision register](docs/DECISIONS.md)
- [Implementation steps](docs/STEPS/README.md)

## Deployment

The existing Vercel project `lubart-lab-landing` is reused. Vercel Git auto-deployments are disabled; every commit pushed to `main`, including documentation-only changes, runs `.github/workflows/production.yml` and deploys to production. The workflow has no manual trigger or path-based bypass.

Required GitHub Actions secrets:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
