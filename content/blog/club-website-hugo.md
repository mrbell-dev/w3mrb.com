---
title: "Killing the Club WordPress: A Lift-and-Shift Ham Site Anyone Can Run"
slug: "club-website-hugo"
date: 2026-07-14T09:00:00-04:00
featured: false
draft: false
comment: true
toc: true
categories:
  - Ham Radio
tags:
  - Self-Hosting
  - AI
  - Open Source
  - Opinion
---

When I joined the Rowan Amateur Radio Society, the club website ran on WordPress.
It worked — until it didn't, which is the whole problem with WordPress. So I
rebuilt it as a static Hugo site and paired it with an AI maintenance workflow, on
purpose, so that the next volunteer doesn't have to be me. The whole thing is
designed to *lift and shift* onto any club that wants it.

## Why the club WordPress had to go

Nothing against WordPress as software. The problem is the *shape* of it for a
volunteer-run club:

- **It rots.** Plugins need updating, PHP needs updating, the theme breaks on the
  update you skipped. Miss a few months and you're one auto-update away from a
  white screen.
- **It costs money forever.** Hosting, a database, usually a plugin subscription
  or two. A club pays that whether anyone touches the site or not.
- **It's an attack surface.** A public login, a database, a dozen plugins from a
  dozen authors — WordPress is the single most-attacked platform on the web, and a
  club site is exactly the kind of soft, unmaintained target that gets hit.
- **One person holds the keys.** In practice the site lives and dies with whoever
  set it up. When they move or lose interest, it goes stale, then dark.

That last one is the real killer. Club infrastructure that depends on a single
technical volunteer isn't infrastructure — it's a liability with a countdown.

## What I built instead

A **static site**. No database, no server-side code, no login to hack. The stack:

- **[Hugo](https://gohugo.io/)** — a static site generator written in Go. Markdown
  files go in, a folder of plain HTML comes out.
- The **Chirpy theme**, pulled in as a Hugo module so theme updates are one
  command, not a manual merge.
- **GitHub Pages** for hosting — free — with **GitHub Actions** rebuilding and
  deploying the site automatically every time content changes.
- Forms (contact, membership, Elmer requests) handled by a hosted form backend and
  a small Google Apps Script, so "no server" doesn't mean "no way to reach us."

Cost to the club: essentially zero. Attack surface: essentially zero — there's no
database and nothing to log into. The published site is just files. You cannot SQL
-inject a folder of HTML.

## The AI part — and what it actually means

Here's where I'll correct a misconception before anyone else does: **there is no
chatbot on the site.** The "AI" isn't a feature visitors see. It's the
*maintenance layer*.

A static site fixes the rot and the cost, but it introduces a new problem: editing
it normally means knowing Markdown, Git, and Hugo's folder conventions. Most club
volunteers — bless them — did not sign up for that. So the site ships with two
things aimed squarely at that gap:

1. A **plain-English wiki** walking a non-technical member through editing a page,
   adding a post, uploading an image, and previewing changes — no jargon.
2. A **`CLAUDE.md`** in the repo: a structured description of how the site is laid
   out, written *for an AI coding assistant to read.* A volunteer can open the repo
   with an AI agent, say "add next month's meeting to the events page," and the
   agent already knows where events live, what front matter they need, and how the
   site builds.

That's the pairing. Not "AI on the website" — **AI as the person who knows Hugo so
the club doesn't have to.** The static site is the thing that can't break; the AI
plus the wiki is what lets a non-coder maintain the thing that can't break.

## Why this is a lift-and-shift, not a one-off

I didn't build a bespoke Rowan site. I built a **template every ham club needs and
almost none have the volunteer bandwidth to build.** Every club has the same pages:
who we are, when we meet, our repeaters, how to join, events, silent keys. Swap the
call sign, the repeater frequencies, the logo, and the meeting location, and the
same repo is a different club's site in an afternoon.

The properties that make it worth copying:

- **Free to host, free to run.** No club treasurer line item.
- **Nearly unbreakable.** Nothing to patch on a schedule, nothing to get hacked.
- **Survivable.** The next volunteer inherits a documented repo and an AI that can
  explain it, not a mystery WordPress install with a lost admin password.

## The honest caveats

I run a science-first bench blog, so I'm not going to sell you a clean win:

- **The initial setup is more technical than WordPress.** Standing this up the
  first time needs someone who's comfortable with Git and a build tool. The payoff
  is on the *maintenance* side, not the setup side.
- **Static means static.** No member logins, no live comment moderation, no
  server-side anything. For a club brochure site that's a feature; if you truly
  need a members-only portal, this isn't it.
- **The AI-maintenance workflow is only as good as the docs.** The `CLAUDE.md` and
  the wiki are what make it approachable — skimp on them and you're back to "ask
  the one technical guy."

None of that changes the core trade. A club website should be cheap, hard to break,
and possible to hand off. WordPress gave us none of the three. This gives us all
three, and the AI layer is what closes the gap that used to make static sites too
nerdy for a volunteer club to run.

If you're the technical one in your club and you're tired of babysitting a
WordPress install, this is the pattern. Steal it.

*73,*
*W3MRB*
