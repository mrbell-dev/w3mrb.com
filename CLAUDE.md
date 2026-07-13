# w3mrb.com — ham radio + 3D printing blog

Hugo site using the **hugo-theme-bootstrap (HBS)** theme installed as a **Hugo
Module** (`go.mod`, pinned `v1.13.3`). English-only (zh-hans disabled).

## MUST use pinned Hugo 0.146.5

HBS v1.13.3 uses `site.Author`, **removed in Hugo 0.164** — the system Hugo fails
with `can't evaluate field Author`. Build with **Hugo 0.146.5 extended**
(Cloudflare uses `HUGO_VERSION=0.146.5`; keep a local 0.146.5 binary — see
`DEPLOY.md` and the `w3mrb-build-notes` memory).

## Build gotcha — verify before every deploy

`hugo` (not `hugo server`) defaults to `HUGO_ENVIRONMENT=production`, which runs
**purgecss**. Purgecss needs `hugo_stats.json` (`build.writeStats: true`). A build
run when that file is absent **FAILS** (`Hugo stats file not found`), writes the
stats at the end, and a *second* build then succeeds. A failed CSS transform still
emits HTML, so it will happily deploy an **unstyled site**. Before `wrangler pages
deploy`:

1. Confirm the build exited **0** (don't hide it behind a grep pipe).
2. Confirm `public/index.html` references the hashed
   `/assets/main/bundle.min.<hash>.css`, NOT the dev `/main/scss/main.css`.

Deploy: `wrangler pages deploy public --project-name w3mrb --branch main`.

## Conventions

- Permalinks use `:slug` — set a short `slug:` in frontmatter for clean URLs;
  posts without one fall back to the (long) title-derived slug.
- Blog posts use YAML frontmatter; voice is **bench-log / edge-case-ham** (see
  `~/web-dev/CLAUDE.md` for the identity). Brand is **W3MRB**.
