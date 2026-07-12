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
| `HUGO_VERSION` | `0.164.0` |
| `HUGO_ENVIRONMENT` | `production` |
| `NODE_VERSION` | `22` |

`HUGO_ENVIRONMENT=production` is what turns on purgecss (drops unused Bootstrap
CSS). Hugo fetches the theme module automatically during the build; if it
complains about Go, add `GO_VERSION=1.22`.

## Custom domain

Pages project → **Custom domains** → add `w3mrb.com` (and `www.w3mrb.com`).
Requires the `w3mrb.com` zone to be on Cloudflare DNS.

## Local preview

`npm ci` once, then `hugo server`. (Note: HBS's PostCSS build does not run
inside Claude Code's sandbox — build in a normal terminal.)

## Auto-deploy

Every push to `main` builds and deploys. PRs get preview deployments.
