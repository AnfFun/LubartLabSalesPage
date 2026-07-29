# Step 08 — SEO, analytics, and quality

**Status:** Not started
**Depends on:** Steps 02–07

## Business outcome

The finished landing is discoverable, measurable without invasive tracking, and demonstrably production-ready.

## Scope

- Replace temporary `noindex` with production indexing rules.
- Ukrainian title, description, canonical, robots, and sitemap.
- Branded Open Graph image.
- Keep `/privacy` as `noindex`.
- Verify Web Analytics and Speed Insights.
- Confirm that analytics receives no PII or custom events.
- Complete unit and E2E coverage for critical public flows.
- Performance and accessibility optimisation.

## Acceptance criteria

- Canonical is `https://lubartlab.com.ua`.
- Search engines may index the homepage but not `/privacy`.
- OG preview is branded and readable.
- No Google Analytics, Meta Pixel, third-party tracker, or custom analytics event is present.
- Green Core Web Vitals target is met in production.
- Lighthouse targets are at least 90 for Performance, Accessibility, and SEO.
- `pnpm check` and Playwright pass.

## Verification

- Inspect rendered metadata, `/robots.txt`, and `/sitemap.xml`.
- Validate social preview dimensions and text.
- Run desktop/mobile Browser QA and production Lighthouse checks.
