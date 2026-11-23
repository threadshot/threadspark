export const SITE_CONFIG = {
  name: "Threadspark",
  tagline: "The Source of Truth for Long-Form Fiction",
  description:
    "Threadspark reads your manuscripts and builds a living, versioned model of your story: who exists, what's happened to them, and who knows what.",
  companyDomain: "threadspark.app",
  companyType: "Self-funded / Bootstrapped (No outside investors or accelerators)",
  foundedDate: "July 2025",
  foundedYear: 2025,
  location: "Seattle, United States",
  companyIdentity:
    "Threadspark is operated by Ezekiel Heretta, based in Seattle, United States. Founded July 2025. Self-funded, with no outside investors or accelerators. Contact: ezekiel@threadspark.app.",
  founder: {
    name: "Ezekiel Heretta",
    role: "Solo Founder & Engineer",
    bio: "Software engineer and speculative fiction reader building deterministic continuity tools for novelists managing compounding universes.",
    linkedIn: "https://www.linkedin.com/in/ezekiel-heretta",
  },
  contactEmail: "kumirealms@gmail.com",
  companyEmail: "ezekiel@threadspark.app",
  privacyEmail: "privacy@threadspark.app",

  // Design Partner Program Status
  designPartnerCohortSize: 30,
  designPartnerSpotsTaken: 14,
  designPartnerTotalSpots: 30,
  replyWindow: "2 business days",
  programName: "Design Partner Program",
  designPartnerCohort: {
    spotsTaken: 14,
    totalSpots: 30,
    spotsTakenText: "14 of 30",
    replyWindow: "2 business days",
    pricingNote: "100% Free During Cohort • Concierge Onboarding",
  },

  // Business Model & Pricing
  businessModel:
    "Threadspark is free for the 25-author design partner cohort. After the cohort we plan to offer a monthly subscription for individual authors, with a free trial on one book. We will announce prices at least 30 days before the cohort ends.",

  // Benchmark counts comparison
  benchmarkComparison: {
    threadsparkDetected: "19 of 20 defects detected",
    threadsparkFalseAlarms: "1 false alarm",
    baselineDetected: "9 of 20 defects detected",
    baselineFalseAlarms: "13 false alarms",
    testDate: "October 2026",
    corpus: "Arthur Conan Doyle's The Sign of the Four (43,400 words)",
  },

  // Exact definition of deterministic
  deterministicDefinition:
    "Threadspark uses language models to propose characters, events and secrets from your manuscript, and you confirm each one. The continuity checks then run as fixed rules over your confirmed story-state graph, so the same graph produces the same flags.",

  // Sample manuscript preloaded in the prototype
  demoManuscript: {
    title: "The Glass Meridian",
    genre: "Political Fantasy",
    wordCount: "36,420",
    chapters: 8,
    characters: 12,
    events: 24,
    stateNodes: 148,
  },
  demoStats: {
    words: 36420,
    chapters: 8,
    characters: 12,
    events: 24,
    nodes: 148,
  },

  // Preliminary internal sanity check on Arthur Conan Doyle's "The Sign of the Four" (43,400 words)
  benchmark: {
    bookTitle: "The Sign of the Four",
    corpus: "The Sign of the Four",
    author: "Arthur Conan Doyle",
    wordCount: "43,400",
    words: 43400,
    seededErrors: 20,
    detectedErrors: 19,
    falseAlarms: 1,
    threadsparkPrecision: "95.0%",
    threadsparkRecall: "95.0%",
    baselineLLMPrecision: "40.9%",
    baselineLLMRecall: "45.0%",
    testDate: "October 2026",
    baselineModel: "Claude 3.5 Sonnet / GPT-4o (Full-Text Prompt)",
    baselinePrompt:
      "Identify all continuity errors, physical contradictions, timeline slips, and knowledge inconsistencies in this manuscript.",
    baselineDetected: 9,
    baselineFalseAlarms: 13,
    heldOutTestDescription:
      "A held-out test on 3 external author manuscripts is in progress, and we will publish the method and results.",
  },

  competitorVerificationDate: "November 2026",

  // Roadmap & activity
  buildingNext:
    "What we are building next: expanding our temporal state parser to support multi-draft branching comparisons and building export adapters for Scrivener and standard Markdown vaults. Next quarter we are preparing our infrastructure migration to dedicated AWS VPC environments per design partner.",

  roadmap: [
    {
      phase: "Phase 1",
      tag: "Prototype (working)" as const,
      period: "2026",
      status: "Functional Prototype",
      title: "Core Ingestion & Deterministic Story Graph",
      description:
        "Manuscript ingestion, propose-then-confirm entity extraction, temporal state tracking (injuries, items, locations), and epistemic boundary leak detection on open-weight base models.",
    },
    {
      phase: "Phase 2",
      tag: "In development" as const,
      period: "Target: Q2 2027",
      status: "In Development",
      title: "Per-Author LoRA Style Adapters",
      description:
        "Lightweight (~25MB) PEFT/LoRA style adapters trained solely on an author's backlist. Authors own their adapter weights (.safetensors) with 100% portable sovereignty.",
    },
    {
      phase: "Phase 3",
      tag: "Vision" as const,
      period: "Target: 2028",
      status: "Research / Vision",
      title: "Consensual Genre Bases & Studio Sandbox",
      description:
        "Genre- and trope-tuned base models built strictly on public-domain or explicitly compensated, opt-in author archives with verified legal provenance.",
    },
  ],
};
