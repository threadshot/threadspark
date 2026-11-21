# Threadspark Website Review and Improvement Plan

Prepared for the Threadspark founder · November 21, 2026

## 1. Verdict in brief

Threadspark has a genuinely strong core: a clear problem ("raw text isn't state"), a memorable idea (who knows what, when), and a concrete benchmark that most early-stage AI products don't have. The site's weakness is that it was built to impress rather than to be believed. Before the redesign it was over-built for the stage of the company, it addressed investors louder than authors, it made several claims the product can't yet back up, and it contained two interface elements that pretended to work (a free-text "ask anything" box with canned answers and a newsletter form that saved nothing).

The redesign already delivered fixes the homepage, navbar, footer, metadata and a real signup form. This document covers everything else: positioning, a claims audit, trust and legal gaps, the unreviewed inner pages, the Studio demo, accessibility, technical and SEO work, launch and growth for the beta, and how all of this fits the AWS Activate application.

**The ten changes that matter most, in order:**

1. Make every number and feature claim on the site true, sourced and consistent with your AWS application.
2. Wire up the beta form to a real backend and set a real contact email.
3. Replace the free `dpdns.org` address with a custom domain and a business email.
4. Publish a short, plain-language privacy and data promise (authors are very protective of unpublished manuscripts).
5. State clearly what the AI does and does not write, because the author community is split on AI prose.
6. Put a human on the site: your name, photo, background and reason for building this.
7. Apply the same cuts to the About, Platform, Use Cases and Studio pages that the homepage already got.
8. Strengthen the benchmark: methodology page, a held-out second book, and a fairer baseline.
9. Add basic SEO, analytics, error pages, security headers and spam protection.
10. Record a 30-second demo clip and add a real product screenshot or two.

## 2. Scope and limits of this review

**What I reviewed:**

- The live homepage as it stood before the redesign (full text).
- Six source files you uploaded: the old `page.tsx`, `Navbar.tsx`, `Footer.tsx`, `layout.tsx`, `globals.css` and `tailwind.config.ts`.
- `package.json` and the list of 27 project files.
- Your AWS Activate application drafts.

**What I could not review:** the About, Platform, Use Cases and Studio pages (I could not load them), the `InvestorModal`, `CommandPalette` and Studio components, the `glassMeridian.ts` data file, `wrangler.jsonc`, and how any of it actually renders on a phone or desktop. I did not run Lighthouse or an accessibility scanner. Findings about those areas are therefore checklists to verify, not conclusions. Section 14 lists what to check on each.

## 3. What the site has to achieve

The site has several jobs, and they pull in different directions:

- **AWS Activate:** a functioning company website that clearly describes a real product. Reviewers will compare it with your application text.
- **Recruit 25 beta authors:** indie series writers who are skeptical, busy, and wary of AI. They need to see their own problem, trust you with their manuscripts, and know what to do next.
- **Credibility for later conversations** with investors, editors, presses and game studios, which can be served by a separate, quieter page (for example a one-page PDF or an unlisted URL) rather than the public homepage.

The guiding principle: the public site should answer three questions in under a minute. What is this? Is it real? What do I do next? Everything that does not serve one of those answers should move off the homepage.

## 4. Positioning and messaging

### 4.1 What is working

- "Raw text isn't state" is a sharp, defensible insight.
- "Who knows what, when" is memorable and nobody else owns it.
- Series authors are a well-chosen wedge: the pain compounds with each book and they already pay for tools.
- The Chapter 6 knowledge-leak example is an excellent demonstration. One concrete flagged line explains the product better than any feature list.

### 4.2 Problems

