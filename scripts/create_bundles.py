import os
import zipfile
import datetime

workspace = r"C:\Users\ezwow\Documents\Website"

pages = [
    {
        "id": "home",
        "title": "Homepage / Landing",
        "route": "/",
        "live_url": "https://threadspark.kumirealms.workers.dev/",
        "src": "src/app/page.tsx",
        "html": "out/index.html",
        "desc": "Core value proposition for fiction authors, interactive hero story-state radar simulation, 6 core technical capabilities, competitive landscape vs manual bibles & LLM chat, 25-author design partner cohort invitation, preliminary internal experiment (19/20 defect detection), and deterministic continuity definition."
    },
    {
        "id": "platform",
        "title": "Platform & Architecture (How It Works)",
        "route": "/platform",
        "live_url": "https://threadspark.kumirealms.workers.dev/platform",
        "src": "src/app/platform/page.tsx",
        "html": "out/platform.html",
        "desc": "Detailed 5-step engine pipeline (Ingestion, Story Bible Propose, Author Confirm, Continuous Verification, Staged LoRA Models), interactive stylometrics analyzer, knowledge relationship inspector, continuity contradiction reports, design commitments (zero training, author-owned LoRA weights), and internal experiment appendix."
    },
    {
        "id": "use-cases",
        "title": "Use Cases & Author Workflows",
        "route": "/use-cases",
        "live_url": "https://threadspark.kumirealms.workers.dev/use-cases",
        "src": "src/app/use-cases/page.tsx",
        "html": "out/use-cases.html",
        "desc": "Dedicated author workflows tailored to 4 creative segments: Indie Series Authors (compounding backlist continuity), Serial & Web Novelists (high-velocity weekly deadlines), Narrative Game Teams & TTRPG GMs (branching consequence state trees), and Speculative Worldbuilders (hard magic systems and geopolitical treaties)."
    },
    {
        "id": "studio",
        "title": "Interactive Studio Demonstration",
        "route": "/studio",
        "live_url": "https://threadspark.kumirealms.workers.dev/studio",
        "src": "src/app/studio/page.tsx",
        "html": "out/studio.html",
        "desc": "Interactive in-browser SaaS studio preloaded with the fictional manuscript 'The Glass Meridian' (36,420 words, 8 chapters, 12 characters, 148 state nodes). Features interactive SVG Knowledge Graph, Epistemic Boundary Radar, Live Diff Rewriter, and Presenter Tour."
    },
    {
        "id": "about",
        "title": "About, Founder Story & Company Facts",
        "route": "/about",
        "live_url": "https://threadspark.kumirealms.workers.dev/about",
        "src": "src/app/about/page.tsx",
        "html": "out/about.html",
        "desc": "Founder background (Ezekiel Heretta, solo founder & engineer based in Seattle), company facts, the origin story ('Raw text is not state'), exact deterministic definition, transparent business model & transition plan (free during cohort, subscription post-cohort with 30-day notice), honest 3-phase roadmap, and what we are building next."
    },
    {
        "id": "terms",
        "title": "Terms of Service",
        "route": "/terms",
        "live_url": "https://threadspark.kumirealms.workers.dev/terms",
        "src": "src/app/terms/page.tsx",
        "html": "out/terms.html",
        "desc": "Comprehensive terms of service: operator identification (Ezekiel Heretta), effective date (Nov 23, 2026), 100% author manuscript & adapter IP ownership, design partner program scope, 48-hour data deletion on request, acceptable use, and limitation of liability."
    },
    {
        "id": "privacy",
        "title": "Privacy Policy & Plain-Language Data Promise",
        "route": "/privacy",
        "live_url": "https://threadspark.kumirealms.workers.dev/privacy",
        "src": "src/app/privacy/page.tsx",
        "html": "out/privacy.html",
        "desc": "Complete Privacy Policy with plain-language commitments: zero training on author manuscripts, isolated per-partner environments, dedicated local compute today with committed migration to AWS VPCs by Q2 2027, 48-hour permanent deletion guarantee, and data controller contact."
    }
]

supporting_files = [
    ("Site Configuration & Canonical Constants", "src/lib/site.ts"),
    ("Root Layout & Typography", "src/app/layout.tsx"),
    ("Global Navigation (Navbar)", "src/components/Navbar.tsx"),
    ("Global Footer & Company Identity", "src/components/Footer.tsx"),
    ("Design Partner Cohort Modal", "src/components/BetaApplicationModal.tsx"),
    ("Command Palette", "src/components/CommandPalette.tsx"),
]

