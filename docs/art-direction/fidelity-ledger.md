# Artboard-to-browser fidelity ledger

**Review state:** Verified and explicitly approved 2026-07-29.

The editable artboards and the temporary React/Motion stand were checked as one
system. The stand intentionally covers only the hero, continuous signal,
sticky process, contextual cursor, and reduced-motion branch.

## Render comparison

| Surface | Artboard intent | Browser result |
| --- | --- | --- |
| Desktop hero | 12-column light field, typographic lead, graphite copy, orange signal and underline. | Fixel Display/Text loaded; `1440px` layout has no horizontal overflow; signal clears readable copy. |
| Desktop process | One bounded dark sticky episode with four event-driven stages. | Sticky container remains at the viewport top; stages resolve in order at 0%, 36%, 70%, and 99% scroll progress. |
| Desktop cursor | Default, action, text, and dark-surface states without blocking interaction. | Cursor is centered on the pointer, uses `pointer-events: none`, expands for actions, becomes a custom I-beam for text/inputs, and preserves text selection. |
| Mobile | `390px` vertical choreography without desktop-only dependencies. | `390 × 844` viewport has no horizontal overflow; process uses ordinary flow; all stages remain visible; coarse pointers hide the custom cursor. |
| Reduced motion | Short opacity transitions; no masks, scale, sticky, ambient loop, or scroll-linked movement. | System and manual reduced modes use relative process layout, remove the ambient node, keep static transforms, and move the cursor without inertia. |

## Typography and geometry

- `Fixel Display` 600 and `Fixel Text` 400 are loaded from the repository fonts.
- Export dimensions are exact: direction `1440 × 1100`, hero `1440 × 1000`,
  sections `1440 × 4400`, mobile `390 × 3705`, motion `1440 × 2381`.
- Every canvas has no internal overflow; the exporter captures its complete
  border box, including the final one-pixel edge on the mobile and motion boards.

## Contrast rule

- Graphite on white: `19.90:1`.
- Graphite on paper: `18.25:1`.
- Graphite on orange and orange on graphite: `7.10:1`.
- Orange on white (`2.80:1`) and paper (`2.57:1`) is therefore restricted to
  decorative signals, underlines, indices with adjacent labels, and outlined
  cursor cores. Meaningful light-surface text remains graphite.

## QA route

The in-app Browser was used first for composition and DOM inspection. Its
isolated renderer does not expose `requestAnimationFrame`, so motion behaviour
was verified in local Chrome through Playwright as the agreed fallback. No
screenshots, traces, or generated exploration images are stored as QA evidence.

The temporary `/art-direction-preview` route was removed after approval and is
not part of the Step 01 commit.

Final repository verification ran under Node.js `24.14.0`: `pnpm check`
completed lint, typecheck, 2 unit tests, and the production build; `pnpm
test:e2e` passed all 3 Chromium tests.
