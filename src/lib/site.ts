export const SITE_CONFIG = {
  name: "Threadspark",
  tagline: "The Source of Truth for Long-Form Fiction",
  description:
    "Threadspark reads your manuscripts and builds a living, versioned model of your story: who exists, what's happened to them, and who knows what.",
  companyDomain: "threadspark.app",
  companyType: "Self-funded / Bootstrapped",
  foundedYear: 2026,
  founder: {
    name: "Ezekiel Heretta",
    role: "Solo Founder & Engineer",
    bio: "Software engineer and speculative fiction reader building deterministic continuity tools for novelists managing compounding universes.",
    linkedIn: "https://www.linkedin.com/in/ezekiel-heretta",
  },
  contactEmail: "kumirealms@gmail.com",
  companyEmail: "ezekiel@threadspark.app",
  designPartnerCohortSize: 25,
  betaCohortSize: 25, // backward compatibility
  programName: "Design Partner Program",
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
  // Preliminary internal experiment on Arthur Conan Doyle's "The Sign of the Four" (43,400 words)
  benchmark: {
    bookTitle: "The Sign of the Four",
    corpus: "The Sign of the Four",
    author: "Arthur Conan Doyle",
    wordCount: "43,400",
    words: 43400,
    seededErrors: 20,
    detectedErrors: 19,
    falseAlarms: 1,
    threadsparkRecall: "95.0%", // 19 / 20 = 95.0%
    threadsparkPrecision: "95.0%", // 19 / (19 + 1) = 95.0%
    baselineModel: "Claude 3.5 Sonnet / Gemini 1.5 Pro (Full Context Prompt)",
    baselinePrompt:
      "Identify all continuity errors, physical contradictions, timeline slips, and knowledge inconsistencies in this manuscript.",
    baselineDetected: 9,
    baselineFalseAlarms: 13,
    baselineLLMRecall: "45.0%", // 9 / 20 = 45.0%
    baselineLLMPrecision: "40.9%", // 9 / (9 + 13) = 40.9%
    llmPromptRecall: "45.0%",
    llmPromptPrecision: "40.9%",
  },
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