- **Positioning drift.** The old page title and meta description said "Personal Intelligence for Everything You Create" while the hero said "source of truth for long-form fiction." The use-case section added research, screenplays and tabletop RPGs. A visitor cannot tell who this is for. The redesign fixes the homepage and metadata, but the inner pages and footer links ("Researchers & PKM", "Screenwriters") still dilute the wedge.
- **Insider vocabulary.** "Epistemic," "sovereign," "telemetry," "cognitive ingestion," "stylometric authorship profiling," "stochastic and ephemeral." Authors say "continuity error," "story bible," "plot hole," "series bible," "timeline." Use their words. Keep the technical terms for the Platform page and the benchmark write-up.
- **Investor-first framing.** "Investor Briefing & Roadmap" buttons in three places, "Business Model & Sustainable Economics," "Moat," "Razor-Sharp Unit Economics," and "Schedule Institutional Walkthrough" were all on the public homepage. That reads as a company talking to funders, not a product talking to writers. The redesign removed them from the homepage and shared chrome; check that the inner pages no longer link to the modal.
- **The AI-prose question is unanswered.** Part of the author community is strongly opposed to generative AI writing their books. Another part welcomes it. The old site mixed "we protect your voice" with "Creative Studio" and style adapters without saying whether Threadspark writes text for you. Pick a stance and state it in one sentence near the top (see Appendix B). A continuity checker that never writes your prose is an easy yes for a wary author; a style model that drafts in your voice is a separate, optional feature and should be labelled as such.
- **Incumbent comparison.** The old comparison table named Sudowrite, Novelcrafter, NovelAI, Claude and ChatGPT and made specific claims about them, including price anchors ("$10–$12/mo"). Competitor features and prices change often. Either remove the table, or keep it neutral, dated ("as of November 2026") and verified against each product's current pages. Inaccurate competitor claims are a credibility risk with exactly the authors who use those tools.

### 4.3 Recommended message hierarchy

1. **One-line promise:** "The source of truth for your story."
2. **One-sentence explanation:** it reads your manuscripts and tracks who exists, what has happened to them and who knows what, so continuity errors are caught before readers catch them.
3. **One proof point:** the seeded-error benchmark, with its limits stated.
4. **One next step:** try the demo, then join the beta.

A strong emotional hook is a famous real-world example. A commonly cited one is Dr. Watson's war wound, which is described in different places in different Sherlock Holmes stories, including *The Sign of the Four*, the same book you used for your benchmark. Verify the details against the texts before using it, but if it holds, it makes a charming line: "Even Conan Doyle lost track of where his narrator was wounded."

## 5. Claims audit

Every claim below appeared on the old site. For each: what is risky, and what to do. The goal is simple: nothing on the site should be something you couldn't demonstrate to a skeptical author or an AWS reviewer on a call.

- **"Deterministic source of truth."** Extraction of entities and events is done by language models, which can be wrong. The checks over the confirmed graph can be deterministic. Say exactly that: "You confirm what Threadspark extracts, and the checks run on your confirmed record." Avoid "eliminates," "without hallucination," and "always."
- **"False Alarm Rate < 5%" next to "45% recall" for the baseline.** The two sides were measured differently. Report the same two metrics for both: recall (errors found out of 20) and precision (share of flags that were real). The redesigned homepage does this, but the Threadspark precision ("95%+") is my assumption from your "<5% false alarms." Confirm it from your actual run.
- **"Per-Audit Ingestion Cost: 1 / 14th."** I could not find support for this figure. Remove it unless you can show the calculation, including what was compared and at what prices.
- **"20 Seeded Real-World Contradictions."** "Seeded" and "real-world" contradict each other. Use "20 realistic errors we inserted." Your AWS draft also said "real-world continuity errors"; align both.
- **"Zero cloud retention," "per-tenant encryption," "private cloud or self-hosted container," "dedicated GPU batch ingestion queues."** These describe features of a finished product. If they are not built, remove them or label them "planned." A privacy claim that turns out false is far worse than no claim.
- **"Local Vector Vault" (footer)** contradicts your AWS architecture (S3, Aurora, EC2). Either the data is local or it is in the cloud. Say what is true.
- **Pricing tiers ($0, $29, $79) and "Free forever."** Publishing prices for a product with no paying users, plus a "Join Series Closed Beta" button that just linked to the demo, sets expectations you cannot meet. Replace with "closed beta, free for invited authors" only if that is your intention, and add pricing after you learn what authors will pay.
- **"Track 50+ characters across multi-volume series."** Your demo indexes 12. Say "dozens" only if you've tested it, or describe what the demo shows.
- **Studio telemetry:** "Context Coherence 92% Health," "Vocab: 88th Percentile," "Neural Entity Parser 100% Ingested," "Subtext Index: High." These look like invented dashboards. If a number is computed from the manuscript, say how. If it is decoration, remove it.
- **"Read Case Study" links.** There are no case studies. Rename to "See the example" or remove.
- **"THREADSPARK Intelligence Systems Inc."** Use the company's real legal name, or plain "Threadspark." The AWS form asks for company details; keep everything consistent.
- **The free-text "Ask any question" box.** It returned the same canned answer regardless of the input. Removed in the redesign. If the Studio page has a similar box, remove or relabel it ("Sample questions only").
- **The newsletter form.** It showed "You are registered" without storing anything. Replaced by a real form, but you must set the endpoint.

