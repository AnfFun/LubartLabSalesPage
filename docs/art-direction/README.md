# Step 01 art-direction package

**Concept:** Жива бізнес-система

**Review status:** Approved 2026-07-29

**Production copy status:** Draft for composition only

This package is the visual gate for Steps 02–07. It does not add a public route
or change the production holding page.

## Files

- `artboards.html` and `artboards.css` are the editable source.
- `render-artboards.mjs` reproduces the five PNG exports from the editable source.
- `exports/direction-board.png` defines the visual system.
- `exports/desktop-hero.png` defines the first desktop viewport.
- `exports/desktop-sections.png` defines services, process, selected work, and contact.
- `exports/mobile-page.png` defines the full mobile composition.
- `exports/motion-storyboard.png` defines motion, cursor, and reduced-motion behaviour.
- `references.md` records external principles without copying third-party assets.
- `concept-ledger.md` maps the concept to later implementation steps.
- `fidelity-ledger.md` records the rendered comparison and QA evidence.

## Regenerate the PNG exports

From the repository root, serve the editable source and run the exporter:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
node docs/art-direction/render-artboards.mjs
```

Stop the temporary static server after the exports are written.

## Approved direction

- Preserve the `L.` mark, Fixel Text, Fixel Display SemiBold, and the accepted
  orange, graphite, paper, and white palette.
- Use a light-dominant hard grid with a continuous orange signal.
- Lead with large Ukrainian typography rather than a dashboard or illustration.
- Keep three offer directions equally weighted.
- Use the process as the single dark sticky-scroll episode on desktop.
- Keep selected work honest with two neutral “Кейс готується” windows.
- End with a human invitation and a grid-integrated contact form.
- Treat motion as expressive on entry and calm at rest.
- Replace the desktop cursor with context-aware custom states.
- Redesign mobile as a vertical sequence without sticky, hover, or cursor dependency.

## Approval record

The user explicitly accepted the complete desktop, mobile, and motion package
on 2026-07-29. As a result:

- Step 01 was marked complete after `pnpm check` and `pnpm test:e2e` passed
  under Node.js 24;
- the temporary motion prototype has been removed;
- later work may begin only as the separately scoped Step 02–07 block;
- supporting copy remains a layout draft rather than approved production copy.
