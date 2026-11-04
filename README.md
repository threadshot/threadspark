# THREADSPARK — Personal Intelligence for Everything You Create

> **"Personal Intelligence for Everything You Create."**  
> An AI platform that develops an ongoing contextual understanding of your creative projects, fictional universes, research archives, and manuscripts.

---

## Overview

THREADSPARK is a multi-page web platform and interactive software demonstration for an AI personal intelligence platform designed for novelists, worldbuilders, screenwriters, and researchers.

### Key Capabilities
- **Understand**: Cognitive ingestion engine that extracts entities, geographic systems, timelines, and stylometrics.
- **Remember**: Persistent relational knowledge graph that never degrades across chapters or years.
- **Create**: Symbiotic, style-preserving creative studio for scene drafting, dialogue sparring, and tone adjustment.

### Included Demonstration: *The Glass Meridian*
Preloaded with a fictional political fantasy manuscript:
- 8 Chapters (~36,420 words)
- 12 Character dossiers with tension levels & development arcs
- 8 World locations
- 24 Chronological story events
- Interactive Knowledge Graph (SVG spatial topology)
- Continuity scanner with 1-click authorial fixes
- AI Workspace with contextual citations
- Creative Studio with side-by-side / unified diff view

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static HTML Export)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Editorial Serif (Newsreader) & Modern Sans (Inter) & Monospace (JetBrains Mono)

---

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment (Cloudflare Pages)

This project is configured with `output: "export"` in `next.config.mjs` for seamless zero-cost deployment to **Cloudflare Pages**:

1. Connect this repository to **Cloudflare Pages**.
2. **Framework preset**: `Next.js (Static HTML Export)`
3. **Build command**: `npm run build`
4. **Build output directory**: `out`
5. Connect your custom domain in the **Custom domains** tab of Cloudflare Pages.