## 6. Trust, privacy and the author community

For writers, a manuscript is the most sensitive file they own, and fear of AI training on their work is intense. This is likely your largest adoption barrier, and your best differentiator if handled well.

- **Publish a plain-language data promise** on its own page and link it from the signup form and footer. State only what is true. Cover: who can see manuscripts, whether any text is sent to third-party AI providers (if everything runs on your own open-weight models on AWS, say so; it is a real selling point), whether anything is used to train models other than that author's own style adapter and only with consent, how long data is kept, and how to export and delete everything.
- **Add a Privacy Policy and Terms** before collecting any emails or manuscripts. Both are short and can start from a reputable template, then be reviewed by a lawyer before launch.
- **Say who is behind this.** The old site named no person. Add an About block with your name, photo, background, why you built it and a direct email. Indie authors buy from people they can picture. This also reassures AWS that the company is real.
- **State the stage honestly.** "We are a small team running a closed beta" is a strength. Phrases like "Institutional Walkthrough" imply an organization you may not yet be.
- **Social proof:** none yet, which is fine. After the pilot, ask three to five authors for a sentence of feedback and permission to quote them. Until then, show the benchmark and the demo, and don't invent testimonials or logos.
- **Authorship of the demo manuscript.** Be clear who wrote *The Glass Meridian* and that it is sample text. If it was generated by a model, say "sample manuscript." Authors will ask.

## 7. The benchmark: your strongest asset, so make it bulletproof

The public-domain benchmark is the most persuasive thing on the site. It is also where a skeptical reader will push hardest. Strengthen it before relying on it.

- **Sample size.** 20 seeded errors in one book is a small test. Present it as an initial result, not proof.
- **Tuning on the test.** If you developed or tuned the pipeline while looking at this same book, results will be optimistic. Run a held-out test on a different public-domain novel that you have not tuned against, and report both.
- **The baseline.** Pasting the full text into a long-context model is the easiest baseline to beat. Name the model and version, the date, and the exact prompt, and consider adding two fairer baselines: retrieval over chunks, and the same model given a hand-written story bible. If Threadspark still wins, the claim becomes much stronger.
- **Who seeded the errors.** You did, which makes the benchmark internal. Say so on the page (the redesign does), and consider having someone else seed a second set.
- **Publish the method.** A one-page "How we tested" with the error types (5 each of injuries, knowledge leaks, vanishing weapons, timeline slips), the scoring rule, and a link to the seeded text and answer key on GitHub lets anyone reproduce it. That is rare and builds trust fast.
- **Real manuscripts.** After the beta starts, add a second result from real authors' books, with permission. It is more convincing than any public-domain test.
- **One source of truth for numbers.** Keep the benchmark figures, word counts and entity counts in a single `facts.ts` constants file that both the site and your application copy are written from, so they cannot drift apart.

## 8. Information architecture and content

### 8.1 Pages

