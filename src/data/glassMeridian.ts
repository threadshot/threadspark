export interface Character {
  id: string;
  name: string;
  role: string;
  faction: string;
  description: string;
  traits: string[];
  motivations: string[];
  relationships: { targetId: string; targetName: string; relation: string; tensionLevel: 'Low' | 'Moderate' | 'High' | 'Hostile' }[];
  appearances: { chapter: number; roleInScene: string }[];
  developmentArc: string;
}

export interface Location {
  id: string;
  name: string;
  region: string;
  significance: string;
  atmosphere: string;
  keyEvents: string[];
}

export interface StoryEvent {
  id: string;
  chapter: number;
  title: string;
  summary: string;
  significance: string;
  charactersInvolved: string[];
  location: string;
  consequences: string;
}

export interface ContinuityIssue {
  id: string;
  severity: 'Critical' | 'Warning' | 'Suggestion';
  title: string;
  description: string;
  conflictingPassages: {
    chapter: number;
    passage: string;
    context: string;
  }[];
  explanation: string;
  suggestedFixes: string[];
}

export interface StyleAnalysis {
  lexicalDiversity: number; // e.g. 0.74 (Type-Token Ratio)
  averageSentenceLength: number; // e.g. 17.8 words
  dialogueToNarrationRatio: number; // e.g. 34% dialogue, 66% prose
  pacingScore: {
    exposition: number;
    action: number;
    dialogue: number;
    reflection: number;
  };
  dominantTone: string;
  toneDistribution: { [key: string]: number };
  signaturePatterns: {
    pattern: string;
    frequency: string;
    example: string;
    notes: string;
  }[];
  vocabularyBreakdown: {
    tier: string;
    percentage: number;
    sampleTerms: string[];
  }[];
}

export interface AIResponsePreset {
  id: string;
  question: string;
  category: 'Character Arc' | 'World Lore' | 'Continuity' | 'Narrative Craft';
  answer: string;
  citations: { chapter: number; context: string }[];
}

export interface CreativeStudioSnippet {
  id: string;
  title: string;
  originalText: string;
  chapter: number;
  variations: {
    instruction: string;
    styleModifier: string;
    revisedText: string;
    editorialExplanation: string;
  }[];
}

export interface ProjectLoreData {
  meta: {
    title: string;
    author: string;
    genre: string;
    wordCount: number;
    chapterCount: number;
    status: string;
    analyzedTimestamp: string;
    overallHealthScore: number;
  };
  overview: {
    synopsis: string;
    coreThemes: string[];
  };
  characters: Character[];
  locations: Location[];
  storyEvents: StoryEvent[];
  continuityIssues: ContinuityIssue[];
  styleAnalysis: StyleAnalysis;
  aiPresets: AIResponsePreset[];
  creativeSnippets: CreativeStudioSnippet[];
}

