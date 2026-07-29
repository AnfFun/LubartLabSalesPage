# LubartLab Sales Page

## Scope

- This repository contains the Ukrainian-only LubartLab production landing page.
- Implement one logical block from `docs/STEPS/` at a time.
- Do not begin visual feature work before the art direction in Step 01 is approved.
- Keep `AGENTS.md` concise; use `docs/PROJECT.md` and `docs/DECISIONS.md` as the detailed source of truth.

## Product guardrails

- Present LubartLab as an active AI-powered web studio that builds business websites, e-commerce, and integrated web solutions.
- AI supports research, iteration, automation, and quality checks; people retain decisions and responsibility.
- Do not invent clients, metrics, testimonials, team seniority, or case-study results.
- Selected work remains explicitly marked as “Кейс готується” until real material is approved.
- Public copy and interface text are Ukrainian only.

## Design guardrails

- Preserve the `L.` mark and the orange, graphite, and light palette.
- Use Fixel Text for body/UI and Fixel Display SemiBold for headings.
- Use Motion for React for orchestration and CSS for simple effects.
- Do not add GSAP, Lenis, Three.js/WebGL, stock people photography, or a component library.
- Mobile choreography must be intentionally simplified; support `prefers-reduced-motion`.
- Style matters, but never at the cost of keyboard access, layout stability, input responsiveness, or readable contrast.

## Engineering

- Stack: Next.js App Router, TypeScript, Tailwind CSS, CSS custom properties, pnpm, Node.js 24.
- Prefer Server Components. Add client boundaries only for interaction or animation.
- Keep secrets out of Git. Update `.env.example` with names only.
- Validate external input on the server and never log form field values.
- Before marking a step complete, run `pnpm check` and its relevant browser or E2E flow.
- Use Browser-driven QA for rendered work at desktop and mobile sizes; do not commit temporary screenshots or traces.

## Delivery

- Vercel automatic Git deployments are disabled.
- Every commit pushed to `main`, including documentation-only changes, runs the full GitHub Actions workflow and deploys to production.
- The production workflow is triggered only by pushes to `main`; do not add manual triggers, path filters, conditional bypasses, or `[skip ci]`-style commit markers.
- Do not introduce preview deployments.
- Canonical host is `https://lubartlab.com.ua`; `www` and `lubart-lub.vercel.app` permanently redirect to it.
- PRs target `main`.
- When the user provides a ticket ID, use that exact ID in the branch and commit title.
- When no ticket ID is provided, use the relevant step number: branch `codex/block-<NN>-<slug>` and commit title `<NN> - <functional description>`.

## Step completion

1. Confirm the step’s dependencies and acceptance criteria.
2. Implement only that step’s scope.
3. Run automated checks and rendered QA.
4. Record meaningful decision changes in `docs/DECISIONS.md`.
5. Update the status in `docs/STEPS/README.md` only when no blocking defect remains.
