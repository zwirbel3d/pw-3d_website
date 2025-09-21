---
layout: page
title: Support
permalink: /support/
---

# Support & FAQ

Need help with **CalibraOps™**? This page covers setup, belt tuning tips, iCloud (beta), troubleshooting, and how to reach us.

## Getting Started
- **Belt Tuner:** Tap **Start**, lightly pluck the belt near the middle of the span. You’ll see a large **Hz** readout, a **Δ** badge vs target, and guidance text (tighten/loosen/approaching/stable ✓).
- **Presets & target:** Tap **Preset** to pick a model, or choose **Set manual target…** to enter a target Hz directly.
- **Maintenance:** Track recurring tasks per printer. Swipe **right** to complete; tap **+ Add** for new tasks.

## Belt Tuner — How-To
1. **Select axis** (X/Y/Z) to match the belt you’re tuning.
2. **Pick a target** (preset or manual).
3. **Hold steady** and **pluck** the belt close to the span center (2–5 cm from the mic).
4. Watch the **Δ** badge and guidance:
   - **approaching target…** when you’re close
   - **stable ✓** after the reading is inside tolerance for a short time (~0.3 s)
   - **tighten/loosen** to move pitch up/down
5. A light haptic fires when the reading stays within tolerance briefly (target reached).

### Tips for clean readings
- Quiet room; avoid fans right next to the mic.
- Pluck cleanly; avoid scraping along the belt.
- Re-pluck every few seconds—belts ring and then decay.

## Troubleshooting (Analyzer)
- **No reading / stuck at 0:** Check mic permission (you’ll see an inline card with **Open Settings** if denied). Ensure the **Start** button shows **Stop** while measuring.
- **Jumpy or jumps an octave:** Pluck closer to the belt center and a bit louder. Around **80–110 Hz**, overtones can double—our tuner applies smoothing + stability gating and a light harmonic snap, but a clean pluck helps most.
- **Very low numbers (<60 Hz):** Many consumer printers tune above **90 Hz**. If you’re lower, confirm the target for your model and belt.
- **Still off?** Try a different preset or use **Set manual target…** and tune by Δ.

## iCloud Sync (beta) — Optional
- **What it does:** When enabled, CalibraOps™ stores a copy of your app data in **your iCloud account** to keep it available across devices using your Apple ID.
- **Enable:** In CalibraOps™ **Settings → Sync via iCloud (beta)** (OFF by default). Also ensure **Settings → [your name] → iCloud → iCloud Drive** is ON for CalibraOps™.
- **Troubleshoot sync:** Same Apple ID on both devices; iCloud Drive on; network available; leave the app foregrounded briefly after edits.
- **Turn off / remove from iCloud:** Toggle **Sync via iCloud** OFF to keep data device‑local. Remove the cloud copy via **Settings → Apple ID → iCloud → Manage Storage → CalibraOps**.
- **Privacy:** We do **not** run servers for CalibraOps™. iCloud is provided by Apple under Apple’s terms.

## Accessibility
- Large, high-contrast **Hz** readout and Δ badge.
- Buttons meet **≥44 pt** touch target guidance; labels & hints provided.
- VoiceOver: Start/Stop, Preset, axis controls, and Δ value are accessible and read clearly.
- Respects **Dynamic Type**, **Reduce Motion**, and **Reduce Transparency**.

## Haptics
- A subtle haptic confirms **target reached** after the reading stays within tolerance (~0.3 s).

## Known Limits
- Target ranges typical for consumer printers: **90–300 Hz**. Below ~80 Hz readings can be less stable due to overtones/room noise.
- Analyzer is optimized for belt plucks (20–500 Hz window); not a general audio tuner.

## Privacy (quick)
- No analytics, no ads, no tracking.
- Audio is analyzed **on-device** only; it is **not recorded or uploaded**.
- iCloud Sync is **optional** and stores data in **your iCloud** when enabled.

## Contact
If you need help, email **support@pw-3d.de** with:
- A short description of the issue
- Your device model & iOS version
- App version/build (from TestFlight or the App Store)
- Optional: a short screen recording or description of the steps

_Last updated: 2025-09-09_
