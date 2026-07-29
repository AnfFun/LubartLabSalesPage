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
| D-045 | Every commit pushed to `main`, including documentation-only changes, runs the full production workflow and deploys. Manual triggers, path filters, conditional bypasses, and skip markers are not used. | Accepted |
| D-046 | Step 01 art direction “Жива бізнес-система” is explicitly approved; `docs/art-direction/` is the visual source of truth for Steps 02–07. | Accepted |
| D-047 | The approved system is light-dominant, typographic-first, and built on a hard 12-column desktop / 4-column mobile grid with one continuous orange signal. Meaningful light-surface text remains graphite; orange is decorative or paired with graphite for accessible contrast. | Accepted |
| D-048 | Services use three equally weighted open modules connected by the signal; there are no cards, carousel, service hierarchy, or sticky service sequence. | Accepted |
| D-049 | The process is the only dark sticky-scroll episode on desktop. Mobile and reduced-motion render the same four human-owned stages in ordinary flow. | Accepted |
| D-050 | Selected work contains exactly two oversized neutral “Кейс готується” slots until real material is approved. | Accepted |
| D-051 | Contact uses a human invitation, visible public email, and the already constrained form integrated into the page grid. | Accepted |
| D-052 | Motion is expressive but event-driven, with only a subtle hero signal ambient at rest. Fine-pointer desktop fully replaces the native cursor with contextual states; mobile has no cursor dependency. Reduced motion removes masks, scale, sticky, ambient, inertia, and scroll-linked movement while retaining short fades. | Accepted |
| D-053 | All supporting copy in Step 01 artboards is provisional composition text and does not approve production copy. | Accepted |
| D-054 | Step 01 uses original editable HTML/CSS artboards and generated PNG exports. External references are stored only as attributed principle links, and raw Image Gen explorations are not committed. | Accepted |
| D-055 | Step 02 production copy uses “Створюємо вебрішення, на яких працює бізнес.”, the supporting line “Бізнес-сайти, e-commerce та інтеграції для зрозумілої комунікації, продажів і автоматизації процесів.”, the AI signal “AI — робочий інструмент. Рішення та відповідальність — за людьми.”, and the CTA “Обговорити проєкт”. | Accepted |
| D-056 | Navigation is progressive while the landing is built block by block: Step 02 exposes only real destinations, so the header contains the brand and working `#contact` CTA, including a direct mobile CTA. The temporary contact handoff contains “Хороші ідеї починаються з діалогу.” and the public email; Step 06 replaces it with the production form. | Accepted |
| D-057 | Step 02 motion is limited to a layout-stable hero line reveal, signal drawing, and one calm ambient pulse. Reduced-motion and no-JavaScript modes are static and fully readable; shared reveal primitives, scroll-linked choreography, and the custom cursor remain Step 07 scope. | Accepted |
| D-058 | Step 03 uses the heading “Сайт, магазин або вебсистема.” and need-to-solution copy for exactly three directions. Public service diagrams omit CRM, ERP, platform logos, client data, and metrics. | Accepted |
| D-059 | Service directions are static semantic articles without individual CTA. Desktop navigation adds “Послуги” to `#services`; mobile keeps the direct “Обговорити проєкт” action. Entry animation and cross-section choreography remain Step 07 scope. | Accepted |

## Open constraints

- **O-003 — legacy environment:** old Laravel/Neon production variables remain on the reused Vercel project until the rollback window is intentionally closed.

## Change protocol

When a decision changes:

1. add a new row that supersedes the old decision;
2. mark the old row `Superseded`;
3. link the change from the relevant step;
4. do not silently rewrite historical intent.