export const GLASS_MERIDIAN_DATA: ProjectLoreData = {
  meta: {
    title: "The Glass Meridian",
    author: "Elena R. Chen",
    genre: "High Fantasy / Political Intrigue",
    wordCount: 36420,
    chapterCount: 8,
    status: "Draft 3 - Second Revision",
    analyzedTimestamp: "October 28, 2026 - 14:32:09",
    overallHealthScore: 92,
  },
  
  overview: {
    synopsis: "In the fractured city-state of Oakhaven, the Glass Meridian—a crystalline obelisk erected five centuries prior to anchor the ambient ether—has begun to fracture. Scholar-consul Marcus Thorne discovers that the fracture is not geological, but political sabotage executed by the Obsidian Directorate. To avert catastrophe, he must form a perilous truce with the outcast chronomancer Elena Vance before the winter equinox resonance destabilizes the subterranean aquifers.",
    coreThemes: ["Institutional decay vs. individual moral responsibility", "The price of preserved memory", "Calculated betrayal", "Technological arrogance"],
  },

  characters: [
    {
      id: "char-1",
      name: "Marcus Thorne",
      role: "Consul of Archival Records",
      faction: "The Meridian Scholasticate",
      description: "A methodical, high-ranking archivist who perceives the world through precedents and written chronicles. Cautious by training, yet burdened by an acute conscience.",
      traits: ["Analytical", "Reticent", "Dogmatic", "Observant"],
      motivations: ["Safeguard the integrity of the Imperial Archives", "Expose the corruption in the Directorate without sparking civil war"],
      relationships: [
        { targetId: "char-2", targetName: "Elena Vance", relation: "Uneasy ally and former intellectual rival", tensionLevel: "High" },
        { targetId: "char-3", targetName: "Archon Corvus Malakar", relation: "Superordinate and secret ideological adversary", tensionLevel: "Hostile" },
        { targetId: "char-4", targetName: "Lysandra Locke", relation: "Trusted confidante and information broker", tensionLevel: "Moderate" },
      ],
      appearances: [
        { chapter: 1, roleInScene: "Discovers anomalous vibration glyphs in the sub-vaults" },
        { chapter: 2, roleInScene: "Confronts Archon Malakar regarding missing resonance seals" },
        { chapter: 4, roleInScene: "Secret rendezvous with Elena at the Iron Quay" },
        { chapter: 7, roleInScene: "Breaches the Inner Sancum during the Equinox Gala" },
      ],
      developmentArc: "Shifts from a passive institutional bureaucrat who values order above justice into a decisive insurgent willing to shatter his own creed.",
    },
    {
      id: "char-2",
      name: "Elena Vance",
      role: "Exiled Chronomancer & Resonance Theorist",
      faction: "Independent / The Sunk Hollows Dissidents",
      description: "Former chief artificer of the Meridian Spire, banished four years ago under false charges of treason. Sharp-tongued, pragmatic, and haunted by the catastrophic resonance failure she foresaw.",
      traits: ["Uncompromising", "Volatile brilliance", "Guarded", "Tactical"],
      motivations: ["Prevent the impending seismic cascade", "Clear her mentor's disgraced name"],
      relationships: [
        { targetId: "char-1", targetName: "Marcus Thorne", relation: "Reluctant partner bound by mutual peril", tensionLevel: "High" },
        { targetId: "char-5", targetName: "Silas Ward", relation: "Protective foster elder", tensionLevel: "Low" },
        { targetId: "char-3", targetName: "Archon Corvus Malakar", relation: "Vengeful vendetta", tensionLevel: "Hostile" },
      ],
      appearances: [
        { chapter: 3, roleInScene: "Conducts illicit resonance triage in the flooded foundations" },
        { chapter: 4, roleInScene: "Interrogates Marcus regarding the Scholasticate's silence" },
        { chapter: 6, roleInScene: "Fabricates the harmonic dampener under enemy surveillance" },
        { chapter: 8, roleInScene: "Directs the tether sequence as the spire shatters" },
      ],
      developmentArc: "Learns that radical autonomy without communal trust leads to isolation; yields tactical control to save innocent citizens.",
    },
    {
      id: "char-3",
      name: "Archon Corvus Malakar",
      role: "High Inquisitor of the Obsidian Directorate",
      faction: "The Obsidian Directorate",
      description: "Ruthless administrator convinced that the only way to avert societal collapse is through absolute centralized subjugation of ether resources.",
      traits: ["Austere", "Calculating", "Zealous", "Eloquent"],
      motivations: ["Harvest the core resonance for weaponized civic enforcement", "Purge dissidence"],
      relationships: [
        { targetId: "char-1", targetName: "Marcus Thorne", relation: "Views as an expendable academic nuisance", tensionLevel: "Hostile" },
        { targetId: "char-6", targetName: "Seraphina Voss", relation: "Uneasy financial patron", tensionLevel: "Moderate" },
      ],
      appearances: [
        { chapter: 2, roleInScene: "Summons Marcus and issues a veiled execution ultimatum" },
        { chapter: 5, roleInScene: "Deploys the Iron Golems to suppress the Dockworkers Guild" },
        { chapter: 7, roleInScene: "Presides over the Equinox banquet" },
      ],
      developmentArc: "Descent from pragmatic authoritarian into reckless megalomaniac as his control over the Meridian slips.",
    },
    {
      id: "char-4",
      name: "Lysandra Locke",
      role: "Master of the Siphon Guild",
      faction: "The Free Guilds of Oakhaven",
      description: "Daughter of deep-well miners turned covert guildmaster. Controls the underground water arteries and black-market resonance relays.",
      traits: ["Shrewd", "Cynical", "Fiercely loyal to the working class"],
      motivations: ["Ensure guild autonomy from Directorate taxes", "Keep the lower tiers from drowning"],
      relationships: [
        { targetId: "char-1", targetName: "Marcus Thorne", relation: "Childhood acquaintance", tensionLevel: "Moderate" },
        { targetId: "char-2", targetName: "Elena Vance", relation: "Supplier of refined glass lenses", tensionLevel: "Low" },
      ],
      appearances: [
        { chapter: 3, roleInScene: "Guides Marcus through the forbidden conduit ducts" },
        { chapter: 5, roleInScene: "Organizes the defensive barricade at the Sunk Hollows" },
      ],
      developmentArc: "Moves from opportunistic neutrality to armed leadership in the civic resistance.",
    },
    {
      id: "char-5",
      name: "Silas Ward",
      role: "Keeper of the Forgotten Glass",
      faction: "Ancient Glassmith Order",
      description: "Elderly master craftsman who laid the foundation keystone fifty winters ago. Blinded by ether burn, but can hear the exact vibrational frequency of the Spire.",
      traits: ["Philosophical", "Patient", "Sorrowful"],
      motivations: ["Preserve the original architectural oath", "Save Elena from self-destruction"],
      relationships: [
        { targetId: "char-2", targetName: "Elena Vance", relation: "Surrogate father and tutor", tensionLevel: "Low" },
      ],
      appearances: [
        { chapter: 3, roleInScene: "Interprets the aberrant singing in the stone foundations" },
        { chapter: 6, roleInScene: "Crafts the sacrificial focusing prism" },
      ],
      developmentArc: "Achieves redemption by relinquishing the secrecy of his order to arm the next generation.",
    },
    {
      id: "char-6",
      name: "Lady Seraphina Voss",
      role: "Merchant Prince of the Silver Quay",
      faction: "High Council Oligarchy",
      description: "Aristocratic financier funding both Malakar's expedition and secret opposition factions to hedge against imperial decline.",
      traits: ["Enigmatic", "Diplomatic", "Hedonistic yet watchful"],
      motivations: ["Maximize capital flow", "Secure immunity from ether fallout"],
      relationships: [
        { targetId: "char-3", targetName: "Archon Corvus Malakar", relation: "Transactional leverage", tensionLevel: "Moderate" },
        { targetId: "char-4", targetName: "Lysandra Locke", relation: "Extortionate trading partner", tensionLevel: "High" },
      ],
      appearances: [
        { chapter: 2, roleInScene: "Hosts the clandestine embassy auction" },
        { chapter: 7, roleInScene: "Reveals Malakar's hidden shipping manifests to Marcus" },
      ],
      developmentArc: "Confronted with the reality that gold cannot purchase air when the Meridian ruptures.",
    },
    {
      id: "char-7",
      name: "Captain Vane",
      role: "Commander of the Watchful Guard",
      faction: "City Watch",
      description: "A battle-worn soldier caught between personal honor and sworn duty to the Archon's increasingly tyrannical decrees.",
      traits: ["Disciplined", "Conflicted", "Weary"],
      motivations: ["Protect ordinary citizens from riots", "Maintain martial code"],
      relationships: [
        { targetId: "char-3", targetName: "Archon Corvus Malakar", relation: "Chain of command", tensionLevel: "High" },
      ],
      appearances: [
        { chapter: 1, roleInScene: "Quells the minor tremblor panic at the Great Market" },
        { chapter: 8, roleInScene: "Disobeys order to fire on civilian evacuations" },
      ],
      developmentArc: "The moral tipping point from unquestioning enforcer to open defiance.",
    },
    {
      id: "char-8",
      name: "Kaelen the Silent",
      role: "Chief Engineer of the Meridian Core",
      faction: "The Meridian Scholasticate",
      description: "Mute savant who maintains the inner gearworks. Communicates exclusively via slate diagrams and mathematical harmonics.",
      traits: ["Hyper-focused", "Incorruptible", "Detached"],
      motivations: ["Preserve mechanical harmonic equilibrium at all costs"],
      relationships: [
        { targetId: "char-1", targetName: "Marcus Thorne", relation: "Academic patron", tensionLevel: "Low" },
      ],
      appearances: [
        { chapter: 1, roleInScene: "Presents the anomalous core schematics to Marcus" },
        { chapter: 7, roleInScene: "Sabotages the emergency lockdown mechanisms" },
      ],
      developmentArc: "Recognizes that mathematics alone cannot account for human malice.",
    },
  ],

  locations: [
    {
      id: "loc-1",
      name: "The Glass Meridian",
      region: "Central Citadel",
      significance: "A 400-foot obelisk of crystallized silicate that stabilizes the city's geological faultline.",
      atmosphere: "Hums with an omnipresent low-frequency drone; refracted amber light bathes the precinct.",
      keyEvents: ["The initial fissure event in Chapter 1", "The catastrophic resonance climax in Chapter 8"],
    },
    {
      id: "loc-2",
      name: "The Sunk Hollows",
      region: "Subterranean Lower Tier",
      significance: "Former mining district now flooded with condensation runoff, inhabited by outcasts and dissenters.",
      atmosphere: "Damp, flickering phosphor lamps, echo of distant pumps, smell of ozone and wet limestone.",
      keyEvents: ["Marcus meets Elena's rebel cell in Chapter 3", "Barricade defense in Chapter 5"],
    },
    {
      id: "loc-3",
      name: "The Imperial Archives",
      region: "High Spires",
      significance: "Five hundred years of royal decrees, resonance blueprints, and suppressed astrological treatises.",
      atmosphere: "Vast vaulted ceilings, dust-motes suspended in slanting light, endless smell of dried parchment and beeswax.",
      keyEvents: ["Marcus deciphers the original 3rd-century schematics", "Midnight break-in by Directorate operatives"],
    },
    {
      id: "loc-4",
      name: "The Iron Quay",
      region: "Eastern Estuary",
      significance: "Industrial docking complex where ether crystals are offloaded from outer rim refineries.",
      atmosphere: "Screeching steam cranes, thick brackish mist, heavy security patrols with chained ward-hounds.",
      keyEvents: ["Clandestine transfer of illicit dampening rods", "Skirmish between City Watch and Siphon Guild"],
    },
    {
      id: "loc-5",
      name: "The Obsidian Bastion",
      region: "Northern Escarpment",
      significance: "Headquarters of Archon Malakar's secret police and interrogation cells.",
      atmosphere: "Brutalist black basalt, razor-sharp architectural angles, dead silence enforced by law.",
      keyEvents: ["Elena's mock trial in the backstory", "Marcus's interrogation in Chapter 2"],
    },
    {
      id: "loc-6",
      name: "The Whispering Conduit",
      region: "Mid-level Aqueducts",
      significance: "A subterranean acoustic chamber where water pressure carries whispered conversations miles away.",
      atmosphere: "Continuous rushing water, chilled spray, damp moss-covered masonry.",
      keyEvents: ["Lysandra passes secret Directorate movement logs to Marcus"],
    },
    {
      id: "loc-7",
      name: "The Grand Solarium",
      region: "High Council Palaces",
      significance: "Glass-domed conservatory where the elite hold seasonal banquets while the lower city suffers.",
      atmosphere: "Exotic night-blooming orchids, silver champagne goblets, polite murmurings masking poison.",
      keyEvents: ["The Winter Equinox Gala where the climax begins"],
    },
    {
      id: "loc-8",
      name: "The Sunken Vault 14",
      region: "Bedrock Core",
      significance: "Sealed chamber housing the primal harmonic tuning fork that originally anchored the Meridian.",
      atmosphere: "Extreme gravitational distortion, crystalline spikes growing from floor and ceiling.",
      keyEvents: ["Final calibration showdown between Marcus, Elena, and Malakar"],
    },
  ],

  storyEvents: [
    {
      id: "evt-1",
      chapter: 1,
      title: "The Fractured Harmony",
      summary: "During the noon chime, the Glass Meridian produces a discordant harmonic tone. A hair-line fracture appears on its southern facet, dropping Oakhaven's thermal barrier by three degrees.",
      significance: "First physical manifestation of the impending crisis; sparks Marcus's investigation.",
      charactersInvolved: ["Marcus Thorne", "Kaelen the Silent", "Captain Vane"],
      location: "The Glass Meridian",
      consequences: "Archival records are audited; Directorate attempts a news blackout.",
    },
    {
      id: "evt-2",
      chapter: 2,
      title: "The Archon's Edict",
      summary: "Marcus is summoned to the Obsidian Bastion. Archon Malakar orders the archival team to classify the fracture as natural seismic settling and demands all research notes surrendered.",
      significance: "Reveals Malakar's active role in covering up or manufacturing the collapse.",
      charactersInvolved: ["Marcus Thorne", "Archon Corvus Malakar"],
      location: "The Obsidian Bastion",
      consequences: "Marcus copies the forbidden blueprint onto silk and goes underground.",
    },
    {
      id: "evt-3",
      chapter: 3,
      title: "Descent to the Sunk Hollows",
      summary: "Marcus enters the flooded lower district with Lysandra's assistance. He seeks out Elena Vance, who reveals that the fracture was initiated by synthetic frequency siphon rods.",
      significance: "Brings the protagonist and deuteragonist into uneasy partnership.",
      charactersInvolved: ["Marcus Thorne", "Lysandra Locke", "Elena Vance", "Silas Ward"],
      location: "The Sunk Hollows",
      consequences: "They formulate a plan to forge a counter-harmonic dampener.",
    },
    {
      id: "evt-4",
      chapter: 4,
      title: "Ambush at Iron Quay",
      summary: "While attempting to intercept a shipment of Directorate ether coils, Marcus and Elena are betrayed by a dock foreman and pinned down by Iron Golems.",
      significance: "Demonstrates the reach of Malakar's informants and Elena's ruthless combat pragmatism.",
      charactersInvolved: ["Marcus Thorne", "Elena Vance", "Seraphina Voss"],
      location: "The Iron Quay",
      consequences: "Marcus loses his ancestral Scholasticate seal; Elena sustains a fractured arm.",
    },
    {
      id: "evt-5",
      chapter: 5,
      title: "The Lower City Uprising",
      summary: "The Directorate imposes a total ether rationing blockade on the lower tiers. The Siphon Guild initiates a general strike, barricading the aqueduct pumps.",
      significance: "Escalates political tension from personal intrigue to city-wide revolution.",
      charactersInvolved: ["Lysandra Locke", "Captain Vane", "Archon Corvus Malakar"],
      location: "The Sunk Hollows",
      consequences: "City Watch begins fracturing into loyalist and mutinous factions.",
    },
    {
      id: "evt-6",
      chapter: 6,
      title: "Forging the Glass Tether",
      summary: "In Silas Ward's underground kiln, Elena and Marcus craft the harmonic focusing prism using ancient, prohibited glass-blowing techniques.",
      significance: "Emotional turning point where Marcus and Elena reconcile their ideological differences.",
      charactersInvolved: ["Elena Vance", "Marcus Thorne", "Silas Ward"],
      location: "The Sunk Hollows",
      consequences: "The prism is completed, but Silas expends his remaining vitality.",
    },
    {
      id: "evt-7",
      chapter: 7,
      title: "Infiltration of the Equinox Gala",
      summary: "Disguised as high-caste archivists, Marcus and Elena infiltrate the Grand Solarium as Malakar prepares to initiate the forced ether siphon.",
      significance: "High stakes suspense sequence inside the heart of the oligarchic council.",
      charactersInvolved: ["Marcus Thorne", "Elena Vance", "Archon Corvus Malakar", "Seraphina Voss"],
      location: "The Grand Solarium",
      consequences: "Malakar is publicly confronted with shipping manifests; sirens blare.",
    },
    {
      id: "evt-8",
      chapter: 8,
      title: "The Shattered Meridian",
      summary: "Inside Sunken Vault 14, Marcus and Elena install the prism as the Meridian undergoes violent harmonic rupture. The Spire shatters into luminous dust, but its anchoring field is successfully internalized into the bedrock.",
      significance: "Climax and resolution; the old order falls, preserving the populace.",
      charactersInvolved: ["Marcus Thorne", "Elena Vance", "Archon Corvus Malakar", "Captain Vane"],
      location: "The Sunken Vault 14",
      consequences: "Oakhaven is saved from physical collapse, but transformed forever into a decentralized commune.",
    },
  ],

  continuityIssues: [
    {
      id: "cnt-1",
      severity: "Critical",
      title: "Aether Seal Loss vs. Unauthorized Sanctum Access",
      description: "In Chapter 4, Marcus explicitly loses his ancestral Scholasticate Seal during the skirmish at Iron Quay. However, in Chapter 7 (Scene 2), he uses 'his ancestral signet seal' to bypass the pneumatic lock at the Grand Solarium without explanation.",
      conflictingPassages: [
        {
          chapter: 4,
          passage: "'The brass chain snapped under the golem's claw. Marcus watched in horror as his grandfather's Scholasticate seal fell into the churning sludge of the Quay dock, lost forever.'",
          context: "Scene 4: Ambush at Dock 9",
        },
        {
          chapter: 7,
          passage: "'Pressing the cold bronze relief of his family's seal into the brass aperture, the pneumatic tumblers groaned and slid open with a whisper of steam.'",
          context: "Scene 2: Entering the East Galley",
        },
      ],
      explanation: "This is a direct material contradiction. If the seal was lost in the dock muck in Chapter 4, Marcus cannot use it to open the lock in Chapter 7 unless he recovered a duplicate or forged a counterfeit.",
      suggestedFixes: [
        "Change Chapter 7 to have Elena pick the lock using her harmonic tuning pin.",
        "Add a brief scene in Chapter 6 where Lysandra's divers recover the seal from the harbor silt.",
        "Change Chapter 4 so only the chain breaks and Marcus recovers the seal after rolling under the wagon.",
      ],
    },
    {
      id: "cnt-2",
      severity: "Warning",
      title: "Elena's Right Arm Injury Inconsistency",
      description: "Elena fractures her right forearm in Chapter 4, requiring an ether-splint. In Chapter 6, she is described as hammering the crucible tong with 'both hands wielding equal force'.",
      conflictingPassages: [
        {
          chapter: 4,
          passage: "'The blunt haft of the watchman's mace caught her right arm. The bone gave way with a sickening crack; she gasped, clutching her limp wrist.'",
          context: "Scene 5: Escape through the sewer grate",
        },
        {
          chapter: 6,
          passage: "'Sweat dripping from her brow, Elena gripped the heavy iron tongs in her right hand and the shaping mallet in her left, hammering the molten silicate with relentless, balanced strikes.'",
          context: "Scene 3: The Secret Kiln",
        },
      ],
      explanation: "A compound fracture would prevent heavy blacksmithing hammer strikes only 36 hours later unless a magical acceleration occurred.",
      suggestedFixes: [
        "Specify that Elena applied Silas's restorative ether-salve which temporarily numbed and stabilized the bone.",
        "Have Silas or Marcus wield the heavy mallet while Elena guides the focal orientation with one hand.",
      ],
    },
    {
      id: "cnt-3",
      severity: "Suggestion",
      title: "Timeline Discrepancy: Equinox Countdown",
      description: "In Chapter 2, Malakar mentions 'fourteen days until the Equinox alignment'. By Chapter 5, after three days of story events, an NPC mentions 'only three days remain'.",
      conflictingPassages: [
        {
          chapter: 2,
          passage: "'We have fourteen sunsets until the equinox alignment tears this plateau apart,' Malakar growled.",
          context: "Scene 1: High Office",
        },
        {
          chapter: 5,
          passage: "'Three days! That's all we have before the solstice bells toll and the reservoirs boil over!'",
          context: "Scene 2: Market Barricade",
        },
      ],
      explanation: "Roughly 8 calendar days are unaccounted for between Chapters 2 and 5.",
      suggestedFixes: [
        "Adjust Chapter 2 dialogue to 'seven sunsets until the equinox alignment'.",
        "Add a transitional paragraph in Chapter 4 indicating an extended five-day surveillance stakeout.",
      ],
    },
  ],

  styleAnalysis: {
    lexicalDiversity: 0.76, // 76% unique word variety
    averageSentenceLength: 18.4, // words per sentence
    dialogueToNarrationRatio: 38, // 38% dialogue, 62% narration
    pacingScore: {
      exposition: 28,
      action: 32,
      dialogue: 24,
      reflection: 16,
    },
    dominantTone: "Atmospheric, Intellectual & Suspenseful",
    toneDistribution: {
      "Atmospheric Dread": 34,
      "Intellectual Inquest": 28,
      "Melancholy & Regret": 18,
      "Kinetic Urgency": 14,
      "Tender Alliance": 6,
    },
    signaturePatterns: [
      {
        pattern: "Tactile sensory contrasts (cold stone vs. warm ether)",
        frequency: "High (4.2 per 1,000 words)",
        example: "'The frost on the iron sill burned against his knuckles, while the core below thrummed with a feverish, violet warmth.'",
        notes: "Effective at reinforcing the dichotomy between institutional sterility and volatile human passion.",
      },
      {
        pattern: "Periodic sentences with trailing participial phrases",
        frequency: "Moderate (1.8 per 1,000 words)",
        example: "'He watched the amber silt settle through the glass vial, noting the faint concentric rings where the vibration had arrested its descent.'",
        notes: "Gives Marcus's internal monologue an authentic scholarly rhythm.",
      },
      {
        pattern: "Architectural & geological metaphors for human emotion",
        frequency: "High (3.6 per 1,000 words)",
        example: "'Her silence was not an absence of intent, but a load-bearing arch waiting for the keystones to buckle.'",
        notes: "Consistent motif tying the city's crumbling infrastructure to the characters' psychological states.",
      },
    ],
    vocabularyBreakdown: [
      {
        tier: "Specialized Architectural & Mineral Lore",
        percentage: 16,
        sampleTerms: ["keystone", "vitrification", "resonance glyph", "silicate", "pneumatic", "aqueduct", "strata"],
      },
      {
        tier: "Sensory & Atmospheric Prose",
        percentage: 38,
        sampleTerms: ["brackish", "discordant", "luminescent", "calcified", "fissure", "chilled", "amber"],
      },
      {
        tier: "Standard Literary Narrative",
        percentage: 46,
        sampleTerms: ["consequence", "perceived", "hesitation", "sanctuary", "protocol", "discretion"],
      },
    ],
  },

  aiPresets: [
    {
      id: "ai-1",
      question: "Would Marcus realistically forgive Elena at this point in the story?",
      category: "Character Arc",
      answer: "Based on Marcus's psychological profile established across Chapters 1-4, forgiveness is the incorrect emotional framework. Marcus does not harbor personal vengeance against Elena; rather, his friction stems from cognitive dissonance. For four years, he accepted the Scholasticate's canon that Elena's unorthodox experiments caused the First Tremblor. As revealed in Chapter 4 at the Iron Quay, when Elena demonstrates that the sabotage was executed using Directorate frequency keys, Marcus's hostility shifts from moral indignation to professional shame. By Chapter 6, he does not 'forgive' her—he aligns with her out of intellectual culpability and shared ethical survival.",
      citations: [
        { chapter: 2, context: "Marcus audits the expulsion decree and notes missing witness cross-examinations." },
        { chapter: 4, context: "Elena demonstrates the inverted polarity of the Quay ether siphons." },
      ],
    },
    {
      id: "ai-2",
      question: "What are the unresolved mysteries in this manuscript?",
      category: "World Lore",
      answer: "Analysis reveals three primary unresolved narrative threads:\n1. **The True Fate of Master Vance:** Elena's mentor was reported dead in the Sunk Hollows, yet Silas Ward hints in Chapter 3 that 'some glass never melts, it merely recedes.'\n2. **The Origin of the Meridian's Singing:** Is the Glass Meridian truly an artificial beacon constructed by men, or was it carved from an ancient petrified organism discovered in the bedrock?\n3. **Seraphina Voss's Ultimate Patron:** Who is purchasing the refined ether offloaded from the Iron Quay? Her ledger entries in Chapter 7 reference 'The Sovereign Abroad', suggesting a foreign empire awaiting Oakhaven's collapse.",
      citations: [
        { chapter: 3, context: "Silas Ward's fireside conversation with Elena." },
        { chapter: 7, context: "The encrypted manifests intercepted in the Grand Solarium." },
      ],
    },
    {
      id: "ai-3",
      question: "Which characters have the most complicated relationships?",
      category: "Character Arc",
      answer: "The relationship between **Elena Vance and Silas Ward** carries the highest emotional subtext. Silas was the master craftsman who built the Spire's keystone, while Elena's experimental tuning accidentally cracked it four years prior. Silas took the public blame to spare her life, resulting in his blinding. Elena's defensive, prickly demeanor masks profound survivor's guilt. Every time she wields a glassmaking tool in his presence, their dialogue adopts a strained, ceremonial cadence that masks unspoken grief.",
      citations: [
        { chapter: 3, context: "Elena hesitates before crossing Silas's threshold." },
        { chapter: 6, context: "Silas guides Elena's hands across the hot crucible." },
      ],
    },
    {
      id: "ai-4",
      question: "Identify potential weaknesses in the current narrative.",
      category: "Narrative Craft",
      answer: "Three narrative weaknesses require authorial intervention:\n1. **Chapter 5 Pacing Lag:** The transition between the Quay ambush (Ch 4) and the Lower City strike (Ch 5) spends 4,200 words on logistics and supply lines, causing a dip in narrative momentum right before the climax.\n2. **Underdeveloped Antagonist Stakes:** Archon Malakar's motivations currently lean toward standard bureaucratic despotism. Giving him a personal, sympathetic loss tied to the Meridian's past would elevate his ideological debate with Marcus.\n3. **Continuity Contradiction (Seal & Arm):** Marcus's loss of his signet seal in Ch 4 contradicts his lock-picking in Ch 7, and Elena's broken arm cures too abruptly in Ch 6.",
      citations: [
        { chapter: 5, context: "Extensive dialogue regarding grain rations and pump pressure." },
        { chapter: 7, context: "The signet seal discrepancy at the Solarium gate." },
      ],
    },
    {
      id: "ai-5",
      question: "What would happen if Elena discovered the truth about the Meridian before Chapter 6?",
      category: "Continuity",
      answer: "If Elena learned that the Meridian was intentionally engineered with a planned 500-year expiration date by its original architects (including Silas's ancestors), she would likely refuse to forge the dampening tether. Her character motivation is predicated on restoring pure harmony to a corrupted machine. Discovering that the machine was designed to self-destruct to replenish the planetary aquifer would induce an existential crisis, turning her against Silas and aborting the alliance with Marcus prematurely.",
      citations: [
        { chapter: 1, context: "Scholasticate records regarding the Foundation Era covenants." },
        { chapter: 6, context: "Silas's dying confession regarding the silicate half-life." },
      ],
    },
  ],

  creativeSnippets: [
    {
      id: "snip-1",
      title: "Marcus Confronts Elena at the Flooded Canal",
      chapter: 3,
      originalText: "Marcus stopped at the edge of the dark green water. Elena was sitting on an overturned timber, holding an oil lamp. She looked up and sneered at him. 'You shouldn't have come down here, Marcus. You smell like old books and government lies.' Marcus adjusted his spectacles. 'The Meridian has fractured. I saw the telemetry myself.' Elena's expression darkened. 'Then we are already dead. You just took four years to realize it.'",
      variations: [
        {
          instruction: "Rewrite in established writing style with heightened sensory atmosphere and restrained emotional tension.",
          styleModifier: "Atmospheric & Subtext-Rich",
          revisedText: "Marcus halted where the flagstones surrendered to the brackish canal, the waterline lapping against the soles of his calfskin boots with a quiet, sucking cadence. Through the mist, Elena Vance was little more than a silhouette perched upon a salvaged timber, her storm-lantern casting a jaundiced halo across the surface. When she tilted her chin, the light caught the scar bisecting her cheekbone—a relic of the Tribunal he had failed to protest.\n\n'You carry the scent of archival beeswax and state compromise, Marcus,' she said, her voice devoid of venom, which made it far worse. 'The damp air down here will spoil your parchment.'\n\n'The third facet has fractured,' he replied evenly, though his throat felt like calcified lime. 'The harmonic drift registered four tenths of a second past prime.'\n\nElena did not laugh. She merely watched the amber oil circle inside the lantern glass. 'Then the clock hasn't begun ticking, Consul. It ran out four winters ago. You've simply arrived in time to inspect the wreckage.'",
          editorialExplanation: "Replaced flat declarative statements with environmental subtext. Integrated the author's signature contrast between archival sterility ('beeswax', 'state compromise') and physical decay ('brackish canal', 'jaundiced halo'). Deepened the emotional rift through quiet resignation rather than petty sneering.",
        },
        {
          instruction: "Sharpen pacing for high-stakes urgency while maintaining intellectual prose.",
          styleModifier: "Kinetic & Razor-Sharp",
          revisedText: "The canal stench hit Marcus first—rotting timber, stagnant brine, and the sharp copper tang of unrefined ether. He found Elena crouched over an open water gate, grease-stained fingers tracing the brass teeth of a subterranean regulator.\n\n'Step back or I trip the release valve,' she said without looking up.\n\n'Facet three cracked at noon,' Marcus snapped, dropping the wax-sealed dispatch cylinder onto the flagstones between them. The brass ring clattered loudly in the cavernous quiet. 'Four tenths harmonic variance. The aqueduct vaults are already heating up.'\n\nElena froze. Her hand hovered above the valve. When she raised her head, the caustic mockery was gone, replaced by the cold, calculating focus of a condemned architect watching the scaffold take shape. 'How long before the Directorate realizes the siphons failed?'\n\n'Thirty-six hours,' Marcus said. 'Then the bedrock fractures.'",
          editorialExplanation: "Accelerated the scene tempo. Added kinetic action (tracing brass teeth, dropping the cylinder with a sharp clatter) and shortened sentence lengths to reflect the escalating crisis while preserving technical precision.",
        },
      ],
    },
    {
      id: "snip-2",
      title: "The Equinox Banquet Confrontation",
      chapter: 7,
      originalText: "Archon Malakar smiled as Marcus approached the dais. 'Consul Thorne. I thought you were confined to the library.' Marcus showed him the ledger. 'These shipping manifests prove you sent thirty resonance coils to the outer docks.' Malakar didn't blink. 'Politics requires sacrifices, Marcus. You think the people care about truth? They care about heat.'",
      variations: [
        {
          instruction: "Elevate dialogue with political subtext, venomous aristocratic restraint, and luxurious sensory details.",
          styleModifier: "Aristocratic Intrigue & Menace",
          revisedText: "Beneath the vaulted crystal dome of the Grand Solarium, the light of three hundred beeswax tapers reflected in Archon Malakar's silver goblet like dancing embers. When Marcus stepped into the dais's perimeter, the Archon did not summon the guards; he merely motioned for a servant to pour another measure of spiced vintage.\n\n'Consul Thorne,' Malakar murmured, smoothing the velvet lapel of his doublet with measured elegance. 'I had imagined you safely sequestered among your beloved folio volumes, nursing a scholarly headache.'\n\nMarcus placed the vellum ledger upon the damask tablecloth between a silver tray of candied figs and a bowl of melting snow. The wax seals of the Iron Quay were broken, the ink still smelling faintly of salt damp.\n\n'Thirty resonance coils, Archon,' Marcus said, his voice measured enough not to disturb the harpist twenty paces distant. 'Diverted from the primary dampening circuit during the third watch. Half the lower wards froze last night so that your private foundry could vitrify this glass.'\n\nMalakar looked at the ledger, then took a delicate sip of wine. 'The mob does not worship the architecture of the hearth, Marcus. They worship the warmth. You offer them an immaculate mathematical proof of their impending doom; I offer them winter survival on my terms.'",
          editorialExplanation: "Transformed a blunt interrogation into a battle of philosophical worldviews set against aristocratic decadence. Contrasted the freezing lower wards with melting snow in silver bowls and candied figs.",
        },
      ],
    },
  ],
};