- **Home:** done. Five sections, one example, one proof, one signup.
- **Demo (Studio):** the proof that the product exists. See section 9.
- **How it works (currently "Platform"):** the place for technical detail. Rename "Platform" to "How it works" or "Product" if the page explains rather than lists specs.
- **Benchmark / Method:** new. Moves the long write-up off the homepage.
- **About:** a founder story and an honest "what works today, what's next" list instead of a "Manifesto & Roadmap" with dates you may not keep.
- **Use cases:** trim to series authors first, then editors, then game narrative teams. Drop research/PKM and screenwriting unless you have a reason and evidence.
- **Privacy, Terms, Contact:** new, short.

### 8.2 Calls to action

Use one primary action per page. Today the funnel is demo, then beta. Keep the demo as the primary button on the homepage because it is tangible, and the beta request as the secondary one. On the demo page, make the beta request the primary action.

### 8.3 Copy conventions

- Sentence case for headings and buttons, "Threadspark" not "THREADSPARK."
- Active, specific buttons: "Try the demo," "Request an invite," not "Explore the Interactive Studio" or "Inquire."
- Cut taglines under the logo. "Personal Intelligence" appeared under the wordmark and contradicts the fiction positioning.
- Avoid stacking superlatives ("razor-sharp," "radically cheaper," "exponentially more valuable").

## 9. The Studio demo

The Studio is the single most important page after the homepage, because it is where "is this real?" gets answered. I could not view it, but the file list shows eight to nine separate views (Overview, Document Intelligence, Style Intelligence, Character Intelligence, Knowledge Graph, Continuity, Creative Studio, AI Workspace, Settings), a presenter tour bar and a contextual AI panel. That is likely too much for a first-time visitor.

- **Open on the point.** The first screen should be the continuity result: the flagged passage and the linked evidence, exactly like the homepage example. Let the visitor explore from there.
- **Cut to four views:** Story bible (characters, places, factions), Timeline and state (injuries, items, locations), Continuity checks, and Voice. Merge or hide the rest.
- **Label it plainly:** a persistent "Demo with sample data" note.
- **Remove the presenter tour bar, sounds, and the "Settings" view** from the public version. Keep presenter tooling behind a query parameter if you use it for investor calls.
- **Remove or relabel any fake interactivity.** Preset questions with canned answers are fine if labelled "Sample questions." A free-text box that ignores the text is not.
- **Show real input and output.** The most convincing thing a visitor can see is "here is the manuscript text, here is what Threadspark extracted from it, here is the confirm button." If upload isn't built, show a recorded walkthrough of one chapter being processed.
- **Add a path out:** every Studio view should offer "Request an invite to try this on your own manuscript."
- **Mobile:** dense dashboards rarely work on a phone. Either design a simple stacked mobile view or show a notice recommending desktop plus a short video.

## 10. Visual design and brand

The redesign moved the homepage to a calmer system: one accent colour (violet) for actions, amber only for flags, a serif for headlines, generous spacing and hairline dividers. Remaining items:

- **Logo and favicon.** The old "T" in a gradient square was removed from the navbar. Choose a simple mark and wordmark and add a favicon and app icon. Currently the browser tab has none.
- **Open Graph image.** When someone shares the link, there is no preview card. Make a 1200×630 image using the flagged-line example.
- **Product imagery.** There are no screenshots anywhere. One clean screenshot of the Studio continuity view and a 30-second silent screen recording would do more than any amount of copy.
- **Remove leftover decoration** from the inner pages: radial glows, glass panels, shimmer text, gradient buttons, icon-in-a-box on every list item, uppercase monospace labels over every heading. The shared styles `glass-panel`, `glass-pill`, `glow-purple`, `glow-champagne` and `shimmer-text` in `globals.css` can be deleted once no page uses them.
- **Unused Tailwind config:** `float-slow`, `shimmer`, `pulse-subtle`, and the many `brand-*` shades. Also, the old homepage used `animate-fade-in`, which is not defined in the config; search the repo for it.
- **Typography.** Newsreader plus Inter is a sound pairing for fiction. JetBrains Mono is loaded globally; if only the Studio uses it, load it there only, saving a font download on the homepage.
- **Colour consistency.** Keep violet for interactive things and amber for warnings across all pages including the Studio, so colour carries meaning.
- **Dark-only.** Fine for a tool, but a writer reading a long page at midday may prefer a light option. Low priority; consider a light theme later.

