# Build On

**Homes. Infrastructure. Action.**

Build On is a UK campaign platform that helps people support well-designed housing and infrastructure through evidence-based engagement with the planning system.

## What this is

- **Planning map** — undecided larger housing schemes aggregated via [UK PlanIt](https://www.planit.org.uk/) (filtered; HMO / change-of-use-to-HMO excluded), with links to comment on the council portal
- **Planning portals directory** — searchable links to local authority public-access sites
- **Support toolkit** — writing guide, speaking guide, and letter generator
- **Evidence hub** — housing need, affordability, delivery stats, and myth-busting
- **Local groups** — directory in progress; register interest via the Join page

## Tech

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Leaflet + OpenStreetMap for maps
- PlanIt API (proxied at `/api/planning`, cached to respect ~1 request/minute)
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

```bash
npm run build          # production build
npm run check-portals  # health-check LPA portal URLs in data/planning-portals.ts
```

## Deployment (Vercel)

The live site is intended to deploy from the `main` branch of this repository.

### First-time setup

1. Push the repo to GitHub (`stumpyuk1/build-on` or your fork).
2. In [Vercel](https://vercel.com), **Add New Project** → import the GitHub repo.
3. Framework preset: **Next.js** (auto-detected). Build command `next build`, output as default.
4. Environment variables (see table below).
5. Deploy. Vercel will build on every push to the production branch.

### Environment variables

| Name | Required | Purpose |
|------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site origin, **no trailing slash** (e.g. `https://your-domain.com`). Used by `sitemap.xml`, `robots.txt`, and Open Graph. Defaults to `https://build-on.vercel.app` if unset. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console **HTML tag** verification token (content value only — not the full meta tag). |

### Ongoing deploys

- **Automatic:** merge or push to `main` → Vercel builds and promotes production.
- **Manual:** Vercel dashboard → project → **Deployments** → **Redeploy** (use after env var changes, or if a deploy failed to pick up a commit).
- Preview deployments are created for non-production branches/PRs if enabled.

### After deploy, check

- Site loads; `/map` returns PlanIt-backed pins (or a clear amber fallback)
- `/api/planning` returns JSON (respect rate limits — responses are cached ~5 minutes)
- `/sitemap.xml` and `/robots.txt` are reachable and use the correct host if `NEXT_PUBLIC_SITE_URL` is set
- Footer credits planit.org.uk

### SEO files

| URL | Source |
|-----|--------|
| `/sitemap.xml` | `app/sitemap.ts` |
| `/robots.txt` | `app/robots.ts` (allows `/`, disallows `/api/`, points at the sitemap) |

## Google Search Console

Verification is done with a **meta tag** injected from an environment variable (no HTML file in the repo).

1. Open [Google Search Console](https://search.google.com/search-console) → **Add property** → **URL prefix** → enter your live site URL (must match `NEXT_PUBLIC_SITE_URL`, including `https://`).
2. Choose verification method **HTML tag**.
3. Google shows something like:
   ```html
   <meta name="google-site-verification" content="TOKEN_HERE" />
   ```
   Copy **only** the `content` value (`TOKEN_HERE`).
4. In Vercel → Project → **Settings** → **Environment Variables**, add:
   - Name: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - Value: the token
   - Environments: Production (and Preview if you want to test there)
5. **Redeploy** production so the meta tag is baked into the HTML.
6. Confirm the tag is present: view page source on the homepage and search for `google-site-verification`.
7. Back in Search Console, click **Verify**.
8. After verification, submit the sitemap: **Sitemaps** → add `sitemap.xml` (full URL e.g. `https://your-domain.com/sitemap.xml`).

Alternative methods (DNS TXT, HTML file upload) work too, but the env-var meta tag keeps verification in config rather than the repo.

## Contact

Project email: **networkcommonsgov@gmail.com** (updates, local action, broken portal reports).

## Status

Public MVP: map (PlanIt), portals directory, toolkit, evidence hub. Groups directory and richer map filters still to come.

## Inspired by

Some of the thinking behind this project draws on Networked Commons Governance (NCG) principles — organised, evidence-based participation and antifragile local institutions. Build On stands as an independent practical campaign.

## Licence

Content and code will be clarified as the project matures. For now, please treat as all rights reserved pending a proper open licence decision.
