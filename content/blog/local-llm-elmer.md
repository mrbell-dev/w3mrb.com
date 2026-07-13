---
title: "Teaching a Local LLM to Be My Elmer"
slug: "local-llm-elmer"
date: 2026-07-10T09:00:00-04:00
featured: false
draft: false
comment: true
toc: true
categories:
  - Ham Radio
tags:
  - AI
  - SDR
  - Self-Hosting
  - Study
  - Series
---

An *Elmer*, in ham speak, is a mentor — the experienced operator who answers your
dumb questions and gets you on the air. I'm lucky to have real ones. But I'm also
an AI engineer with a rack of hardware running large language models in my house,
so I'm running an experiment: **can a local LLM be a useful second Elmer** — a
patient, always-available tutor for the Extra exam and the bench?

This post is a work-in-progress log, not a finished how-to. Here's the real setup
and where I'm taking it.

## The hardware is already here

I don't rent AI from anyone. The models run on gear I own and control:

- A **Jetson Orin Nano** running a llama.cpp OpenAI-compatible server —
  **Qwen3-8B** quantized, a few gigabytes, answering on my LAN.
- A bigger **home AI box** (an unlocked AMD BC-250 I've
  [written about on my personal blog](https://mrbell.dev/blog/)) running larger
  Ollama models for the heavier lifting.

Both are offline-capable. No API keys, no per-token bill, no data leaving the
house. For a ham, that last part isn't a privacy nicety — it's the whole point.

## Why *local* AI fits ham radio specifically

Amateur radio's entire culture is built around *working when the infrastructure
doesn't*. An Elmer that lives in someone's cloud and dies with your internet
connection is philosophically backwards for this hobby. A study assistant — or,
down the road, a field assistant — that runs on a Pi-class box off a battery is
exactly the kind of self-reliant tool ham radio is supposed to celebrate.

Same reason I run the [Ham Rack](/blog/2026/07/the-ham-rack/) off a drill battery:
if it needs the grid or the cloud to work, it's not really field gear.

## What I'm building toward

The experiment, in phases:

1. **Extra tutor (now).** Feed the question pool and good reference material into a
   local model and have it *explain* concepts — Smith charts, filter math — rather
   than just quiz me. Retrieval over a curated corpus so it cites real theory, not
   hallucinated physics.
2. **Bench companion (next).** A model that can talk me through a measurement or a
   build step at the workbench, hands-free.
3. **Field assistant (someday).** Something small and battery-friendly that rides
   along on a POTA activation.

## The honest caveats

Two things I'm watching closely, and you should too if you try this:

- **LLMs confidently invent physics.** For a study tool that is a serious problem.
  The fix is grounding the model in real references and treating anything
  un-cited as suspect — never letting it freelance an equation.
- **Small local models have limits.** An 8B model on a Jetson is remarkable, but
  it's not a frontier model. Part of this experiment is finding where the local,
  private, offline tradeoff is worth it — and where it isn't.

I'll report real results as the tutor comes together: what it gets right, where it
lies, and whether a homebrew AI Elmer actually helps me pass Extra. Follow the
[Extra series](/blog/2026/07/grinding-for-extra/) for the study side.

*73,*
*W3MRB*
