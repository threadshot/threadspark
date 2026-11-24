const COHORT_TOTAL_SPOTS = 25;
const PRIMARY_CONTACT_EMAIL = "ezekiel@threadspark.app";

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
  contactEmail: PRIMARY_CONTACT_EMAIL,
  deletionWindow: "within 48 hours of your request",
  companyIdentity:
    `Threadspark is operated by Ezekiel Heretta, based in Seattle, United States. Founded July 2025. Self-funded, with no outside investors or accelerators. Contact: ${PRIMARY_CONTACT_EMAIL}.`,
  founder: {
    name: "Ezekiel Heretta",
    role: "Solo Founder & Engineer",
    bio: "Software engineer and speculative fiction reader building deterministic continuity tools for novelists managing compounding universes.",
    linkedIn: "https://www.linkedin.com/in/ezekiel-heretta",
  },

  // Design Partner Program Status (Single source of truth)
  designPartnerCohort: {
    totalSpots: COHORT_TOTAL_SPOTS,
    spotsTaken: null as number | null,
    replyWindow: "2 business days",
    pricingNote: "100% Free During Cohort • Concierge Onboarding",
  },

  // Business Model & Pricing (derived from totalSpots)
  businessModel:
    `Threadspark is free for the ${COHORT_TOTAL_SPOTS}-author design partner cohort. After the cohort we plan to offer a monthly subscription for individual authors, with a free trial on one book. We will announce prices at least 30 days before the cohort ends.`,

  // Benchmark counts comparison
  benchmarkComparison: {
    threadsparkDetected: "19 of 20",
    threadsparkFalseAlarms: "1 false alarm",
    baselineDetected: "9 of 20",
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
    categories: [
      "Physical invariants (e.g. unhealed injuries)",
      "Epistemic knowledge leaks (premature revelations)",
      "Inventory vanishing / carried items",
      "Timeline slips (transit duration & clock logs)",
    ],
    threadsparkDetected: 19,
    threadsparkFalseAlarms: 1,
    baselineDetected: 9,
    baselineFalseAlarms: 13,
    testDate: "October 2026",
    baselineModel: "GPT-5.6 Sol, Claude Opus 5.5, Gemini 3.1 Pro, DeepSeek V4 Pro",
    baselinePrompt:
      "Identify all continuity errors, physical contradictions, timeline slips, and knowledge inconsistencies in this manuscript.",
  },

  competitorVerificationDate: "November 2026",

  // Roadmap & activity
  buildingNext:
    "What we are building next: expanding our temporal state parser to support multi-draft branching comparisons, building two-way sync adapters for Scrivener and Markdown vaults, and finalizing our Phase 2 lightweight LoRA training pipeline.",

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

export function getCohortLabel(): string {
  const { spotsTaken, totalSpots } = SITE_CONFIG.designPartnerCohort;
  if (typeof spotsTaken === "number" && spotsTaken > 0) {
    return `${spotsTaken} of ${totalSpots} places taken`;
  }
  return `Up to ${totalSpots} design partners`;
}

export function getCohortStatusBadge(): string {
  const { spotsTaken, totalSpots } = SITE_CONFIG.designPartnerCohort;
  if (typeof spotsTaken === "number" && spotsTaken > 0) {
    return `${spotsTaken} of ${totalSpots} Places Taken`;
  }
  return `Now accepting applications for up to ${totalSpots} design partners`;
}

export function getCohortStatusText(): string {
  const { spotsTaken, totalSpots, replyWindow } = SITE_CONFIG.designPartnerCohort;
  if (typeof spotsTaken === "number" && spotsTaken > 0) {
    return `${spotsTaken} of ${totalSpots} cohort spots taken. Ezekiel replies within ${replyWindow}.`;
  }
  return `Now accepting applications for up to ${totalSpots} design partners. Ezekiel replies within ${replyWindow}.`;
}

export function getCohortCtaLabel(): string {
  return `Apply for Design Partner Cohort (${SITE_CONFIG.designPartnerCohort.totalSpots} Authors)`;
}

export function formatPercent(num: number, denom: number): string {
  if (denom === 0) return "0.0%";
  return ((num / denom) * 100).toFixed(1) + "%";
}

export function getBenchmarkMetrics() {
  const { benchmark } = SITE_CONFIG;
  const threadsparkPrecision = formatPercent(
    benchmark.threadsparkDetected,
    benchmark.threadsparkDetected + benchmark.threadsparkFalseAlarms
  );
  const threadsparkRecall = formatPercent(
    benchmark.threadsparkDetected,
    benchmark.seededErrors
  );
  const baselinePrecision = formatPercent(
    benchmark.baselineDetected,
    benchmark.baselineDetected + benchmark.baselineFalseAlarms
  );
  const baselineRecall = formatPercent(
    benchmark.baselineDetected,
    benchmark.seededErrors
  );

  return {
    threadsparkPrecision,
    threadsparkRecall,
    baselinePrecision,
    baselineRecall,
  };
}
