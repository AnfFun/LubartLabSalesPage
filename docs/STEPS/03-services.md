# Step 03 — Services

**Status:** Done
**Depends on:** Step 02

## Business outcome

A visitor can quickly map a business need to one of the three LubartLab offer directions.

## Scope

- Business websites.
- E-commerce.
- Web solutions and integrations.
- Visual system diagrams or UI fragments that distinguish the directions.
- Clear examples of outcomes without promising unsupported metrics.

## Acceptance criteria

- Exactly three primary offer directions are presented.
- Each direction explains the business problem and likely solution in human language.
- CRM appears, if at all, only as a minor integration example.
- Cards or panels do not resemble a generic SaaS component grid.
- Information remains understandable with motion disabled.

## Verification

- Semantic heading structure.
- Keyboard and touch interaction checks.
- Desktop/mobile visual QA and overflow inspection.

## Completion record

- Completed on 2026-07-30.
- Production copy follows the approved need-to-solution structure in D-058.
- The three static semantic articles have no individual CTA or client-side
  JavaScript.
- Desktop uses the approved open three-module composition and continuous signal.
  Mobile uses a simpler vertical list without service diagrams.
- Public diagrams use neutral site, commerce, and API system fragments. CRM, ERP,
  platform logos, client data, and metrics are not shown.
- `pnpm check` and all 11 Chromium E2E tests passed.
- Browser QA passed at `1440 × 1200` and `390 × 844`; automated overflow checks
  cover `320`, `390`, `641`, `1024`, and `1440` pixel widths.

## Intentional deviations from the composition draft

- The provisional headline and descriptions were replaced with the approved
  production copy.
- The integration diagram no longer names CRM or ERP.
- The desktop section is taller than the draft so the approved three-line
  heading and fuller service descriptions remain readable.
