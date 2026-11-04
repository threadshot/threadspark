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
- Interactive Knowledge Graph (SVG spatial topology with search & zoom)
- Continuity scanner with 1-click authorial fixes
- AI Workspace with contextual citations
- Creative Studio with side-by-side & unified diff view
- 6-Step Presenter Guided Walkthrough Mode

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static HTML Export)
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Editorial Serif (Newsreader) & Modern Sans (Inter) & Monospace (JetBrains Mono)
- **Sound**: Native Web Audio API Synthesizer (Zero asset dependencies)

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

## Deployment (Cloudflare)

This project is configured with `output: "export"` in `next.config.mjs` and includes a pre-configured `wrangler.jsonc` pointing to `./out`.

### Option A: Cloudflare Workers (Recommended)
1. In Cloudflare Dashboard, connect your GitHub repository under **Workers & Pages**.
2. **Build command**: `npm run build`
3. **Deploy command**: `npx wrangler deploy` (or `npm run deploy`)
4. Wrangler reads `wrangler.jsonc` and deploys the pre-compiled static assets from `./out` directly to Cloudflare's global edge network.

### Option B: Cloudflare Pages
1. Connect this repository to **Cloudflare Pages**.
2. **Framework preset**: `Next.js (Static HTML Export)`
3. **Build command**: `npm run build`
4. **Build output directory**: `out`
5. Leave the deploy command empty.