## 11. Accessibility

- **Contrast.** Small text in `slate-500` on the near-black background is about 4.2:1, below the 4.5:1 WCAG AA minimum. My redesigned page uses `slate-500` for footnotes, the form note and the footer copyright; change those to `slate-400`. Audit the Studio for the same issue, especially the tiny uppercase labels (`text-[10px]`, `text-[11px]`), which are also too small.
- **Minimum sizes.** Avoid text under 12px, and keep body copy at 16px or larger.
- **Keyboard and focus.** A visible focus ring is now global. Verify every interactive element in the Studio (tabs, graph nodes, tour bar) is reachable and operable by keyboard.
- **Tabs and widgets.** The old tab sets were buttons. Custom tabs need `role="tablist"`, `role="tab"`, `aria-selected` and arrow-key support, or should be redesigned as simple links or headings.
- **Meaning beyond colour.** Flags use text labels as well as amber, which is good; check the Studio's graph and charts do the same.
- **Motion and sound.** Reduced-motion is respected globally now. Sounds were removed from the navbar and footer; remove `sound.ts` use everywhere, since unexpected audio is an accessibility and usability problem.
- **Structure.** One `h1` per page, ordered headings, a "skip to content" link, `alt` text for any images, and labels on all form fields (the new form has them).
- **Graphs.** A knowledge graph visualization needs a text or table alternative.

Run axe DevTools or Lighthouse accessibility on every page and fix what they flag; aim for no serious issues.

## 12. Technical, SEO and operations

### 12.1 Build and deployment

- `package.json` uses `wrangler deploy` but lists no Next.js-to-Cloudflare adapter. Confirm how the site is built and deployed (check `wrangler.jsonc` and `next.config.mjs`) and that the adapter you use is current and supported.
- Dependencies use `^` ranges. Commit a lockfile, run `npm audit`, and update Next.js, React and Wrangler to the latest patched releases. Re-test after updating.
- `CORE_DIRECTIVE.md` sits in the project root. If the repository is public, check that it contains nothing you wouldn't want visitors to read, and confirm no secrets or `.env` files are committed.
- Remove dead code once the inner pages are migrated: `InvestorModal`, `CommandPalette`, `PresenterTourBar`, `sound.ts`, and unused lucide imports.

### 12.2 SEO and sharing

- Give each page its own `title` and `description` through the `metadata` export; at present only the layout defines them.
- Add `metadataBase` with your final domain, a canonical URL, and Open Graph and Twitter card metadata.
- Add `app/robots.ts` and `app/sitemap.ts`.
- Add JSON-LD structured data (`Organization` and `SoftwareApplication`) on the homepage.
- The `keywords` meta tag is ignored by search engines; harmless, but don't rely on it. Instead use natural phrases in headings, such as "story bible," "continuity checker for novelists," and "series bible."
- A brand name check: a search for related terms returns unrelated products with "Spark" in the name. Do a quick search for existing "Threadspark" products and a trademark search before investing in the brand.

### 12.3 Reliability and security

- **Spam and abuse on the form:** add Cloudflare Turnstile or a honeypot field plus server-side rate limiting.
- **Security headers** (via Cloudflare or `_headers`): HSTS, `X-Content-Type-Options`, `Referrer-Policy`, a Content Security Policy, and `frame-ancestors`.
- **Error pages:** add `not-found.tsx`, `error.tsx` and `loading.tsx` so broken links and failures look intentional.
- **Analytics:** add a privacy-friendly option (Cloudflare Web Analytics or Plausible), which avoids a cookie banner. Track demo visits, demo completions and beta requests so you can measure the funnel.
- **Uptime monitoring:** a free monitor that emails you if the site or demo is down.
- **Performance:** run Lighthouse on mobile. The old homepage was a single large client component with multiple blurred glow layers and glass backdrop filters, both heavy on low-end phones. The new homepage is a server component and should score much better; verify, and check the Studio separately.

