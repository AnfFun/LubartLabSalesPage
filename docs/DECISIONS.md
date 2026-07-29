# Decision register

Accepted decisions are the source of truth until explicitly superseded.

| ID | Decision | Status |
| --- | --- | --- |
| D-001 | LubartLab is presented as an active studio that accepts work. | Accepted |
| D-002 | This deployment is a noncommercial, production-like learning and portfolio project; commercial acquisition use triggers a plan/compliance review. | Accepted |
| D-003 | The site is Ukrainian-only at `/`; there are no locale routes or language switcher. | Accepted |
| D-004 | The primary audience is Ukrainian SMBs needing integrated web solutions. | Accepted |
| D-005 | The offer has three directions: business websites, e-commerce, and web solutions/integrations. | Accepted |
| D-006 | CRM is not a positioning focus; branding, ads, SEO promotion, mobile apps, and CRM implementation are outside the core v1 offer. | Accepted |
| D-007 | The main copy direction is “Створюємо вебрішення, на яких працює бізнес.” | Accepted |
| D-008 | LubartLab may be called AI-powered, but AI is a working method rather than a separate product; people retain responsibility. | Accepted |
| D-009 | v1 is short: header, hero, offer, process, selected work, contact, and footer. | Accepted |
| D-010 | Selected work uses honest “Кейс готується” placeholders with no invented clients, metrics, or testimonials. | Accepted |
| D-011 | The `L.` mark, orange/graphite/light palette, Fixel Text, and Fixel Display SemiBold remain the identity foundation. | Accepted |
| D-012 | Visual delight is a primary quality bar: kinetic typography, system graphics, a strong sticky episode, masks, transitions, and refined interactions. | Accepted |
| D-013 | v1 uses no people photography, AI-generated team imagery, decorative 3D, or WebGL. | Accepted |
| D-014 | Mobile receives a simplified custom choreography with no hover/cursor dependency or scroll hijacking. | Accepted |
| D-015 | Motion for React is the only JavaScript animation library; CSS handles simple effects. | Accepted |
| D-016 | A global reduced-motion mode is mandatory. | Accepted |
| D-017 | The stack is Next.js App Router, TypeScript, Tailwind CSS, CSS custom properties, and `next/font/local`. | Accepted |
| D-018 | There is no ready-made UI component library. | Accepted |
| D-019 | The visual build starts only after art direction and desktop/mobile hero concepts are approved. | Accepted |
| D-020 | The CTA is a working production contact form. | Accepted |
| D-021 | The form contains only name, email, task type, and required privacy consent. | Accepted |
| D-022 | Form notifications use Resend; there is no lead database or CRM. | Accepted |
| D-023 | There is no automatic response email; the visitor receives an animated on-page success state. | Accepted |
| D-024 | Public and destination email is `lubartlab@gmail.com`. | Accepted |
| D-025 | Resend uses verified subdomain `send.lubartlab.com.ua` and sender `forms@send.lubartlab.com.ua`; visitor email is `Reply-To`. | Accepted |
| D-026 | Form protection uses server validation, origin check, honeypot, BotID Basic, and one Vercel WAF rate-limit rule. | Accepted |
| D-027 | The initial WAF rule is observed in log mode before enforcing 5 submissions per 10 minutes per IP with `429`. | Accepted |
| D-028 | No form field values are written to logs. | Accepted |
| D-029 | `/privacy` identifies ФОП Прокоф'єв Максим Олександрович as data controller and does not publish tax number or physical address in v1. | Accepted |
| D-030 | Inactive inquiries are deleted within six months; there is no marketing reuse. | Accepted |
| D-031 | Homepage SEO includes Ukrainian metadata, canonical, robots, sitemap, and branded OG; `/privacy` is `noindex`. | Accepted |
| D-032 | The temporary foundation holding page is `noindex`; D-031 is activated at final content release. | Accepted |
| D-033 | Vercel Web Analytics and Speed Insights are enabled without third-party trackers, custom events, or PII. | Superseded by D-043 |
| D-034 | Quality target is green Core Web Vitals and Lighthouse scores of at least 90 for Performance, Accessibility, and SEO. | Accepted |
| D-035 | Tests use Vitest, Playwright CI E2E, Browser-driven desktop/mobile QA, and a post-deploy smoke check. | Accepted |
| D-036 | Pixel-perfect screenshot gates are not used in CI because motion would make them unstable. | Accepted |
| D-037 | Existing Vercel project `lubart-lab-landing` is reused to preserve domain aliases and Speed Insights history. | Accepted |
| D-038 | No preview deployments are created. | Accepted |
| D-039 | Vercel Git auto-deployments are disabled; GitHub Actions deploys only `main` to production. | Accepted |
| D-040 | Canonical host is `https://lubartlab.com.ua`; `www` and `lubart-lub.vercel.app` redirect with `308`. | Accepted |
| D-041 | Detailed project documentation is committed under `docs/`; implementation proceeds one logical step at a time. | Accepted |
| D-042 | If no ticket ID is provided, Git delivery uses the relevant step number: `codex/block-<NN>-<slug>` and `<NN> - <functional description>`. | Accepted |
| D-043 | Vercel Web Analytics is enabled for LubartLab. The Speed Insights integration remains present but collection stays disabled because the Hobby slot remains assigned to `freelance-docs-generator`. | Accepted |
| D-044 | GitHub Actions uses a dedicated Vercel token scoped to `anffun's projects`, stored only as `VERCEL_TOKEN`, with rotation due by 2027-07-29. | Accepted |

## Open constraints

- **O-003 — legacy environment:** old Laravel/Neon production variables remain on the reused Vercel project until the rollback window is intentionally closed.

## Change protocol

When a decision changes:

1. add a new row that supersedes the old decision;
2. mark the old row `Superseded`;
3. link the change from the relevant step;
4. do not silently rewrite historical intent.
