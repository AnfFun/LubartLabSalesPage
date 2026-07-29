# Step 00 — Foundation

**Status:** Done

## Business outcome

The project can be installed, verified, and deployed predictably before visual feature work begins.

## Scope

- Commit the project brief, decision register, step tracker, and contributor rules.
- Scaffold Next.js App Router with TypeScript, pnpm, Node.js 24, Tailwind CSS, and pinned dependencies.
- Load the approved Fixel font files through `next/font/local`.
- Establish LubartLab color tokens.
- Add a neutral, temporary, `noindex` holding page.
- Add Vitest and Playwright foundations.
- Add Vercel Analytics and Speed Insights integrations.
- Disable Vercel Git auto-deployments.
- Add a production-only GitHub Actions workflow.
- Link the repository to the existing Vercel project.
- Make the apex domain canonical and configure permanent alternate-host redirects.

## Not in scope

- Final landing copy or section layout.
- Contact form or privacy page implementation.
- Motion choreography.
- Search indexing of the holding page.

## Acceptance criteria

- A clean checkout installs with `pnpm install --frozen-lockfile`.
- `pnpm check` passes.
- Playwright verifies the holding page and no horizontal overflow.
- `.vercel/project.json` points to the existing `lubart-lab-landing` project.
- Vercel Git integration cannot create preview or automatic production deployments.
- The GitHub Actions workflow targets production only.
- A production deployment is `READY`.
- `https://lubartlab.com.ua` serves the new deployment.
- `www.lubartlab.com.ua` and `lubart-lub.vercel.app` return permanent redirects to canonical.
- The holding page and `/robots.txt` prevent indexing.

## Verification evidence

Record commands, deployment ID, canonical checks, and any temporary limitation in the task handoff. Do not put credentials in this file.

## Current implementation state

Completed on 2026-07-29:

- Next.js foundation, Fixel assets, documentation, tests, and production workflow created.
- Lint, typecheck, unit tests, production build, and three Playwright tests passed locally.
- Browser QA passed at desktop and mobile sizes with no relevant console errors.
- Existing Vercel project linked and changed from `Other` to the `nextjs` framework preset.
- Old `AnfFun/Lubart-Lab-Landing` Git integration disconnected.
- Vercel Git auto-deployments disabled in `vercel.json`.
- Vercel Web Analytics enabled.
- Speed Insights remains assigned to `freelance-docs-generator`; its disabled LubartLab integration is retained without blocking this step.
- Production deployment `dpl_G3HMkT2xU8D6m6QteRXHmaxse5zQ` reached `READY`.
- `https://lubartlab.com.ua` returns the holding page with HTTP `200`.
- `www.lubartlab.com.ua` and `lubart-lub.vercel.app` return `308` to canonical.
- Production metadata contains Ukrainian language, canonical, and `noindex`; `/robots.txt` disallows `/`.
- GitHub repository secrets `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` configured.
- Dedicated `VERCEL_TOKEN` configured as a GitHub Actions secret and scheduled for rotation by 2027-07-29.
- Commit `aa32255` pushed to `codex/block-00-foundation` and `main`; `main` is the repository default branch.
- Push-triggered GitHub Actions run `30463951690` completed successfully with every verification and deployment step green.
- CI deployment `dpl_AKSAcByEVnnbpvrskmy2T6GJiTbF` reached `READY` for commit `aa32255`.
- Final production checks returned `200` for canonical and `308` for both alternate hosts; the deployment had no error or fatal runtime logs.

Non-blocking deferred cleanup:

- Obsolete Laravel/Neon production environment variables remain temporarily to preserve rollback capability. Remove them only when the rollback window is intentionally closed.
