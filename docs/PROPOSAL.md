# Evolution PE website: proposal (written before the build)

## 1. Goals
1. Build a trustworthy, recognizable Evolution PE brand.
2. Turn visitors into beta testers and email subscribers.
3. Prepare for selling curriculum, downloads, memberships, and school licenses later.
4. Stay easy to navigate and maintain.

Two audiences, two paths: **school PE teachers** and **homeschool families and co-ops**.

## 2. Sitemap
```
Home
├─ For PE Teachers
├─ For Homeschool Families
├─ Products
│   ├─ Bench Boost            (links out to learn.evolutionpe.com)
│   ├─ K–5 Curriculum         (Coming soon)
│   └─ Fitness Tools          (Analyzer: Beta waitlist · Shuttle Run Scoreboard: Coming soon)
├─ Free Resources             (email signup)
├─ Pricing                    (no prices yet; planned options; no checkout)
├─ About
├─ Contact                    (topic-based form)
├─ Privacy Policy             (placeholder pending legal review)
└─ Terms of Use               (placeholder pending legal review)
```
Utility: sitemap.xml, robots.txt, branded 404.

## 3. Design system
**Feel:** premium education technology. Calm, clear, generous spacing. No stock fitness photography, no heavy gradients, nothing childish.

| Token | Value | Use |
|---|---|---|
| Navy 900 | `#1B2A4B` | Headings, primary buttons, footer (from the curriculum materials) |
| Teal 700 / 600 | `#0E7078` / `#128B93` | Links, secondary buttons, accents (700 for text on white to meet contrast) |
| Light blue (sky) 50–200 | `#F4FAFC` to `#D2E8F1` | Section backgrounds, soft borders |
| White | `#FFFFFF` | Cards and base |
| Ink 600 / 700 | `#4B5D75` / `#34465F` | Body text (navy-tinted neutrals) |

The default Tailwind palette is **removed** so only brand colors can be used.

- **Type:** Manrope (headings) and Inter (body), self-hosted, so no calls to Google Fonts.
- **Layout:** 1280 px max width, 8-px rhythm, large section padding, rounded 20-px cards with a soft navy-tinted shadow.
- **Motion:** subtle scroll reveal and hover lift using CSS only. Disabled for visitors who prefer reduced motion and for print.
- **Accessibility:** skip link, landmarks, visible focus rings, keyboard-friendly menu, labeled forms, contrast checked with axe.
- **Status language:** every product shows one honest badge (Open beta, Beta waitlist, Coming soon, Live) from a single config file. Buttons follow the badge, so an unfinished product can never show a "Buy" button.

## 4. Homepage wireframe
```
┌──────────────────────────────────────────────────────────────┐
│ [shield] EVOLUTION PE   For Teachers  For Homeschool  Products▾ … [Get free resources] │
├──────────────────────────────────────────────────────────────┤
│  HERO                                          ┌───────────┐ │
│  chip: Created by an elementary PE teacher     │Bench Boost│ │
│  Better PE.                                    │Curriculum │ │
│  Less Prep.                                    │Analyzer   │ │
│  More Movement.   (product stack, honest badges)└──────────┘ │
│  subheadline                                                 │
│  [For PE Teachers →] [For Homeschool Families →]             │
├──────────────────────────────────────────────────────────────┤
│  CHOOSE YOUR PATH        ┌ For PE Teachers ┐ ┌ For Homeschool ┐ │
│                          │ bullets + chips │ │ bullets + chips│ │
├──────────────────────────────────────────────────────────────┤
│  THREE TOOLS THAT WORK TOGETHER (light-blue band)            │
│  [Bench Boost] [K–5 Curriculum] [Fitness Test Analyzer]      │
│  [slim row: Shuttle Run Scoreboard · Coming soon]            │
├──────────────────────────────────────────────────────────────┤
│  TEACH → PRACTICE → ASSESS (three steps)                     │
├──────────────────────────────────────────────────────────────┤
│  FREE RESOURCES SIGNUP: benefits (left) · form (right)       │
├──────────────────────────────────────────────────────────────┤
│  FOUNDER: emblem · "Created by an elementary PE and health teacher" · 4 commitments │
├──────────────────────────────────────────────────────────────┤
│  CTA BAND (navy): Try Bench Boost · Join the list            │
├──────────────────────────────────────────────────────────────┤
│  FOOTER: nav columns · independence and trademark notices    │
└──────────────────────────────────────────────────────────────┘
```

## 5. Content guardrails (built in)
- No testimonials, certifications, awards, or "official" claims.
- No claim of FitnessGram, Cooper Institute, SHAPE America, or Presidential-council endorsement. The footer and tool pages carry an independence notice and the trademark notice.
- Unfinished products say "Coming soon" or "Join the beta". No purchase buttons exist.
- No payments, accounts, or student data. Forms ask adults for an email and a message only, and tell people not to enter student information.
- No analytics or tracking scripts.

## 6. Implementation plan
**Phase 1 (this build).** Next.js (App Router) + TypeScript + Tailwind v4. Static pages. Config-driven product status. Signup and contact forms that post to a form service you choose (nothing is sent until you connect one). SEO basics, sitemap, social card, favicon. README with GitHub and Vercel steps.

**Launch checklist (you).** Connect a form service and set the environment variables; replace the privacy and terms placeholders after legal review; add the founder name, photo, and bio if you want them shown; confirm product names; deploy and point the domain without touching `learn.evolutionpe.com`.

**Phase 2 (validate demand).** Add privacy-friendly analytics (after the privacy policy is reviewed), a short interest survey, and sample curriculum week and free downloads. Move the Fitness Test Analyzer into the site when its licensing questions are resolved.

**Phase 3 (revenue).** Checkout for digital downloads (for example Stripe), then memberships and school licenses (accounts, invoicing, and a student-data privacy review before any student-facing features connect).
