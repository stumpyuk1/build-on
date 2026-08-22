export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string; // ISO date YYYY-MM-DD
  author: string;
  excerpt: string;
  /** Simple paragraphs; keep plain text — no HTML */
  body: string[];
};

/**
 * Static blog posts for Build On.
 * Add new entries at the top. Rendered by /blog and /blog/[slug].
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "perverse-incentives-in-english-planning",
    title: "Perverse incentives in English planning",
    subtitle:
      "Why the system systematically favours constraint, delay and under-delivery — beyond the infrastructure-viability trap",
    date: "2026-08-19",
    author: "Build On",
    excerpt:
      "English planning and local government finance are stacked with incentives that reward caution over delivery. Here are the most significant ones — and how they reinforce each other.",
    body: [
      "There are a wide set of perverse incentives embedded in the English planning and local government finance system. These incentives systematically favour constraint, delay, and under-delivery over the rapid provision of homes.",
      "Here are the most significant ones, beyond the infrastructure-viability trap already discussed.",
      "1. Concentrated local costs versus diffuse national benefits",
      "New housing imposes visible, immediate costs on existing residents (traffic, school places, change to views, pressure on services). The benefits — lower prices, labour mobility, intergenerational equity, higher national output — are diffuse, long-term, and mostly felt elsewhere.",
      "Local politicians therefore face strong electoral incentives to resist or dilute large allocations. National targets exist on paper, but the political pain is local. This is classic public-choice territory: decision-makers respond to the voters who can punish them, not to the abstract national interest.",
      "2. Weak fiscal rewards for growth",
      "English local authorities capture relatively little ongoing financial benefit from new homes. Council tax is low by international standards and is subject to equalisation and national controls. The New Homes Bonus was always partial and is being wound down or replaced by weaker mechanisms.",
      "By contrast, business rates (especially from commercial development) can be more lucrative. The result is a structural bias: residential growth brings costs and political risk with limited lasting fiscal upside, while commercial schemes are often preferred. Recent multi-year settlements have tried to improve this by letting councils keep more of the council-tax base growth, but the incentive remains far weaker than in systems where local government retains a larger share of the uplift from development.",
      "3. Affordable housing requirements as a rigid, front-loaded tax",
      "Section 106 affordable housing obligations are set as policy targets (often 30–40 % or higher) and then frequently negotiated downwards on viability grounds. This creates several distortions: uncertainty and delay while viability is argued; a tendency for high headline targets that are known to be unviable in many locations, forcing site-by-site haggling; and transfer of value from landowner/developer to the public sector in a way that is opaque and unpredictable, rather than a transparent land-value capture mechanism.",
      "In lower-value or heavily constrained sites, the obligation can kill the scheme entirely rather than deliver any affordable homes. The intention is socially worthy. The incentive effect is to reduce overall supply, particularly of marginal sites.",
      "4. Cumulative regulatory layering",
      "Developers face a growing stack of requirements that each make sense in isolation but compound destructively: Community Infrastructure Levy plus residual Section 106; Biodiversity Net Gain; nutrient neutrality and water quality rules; the Future Homes Standard and net-zero building regulations; minimum space standards; design codes and heritage constraints.",
      "Each adds cost and risk. Because many of these costs are fixed or front-loaded, they hit smaller sites and SME builders especially hard. Large housebuilders can absorb the complexity; many smaller ones cannot. The net effect is reduced competition and lower overall output.",
      "5. The Green Belt as political sacred cow",
      "The Green Belt was originally intended to prevent urban sprawl and encourage regeneration. In practice it has become a near-absolute constraint that forces development further out (leapfrogging), inflates land values inside the boundary, and prevents logical urban extensions even where infrastructure and sustainability arguments are strong.",
      "Political incentives strongly favour defending the designation rather than reviewing it rigorously. “Grey belt” reforms attempt to create limited flexibility, but the underlying incentive structure remains: any release is treated as a political defeat.",
      "6. Five-year land supply and the tilted balance",
      "The requirement for a five-year supply of deliverable sites, and the “tilted balance” that applies when it is absent, was meant to force councils to plan positively. In practice it has produced perverse effects on both sides. Councils face pressure to show optimistic trajectories or under-allocate difficult sites. Developers are incentivised to challenge the supply calculation and promote speculative applications.",
      "The result is often more planning by appeal, greater uncertainty, and a focus on short-term deliverability accounting rather than long-term strategic growth.",
      "7. Build-out incentives and land-market dynamics",
      "In a system where planning permission is scarce and valuable, the rational strategy for a landowner or large developer is often to release homes slowly to protect local prices rather than flood the market. Permissions do not automatically equal completions. Attempts to force faster build-out (penalties, use-it-or-lose-it rules) run into commercial realities and can simply reduce the incentive to seek permission in the first place.",
      "How they interact",
      "These incentives reinforce one another. Weak fiscal rewards make councils more sensitive to local opposition. High affordable-housing and infrastructure demands make sites more fragile. Green Belt constraints push development onto harder sites that then fail viability tests. The discretionary nature of the system allows all of these pressures to be expressed through case-by-case negotiation rather than clear rules.",
      "The overall result is a system that is formally committed to higher housing numbers while containing multiple mechanisms that reward delay, under-scaling, and risk avoidance. Fixing any single element (housing targets, Green Belt, viability guidance) without addressing the underlying incentive structure tends to produce only temporary or partial improvement.",
      "This is why supply remains sticky even when national policy appears more pro-housing. The arithmetic and the politics both push in the same direction: caution over delivery.",
    ],
  },
  {
    slug: "when-the-numbers-do-the-refusing",
    title: "When the numbers do the refusing",
    subtitle:
      "How strategic allocations can sit in a Goldilocks zone that triggers expensive infrastructure without enough homes to fund it",
    date: "2026-08-21",
    author: "Build On",
    excerpt:
      "There is a quiet form of sabotage in English planning that rarely makes the headlines. Allocate just enough homes to trigger a secondary school and a river crossing — but not enough to make that infrastructure viable. The arithmetic does the rest.",
    body: [
      "There is a particular form of quiet sabotage in English planning that rarely makes the headlines. It does not involve outright refusal. It does not require a dramatic political confrontation. It works by arithmetic.",
      "Allocate just enough homes to trigger expensive, lumpy infrastructure — a secondary school, a new river crossing — but not enough homes to make that infrastructure economically rational. The scheme then fails the viability test, the inspector raises an eyebrow, delivery stalls, and the housing never arrives. The local authority can claim it tried. The numbers did the rest.",
      "A strategic allocation in the emerging Southshire Local Plan offers a textbook illustration.",
      "The numbers",
      "The allocation for the hypothetical village of Fernley has settled around 2,225–2,300 homes. Earlier drafts floated higher figures; the published version landed lower. At this scale the development generates roughly 480–500 secondary-age pupils and 680–700 primary-age pupils under the county’s own yield rates. That is enough to require a new secondary school and land for primary provision. It is also enough to demand a new crossing of the River Dene and associated link roads, because the existing narrow bridge and village centre cannot absorb the traffic.",
      "Independent cost ranges put the education package in the £55–85 million bracket and the transport works at £20–40 million. Combined, a central estimate sits around £90–110 million. These are not speculative figures. They rest on published pupil yields, recent actual school delivery costs in the county, and the Strategic Transport Assessment’s own identification of the new crossing and links as essential mitigation.",
      "The viability cliff",
      "A new secondary school has a minimum efficient scale. Department for Education guidance and most county authorities treat four forms of entry (around 600 places for Years 7–11) as the practical floor. Many prefer five or six forms for curriculum breadth and financial resilience. At 2,250 homes the Fernley allocation generates only enough pupils for roughly 3–3.5 forms of entry. The school is therefore forced into an undersized, high-cost-per-place configuration. The river crossing, meanwhile, is almost pure fixed cost. Spread across 2,250 dwellings it is heavy. Spread across 4,000 it is manageable.",
      "This is the Goldilocks zone: large enough to trigger the big-ticket items, too small to fund them efficiently. Developer contributions scale with homes; the secondary school and the bridge do not. The residual land value is squeezed. Affordable housing percentages become harder to sustain. Phasing becomes fraught because the infrastructure is needed early while the cash arrives late. Viability consultants then report a gap. The plan is said to be “at risk.” Delivery slows or stops.",
      "Increase the allocation to the 3,500–4,500 range and the arithmetic changes. The secondary reaches a proper five- or six-form size. The bridge cost is diluted. The same infrastructure package starts to look fundable from the development itself in a higher-value district. The current figure sits precisely where the economics are most hostile.",
      "How the system enables it",
      "Local plans are not neutral technical exercises. They are political documents constrained by the tests of “soundness” — justified, effective, deliverable. Infrastructure delivery and viability are central to the “effective” and “deliverable” limbs. An authority that wishes to limit growth does not need to invent a new policy. It can simply scale strategic sites into the zone where the required mitigation is disproportionately expensive relative to the housing numbers. The viability evidence then does the political work.",
      "This is not conspiracy in the crude sense. It is incentive alignment. Councillors face concentrated local opposition to large housing allocations and diffuse, long-term benefits from increased supply. Officers must produce a plan that survives examination while managing political risk. Under-scaling a site so that its infrastructure appears undeliverable is a low-visibility way to achieve constraint without an explicit anti-housing stance. The inspector sees a technical problem rather than a political choice. The housing target is notionally met on paper; the homes themselves remain contingent on infrastructure that is unlikely to materialise at that scale.",
      "Public choice theory has long observed that bureaucracies and elected bodies respond to the structure of costs and benefits they face. Housing supply in England is the classic case of concentrated costs (local amenity, traffic, school places) and diffuse benefits (national affordability, labour mobility, intergenerational equity). The local plan process, with its heavy reliance on site-specific viability and infrastructure testing, creates multiple points at which those concentrated costs can be made decisive.",
      "The pattern",
      "Fernley is not unique. Across England one finds strategic allocations that sit just below the threshold at which a secondary school becomes efficient, or just large enough to require a costly highway scheme whose funding is left uncertain. The result is a plan that looks ambitious in the housing trajectory tables and fragile in the delivery evidence. When the homes fail to appear, the authority can point to “infrastructure constraints” or “viability challenges” rather than to the initial scaling decision.",
      "The deeper problem is institutional. A system that requires local authorities to demonstrate deliverability while simultaneously exposing them to intense local opposition creates a predictable incentive to design sites that are difficult to deliver. The more sophisticated the infrastructure and viability evidence becomes, the more precise the targeting of that incentive can be.",
      "Conclusion",
      "The Fernley allocation, at its current scale, occupies the least efficient point on the cost curve for the infrastructure it triggers. Whether this was conscious design or emergent outcome of political negotiation is secondary. The effect is the same: a housing proposal rendered precarious by the very mitigations it necessitates. Larger would have been more viable. Smaller would have avoided the major infrastructure trigger. The chosen figure maximises the chance that the arithmetic, rather than an explicit refusal, prevents the homes.",
      "This is how planning systems can appear to plan for housing while quietly arranging its frustration. The numbers are not neutral. In the hands of institutions facing the wrong incentives, they become a method of control.",
    ],
  },
  {
    slug: "silence-on-the-planning-portal",
    title: "The silence on the planning portal",
    subtitle: "Why almost nobody writes in support of new homes — and how that can change",
    date: "2026-07-28",
    author: "Build On",
    excerpt:
      "Across UK planning portals, comments in support of housing schemes are vanishingly rare. Organised opposition is not. Here is why that matters, and what ordinary people can do about it.",
    body: [
      "Scroll through almost any local authority planning portal in England and a pattern repeats. Applications for new homes attract objections — sometimes many of them — while supportive comments are scarce to the point of invisibility. That is not because the country is full of people who think we already have enough homes. It is because the people who need housing the most are rarely organised to turn up in the file.",
      "Small, skilled local groups have become very good at opposing schemes. They know the deadlines, the material grounds, the committee process. They write early and often. Officers and councillors then face a one-sided record: a stack of objections and a near-empty tray of support. Silence is read as indifference, even when the wider public would rather see homes built.",
      "The planning system is not limited to next-door neighbours. In England, anyone can respond to a consultation. You do not need to live in the ward, the town, or even the same region. What counts is whether your points are material — housing need, design, policy fit, infrastructure — not your postcode. Neighbour notification letters are about who the council must tell, not who is allowed to speak.",
      "Build On exists to make that participation practical. Find larger undecided housing applications on the map, open the council portal, and use the toolkit to draft a clear, independent representation. It takes minutes, not a campaign office. A calm letter of support is one of the simplest democratic acts available in a country that is short of homes.",
      "If only opponents write in, the file looks one-sided. If people who want more good homes start writing in — from near and far — the balance shifts. That is the grassroots case for Build On: not cheerleading every application, but ensuring well-designed schemes get a fair hearing from the people who will never form a residents' association against them.",
    ],
  },
  {
    slug: "welcome-to-build-on",
    title: "Welcome to Build On",
    subtitle: "Homes. Infrastructure. Action.",
    date: "2026-07-20",
    author: "Build On",
    excerpt:
      "Build On is a grassroots project to help people support well-designed housing and infrastructure through the planning system — with evidence, not noise.",
    body: [
      "Britain needs more homes. Waiting lists are long, prices and rents lock people out, and we keep approving fewer homes than the country needs. Planning decisions are shaped by who turns up. For years the loudest organised voices have often been those opposing development. Build On is here to help the other side of that conversation show up.",
      "This site is deliberately practical. Use the map to find undecided larger housing schemes. Use the portals directory when you need a specific council's register. Use the toolkit and letter generator to write a clear, evidence-based representation. You do not need to be a local resident to comment in England — and you do not need to pretend to be one.",
      "We will keep the Evidence Hub updated with housing need, affordability and delivery stats, and myth-busting that stays tied to sources. Local groups and the join page are the start of a network of people willing to support good schemes rather than leave the field to those who oppose them by default.",
      "If you care about whether the next generation can put down roots, this is one of the simplest ways to act. Find a scheme. Write in. Tip the balance toward the homes the country needs.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
