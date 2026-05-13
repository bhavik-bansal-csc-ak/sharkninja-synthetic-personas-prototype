// Synthetic-persona simulations. All findings are directional simulation output.
export const simulations = [
  {
    id: "C-2041",
    archive: "ARCH-4829-PX",
    preset: "Urban Parent",
    title: "Cordless Hand Vac",
    sku: "WV410BL",
    domain: "floor",
    domainLabel: "Floor Care",
    market: "Mexico",
    audience: 500,
    fielded: "Apr 22, 2026",
    grounding: "ARO 2026 Q1",
    status: "synthesized",
    statusLabel: "Synthesized",
    desc: "How premium-tier urban parents in Mexico position the Shark cordless hand vac vs. a primary upright — and what would unlock willingness to pay 25% more.",
    sentiment: { pos: 64, neu: 23, neg: 13 },
    headline: "Reframed as primary vacuum",
    role: {
      archetype: "Always-Ready Tool",
      para:
        "Urban-apartment personas frame this as their <strong>primary</strong> vacuum — a wall-mounted always-ready tool, not a backup. Premium tier expects it to retire the upright entirely.",
      stats: [
        { v: "78%", k: "Premium Appeal" },
        { v: "64%", k: "Positive Signal" },
        { v: "High", k: "Switch Intent" },
      ],
    },
    frictions: [
      {
        lb: "Battery runtime ambiguity",
        sev: "high",
        desc:
          "9 of 10 personas across tiers raised confusion about advertised vs. real runtime. Premium personas demanded a single 'real-world' minute figure.",
      },
      {
        lb: "Filter maintenance",
        sev: "med",
        desc:
          "Personas were unsure when to rinse vs. replace HEPA. Surfacing a maintenance schedule would unlock recommendation behaviour.",
      },
      {
        lb: "Dock aesthetics",
        sev: "low",
        desc:
          "Design-led personas wanted a finish option that felt 'intentional on the wall' — anodised metal or fabric-wrapped.",
      },
    ],
    demographics: [
      { lb: "Apartment dwellers", v: 88 },
      { lb: "Cordless preference", v: 76 },
      { lb: "Price sensitivity", v: 42 },
    ],
    quotes: [
      {
        q: "It lives on the wall — that's the whole point. If I have to dig it out, I'd just use the big vacuum.",
        who: "Isabel Morales · Urban Parent · Monterrey",
        alt: false,
      },
      {
        q: "I'd pay another 1,200 pesos if it came with a real pet-hair attachment, not a generic brush.",
        who: "Jorge Silva · Family Handyman · Mexico City",
        alt: true,
      },
    ],
    summary: [
      "Premium-tier urban parents accept this as a primary device when battery runtime is named in real-world minutes.",
      "Pet-hair attachment is the most-mentioned premium unlock — willingness to pay rises ~9pp when bundled.",
      "Wall dock aesthetics gate adoption with design-led personas; offer at least one premium finish.",
    ],
    research: {
      exec:
        "Cordless hand vac concept clears base-recall ceiling among Urban Parents and Family Handyman cohorts (38.8% Q2 unaided recall) but loses 12.9pp at the consideration\u2192purchase step (Q5). Premium-tier acceptance hinges on a real-world battery minute figure (Q11) and a named pet-hair attachment (Q23). Wall-dock aesthetics are the gating friction in design-led cohorts (Q17). Q-mapped to the Aaru Lumen 30-question screener.",
      objectives: [
        "Measure shelf visibility and brand recognition against existing cordless hand-vac SKUs in a realistic retail set.",
        "Evaluate competitive positioning and purchase drivers across Urban Parent and Family Handyman cohorts.",
        "Optimize naming, claims, and value communication for the wall-mounted always-ready positioning.",
      ],
      cohorts: ["Urban Parents", "Family Handyman", "Multi-gen Host", "Other"],
      agentsPerCohort: 125,
      questions: { total: 30, free: 8, choice: 14, ranking: 2, matrix: 6 },
      competitive: [
        { brand: "Shark WV410BL", recall: 38.8, considered: 25.9, purchased: 12.9 },
        { brand: "Dyson V8 Slim",  recall: 28.2, considered: 18.8, purchased: 14.8 },
        { brand: "Bissell Pet Hair", recall: 19.3, considered: 8.3,  purchased: 5.0 },
      ],
      barriers: [
        { cohort: "Urban Parents",  premium: 22.4, mid: 31.1 },
        { cohort: "Family Handyman", premium: 28.9, mid: 38.2 },
        { cohort: "Multi-gen Host",  premium: 34.6, mid: 42.5 },
        { cohort: "Other",           premium: 39.1, mid: 47.8 },
      ],
      claimAppeal: [
        { claim: "30-min real-world battery", c0: 1.4, c1: 2.1, c2: 3.4, c3: 3.0 },
        { claim: "Wall-mount always-ready dock", c0: 1.8, c1: 3.0, c2: 3.8, c3: 3.6 },
        { claim: "Pet-hair attachment", c0: 3.0, c1: 1.6, c2: 4.0, c3: 3.2 },
        { claim: "HEPA filtration", c0: 3.4, c1: 3.8, c2: 2.8, c3: 2.2 },
      ],
      featurePriority: [
        { feature: "Battery runtime", c0: 78, c1: 65, c2: 52, c3: 48 },
        { feature: "Wall dock",       c0: 62, c1: 38, c2: 28, c3: 35 },
        { feature: "Pet attachment",  c0: 55, c1: 81, c2: 42, c3: 48 },
        { feature: "HEPA filter",     c0: 60, c1: 55, c2: 41, c3: 38 },
      ],
      expectations: [
        { bucket: "Primary device",          c0: 22, c1: 18, c2: 12, c3: 8  },
        { bucket: "Always-ready backup",     c0: 45, c1: 35, c2: 28, c3: 22 },
        { bucket: "Spot-clean only",         c0: 25, c1: 30, c2: 32, c3: 28 },
        { bucket: "Won\u2019t replace upright", c0: 8,  c1: 17, c2: 28, c3: 42 },
      ],
      goldStandard: [
        { cohort: "Urban Parents",  recognizes: 22.4, perceivesLow: 18.6, qualityPrio: 31.2 },
        { cohort: "Family Handyman", recognizes: 18.9, perceivesLow: 25.1, qualityPrio: 28.4 },
        { cohort: "Multi-gen Host",  recognizes: 15.2, perceivesLow: 31.7, qualityPrio: 22.6 },
        { cohort: "Other",           recognizes: 12.1, perceivesLow: 38.4, qualityPrio: 18.9 },
      ],
      funnel: [
        { stage: "Outside Category", v: 32, agents: 1600 },
        { stage: "Aware, Never Considered", v: 24, agents: 1200 },
        { stage: "Considered, Never Bought", v: 19, agents: 950 },
        { stage: "Current Owners", v: 16, agents: 800 },
        { stage: "Recent Abandoners", v: 9,  agents: 450 },
      ],
    },
  },
  {
    id: "C-2042",
    archive: "ARCH-4830-PX",
    preset: "All Personas",
    title: "Foodi 10-in-1 SmartLid",
    sku: "FD402",
    domain: "kitchen",
    domainLabel: "Kitchen",
    market: "United States",
    audience: 750,
    fielded: "Apr 22, 2026",
    grounding: "ARO 2026 Q1",
    status: "analyzing",
    statusLabel: "Analyzing",
    desc: "Which features push the Foodi from a 'nice-to-have' kitchen counter device to a $399 must-have purchase.",
    sentiment: { pos: 58, neu: 27, neg: 15 },
    headline: "One-pot family dinners drive premium",
    role: {
      archetype: "Time-Saving Anchor",
      para:
        "Premium upgrade is unlocked by <strong>'one-pot family dinner'</strong> jobs — not by feature counts. Personas reject the 10-in-1 frame; they buy the dinner-tonight frame.",
      stats: [
        { v: "71%", k: "Premium Appeal" },
        { v: "58%", k: "Positive Signal" },
        { v: "Mid", k: "Switch Intent" },
      ],
    },
    frictions: [
      {
        lb: "Counter footprint",
        sev: "high",
        desc:
          "Personas across tiers cite size as the #1 blocker even when the feature set is desirable. Premium tier asks for a built-in / under-counter SKU.",
      },
      {
        lb: "Cleaning steps",
        sev: "med",
        desc:
          "Multi-step disassembly for cleaning frustrates daily-use personas. Auto-clean cycle would be a measurable unlock.",
      },
      {
        lb: "Recipe discoverability",
        sev: "low",
        desc:
          "Personas want curated 'tonight you can make X' content delivered weekly. Currently must search the app.",
      },
    ],
    demographics: [
      { lb: "Family households", v: 82 },
      { lb: "Time-poor cooks", v: 71 },
      { lb: "Counter < 30in", v: 38 },
    ],
    quotes: [
      {
        q: "I don't need 10 functions, I need to feed four people in 30 minutes.",
        who: "Michael Chen · Smart-home Dad · Austin",
        alt: false,
      },
      {
        q: "It looks like it owns the counter, not me.",
        who: "Rachel Nguyen · Single Professional · Portland",
        alt: true,
      },
    ],
    summary: [
      "Lead with 'one-pan dinner' framing in messaging; drop the 10-in-1 count from primary positioning.",
      "Counter footprint is the gating concern — a compact (≤9-qt) SKU would open the apartment cohort.",
      "Auto-clean lid cycle would unlock daily use among premium personas.",
    ],
    research: {
      exec:
        "Foodi 10-in-1 SmartLid clears the premium-appeal threshold (71% Q26 Top-2-Box) but loses purchase momentum at the counter-footprint frame (Q27). Personas reject the 10-in-1 frame and convert on the one-pot family dinner positioning (Q15). Auto-clean lid is the highest-impact unlock claim across all four cohorts (Q23).",
      objectives: [
        "Identify which features push the Foodi from a nice-to-have device to a $399 must-have purchase.",
        "Quantify counter-footprint resistance and validate compact-SKU demand.",
        "Test whether one-pot-dinner messaging outperforms the 10-in-1 count.",
      ],
      cohorts: ["Smart-home Dad", "Single Professional", "Family Handyman", "Other"],
      agentsPerCohort: 187,
      questions: { total: 30, free: 6, choice: 16, ranking: 2, matrix: 6 },
      competitive: [
        { brand: "Foodi FD402",  recall: 42.1, considered: 24.8, purchased: 11.4 },
        { brand: "Instant Pot Pro", recall: 51.6, considered: 30.2, purchased: 18.7 },
        { brand: "Cuisinart Steam", recall: 18.4, considered: 9.1,  purchased: 4.8 },
      ],
      barriers: [
        { cohort: "Smart-home Dad",      premium: 18.2, mid: 28.4 },
        { cohort: "Single Professional", premium: 41.7, mid: 52.3 },
        { cohort: "Family Handyman",     premium: 24.1, mid: 32.8 },
        { cohort: "Other",               premium: 36.4, mid: 44.5 },
      ],
      claimAppeal: [
        { claim: "One-pot family dinner", c0: 1.6, c1: 2.4, c2: 1.8, c3: 2.5 },
        { claim: "Crisp + pressure in one", c0: 2.1, c1: 2.8, c2: 2.4, c3: 2.6 },
        { claim: "10-in-1 functionality", c0: 3.4, c1: 3.6, c2: 3.5, c3: 3.4 },
        { claim: "Auto-clean SmartLid", c0: 1.8, c1: 1.9, c2: 2.0, c3: 2.2 },
      ],
      featurePriority: [
        { feature: "Counter footprint",   c0: 58, c1: 89, c2: 62, c3: 71 },
        { feature: "Cleanup ease",        c0: 76, c1: 71, c2: 68, c3: 74 },
        { feature: "Recipe library",      c0: 54, c1: 48, c2: 61, c3: 52 },
        { feature: "Pressure + crisp",    c0: 82, c1: 64, c2: 78, c3: 71 },
      ],
      expectations: [
        { bucket: "Dinner-tonight tool",   c0: 38, c1: 28, c2: 41, c3: 32 },
        { bucket: "Weekend hobby device",  c0: 22, c1: 18, c2: 16, c3: 24 },
        { bucket: "Replaces 3 appliances", c0: 28, c1: 14, c2: 24, c3: 22 },
        { bucket: "Won\u2019t fit kitchen",   c0: 12, c1: 40, c2: 19, c3: 22 },
      ],
      goldStandard: [
        { cohort: "Smart-home Dad",      recognizes: 38.1, perceivesLow: 12.4, qualityPrio: 41.8 },
        { cohort: "Single Professional", recognizes: 24.7, perceivesLow: 22.8, qualityPrio: 32.4 },
        { cohort: "Family Handyman",     recognizes: 31.2, perceivesLow: 18.6, qualityPrio: 36.9 },
        { cohort: "Other",               recognizes: 22.4, perceivesLow: 28.1, qualityPrio: 28.7 },
      ],
      funnel: [
        { stage: "Outside Category", v: 18, agents: 1400 },
        { stage: "Aware, Never Considered", v: 22, agents: 1700 },
        { stage: "Considered, Never Bought", v: 28, agents: 2200 },
        { stage: "Current Owners", v: 24, agents: 1800 },
        { stage: "Recent Abandoners", v: 8,  agents: 600 },
      ],
    },
  },
  {
    id: "C-2043",
    archive: "ARCH-4831-PX",
    preset: "Rental Renovator",
    title: "FlexStyle Air Styler",
    sku: "HD440",
    domain: "beauty",
    domainLabel: "Beauty",
    market: "Germany",
    audience: 1000,
    fielded: "Apr 22, 2026",
    grounding: "ARO 2026 Q1",
    status: "synthesized",
    statusLabel: "Synthesized",
    desc:
      "How DACH consumers across three age bands respond to FlexStyle positioning. Test whether sustainability cues outperform performance cues for 25–34 renters.",
    sentiment: { pos: 71, neu: 19, neg: 10 },
    headline: "Sustainability beats performance for renters",
    role: {
      archetype: "Sustainability Anchor",
      para:
        "Sustainability framing outperforms performance framing among 25–34 renters by <strong>~22pp on appeal</strong>. Older cohorts still index on heat-damage protection above all else.",
      stats: [
        { v: "82%", k: "Premium Appeal" },
        { v: "71%", k: "Positive Signal" },
        { v: "+22pp", k: "Sustainability Lift" },
      ],
    },
    frictions: [
      {
        lb: "Heat-damage perception",
        sev: "high",
        desc:
          "35–54 cohort treats high heat as risky regardless of brand promises. 'Damage-safe mode' would shift sentiment ~14pp.",
      },
      {
        lb: "Repairability",
        sev: "med",
        desc:
          "DACH personas weight self-replaceable parts highly — a missing battery-swap message is leaving signal on the table.",
      },
      {
        lb: "Cord styling",
        sev: "low",
        desc: "Younger personas note that the cord visually clutters their bathroom routine; cordless variant requested.",
      },
    ],
    demographics: [
      { lb: "25–34 renters", v: 91 },
      { lb: "Sustainability priority", v: 78 },
      { lb: "Heat-damage anxiety (35+)", v: 67 },
    ],
    quotes: [
      {
        q: "Sustainability matters more than ten heat settings. If I can swap the battery I'll keep it 7 years.",
        who: "Sophie Weber · Rental Renovator · Hamburg",
        alt: false,
      },
      {
        q: "Show me proof it won't fry my hair before I trust the box.",
        who: "Anna Kowalski · Pragmatic Parent · Warsaw",
        alt: true,
      },
    ],
    summary: [
      "Lead with self-replaceable battery and recyclable parts in 25–34 renter creative.",
      "Add explicit 'damage-safe' calibration mode and lead with it for 35–54 cohort.",
      "Cordless line extension would close the gap with younger personas.",
    ],
    research: {
      exec:
        "FlexStyle clears premium-tier appeal at \u20ac349 (82% Top-2-Box Q26) but only with explicit cable-management copy (Q23). Sustainability framing outperforms performance framing among 25\u201334 Rental Renovators by 22pp on appeal (Q15). Heat-damage anxiety in the 35\u201354 cohort is the gating purchase frame (Q27).",
      objectives: [
        "Test pricing sensitivity at \u20ac299/349/399 across three German age bands.",
        "Validate whether sustainability cues outperform performance cues for 25\u201334 renters.",
        "Identify the dominant heat-damage perception driver in the 35\u201354 cohort.",
      ],
      cohorts: ["Rental Renovator", "Pragmatic Parent", "Design-led Adopter", "Other"],
      agentsPerCohort: 250,
      questions: { total: 30, free: 8, choice: 12, ranking: 4, matrix: 6 },
      competitive: [
        { brand: "FlexStyle HD440",  recall: 41.2, considered: 32.1, purchased: 18.4 },
        { brand: "Dyson AirWrap",    recall: 78.4, considered: 41.6, purchased: 22.8 },
        { brand: "Remington ProAir", recall: 24.8, considered: 14.2, purchased: 8.9 },
      ],
      barriers: [
        { cohort: "Rental Renovator",   premium: 14.6, mid: 22.4 },
        { cohort: "Pragmatic Parent",   premium: 32.1, mid: 41.8 },
        { cohort: "Design-led Adopter", premium: 18.2, mid: 26.4 },
        { cohort: "Other",              premium: 38.6, mid: 44.9 },
      ],
      claimAppeal: [
        { claim: "Self-replaceable battery", c0: 1.2, c1: 2.8, c2: 2.4, c3: 3.0 },
        { claim: "Cable management",         c0: 1.8, c1: 1.6, c2: 2.0, c3: 2.4 },
        { claim: "Damage-safe heat cap",     c0: 2.6, c1: 1.4, c2: 2.8, c3: 2.2 },
        { claim: "AirWrap-tier performance", c0: 2.4, c1: 2.6, c2: 1.6, c3: 2.4 },
      ],
      featurePriority: [
        { feature: "Sustainability", c0: 88, c1: 52, c2: 64, c3: 48 },
        { feature: "Cable mgmt",     c0: 78, c1: 71, c2: 81, c3: 72 },
        { feature: "Damage-safe",    c0: 42, c1: 86, c2: 54, c3: 71 },
        { feature: "Hero attachment", c0: 51, c1: 38, c2: 72, c3: 44 },
      ],
      expectations: [
        { bucket: "\u20ac299 acceptable",   c0: 28, c1: 41, c2: 18, c3: 38 },
        { bucket: "\u20ac349 acceptable",   c0: 48, c1: 36, c2: 42, c3: 34 },
        { bucket: "\u20ac399 acceptable",   c0: 18, c1: 8,  c2: 32, c3: 14 },
        { bucket: "Won\u2019t pay premium", c0: 6,  c1: 15, c2: 8,  c3: 14 },
      ],
      goldStandard: [
        { cohort: "Rental Renovator",   recognizes: 28.4, perceivesLow: 14.6, qualityPrio: 38.2 },
        { cohort: "Pragmatic Parent",   recognizes: 18.7, perceivesLow: 32.8, qualityPrio: 22.4 },
        { cohort: "Design-led Adopter", recognizes: 41.2, perceivesLow: 11.4, qualityPrio: 44.8 },
        { cohort: "Other",              recognizes: 22.1, perceivesLow: 24.6, qualityPrio: 26.9 },
      ],
      funnel: [
        { stage: "Outside Category", v: 28, agents: 2800 },
        { stage: "Aware, Never Considered", v: 32, agents: 3200 },
        { stage: "Considered, Never Bought", v: 22, agents: 2200 },
        { stage: "Current Owners", v: 12, agents: 1200 },
        { stage: "Recent Abandoners", v: 6,  agents: 600 },
      ],
    },
  },
  {
    id: "C-2044",
    archive: "ARCH-4832-PX",
    preset: "All Personas",
    title: "Woodfire Outdoor Grill",
    sku: "OG701",
    domain: "outdoor",
    domainLabel: "Outdoor Cooking",
    market: "United Kingdom",
    audience: 500,
    fielded: "Apr 21, 2026",
    grounding: "ARO 2026 Q1",
    status: "synthesized",
    statusLabel: "Synthesized",
    desc:
      "Where the Woodfire fits in UK consumers' outdoor cooking repertoire — primary grill, smoker upgrade, or weekend toy?",
    sentiment: { pos: 67, neu: 22, neg: 11 },
    headline: "Replaces two devices, not one",
    role: {
      archetype: "Two-in-One Replacement",
      para:
        "UK personas position this as a <strong>smoker and grill upgrade</strong> — replacing two devices, not just one. Pellet supply convenience is the gating purchase question.",
      stats: [
        { v: "74%", k: "Premium Appeal" },
        { v: "67%", k: "Positive Signal" },
        { v: "2-for-1", k: "Replaces" },
      ],
    },
    frictions: [
      {
        lb: "Pellet supply chain",
        sev: "high",
        desc:
          "Personas flag pellet sourcing as the #1 commitment hesitation. A subscription option would directly unlock purchase intent.",
      },
      {
        lb: "Smoke vs. heat trade",
        sev: "med",
        desc:
          "Mid-tier personas struggle to predict whether 'smoky' will dominate when grilling — wanted a one-knob smoke slider.",
      },
      {
        lb: "Cover storage",
        sev: "low",
        desc:
          "Personas want a hard cover that integrates with the unit so it can live on the patio year-round.",
      },
    ],
    demographics: [
      { lb: "Garden owners", v: 83 },
      { lb: "BBQ enthusiasts", v: 71 },
      { lb: "Pellet sourcing concern", v: 62 },
    ],
    quotes: [
      {
        q: "Smoker on Saturday, grill on Sunday — that's the whole pitch for me.",
        who: "Liam O'Connor · BBQ Enthusiast · Manchester",
        alt: false,
      },
      {
        q: "Bin the second device — but only if pellets are easy to get.",
        who: "Emma Smith · Multi-gen Host · Leeds",
        alt: true,
      },
    ],
    summary: [
      "Bundle a 12-month pellet subscription at launch; this is the gating commitment frame.",
      "Add a single-knob smoke slider to remove configuration anxiety.",
      "Weatherproof integrated cover would unlock year-round patio positioning.",
    ],
    research: {
      exec:
        "UK personas position Woodfire as a smoker AND grill upgrade (replacing two devices, Q15). Pellet-supply convenience is the #1 commitment hesitation (Q11). A subscription bundle would directly unlock purchase intent. Smoke-vs-heat trade-off creates configuration anxiety in mid-tier cohorts (Q27).",
      objectives: [
        "Map where Woodfire fits in UK consumers\u2019 outdoor cooking repertoire.",
        "Quantify pellet-supply hesitation and test subscription bundle appeal.",
        "Measure smoke-vs-heat configuration confidence across enthusiast and casual cohorts.",
      ],
      cohorts: ["Multi-gen Host", "Family Handyman", "Design-led Adopter", "Other"],
      agentsPerCohort: 125,
      questions: { total: 30, free: 10, choice: 12, ranking: 2, matrix: 6 },
      competitive: [
        { brand: "Shark OG701",       recall: 22.4, considered: 16.8, purchased: 9.2 },
        { brand: "Traeger Pro 575",   recall: 64.8, considered: 38.4, purchased: 24.1 },
        { brand: "Weber SmokeFire",   recall: 41.2, considered: 22.6, purchased: 14.8 },
      ],
      barriers: [
        { cohort: "Multi-gen Host",     premium: 28.4, mid: 36.8 },
        { cohort: "Family Handyman",    premium: 22.1, mid: 31.4 },
        { cohort: "Design-led Adopter", premium: 34.6, mid: 42.7 },
        { cohort: "Other",              premium: 41.2, mid: 48.3 },
      ],
      claimAppeal: [
        { claim: "Smoker + grill in one",   c0: 1.4, c1: 2.0, c2: 2.4, c3: 2.6 },
        { claim: "Pellet subscription",     c0: 1.8, c1: 1.6, c2: 2.8, c3: 2.2 },
        { claim: "One-knob smoke slider",   c0: 2.6, c1: 3.2, c2: 1.8, c3: 2.8 },
        { claim: "Integrated all-weather cover", c0: 2.2, c1: 2.4, c2: 2.0, c3: 2.4 },
      ],
      featurePriority: [
        { feature: "Pellet supply",   c0: 82, c1: 78, c2: 64, c3: 71 },
        { feature: "Smoke control",   c0: 62, c1: 41, c2: 74, c3: 52 },
        { feature: "All-weather",     c0: 48, c1: 56, c2: 61, c3: 54 },
        { feature: "Capacity",        c0: 89, c1: 64, c2: 38, c3: 58 },
      ],
      expectations: [
        { bucket: "Replaces 2 devices",   c0: 38, c1: 28, c2: 32, c3: 24 },
        { bucket: "Smoker upgrade only",  c0: 22, c1: 18, c2: 28, c3: 22 },
        { bucket: "Weekend toy",          c0: 28, c1: 32, c2: 22, c3: 36 },
        { bucket: "Won\u2019t fit garden", c0: 12, c1: 22, c2: 18, c3: 18 },
      ],
      goldStandard: [
        { cohort: "Multi-gen Host",     recognizes: 32.4, perceivesLow: 18.6, qualityPrio: 38.4 },
        { cohort: "Family Handyman",    recognizes: 28.7, perceivesLow: 22.8, qualityPrio: 34.1 },
        { cohort: "Design-led Adopter", recognizes: 38.1, perceivesLow: 14.2, qualityPrio: 42.8 },
        { cohort: "Other",              recognizes: 22.4, perceivesLow: 28.6, qualityPrio: 26.9 },
      ],
      funnel: [
        { stage: "Outside Category", v: 38, agents: 1900 },
        { stage: "Aware, Never Considered", v: 27, agents: 1350 },
        { stage: "Considered, Never Bought", v: 18, agents: 900 },
        { stage: "Current Owners", v: 12, agents: 600 },
        { stage: "Recent Abandoners", v: 5,  agents: 250 },
      ],
    },
  },
  {
    id: "C-2045",
    archive: "ARCH-4833-PX",
    preset: "All Personas",
    title: "Air Purifier 4 True HEPA",
    sku: "FS704",
    domain: "air",
    domainLabel: "Air Quality",
    market: "France",
    audience: 500,
    fielded: "Apr 21, 2026",
    grounding: "ARO 2026 Q1",
    status: "synthesized",
    statusLabel: "Synthesized",
    desc:
      "Where Shark's air purifier line could expand. Surface adjacent jobs French personas would 'hire' a Shark purifier to do.",
    sentiment: { pos: 52, neu: 31, neg: 17 },
    headline: "Bedroom-only night SKU + pollen calendar",
    role: {
      archetype: "Quiet Sleep Tool",
      para:
        "Two white-space signals: <strong>bedroom-only night-mode SKU</strong> and <strong>integrated allergen calendar</strong> with local pollen feed. Sensor trust is the gating purchase frame.",
      stats: [
        { v: "65%", k: "Premium Appeal" },
        { v: "52%", k: "Positive Signal" },
        { v: "2 WS", k: "White-Space Cues" },
      ],
    },
    frictions: [
      {
        lb: "Sensor trust",
        sev: "high",
        desc:
          "Personas demand transparency on what the AQI score actually measures. Show particle counts, not abstract scores.",
      },
      {
        lb: "Filter cost cycle",
        sev: "med",
        desc: "Filter replacement TCO is opaque; personas want a 5-year cost projection on box.",
      },
      {
        lb: "App fatigue",
        sev: "low",
        desc: "Mid-tier personas don't want yet another app — local control buttons remain critical.",
      },
    ],
    demographics: [
      { lb: "Allergy sufferers", v: 79 },
      { lb: "Shift workers", v: 54 },
      { lb: "App-skeptical", v: 61 },
    ],
    quotes: [
      {
        q: "I want it to know pollen season is here without me telling it.",
        who: "Camille Laurent · Allergic Parent · Lyon",
        alt: false,
      },
      {
        q: "Tell me PM2.5 in micrograms, not 92 out of 100.",
        who: "Étienne Blanc · Tech Sceptic · Paris",
        alt: true,
      },
    ],
    summary: [
      "Validate a smaller, quieter bedroom-only SKU with a human cohort before committing.",
      "Show PM2.5 numbers, not abstract scores; declare provenance on the device face.",
      "Publish 5-year filter TCO on the box — closes the opacity friction.",
    ],
    research: {
      exec:
        "Two strong white-space signals from French personas: a bedroom-only night-mode SKU (cited in Q11 free response across 64% of Allergic Parent cohort) and an integrated allergen calendar with local pollen feed (Q23). Sensor trust is the gating purchase frame \u2014 personas want PM2.5 in micrograms, not abstract AQI scores (Q24). Filter TCO opacity is the second-largest blocker (Q27).",
      objectives: [
        "Identify adjacent jobs French personas would hire a Shark air purifier to do.",
        "Test sensor-trust language vs. abstract AQI scoring.",
        "Surface 5-year filter cost projection demand across allergy/sleep/parent cohorts.",
      ],
      cohorts: ["Allergic Parent", "Shift Worker", "Pragmatic Parent", "Other"],
      agentsPerCohort: 125,
      questions: { total: 30, free: 8, choice: 14, ranking: 2, matrix: 6 },
      competitive: [
        { brand: "Shark FS704",  recall: 18.2, considered: 12.4, purchased: 6.8 },
        { brand: "Dyson Pure",   recall: 71.6, considered: 38.4, purchased: 22.4 },
        { brand: "Xiaomi Mi 4",  recall: 34.8, considered: 22.6, purchased: 18.2 },
      ],
      barriers: [
        { cohort: "Allergic Parent",  premium: 18.4, mid: 28.6 },
        { cohort: "Shift Worker",     premium: 22.7, mid: 31.2 },
        { cohort: "Pragmatic Parent", premium: 38.6, mid: 46.4 },
        { cohort: "Other",            premium: 42.1, mid: 48.7 },
      ],
      claimAppeal: [
        { claim: "Night-mode bedroom SKU", c0: 1.6, c1: 1.2, c2: 2.4, c3: 2.8 },
        { claim: "PM2.5 in micrograms",    c0: 1.4, c1: 2.6, c2: 2.0, c3: 2.4 },
        { claim: "Allergen calendar feed", c0: 1.8, c1: 3.0, c2: 2.4, c3: 2.6 },
        { claim: "5-year filter TCO",      c0: 2.4, c1: 2.4, c2: 1.6, c3: 2.0 },
      ],
      featurePriority: [
        { feature: "Quiet mode",       c0: 71, c1: 92, c2: 54, c3: 58 },
        { feature: "Filter TCO",       c0: 78, c1: 51, c2: 84, c3: 62 },
        { feature: "Sensor accuracy",  c0: 82, c1: 48, c2: 51, c3: 56 },
        { feature: "Physical control", c0: 54, c1: 42, c2: 64, c3: 71 },
      ],
      expectations: [
        { bucket: "Bedroom-only fit",   c0: 42, c1: 38, c2: 24, c3: 22 },
        { bucket: "Whole-home device",  c0: 28, c1: 18, c2: 38, c3: 32 },
        { bucket: "Allergy-season only", c0: 22, c1: 14, c2: 18, c3: 24 },
        { bucket: "Not for me",          c0: 8,  c1: 30, c2: 20, c3: 22 },
      ],
      goldStandard: [
        { cohort: "Allergic Parent",  recognizes: 38.4, perceivesLow: 14.6, qualityPrio: 44.2 },
        { cohort: "Shift Worker",     recognizes: 22.1, perceivesLow: 18.4, qualityPrio: 28.6 },
        { cohort: "Pragmatic Parent", recognizes: 14.8, perceivesLow: 32.7, qualityPrio: 18.4 },
        { cohort: "Other",            recognizes: 18.2, perceivesLow: 28.4, qualityPrio: 22.4 },
      ],
      funnel: [
        { stage: "Outside Category", v: 41, agents: 2050 },
        { stage: "Aware, Never Considered", v: 26, agents: 1300 },
        { stage: "Considered, Never Bought", v: 17, agents: 850 },
        { stage: "Current Owners", v: 11, agents: 550 },
        { stage: "Recent Abandoners", v: 5,  agents: 250 },
      ],
    },
  },
  {
    id: "C-2046",
    archive: "—",
    preset: "All Personas",
    title: "Cordless Stick Vac",
    sku: "WS642AE",
    domain: "floor",
    domainLabel: "Floor Care",
    market: "Mexico",
    audience: 500,
    fielded: "In progress",
    grounding: "ARO 2026 Q1",
    status: "fielding",
    statusLabel: "Fielding",
    desc:
      "Identify the top three friction points in the Mexican cordless stick vac shopper journey from awareness through repurchase.",
    progress: 67,
    eta: "≈ 3 min remaining",
  },
  {
    id: "C-2047",
    archive: "ARCH-4834-PX",
    preset: "Family Handyman",
    title: "Pet-First Cordless",
    sku: "WV470GY",
    domain: "pet",
    domainLabel: "Pet",
    market: "United States",
    audience: 500,
    fielded: "Apr 20, 2026",
    grounding: "ARO 2026 Q1",
    status: "synthesized",
    statusLabel: "Synthesized",
    desc:
      "Pet-owning households' specific cleaning jobs and the attachments / promises they would 'hire' a Shark hand vac to deliver.",
    sentiment: { pos: 73, neu: 18, neg: 9 },
    headline: "Pet-first bundles unlock all tiers",
    role: {
      archetype: "Pet-First Specialist",
      para:
        "Pet-specific bundles unlock willingness-to-pay <strong>across all tiers</strong> — the strongest premium signal in the portfolio this quarter. Self-detangle is now table stakes.",
      stats: [
        { v: "84%", k: "Premium Appeal" },
        { v: "73%", k: "Positive Signal" },
        { v: "All Tiers", k: "Premium Lift" },
      ],
    },
    frictions: [
      {
        lb: "Self-detangling roller",
        sev: "high",
        desc:
          "Now table-stakes for pet households. Without it, 4 in 5 pet-owner personas dismiss the SKU within 30 seconds.",
      },
      {
        lb: "Hair release / debris bin",
        sev: "med",
        desc: "Personas want to empty without touching hair — a one-handed bottom release is the ask.",
      },
      {
        lb: "Allergen capture wording",
        sev: "low",
        desc: "'HEPA' is generic; personas want a specific allergen-class promise (cat dander, pollen).",
      },
    ],
    demographics: [
      { lb: "Multi-pet households", v: 91 },
      { lb: "Allergy in family", v: 67 },
      { lb: "Self-detangle expectation", v: 84 },
    ],
    quotes: [
      {
        q: "Self-detangling roller or I'm not even reading the box.",
        who: "Marisol Ortega · Pet-first Owner · San Antonio",
        alt: false,
      },
      {
        q: "Tell me it captures cat dander, not just '99.9% allergens'.",
        who: "Lisa Park · Allergic Parent · Seattle",
        alt: true,
      },
    ],
    summary: [
      "Make self-detangling roller the lead claim; without it personas don't engage.",
      "Add one-handed bottom-release bin as a named premium feature.",
      "Replace generic HEPA copy with specific allergen-class promises (dander, pollen).",
    ],
    research: {
      exec:
        "Pet-specific bundles unlock willingness-to-pay across all tiers (Q26) \u2014 the strongest premium signal in the portfolio this quarter. Self-detangle is now table-stakes for pet households (Q23): without it, 4 in 5 pet-owner personas dismiss the SKU within 30 seconds (Q11 free response). One-handed hair release is the second-largest premium unlock (Q15).",
      objectives: [
        "Quantify willingness-to-pay across tiers for pet-specific cordless hand vacs.",
        "Validate self-detangling roller as table-stakes claim for pet households.",
        "Identify the highest-value premium unlock claim (HEPA, one-handed release, allergen-class).",
      ],
      cohorts: ["Multi-pet Household", "Single-pet Renter", "Senior Pet Parent", "Other"],
      agentsPerCohort: 125,
      questions: { total: 30, free: 8, choice: 14, ranking: 2, matrix: 6 },
      competitive: [
        { brand: "Shark WV470GY",  recall: 31.6, considered: 24.8, purchased: 18.4 },
        { brand: "Bissell Pet Hair", recall: 58.4, considered: 38.2, purchased: 28.4 },
        { brand: "Dyson V8 Animal",  recall: 64.2, considered: 32.6, purchased: 22.1 },
      ],
      barriers: [
        { cohort: "Multi-pet Household", premium: 12.4, mid: 22.6 },
        { cohort: "Single-pet Renter",   premium: 28.6, mid: 38.4 },
        { cohort: "Senior Pet Parent",   premium: 22.1, mid: 31.8 },
        { cohort: "Other",               premium: 36.4, mid: 44.7 },
      ],
      claimAppeal: [
        { claim: "Self-detangling roller", c0: 1.2, c1: 1.4, c2: 1.6, c3: 1.8 },
        { claim: "One-handed bin release", c0: 1.8, c1: 2.2, c2: 1.4, c3: 2.4 },
        { claim: "HEPA + pet allergens",   c0: 2.0, c1: 2.4, c2: 2.2, c3: 2.0 },
        { claim: "30-min run-time",        c0: 2.8, c1: 2.6, c2: 3.0, c3: 2.6 },
      ],
      featurePriority: [
        { feature: "Self-detangle",   c0: 96, c1: 88, c2: 91, c3: 82 },
        { feature: "Hair release",    c0: 82, c1: 71, c2: 74, c3: 68 },
        { feature: "HEPA filter",     c0: 78, c1: 54, c2: 81, c3: 56 },
        { feature: "Run-time",        c0: 62, c1: 51, c2: 48, c3: 54 },
      ],
      expectations: [
        { bucket: "$189 acceptable", c0: 42, c1: 22, c2: 31, c3: 18 },
        { bucket: "$159 acceptable", c0: 38, c1: 41, c2: 38, c3: 36 },
        { bucket: "$129 acceptable", c0: 14, c1: 28, c2: 22, c3: 32 },
        { bucket: "Won\u2019t buy",     c0: 6,  c1: 9,  c2: 9,  c3: 14 },
      ],
      goldStandard: [
        { cohort: "Multi-pet Household", recognizes: 42.4, perceivesLow: 12.4, qualityPrio: 48.6 },
        { cohort: "Single-pet Renter",  recognizes: 28.6, perceivesLow: 21.4, qualityPrio: 32.8 },
        { cohort: "Senior Pet Parent",  recognizes: 31.2, perceivesLow: 18.6, qualityPrio: 36.4 },
        { cohort: "Other",              recognizes: 22.4, perceivesLow: 28.4, qualityPrio: 26.1 },
      ],
      funnel: [
        { stage: "Outside Category", v: 12, agents: 600 },
        { stage: "Aware, Never Considered", v: 19, agents: 950 },
        { stage: "Considered, Never Bought", v: 31, agents: 1550 },
        { stage: "Current Owners", v: 28, agents: 1400 },
        { stage: "Recent Abandoners", v: 10, agents: 500 },
      ],
    },
  },
];

export const findSimulation = (id) => simulations.find((s) => s.id === id);
