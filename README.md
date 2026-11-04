# Evolution PE website (Phase 1)

A fast, accessible marketing site for Evolution PE, built with **Next.js (App Router), TypeScript, and Tailwind CSS v4**. It has 12 pages, no database, no accounts, no payments, no analytics, and does not collect student data. Bench Boost stays where it is (https://learn.evolutionpe.com/); this site only links to it.

The proposal (sitemap, design system, wireframe, plan) is in [`docs/PROPOSAL.md`](docs/PROPOSAL.md).

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript check
```
Requires Node 20.9 or newer.

## Where to change things

| To change | Edit |
|---|---|
| Site name, tagline, contact email, notices, founder details | `src/config/site.ts` |
| **Whether a product shows "Coming soon", "Join the beta", or "Open"** | `src/config/products.ts` (`status`) |
| Menu and footer links | `src/config/navigation.ts` |
| Colors, fonts, spacing | `src/app/globals.css` (`@theme` block) |
| Page text | `src/app/<page>/page.tsx` |
| Logo files | `public/brand/` |
| Social-sharing image | `public/og.png` |

### Product status (important)
Each product in `src/config/products.ts` has one `status`:

| status | Badge | Button | Where it goes |
|---|---|---|---|
| `coming-soon` | Coming soon | Get notified | Signup form |
| `beta-waitlist` | Beta: join the waitlist | Join the beta | Signup form |
| `beta-open` | Open beta | Open the beta | The product's `href` |
| `live` | Live | Open *Product* | The product's `href` |

Change one word and every card, page, and button updates. There is no purchase button anywhere in this phase.

## Forms (email signup and contact)
The forms post JSON to a form service of your choice (Formspree, Basin, or similar). **Nothing is sent anywhere until you set the endpoints.** Each signup form is honest about what it can do:

| Setup | What the form does |
|---|---|
| Endpoint set | Posts the signup and shows "Thank you" **only if the service accepted it** |
| No endpoint, `NEXT_PUBLIC_CONTACT_EMAIL` set | The button becomes "Open an email to join" and opens a ready-to-send email. The site saves nothing. |
| Neither | The form says plainly that signups aren't saved yet |

1. Create two forms with your provider (signup and contact) and copy their endpoint URLs.
2. Set the environment variables (see `.env.example`):
   - `NEXT_PUBLIC_SIGNUP_ENDPOINT`
   - `NEXT_PUBLIC_CONTACT_ENDPOINT`
   - `NEXT_PUBLIC_CONTACT_EMAIL` (optional, shown on the Contact page)
   - `NEXT_PUBLIC_SITE_URL` (your real address, for the sitemap and social cards)
3. Redeploy. These values are public by design, so never put secrets in them.

Payload sent by the signup form: `form`, `audience` (`teachers`, `homeschool`, or `general`), `source` (the page), `email`, `role`, `interests[]`, `consent`. The contact form sends: `form`, `topic`, `name`, `email`, `message`. A hidden honeypot field blocks simple spam bots.

## Measuring teacher vs. homeschool interest
The two audiences stay separate end to end, so you can compare them without guessing:

1. **Separate pages and forms.** `/for-pe-teachers` has a teacher beta form; `/for-homeschool-families` has a homeschool waitlist form. Every submission carries an `audience` and a `source` field.
2. **Separate lists (recommended).** Create two forms with your provider and set `NEXT_PUBLIC_SIGNUP_ENDPOINT_TEACHERS` and `NEXT_PUBLIC_SIGNUP_ENDPOINT_HOMESCHOOL`. Each form's dashboard then shows its own count.
3. **Optional button clicks.** Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to load Plausible (a privacy-focused analytics service) and see clicks on the named buttons, for example `teachers-try-analyzer:teachers-hero` and `homeschool-waitlist:home`. It is **off by default**; nothing loads until you set it. Plausible says it does not use cookies, but confirm that for your setup and **update the Privacy Policy before enabling it**.

## Product previews
`src/config/products.ts` has a `preview` for each product. Each shows a real image if `src` is set, or a clearly labeled placeholder if not. Nothing is mocked up.

| Product | Today | To change |
|---|---|---|
| Fitness Test Analyzer | Real screens of the working beta using a **made-up class of fictional students**, labeled "Sample data" | Replace `public/previews/analyzer-*.png` |
| K–5 Curriculum | A **real draft page** (Week 6, grades 3–5), labeled "Draft page" | Replace `public/previews/curriculum-page.png` |
| Bench Boost | **Placeholder**, labeled "Placeholder" | Save a screenshot as `public/previews/bench-boost.png` and set `src: "/previews/bench-boost.png"`, `width`, and `height` in the Bench Boost entry |
| Shuttle Run Scoreboard | Placeholder | Same steps once it is released |

Use real screens only, and keep a label such as "Sample data" on any screen that shows example students.

## Calls to action
| Audience | Button | Where it goes |
|---|---|---|
| PE teachers | Try Fitness Analyzer | The hosted beta if `NEXT_PUBLIC_ANALYZER_URL` is set; otherwise the teacher waitlist (`/for-pe-teachers#beta`), with a note saying so |
| PE teachers | Explore Bench Boost | `/bench-boost` |
| Homeschool families | Get a Free Sample Lesson | The sample if `NEXT_PUBLIC_SAMPLE_LESSON_URL` is set; otherwise the homeschool waitlist (`/for-homeschool-families#waitlist`), with a note saying so |
| Homeschool families | Join the Curriculum Waitlist | `/for-homeschool-families#waitlist` |

The sample lesson is **not published by default**. Pages of the draft curriculum carry a notice that the safety guidance and teaching cues are AI-drafted and need review by a qualified PE educator. Review the lesson you choose, then host it and set `NEXT_PUBLIC_SAMPLE_LESSON_URL`.

## Hosting (free options)
The site is plain static files (the `out` folder after `npm run build`), so it can be hosted almost anywhere. **Your code stays in GitHub either way.** What differs is who serves the pages to visitors.

| Host | Cost | Business use | Notes |
|---|---|---|---|
| **GitHub Pages** | Free | GitHub says Pages isn't meant to run an online business or a site primarily for commercial transactions or commercial SaaS. A marketing site that takes no payments is a gray area. | Same place Bench Boost lives. Plan to move before you sell. |
| **Cloudflare Pages** | Free | Its terms don't restrict commercial use, but don't explicitly permit it either. | Builds from your GitHub repo automatically. |
| **Netlify** | Free tier | Netlify staff have said commercial use is allowed; it isn't written in the terms. | Same build settings as Cloudflare. |
| **Vercel** | **Hobby plan is non-commercial only.** A business site needs Pro (about $20 a month). | Per Vercel's fair-use guidelines | Not free for a business site. |

These terms change. Read each host's current terms before you commit.

### Option A: GitHub Pages (automatic build, nothing to install)
1. Create a GitHub repository (for example `evolution-pe-website`) and upload this project, including the hidden `.github` folder. Do not upload `node_modules` or `.next`.
   *If your computer hides folders that start with a dot, create the file in GitHub instead: **Add file, Create new file**, name it `.github/workflows/deploy-pages.yml`, and paste in the contents of the separate `deploy-pages.yml` file.*
2. **Settings, Pages, Source: GitHub Actions.**
3. Optional: **Settings, Secrets and variables, Actions, Variables**: add your form links and other settings (same names as `.env.example`).
4. Every change to the `main` branch rebuilds and publishes the site (see the **Actions** tab). The first run gives you a `github.io` address.
5. **Custom domain:** Settings, Pages, Custom domain (for example `evolutionpe.com`). GitHub shows the exact DNS records to add where the domain is registered (for example Hover). Add them, then tick "Enforce HTTPS" when it becomes available.

### Preview before the domain is ready (no Hover login needed)
You can publish the site at GitHub's own address first and connect evolutionpe.com later.
1. Create the repository and enable Pages (Option A above).
2. In **Settings, Secrets and variables, Actions, Variables**, add:
   - `NEXT_PUBLIC_BASE_PATH` = `/evolution-pe-website` (use your repository name)
   - `NEXT_PUBLIC_SITE_URL` = `https://YOUR-GITHUB-USERNAME.github.io/evolution-pe-website`
3. Run the workflow (**Actions, Deploy site to GitHub Pages, Run workflow**). The site appears at `https://YOUR-GITHUB-USERNAME.github.io/evolution-pe-website/`.
4. **When evolutionpe.com is connected:** delete the `NEXT_PUBLIC_BASE_PATH` variable, set `NEXT_PUBLIC_SITE_URL` to `https://evolutionpe.com`, add the custom domain in Settings, Pages, and run the workflow again.
The preview address is only for you and testers. Its search-engine tags point at the final domain, so don't promote it.

### Option B: Cloudflare Pages or Netlify
Create a project from your GitHub repository. Build command: `npm run build`. Output folder: `out`. Add the settings from `.env.example` as environment variables. Cloudflare Pages and Netlify both read `public/_headers` for security headers.

### Option C: Upload files by hand
`npm run build` creates the `out` folder. Upload its contents to any static host. Form links and other settings are fixed at build time, so build with them set first.

### DNS and `learn.evolutionpe.com`
Wherever your domain is registered (for example Hover), **do not change or delete the existing `learn` record.** Bench Boost keeps running from it. Only add the new records for the main address (`evolutionpe.com` and `www`) that your chosen host tells you to add.

## What to finish before promoting the site
- [ ] Connect the form service and send yourself a test signup and contact message. (Form links are baked in when the site is built, so rebuild after you set them.)
- [ ] Replace the **Privacy Policy** and **Terms** placeholders after legal review. The footer and forms already link to them.
- [ ] Decide on the product names. The site uses **Fitness Test Analyzer** (the name on the working beta) and **15-Meter Shuttle Run Scoreboard**, not "Fitness Zone" or "PACER", because "Healthy Fitness Zone" and "FITNESSGRAM" are registered trademarks of The Cooper Institute and "PACER" may be one too (not verified). To use other names, edit `src/config/products.ts`.
- [ ] Add the founder name, photo, and short bio if you want them shown (`src/config/site.ts`, photo in `public/brand/`).
- [ ] Confirm the facts on the Bench Boost and curriculum pages are still accurate when you publish (grade bands, mode names, "36 weeks, 72 games").
- [ ] Check `NEXT_PUBLIC_SITE_URL` is your real address.

## Content guardrails
The site is written to avoid: customer testimonials, certifications or awards, claims of official FitnessGram / Cooper Institute / SHAPE America / Presidential-council endorsement, claims that tools passed testing that hasn't happened, purchase buttons for unfinished products, payment processing, and student-data collection. Keep it that way as you edit. Anything "official" should be backed by written permission.

## What changed in this revision (Oct 14, 2026)
- **Mobile:** headlines, body text, and vertical spacing are about 15 to 20% smaller on phones. Desktop sizes are unchanged.
- **Product previews** added to the home page, the audience pages, and the product pages (real where we have them, labeled placeholders where we don't).
- **Audience calls to action** strengthened (see the table above).
- **Hero:** the "doesn't collect student data or take payments" line moved out of the hero. The same information is in a "Privacy at a glance" block near the bottom of the home and audience pages, in the footer, and on the Privacy page.
- **PE Teachers page** rebuilt around fitness-data analysis, less administrative work, and interactive learning.
- **Two separate audience paths and forms**, with separate lists and optional click measurement.
- **Forms** no longer imply a submission was saved when no service is connected.
- **Checks:** every one of the 303 links and buttons resolves, and the page has no accessibility violations in axe.

## Testing done (Oct 14, 2026)
- `npm run build`: passes and exports 124 static files (about 5 MB), including sitemap, robots, a 404 page, and a `.nojekyll` file for GitHub Pages.
- The exported files were served from a plain static server and tested there: all 12 pages return 200, images load, there are no accessibility violations, 303 of 303 links resolve, and there is no horizontal overflow on a phone.
- Real Chromium: all pages return 200, the missing-page route returns 404, no console errors, one `<h1>` per page, and no horizontal overflow at phone width.
- axe-core accessibility scan (WCAG 2.0/2.1 A and AA plus best practices): no violations on any page.
- Forms: validation, consent gating, spam trap, topic prefill, and the exact payloads were checked against mock endpoints for all three signup forms (general, teachers, homeschool). The no-endpoint, email-only, and connected modes were each checked.
- Link audit: 303 links and buttons across 12 pages, internal anchors and external `rel` attributes, no problems found.
- Phone layout (390 px) and the mobile menu were reviewed in screenshots.

**Not done:** deployment to any host (including the GitHub Actions workflow, which can only run on GitHub), Safari/Firefox and real-device testing, a screen-reader pass, Lighthouse scores, and any legal review.

## Project layout
```
src/app/            pages (one folder per route), layout, sitemap, robots, 404
src/components/     layout/ (header, footer, nav) · ui/ (buttons, cards, badges) · sections/ · forms/
src/config/         site.ts · products.ts · navigation.ts
src/lib/            helpers (form submit, metadata)
public/brand/       logo files; public/og.png social card
docs/PROPOSAL.md    sitemap, design system, wireframe, plan
```

## Credits
Fonts: Inter and Manrope via Fontsource (SIL Open Font License), self-hosted.