# 1. Generate PAGES_BUNDLE.md
bundle_md_path = os.path.join(workspace, "PAGES_BUNDLE.md")
with open(bundle_md_path, "w", encoding="utf-8") as f:
    f.write("# THREADSPARK — Complete Website Pages Bundle\n\n")
    f.write(f"> **Generated:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
    f.write("> **Live Deployment:** [threadspark.kumirealms.workers.dev](https://threadspark.kumirealms.workers.dev)  \n")
    f.write("> **Repository:** [github.com/threadshot/threadspark](https://github.com/threadshot/threadspark)\n\n")
    f.write("This document aggregates all 7 web application pages and supporting components created for **Threadspark** (*The Source of Truth for Long-Form Fiction*). Each section includes the live route URL, functional purpose, key editorial highlights, and the complete source code.\n\n")
    
    f.write("## Table of Contents\n\n")
    f.write("### Application Pages\n")
    for idx, p in enumerate(pages, 1):
        f.write(f"{idx}. [{p['title']} (`{p['route']}`)](#page-{p['id']})\n")
    
    f.write("\n### Core Supporting Components & Config\n")
    for title, path in supporting_files:
        anchor = path.replace("/", "").replace(".", "").replace("-", "").lower()
        f.write(f"- [{title} (`{path}`)](#{anchor})\n")
    
    f.write("\n---\n\n")
    
    # Write each page
    for idx, p in enumerate(pages, 1):
        pid = p["id"]
        ptitle = p["title"]
        proute = p["route"]
        plive = p["live_url"]
        psrc = p["src"]
        pdesc = p["desc"]
        f.write(f'<a id="page-{pid}"></a>\n')
        f.write(f"## {idx}. {ptitle}\n\n")
        f.write(f"- **Route:** `{proute}`\n")
        f.write(f"- **Live URL:** [{plive}]({plive})\n")
        f.write(f"- **Source File:** [`{psrc}`]({psrc})\n")
        f.write(f"- **Overview & Key Copy:** {pdesc}\n\n")
        
        src_path = os.path.join(workspace, psrc)
        if os.path.exists(src_path):
            with open(src_path, "r", encoding="utf-8") as sf:
                content = sf.read()
            f.write(f"#### Source Code (`{psrc}`)\n\n")
            f.write("```tsx\n" + content + "\n```\n\n")
        f.write("---\n\n")
        
    # Write supporting files
    f.write("## Core Supporting Components & Configuration\n\n")
    for title, path in supporting_files:
        anchor = path.replace("/", "").replace(".", "").replace("-", "").lower()
        f.write(f'<a id="{anchor}"></a>\n')
        f.write(f"### {title} (`{path}`)\n\n")
        f.write(f"- **File:** [`{path}`]({path})\n\n")
        full_p = os.path.join(workspace, path)
        if os.path.exists(full_p):
            with open(full_p, "r", encoding="utf-8") as sf:
                content = sf.read()
            ext = "ts" if path.endswith(".ts") else "tsx"
            f.write(f"```{ext}\n{content}\n```\n\n")
        f.write("---\n\n")

print(f"PAGES_BUNDLE.md created: {os.path.getsize(bundle_md_path):,} bytes")

# 2. Update ai-review/CODEBASE_BUNDLE.md
ai_review_bundle = os.path.join(workspace, "ai-review", "CODEBASE_BUNDLE.md")
with open(ai_review_bundle, "w", encoding="utf-8") as f:
    f.write("# THREADSPARK — Complete Codebase Bundle for AI Review\n\n")
    f.write(f"> **Generated:** {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
    f.write("> **Product:** Threadspark (Source of Truth for Long-Form Fiction)  \n")
    f.write("> **Deployment:** [threadspark.kumirealms.workers.dev](https://threadspark.kumirealms.workers.dev)\n\n")
    f.write("This document aggregates all key source, page, data, component, and configuration files into one document for easy upload or review.\n\n")
    
    review_files = [
        ("package.json", "package.json", "json"),
        ("tsconfig.json", "tsconfig.json", "json"),
        ("tailwind.config.ts", "tailwind.config.ts", "typescript"),
        ("next.config.mjs", "next.config.mjs", "javascript"),
        ("wrangler.jsonc", "wrangler.jsonc", "jsonc"),
        ("src/lib/site.ts", "src/lib/site.ts", "typescript"),
        ("src/app/globals.css", "src/app/globals.css", "css"),
        ("src/app/layout.tsx", "src/app/layout.tsx", "tsx"),
        ("src/app/page.tsx", "src/app/page.tsx", "tsx"),
        ("src/app/platform/page.tsx", "src/app/platform/page.tsx", "tsx"),
        ("src/app/use-cases/page.tsx", "src/app/use-cases/page.tsx", "tsx"),
        ("src/app/studio/page.tsx", "src/app/studio/page.tsx", "tsx"),
        ("src/app/about/page.tsx", "src/app/about/page.tsx", "tsx"),
        ("src/app/terms/page.tsx", "src/app/terms/page.tsx", "tsx"),
        ("src/app/privacy/page.tsx", "src/app/privacy/page.tsx", "tsx"),
        ("src/components/Navbar.tsx", "src/components/Navbar.tsx", "tsx"),
        ("src/components/Footer.tsx", "src/components/Footer.tsx", "tsx"),
        ("src/components/BetaApplicationModal.tsx", "src/components/BetaApplicationModal.tsx", "tsx"),
        ("src/components/CommandPalette.tsx", "src/components/CommandPalette.tsx", "tsx"),
        ("src/components/studio/PresenterTourBar.tsx", "src/components/studio/PresenterTourBar.tsx", "tsx"),
        ("src/components/studio/StudioHeader.tsx", "src/components/studio/StudioHeader.tsx", "tsx"),
        ("src/components/studio/StudioSidebar.tsx", "src/components/studio/StudioSidebar.tsx", "tsx"),
        ("src/components/studio/ContextualAIPanel.tsx", "src/components/studio/ContextualAIPanel.tsx", "tsx"),
        ("src/components/studio/views/OverviewView.tsx", "src/components/studio/views/OverviewView.tsx", "tsx"),
        ("src/components/studio/views/DocumentIntelligenceView.tsx", "src/components/studio/views/DocumentIntelligenceView.tsx", "tsx"),
        ("src/components/studio/views/StyleIntelligenceView.tsx", "src/components/studio/views/StyleIntelligenceView.tsx", "tsx"),
        ("src/components/studio/views/CharacterIntelligenceView.tsx", "src/components/studio/views/CharacterIntelligenceView.tsx", "tsx"),
        ("src/components/studio/views/KnowledgeGraphView.tsx", "src/components/studio/views/KnowledgeGraphView.tsx", "tsx"),
        ("src/components/studio/views/ContinuityView.tsx", "src/components/studio/views/ContinuityView.tsx", "tsx"),
        ("src/components/studio/views/CreativeStudioView.tsx", "src/components/studio/views/CreativeStudioView.tsx", "tsx"),
        ("src/components/studio/views/AIWorkspaceView.tsx", "src/components/studio/views/AIWorkspaceView.tsx", "tsx"),
        ("src/components/studio/views/SettingsView.tsx", "src/components/studio/views/SettingsView.tsx", "tsx"),
        ("src/data/glassMeridian.ts", "src/data/glassMeridian.ts", "typescript"),
        ("src/lib/sound.ts", "src/lib/sound.ts", "typescript"),
    ]
    
    f.write("## Table of Contents\n\n")
    for title, rel_path, _ in review_files:
        anchor = rel_path.replace("/", "").replace(".", "").replace("-", "").lower()
        f.write(f"- [{title}](#{anchor})\n")
    f.write("\n---\n\n")
    
    for title, rel_path, lang in review_files:
        full_p = os.path.join(workspace, rel_path)
        anchor = rel_path.replace("/", "").replace(".", "").replace("-", "").lower()
        f.write(f'<a id="{anchor}"></a>\n')
        f.write(f"### File: `{rel_path}`\n\n")
        if os.path.exists(full_p):
            with open(full_p, "r", encoding="utf-8") as sf:
                content = sf.read()
            f.write(f"```{lang}\n{content}\n```\n\n")
        else:
            f.write("*File not found*\n\n")
        f.write("---\n\n")

print(f"ai-review/CODEBASE_BUNDLE.md updated: {os.path.getsize(ai_review_bundle):,} bytes")

# 3. Generate threadspark-pages-bundle.zip
zip_path = os.path.join(workspace, "threadspark-pages-bundle.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    # Add PAGES_BUNDLE.md
    z.write(bundle_md_path, "PAGES_BUNDLE.md")
    
    # Add pages source files
    for idx, p in enumerate(pages, 1):
        filename = f"{idx:02d}_{p['id']}_page.tsx"
        z.write(os.path.join(workspace, p['src']), f"pages/{filename}")
        
    # Add HTML exports
    for p in pages:
        html_src = os.path.join(workspace, p['html'])
        if os.path.exists(html_src):
            z.write(html_src, f"html/{os.path.basename(html_src)}")
            
    # Add supporting components
    for title, path in supporting_files:
        full_p = os.path.join(workspace, path)
        if os.path.exists(full_p):
            z.write(full_p, f"components/{os.path.basename(path)}")
            
    # Add studio views
    studio_views_dir = os.path.join(workspace, "src", "components", "studio", "views")
    if os.path.exists(studio_views_dir):
        for f in os.listdir(studio_views_dir):
            if f.endswith(".tsx"):
                z.write(os.path.join(studio_views_dir, f), f"studio-views/{f}")

print(f"threadspark-pages-bundle.zip created: {os.path.getsize(zip_path):,} bytes")
