# Step 01 — Art direction

**Status:** Done
**Depends on:** Step 00
**Approved:** 2026-07-29

## Business outcome

The visual language is approved before implementation time is spent on a direction that does not feel premium or recognisably LubartLab.

## Scope

- Create an art-direction board using the accepted identity, typography, grid, diagram, and motion references.
- Generate hero concepts for desktop and mobile.
- Generate section-level concepts for offer, process, selected work, and contact.
- Define the intended sticky-scroll episode.
- Define motion principles, cursor behaviour, and reduced-motion alternatives.
- Record approved and rejected directions.

## Acceptance criteria

- The user explicitly approves one art direction.
- Desktop and mobile hero concepts are approved.
- Every homepage section has an approved visual intent.
- Fixel Text and Fixel Display SemiBold hierarchy is visible.
- Concepts use no stock people, AI people, decorative 3D, or generic template composition.
- Mobile is a designed variant rather than a scaled desktop screenshot.
- The approved direction can be implemented with Motion, CSS, and native scroll.

## Verification

- The complete desktop, mobile, and motion package in
  [`docs/art-direction/`](../art-direction/README.md) was explicitly approved
  by the user on 2026-07-29.
- The concept-to-implementation ledger records the approved intent and later
  owner for every homepage surface.
- Browser-first QA covered the editable boards, Fixel loading, palette,
  composition, and exact export geometry.
- Local Chrome/Playwright fallback covered the Motion entry, bounded sticky
  process, contextual cursor, text selection, keyboard focus, `390px` mobile
  flow, overflow, and system/manual reduced motion.
- The temporary React/Motion review route was removed before delivery.
- Under Node.js `24.14.0`, `pnpm check` passed lint, typecheck, 2 unit tests, and
  the production build.
- Under Node.js `24.14.0`, `pnpm test:e2e` passed all 3 Chromium tests.
- The production holding page and public route set are unchanged.

Step 02 is now the next permitted logical block; it has not been started by
this step.
