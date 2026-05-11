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
  },
];

export const findSimulation = (id) => simulations.find((s) => s.id === id);
