# Art-direction reference ledger

External references are used for principles only. No screenshots, brand assets,
layouts, or component code are copied into the LubartLab concept.

| Reference | Principle used | Explicit non-use |
| --- | --- | --- |
| [Carbon 2x Grid](https://carbondesignsystem.com/elements/2x-grid/overview/) | A repeatable geometric grid can coordinate typography, columns, diagrams, and spacing. | No Carbon components, typography, or IBM styling. |
| [Motion for React scroll animation](https://motion.dev/docs/react-scroll-animations) | Native scrolling can drive a bounded sticky sequence and signal progress. | No scroll hijacking, generic parallax, or copied examples. |
| [Motion `useReducedMotion`](https://motion.dev/docs/react-use-reduced-motion) | Motion behaviour should branch from the user’s system preference. | No single global “duration: 0” shortcut that breaks state communication. |
| [MDN `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion) | Scaling and large panning are replaced by short opacity transitions. | No motion-dependent content or interaction. |
| [W3C Technique C39](https://www.w3.org/WAI/WCAG21/Techniques/css/C39.html) | Interaction-triggered motion must respect the reduced-motion preference. | No unavoidable motion triggered by hover, focus, or form interaction. |

## Internal sources of truth

- `docs/PROJECT.md` defines the audience, offer, page structure, identity, and quality bar.
- `docs/DECISIONS.md` defines accepted business, motion, accessibility, and delivery constraints.
- `docs/STEPS/01-art-direction.md` defines this package’s acceptance criteria.
