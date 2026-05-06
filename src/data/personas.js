// Slugify helper used by the detail route.
export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const personas = [
  {
    name: "Isabel Morales",
    age: 34,
    city: "Monterrey, MX",
    tier: "Premium",
    archetype: "Urban Parent",
    grounding: "ARO 2026 Q1",
    traits: ["Apartment <1,200ft\u00b2", "Has toddler", "Cordless pref."],
    bio:
      "Lives in a 1,100ft\u00b2 high-rise apartment in central Monterrey with a toddler and a working partner. Treats premium home tech as a time-recovery investment, not status signalling. Wall-mounted, always-ready tools beat boxed-up power vacuums every weekend.",
    drivers: [
      { lb: "Time recovery", desc: "Saturdays must not be cleaning days. Pre-buys tools that compress chores into minutes." },
      { lb: "Household harmony", desc: "Reduces friction with partner over division of housework. Quiet, fast, no reset rituals." },
      { lb: "Premium quality", desc: "Will pay 25% more for a clearly-named hero feature \u2014 not for spec lists." },
    ],
    frictions: [
      { lb: "Footprint", desc: "Anything over 30cm of permanent counter or floor space is rejected on sight." },
      { lb: "Battery anxiety", desc: "Needs a real-world runtime number, not best-case marketing claim." },
    ],
    quote:
      "It lives on the wall \u2014 that\u2019s the whole point. If I have to dig it out, I\u2019d just use the big vacuum.",
    appearedIn: ["C-2041"],
  },
  {
    name: "Michael Chen",
    age: 42,
    city: "Austin, TX",
    tier: "Premium",
    archetype: "Smart-home Dad",
    grounding: "ARO 2026 Q1",
    traits: ["3-BR house", "Smart-home", "Dog owner"],
    bio:
      "Engineering manager in a smart-home household. Treats every appliance as a node \u2014 prefers integrations and APIs over standalone gadgets. Owns a dog; pet-aware features land hard.",
    drivers: [
      { lb: "Integration", desc: "Prefers products that join an existing ecosystem (HomeKit, Matter, etc.)." },
      { lb: "Speed", desc: "Wants the dinner-tonight outcome, not the feature count." },
      { lb: "Status signalling", desc: "Will share a clearly-named hero feature with peers; that\u2019s the unlock." },
    ],
    frictions: [
      { lb: "Complexity", desc: "Reject any product whose hero claim takes more than five words to explain." },
      { lb: "Vendor lock-in", desc: "Avoids closed ecosystems if a comparable open option exists." },
    ],
    quote:
      "I don\u2019t need 10 functions, I need to feed four people in 30 minutes.",
    appearedIn: ["C-2042"],
  },
  {
    name: "Sophie Weber",
    age: 29,
    city: "Hamburg, DE",
    tier: "Mid-tier",
    archetype: "Rental Renovator",
    grounding: "CI Panel 2024",
    traits: ["Rental flat", "Sustainability-first"],
    bio:
      "Renovates rental flats within landlord limits; values self-replaceable parts above almost anything else. Sustainability is non-negotiable, not a marketing line.",
    drivers: [
      { lb: "Repairability", desc: "Self-swappable battery and parts \u2014 keeps a product 5\u20137 years." },
      { lb: "Sustainability", desc: "Recycled / recyclable materials weigh more than performance specs." },
      { lb: "Compactness", desc: "Lives in a flat; oversized devices are immediately disqualified." },
    ],
    frictions: [
      { lb: "Throwaway design", desc: "Sealed-battery, glued-housing products are non-starters." },
      { lb: "Greenwashing", desc: "Wants third-party-validated sustainability claims, not vague labels." },
    ],
    quote:
      "Sustainability matters more than ten heat settings. If I can swap the battery I\u2019ll keep it 7 years.",
    appearedIn: ["C-2043"],
  },
  {
    name: "Ayesha Khan",
    age: 51,
    city: "Manchester, UK",
    tier: "Value",
    archetype: "Multi-gen Host",
    grounding: "ARO 2026 Q1",
    traits: ["Lives w/ parents", "Hosts weekly"],
    bio:
      "Multi-generational household; hosts extended family weekly. Buys for capacity, durability, and the ability to feed many at once. Loyal to brands that don\u2019t embarrass her at the table.",
    drivers: [
      { lb: "Capacity", desc: "Family of seven is the planning unit. Anything that can\u2019t scale is dismissed." },
      { lb: "Value", desc: "Pays attention to per-week cost-of-ownership, not only sticker price." },
      { lb: "Reliability", desc: "Refuses to gamble on weekly hosts \u2014 brand trust matters." },
    ],
    frictions: [
      { lb: "Single-serve framing", desc: "Marketing aimed at couples / singles reads as not-for-me." },
      { lb: "Prep ritual", desc: "Multi-step assemblies kill weekday usage." },
    ],
    quote:
      "Show me one device that handles the Sunday roast and the Wednesday pressure-cook night.",
    appearedIn: [],
  },
  {
    name: "Luca Bianchi",
    age: 38,
    city: "Milan, IT",
    tier: "Premium",
    archetype: "Design-led Adopter",
    grounding: "ARO 2026 Q1",
    traits: ["Condo", "Aesthetics matter"],
    bio:
      "Industrial designer, condo dweller. Treats appliances as visible furniture. Will pay heavily for finishes \u2014 fabric-wrap, anodised metal, walnut accents \u2014 above raw spec uplift.",
    drivers: [
      { lb: "Visual signature", desc: "Hero feature must look intentional on the counter / wall." },
      { lb: "Material quality", desc: "Plastic-on-plastic finishes are out, full stop." },
      { lb: "Quiet sophistication", desc: "Subdued logos, restrained colour palette." },
    ],
    frictions: [
      { lb: "Generic styling", desc: "Cheap, plasticky look wins zero adoption \u2014 even with great specs." },
      { lb: "Loud branding", desc: "Oversized logos and fluorescent accents reject from sight." },
    ],
    quote:
      "If I\u2019m paying premium, the dock has to look like furniture \u2014 not a power tool.",
    appearedIn: ["C-2041"],
  },
  {
    name: "Rachel Nguyen",
    age: 27,
    city: "Portland, OR",
    tier: "Mid-tier",
    archetype: "Single Professional",
    grounding: "ARO 2026 Q1",
    traits: ["Studio", "Quick cleans"],
    bio:
      "Lives alone in a 480ft\u00b2 studio. Buys for noise, footprint, and quick-task convenience. Brand stories matter less than whether the product fits her single drawer of kitchen storage.",
    drivers: [
      { lb: "Compactness", desc: "Sub-30cm footprint is the gating dimension." },
      { lb: "Quiet operation", desc: "Open-plan studio \u2014 noise is intrusive." },
      { lb: "Quick task", desc: "Five-minute cleanup or it\u2019s not worth the effort." },
    ],
    frictions: [
      { lb: "Counter occupation", desc: "Anything that camps on the counter is rejected." },
      { lb: "Heavy weight", desc: "Cannot store on a high shelf if she can\u2019t lift it back up." },
    ],
    quote:
      "I\u2019d pay $399 if it stayed put under my upper cabinets.",
    appearedIn: ["C-2042"],
  },
  {
    name: "Jorge Silva",
    age: 46,
    city: "Mexico City, MX",
    tier: "Mid-tier",
    archetype: "Family Handyman",
    grounding: "ARO 2026 Q1",
    traits: ["4-BR", "2 kids", "Value first"],
    bio:
      "Family handyman; maintains everything himself. Buys for durability and replaceable parts. Skeptical of anything that requires an app to operate.",
    drivers: [
      { lb: "Durability", desc: "Looks at materials and joints; rejects flimsy seams on first inspection." },
      { lb: "Repairability", desc: "Wants user-replaceable wear parts \u2014 belts, brushes, batteries." },
      { lb: "Pet-attachment value", desc: "If accessories solve a real job, willing to upgrade tier." },
    ],
    frictions: [
      { lb: "Planned obsolescence", desc: "Sealed-housing designs read as disposable." },
      { lb: "App-only control", desc: "Wants physical buttons; treats apps as additional fragility." },
    ],
    quote:
      "I\u2019d pay another 1,200 pesos if it came with a real pet-hair attachment, not a generic brush.",
    appearedIn: ["C-2041"],
  },
  {
    name: "Anna Kowalski",
    age: 33,
    city: "Warsaw, PL",
    tier: "Value",
    archetype: "Pragmatic Parent",
    grounding: "Census 2024",
    traits: ["Apartment", "Price sensitive"],
    bio:
      "Parent of one; tightly budgeted. Tracks promotional cycles and waits for sales. Will trade brand premium for proven safety claims and concrete numbers.",
    drivers: [
      { lb: "Value", desc: "Watches for promotional cycles \u2014 buys at \u226515% off list." },
      { lb: "Safety proof", desc: "Wants third-party validation of safety / damage-free claims." },
      { lb: "Ease", desc: "Five-minute setup. No assembly diagram." },
    ],
    frictions: [
      { lb: "Marketing fluff", desc: "\"Premium\" alone is not a reason to spend; needs concrete deltas." },
      { lb: "Total cost overrun", desc: "Filter / consumable costs over 5 years are decision-grade for her." },
    ],
    quote:
      "Show me proof it won\u2019t fry my hair before I trust the box.",
    appearedIn: ["C-2043"],
  },
];

export const findPersona = (slug) =>
  personas.find((p) => slugify(p.name) === slug);