### 12.4 Domain and email

- A free subdomain-style address like `dpdns.org` looks less established, may be flagged by some email and security filters, and depends on a third party you don't control. Register a custom domain (about $10–15 a year), put it behind Cloudflare, and redirect the old address to it.
- Set up a business email on that domain, and configure SPF, DKIM and DMARC so your invites don't land in spam.
- Use that address as `CONTACT_EMAIL` in `src/lib/site.ts` and on your AWS application.

## 13. Legal and compliance

This is not legal advice; have a lawyer review before launch.

- **Entity:** the old footer named an incorporated company. Make sure the legal name on the site, the AWS application and any bank or tax records are identical.
- **Privacy Policy and Terms:** required before collecting emails or manuscripts. Cover data retention, deletion, security practices, and the ownership of uploaded manuscripts and of any style adapter trained on them.
- **Email marketing:** only email people who opted in, include a working unsubscribe link, and a physical mailing address in marketing emails (CAN-SPAM). If you serve EU or UK visitors, consider GDPR consent and data-subject rights.
- **Competitor mentions:** keep factual, dated and fair, or drop them.
- **Public-domain text:** *The Sign of the Four* is public domain, which is why it is a safe benchmark; note the edition you used.
- **Trademark:** search for conflicts on "Threadspark" before spending on branding.
- **Beta terms:** a short agreement for pilot authors covering feedback, confidentiality and what happens to their data when the beta ends.

## 14. Checklists for the pages I could not review

### About

- Replace "Manifesto & Roadmap" with a founder story, photo, and contact.
- List what works today and what is planned, without dates you can't commit to.
- Remove any investor or institutional language and the Investor modal.
- Check the company name matches everywhere.

### Platform

- Rename if appropriate ("How it works").
- Open with a simple diagram: manuscript in, proposed story bible, author confirms, checks run, flags with linked passages.
- Keep technical detail (graph, adapters, models) in plain language, with a clear "today vs planned" label on each capability.
- Remove the four duplicate footer links that all point here ("Context Engine," "Style Intelligence," "Knowledge Graph," "Continuity Scanner") or turn them into real anchors.

### Use cases

- Keep series authors, editors and game narrative; cut or merge the rest.
- Replace "Read Case Study" with real content or remove the link.
- Make anchors (`#novelists`, etc.) match the footer links.

### Studio

- Apply every item in section 9.
- Add the "sample data" label, a path to request an invite, and a keyboard and screen-reader pass.

### Every page

- Unique title and description, one `h1`, working navigation, no sounds, no investor modal, no ⌘K palette.
- Test at 375px, 768px and 1280px widths.

## 15. Beta launch and growth

