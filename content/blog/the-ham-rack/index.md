---
title: "The Ham Rack: A Field HF Station in Ten Inches of 3D-Printed Plastic"
slug: "the-ham-rack"
date: 2026-07-12T10:00:00-04:00
featured: true
draft: false
comment: true
toc: true
categories:
  - Ham Radio
  - 3D Printing
tags:
  - POTA
  - QRP
  - Homebrew
  - SDX
  - Raspberry Pi
  - Field Radio
---

<!-- TKTK-photo (HERO): save the front-on shot of the finished rack in THIS folder
     as feature.jpg (or feature.webp). The theme auto-detects any file named
     *feature* and renders it as the hero above this post + the homepage card.
     No markdown needed for the hero. -->

This is the project that best explains why I got into ham radio in the first
place: not to talk, but to *build*. It's a complete, field-deployable HF station
bolted into a ten-inch 3D-printed rack, powered off a cordless-drill battery, and
carried into the woods for POTA. Every module in it is something I wanted to
understand from the inside out — so I put them all in one box and wired them
together.

I built it with **WD4PVS**, who did the CAD work: modeling the rack mounts and
dialing in the fitment for every module so the whole thing actually bolts
together like real gear instead of a pile of boards zip-tied to a project box.

## Why a rack?

Portable HF usually means a radio, a tangle of pigtails, a battery, and a tuner
all rattling around loose in a bag. It works, but it's fragile and it's slow to
set up. I wanted a station where the signal chain was *fixed* — every module in
its place, every interconnect short and strain-relieved — so deployment is
"clamp the battery on and raise the antenna," not "reverse-engineer last week's
wiring."

The answer was a **10-inch mini rack**. The frame is 3D-printed from the
[LabRax](https://labrax.io) system — a set of open, printable rack parts sized
for the small "10-inch" standard rather than a full 19-inch data-center rack.
That's the sweet spot for ham gear: big enough to hold real modules on faceplates,
small enough to carry with one hand.

WD4PVS took each module and modeled a mount and faceplate for it, so the QRP
radio, the amplifier, the meter, the filters, the tuner, and the Pi all sit on
their own rack unit. Printed plastic is perfect here — every module has a
different footprint, and CAD-and-print lets you make a custom bracket for each
one in an afternoon instead of hunting for aluminum that almost fits.

<!-- TKTK-photo: save as rack-mounts.jpg here, then uncomment the next line -->
<!-- ![Rack with faceplates off, showing the 3D-printed module mounts](rack-mounts.jpg) -->

## The signal chain

Here's the path a signal takes from the radio to the antenna, which is also the
order the modules stack in the rack:

**SDX+ V2 → 35W amplifier → low-pass filter → SWR meter → ATU-100 tuner → antenna**

### SDX+ V2 — the heart of it

The [**SDX+ V2**](https://www.simple-sdr.com) is the QRP HF transceiver at the
center of the station. It's a kit-lineage radio — small, efficient, and exactly
the kind of thing an edge-case ham loves, because you can actually see and
understand what every stage does. Running QRP (low power) is a feature, not a
limitation: it's what lets the whole station sip from a tool battery.

<!-- TKTK-photo: save as sdx-faceplate.jpg here, then uncomment the next line -->
<!-- ![Close-up of the SDX+ V2 faceplate](sdx-faceplate.jpg) -->

### 35W amplifier

QRP is elegant, but sometimes you need the extra few S-units to make the contact,
especially on a crowded POTA activation. A **35W amplifier** brings the SDX+'s
QRP output up to a level that punches through without turning the station into a
power hog.

### Low-pass filter + Pi Pico band selector

Any time you amplify, you have to deal with harmonics — spurious energy at
multiples of your operating frequency that you are legally and neighborly obliged
*not* to transmit. That's what the **low-pass filter** is for: it passes your
band and attenuates the harmonics above it.

The clever part is the **Pi Pico low-pass-filter selector**, built from
[Tech Minds'](https://www.youtube.com/@TechMindsOfficial) design. Instead of one
fixed filter, a Raspberry Pi Pico switches the correct LPF for whatever band I'm
on — automatic harmonic filtering that follows the radio. It's a tiny
microcontroller doing exactly one job well, which is my favorite kind of
homebrew.

<!-- TKTK-photo: save as pico-lpf-selector.jpg here, then uncomment the next line -->
<!-- ![The Pi Pico low-pass-filter selector board](pico-lpf-selector.jpg) -->

### SWR meter and the ATU-100 tuner

A **rack-mounted SWR meter** gives me a constant read on how well power is
actually getting into the antenna versus reflecting back at the radio. Feeding it
is the **ATU-100** — an automatic antenna *tuner* (not an antenna; the name trips
people up). It's an autotuner that matches whatever wire I've thrown into a tree
to something the radio is happy driving, and it does it in a second or two at the
press of a button. In the field, where your "antenna" is whatever you could hang
between two trees, an autotuner is the difference between operating and packing up.

## The digital side: AIOC and a Raspberry Pi 5

Voice and CW are only half of modern ham radio. For the digital modes — FT8 and
the rest — I bring the station into the computer age with an **AIOC**
(All-In-One-Cable), a tiny USB interface that handles the radio's audio and PTT
without a rat's nest of sound-card adapters.

The AIOC feeds a **Raspberry Pi 5** running the digital-mode software, with a
**7-inch touchscreen** as the control surface. No laptop required — the whole
computing side of the station is a rack module too. Tap to decode, tap to call.

<!-- TKTK-photo: save as pi5-digital.jpg here, then uncomment the next line -->
<!-- ![The Raspberry Pi 5 and 7-inch touchscreen running a digital mode](pi5-digital.jpg) -->

## Powered by a drill battery

Here's the detail that makes people grin at hamfests: the entire station runs off
an **18V Milwaukee M18** battery — the same pack that runs my power tools. It's
rugged, it's already in my kit, and swapping a dead one for a fresh one takes
three seconds. For POTA and emergency work, standardizing on a battery ecosystem
I already own means one less thing to think about and one less special charger to
forget.

<!-- TKTK-photo: save as m18-power.jpg here, then uncomment the next line -->
<!-- ![The M18 battery clamped to the rack in the field](m18-power.jpg) -->

## In the field

Built for two jobs: **POTA** (Parks On The Air) activations, and emergency
communications when the grid isn't there to help. Both want the same things — fast
setup, no mains power, and a station rugged enough to survive a backpack and a
tailgate. The rack delivers on all three.

<!-- TKTK-photo: save as pota-deployed.jpg here, then uncomment the next line -->
<!-- ![The rack deployed at a POTA site](pota-deployed.jpg) -->

I'll follow up with real field numbers — power out, SWR across bands, battery
runtime on a single M18 — once I've logged a few more activations. If you're
building something similar, or you want the print files and mounting details from
WD4PVS's models, get in touch.

*73,*
*W3MRB*
