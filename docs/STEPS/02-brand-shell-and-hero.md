# Step 02 — Brand shell and hero

**Status:** Done
**Depends on:** Step 01
**Completed:** 2026-07-29

## Business outcome

A visitor immediately recognises LubartLab, understands the main promise, and can reach the inquiry form.

## Scope

- Header, `L.` identity, anchor navigation, and contact CTA.
- Hero based on the approved desktop and mobile concepts.
- Primary value proposition.
- Supporting line covering websites, e-commerce, and integrations.
- Restrained AI-powered signal.
- First-viewport interaction and motion.

## Acceptance criteria

- The first viewport communicates the offer without scrolling.
- The primary CTA reaches the contact section.
- Copy is Ukrainian and avoids invented proof or technical jargon.
- Navigation is keyboard accessible and works without hover.
- No first-load layout shift is caused by fonts or animation.
- Desktop, mobile, reduced-motion, and no-JavaScript reading order remain coherent.

## Verification

- The header exposes only working destinations; later anchor links remain owned
  by their corresponding implementation steps.
- The temporary contact handoff keeps both CTAs functional without introducing
  the Step 06 form, privacy, or API scope early.
- Under Node.js `24.18.0`, `pnpm check` passed lint, typecheck, 3 unit tests, and
  the production build.
- Under Node.js `24.18.0`, `pnpm test:e2e` passed all 7 Chromium tests.
- Browser-driven QA covered `1440 × 1000`, `390 × 844`, and `320 × 720`,
  keyboard focus, the contact anchor, horizontal overflow, and console output.
- Automated and rendered checks confirmed static readable states for reduced
  motion and JavaScript-disabled browsing.

Step 03 is now the next permitted logical block.
