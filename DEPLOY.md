# Deploy — w3mrb.com (Cloudflare Pages)

Hugo site using **hugo-theme-bootstrap** (HBS) as a Hugo Module. The CSS is
built at deploy time via PostCSS/purgecss, so the build needs **Node + Go**
(both present in Cloudflare's Pages build image).

## One-time: connect to Cloudflare Pages

Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** →
**Connect to Git** → authorize the GitHub App for **mrbell-dev** → pick
**w3mrb.com**.

Build settings:

| Setting | Value |
|---|---|
| Framework preset | Hugo |
| Build command | `npm ci && hugo --gc --minify` |
| Build output directory | `public` |
| Production branch | `main` |

Environment variables:

| Name | Value |
|---|---|
| `HUGO_VERSION` | `0.146.5` |
| `HUGO_ENVIRONMENT` | `production` |
| `NODE_VERSION` | `22` |

**Pin `HUGO_VERSION=0.146.5`** — the theme (HBS v1.13.3) uses `site.Author`,
which newer Hugo (0.164) removed. 0.146.5 is the version the theme is built
against.

`HUGO_ENVIRONMENT=production` is what turns on purgecss (drops unused Bootstrap
CSS). Hugo fetches the theme module automatically during the build; if it
complains about Go, add `GO_VERSION=1.22`.

This repo ships its own root `postcss.config.js` / `purgecss.config.js`
(overriding the theme's) so autoprefixer's browserslist lookup stays inside the
project — required for the build to run under Hugo's Node permission model.
Keep them in sync if the theme's change.

Local dev needs Hugo Extended **0.146.5** (not 0.164). Grab that binary or use
Cloudflare preview deploys.

## Custom domain

Pages project → **Custom domains** → add `w3mrb.com` (and `www.w3mrb.com`).
Requires the `w3mrb.com` zone to be on Cloudflare DNS.

## Local preview

`npm ci` once, then `hugo server`. (Note: HBS's PostCSS build does not run
inside Claude Code's sandbox — build in a normal terminal.)

## Auto-deploy

Every push to `main` builds and deploys. PRs get preview deployments.
