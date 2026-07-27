# Build On

**Homes. Infrastructure. Action.**

Build On is a UK campaign platform that helps people support well-designed housing and infrastructure through evidence-based engagement with the planning system.

**Live site:** [https://build-on.org.uk](https://build-on.org.uk) (also [build-on.uk](https://build-on.uk) → redirect to the `.org.uk` canonical).

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

The live site deploys from the `main` branch of this repository.

### Domains

| Domain | Role |
|--------|------|
| **build-on.org.uk** | Canonical public site |
| **build-on.uk** | Redirect to `https://build-on.org.uk` |

Both are registered at GoDaddy and should be added in Vercel → Project → **Settings** → **Domains**. DNS can take up to 24–48 hours to propagate fully; Vercel will show when each domain is valid and HTTPS is active.

In Vercel, set **build-on.org.uk** as the primary domain and configure **build-on.uk** (and any `www` variants) to **redirect** to `https://build-on.org.uk` so search engines see one origin.

### First-time setup

1. Push the repo to GitHub (`stumpyuk1/build-on`).
2. In [Vercel](https://vercel.com), import the GitHub repo (Next.js preset).
3. Set environment variables (table below).
4. Attach domains as above; wait for DNS + SSL.
5. Deploy from `main`.

### Environment variables

| Name | Required | Purpose |
|------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin, **no trailing slash**: `https://build-on.org.uk`. Used by sitemap, robots, and Open Graph. Code default is already this URL if unset. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console HTML-tag token (`content` value only). |

After changing env vars, **redeploy** production.

### Ongoing deploys

- **Automatic:** push to `main` → production deploy.
- **Manual:** Vercel → **Deployments** → **Redeploy** (needed after env-only changes).

### After deploy / DNS settles, check

- `https://build-on.org.uk` loads with a valid certificate
- `https://build-on.uk` redirects to the `.org.uk` site
- `/map` shows PlanIt data (or clear fallback)
- `/sitemap.xml` and `/robots.txt` list `https://build-on.org.uk/...`

### SEO files

| URL | Source |
|-----|--------|
| `/sitemap.xml` | `app/sitemap.ts` |
| `/robots.txt` | `app/robots.ts` |

## Google Search Console

1. Add property **URL prefix**: `https://build-on.org.uk`
2. Verify with **HTML tag** → put the token in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` → redeploy → Verify
3. Submit sitemap: `https://build-on.org.uk/sitemap.xml`
4. Optionally add `https://build-on.uk` only if you want it tracked; prefer a 301 redirect so one property is enough

## Contact

Project email: **networkcommonsgov@gmail.com** (updates, local action, broken portal reports).

## Status

Public MVP: map (PlanIt), portals directory, toolkit, evidence hub. Groups directory and richer map filters still to come.

## Inspired by

Some of the thinking behind this project draws on Networked Commons Governance (NCG) principles — organised, evidence-based participation and antifragile local institutions. Build On stands as an independent practical campaign.

## Licence

Content and code will be clarified as the project matures. For now, please treat as all rights reserved pending a proper open licence decision.
