# Implementation steps

Each step is an independently reviewable business block. A step becomes `Done` only when its acceptance criteria, automated checks, and relevant rendered QA pass with no blocking defect.

## Status legend

- `Not started` — no implementation work has begun.
- `In progress` — active work exists but the Definition of Done is not met.
- `Blocked` — a named dependency prevents meaningful progress.
- `Done` — scope and verification are complete.

## Sequence

| Step | Business outcome | Status |
| --- | --- | --- |
| [00](00-foundation.md) | Reproducible project, documentation, and production delivery foundation | Done |
| [01](01-art-direction.md) | Approved visual language before feature code | Done |
| [02](02-brand-shell-and-hero.md) | Clear first impression and primary studio promise | Done |
| [03](03-services.md) | Visitors understand the three things LubartLab builds | Not started |
| [04](04-ai-powered-process.md) | Visitors understand the fast, controlled, human-owned process | Not started |
| [05](05-selected-work.md) | Honest proof-section structure ready for future cases | Not started |
| [06](06-contact-and-privacy.md) | Visitors can send a protected, compliant inquiry | Not started |
| [07](07-motion-responsive-accessibility.md) | Premium choreography works across input and motion preferences | Not started |
| [08](08-seo-analytics-quality.md) | The finished site is discoverable, measurable, fast, and testable | Not started |
| [09](09-production-release.md) | Canonical production release is safely promoted and verified | Not started |

## Global Definition of Done

Every implementation step must:

1. remain inside its documented scope;
2. preserve accepted decisions in `docs/DECISIONS.md`;
3. include or update relevant automated tests;
4. pass `pnpm lint`, `pnpm typecheck`, and `pnpm test`;
5. pass `pnpm build`;
6. receive Browser QA when rendered output changes;
7. verify desktop, mobile, keyboard, and reduced-motion behavior when relevant;
8. update this tracker only after evidence is available.

## Current boundary

Steps 00–02 are complete. Step 03 is the next permitted logical block. The
Step 02 brand shell and hero replace the neutral holding page while the
homepage remains `noindex` until the final content release.