- **Replace the email-only form with a short application:** genre, number of books in the series, total word count, current tools, and whether they will give feedback. It qualifies authors and gives you pilot data. Keep it to five or six fields.
- **Offer a concierge first run:** run the first 25 authors' manuscripts through the pipeline yourself and send a continuity report. It is the best proof, a source of testimonials and case studies, and it teaches you what authors actually care about.
- **Where authors are:** writing and self-publishing subreddits (read each community's self-promotion rules first), Royal Road and Substack communities, indie author Facebook and Discord groups, and author forums. Lead with the benchmark and a useful post, not an advert.
- **Content that earns attention:** the benchmark write-up, a short post on the continuity errors in famous books, and a clear explanation of why a longer context window doesn't solve this.
- **Measure:** visits to the demo, completion of the demo, beta applications, applications from your target segment. Set a goal for the number of qualified applications per week.
- **Keep a changelog:** a small "What's new" page shows momentum and gives people a reason to return.

## 16. Alignment with the AWS Activate application

- A functioning company website is a stated eligibility requirement for the Founders tier; the site must be live, describe the product, and work on a phone.
- Numbers on the site and in the application must match exactly: words indexed (36,420), entities (12 characters, 24 events, 148 state nodes), benchmark (19 of 20, the precision figure, the 45% and 38% baseline), the pilot size (25), and your funding status (bootstrapped, $0 external).
- Your application says roughly $200 has been spent on EC2 GPU instances. Keep a screenshot of the Billing page to hand.
- Use a business email and the custom domain in the application.
- Avoid "Pre-Seed" on the site; "bootstrapped" matches the program.
- Do not mention credits or the AWS programme on the public homepage; a small "Built on AWS" line in the footer is optional once the credits are approved.

## 17. Prioritized action plan

### P0: before submitting the AWS application (about a week)

- Set `CONTACT_EMAIL` and `BETA_FORM_ENDPOINT`; test the form end to end. *(small)*
- Confirm the precision figure and update `BENCHMARK` in `page.tsx`. *(small)*
- Replace the placeholder excerpt in the hero with the real Chapter 6 line. *(small)*
- Fix the `slate-500` contrast issue. *(small)*
- Apply the homepage cuts to About, Platform, Use Cases and Studio; remove investor and palette references everywhere. *(medium)*
- Remove or label every claim in section 5. *(medium)*
- Register a custom domain and business email; redirect the old URL. *(small)*
- Make sure site and application numbers match. *(small)*

### P1: before opening the beta (two to three weeks)

- Privacy Policy, Terms and a data promise page. *(medium)*
- About page with your name, photo and story. *(small)*
- The "What the AI does and doesn't do" statement. *(small)*
- Studio simplification and the sample-data label. *(medium to large)*
- Screenshot and a 30-second demo clip. *(small)*
- Per-page metadata, Open Graph image, favicon, robots, sitemap. *(small)*
- Analytics, Turnstile or honeypot, security headers, error pages. *(medium)*
- Beta application form with qualifying questions. *(small)*
- Method page for the benchmark and a published answer key. *(medium)*

### P2: after the first beta cohort

- Held-out benchmark on a second book and fairer baselines. *(medium)*
- Results from real authors' manuscripts, with permission. *(medium)*
- Testimonials and case studies from the concierge runs. *(medium)*
- Pricing page once you have evidence of willingness to pay. *(small)*
- Light theme, mobile-friendly Studio. *(medium to large)*
- Dependency and dead-code cleanup, remove unused CSS and Tailwind config. *(small)*

## 18. Known follow-ups on the files I already delivered

- `page.tsx`: the Threadspark precision value is an assumption; the hero excerpt is illustrative; a few footnotes use `slate-500` and should be `slate-400`.
- `site.ts`: both values are placeholders and must be set.
- `BetaForm.tsx`: shows an error until an endpoint is configured; add spam protection.
- `Navbar.tsx`: uses a text wordmark; replace with a real logo when you have one.
- `globals.css`: the old glass and glow helper classes are intentionally kept for the unmigrated pages; delete them afterward.
- Nothing has been rendered or tested on a device; run a build and check at mobile width.

## Appendix A: Alternative hero lines

- "The source of truth for your story." (current)
- "Catch continuity errors before your readers do."
- "Your series bible, built from the books you've already written."
- "Who knows what, when, across every book in your series."

## Appendix B: Draft statements (edit to match reality)

**What the AI does and doesn't do.** "Threadspark doesn't write your book. It reads what you've written, keeps track of your story, and tells you when something doesn't add up. A separate, optional feature can learn your writing style; it is trained only on your own text, and you own it."

**Data promise.** "Your manuscripts are private to you. We don't sell them, share them, or use them to train anything except your own optional style model. You can export or delete everything at any time." *Only publish this if it is true and your policy says the same.*

**Benchmark caption.** "We inserted 20 realistic continuity errors into a public-domain novel and compared Threadspark with pasting the whole text into a long-context model. We inserted the errors ourselves, so this is an internal result. Here is exactly how we tested."

**Beta application questions.** What do you write? How many books are in your series and how many words in total? How do you track continuity today? Are you willing to share one manuscript and give feedback over six weeks? Email address.
