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
    slug: "easing-the-burdens",
    title: "Government costs make up 57% of a new London flat’s price",
    subtitle: "A new Centre for Policy Studies paper shows why planning reform alone will not get the houses built",
    date: "2026-11-10",
    author: "Build On",
    excerpt: "Taxes, levies and mandated design rules now account for more than half the viable sale price of a typical new London flat, and two-fifths of a Home Counties house. Starts are falling. The CPS has modelled why.",
    body: [
      "Planning reform is necessary. It is not sufficient. That is the blunt finding of a new paper from the Centre for Policy Studies, published on 10 November 2026. English housebuilding starts have fallen from 182,070 in 2022 to 124,830 in 2025. The gains from planning changes have been cancelled by higher costs that government itself has imposed.",
      "Edward Donovan and Ben Hopkinson model two schemes. One is a 100-unit brownfield apartment block in Inner London (Camden), with 35% affordable housing. The other is a greenfield scheme of 100 three-bedroom houses in Chelmsford. They work out the minimum sale price at which the scheme is viable — the ‘clearing price’ — and then strip out every tax, levy, planning delay and mandated extra that government has added.",
      "The London flat has to sell for £775,000 before anyone will build it. Of that, £442,000 (57%) is government-imposed cost. Without those costs the viable price falls to £333,000. In the Home Counties the house needs to sell for £535,000; government costs are £224,000 (42%). Strip them out and the figure is £311,000. The paper notes that a developer must create £10 of pre-tax, pre-mandate value to keep £1 of profit in London, and £8 outside it. The effective burden on profit is 90% and 88% respectively.",
      "The biggest single item is affordable housing obligations: £195,000 per private London flat (25% of the price) and £105,000 per Home Counties house. Then come planning and the delay that comes with it (£62,000 and £45,000). Mandated design extras follow: dual-aspect flats, second staircases above 18 metres, balconies, the Future Homes Standard, biodiversity net gain, carbon offsets. Taxes and levies include stamp duty, the Community Infrastructure Levy, the Residential Property Developer Tax, the Building Safety Levy, landfill tax (whose lower rate has more than doubled and is on a path to quintuple) and corporation tax. Individually many of these can be justified. Together they have made schemes unviable.",
      "The authors’ central proposal is to replace the present buffet of taxes, levies and most mandates (except corporation tax) with a single Floorspace Development Tax. It would be charged on additional gross floorspace, vary by use class and location, and be split between central and local government. Set at a sensible rate, they calculate it could cut the clearing price of a home by more than a third while raising cash receipts by more than 50%. Local authorities would still get money for infrastructure, social housing or remediation; they would simply get it in a form that does not kill the scheme.",
      "They also argue for a rationalisation of requirements. Where the cost and the benefit are already internalised between the builder and the buyer — a balcony, dual-aspect, certain accessibility extras — the mandate should go. The buyer who values the feature can pay for it. The buyer who does not should not be forced to subsidise it. Planning should be simplified so that a scheme which fits the plan is not re-litigated for years. Rights to light, protected view corridors and the hunt for the perfect ‘Goldilocks’ development all come in for the same treatment: useful aims, applied in ways that freeze the most valuable land.",
      "The paper is careful not to claim that every regulation is worthless. It is careful to say that the cumulative weight is now the binding constraint. Large developers are buying less land. Nearly 4,000 construction firms went bust last year. Small builders, who used to deliver a large share of new homes, are disappearing. The modelling is of break-even prices on two illustrative schemes, not of average sale prices across the country. The direction of travel is clear enough.",
      "Full report: Edward Donovan and Ben Hopkinson, Easing the Burdens: How Government Policy Blocks Homes, Centre for Policy Studies, November 2026. Available at cps.org.uk. The numbers above are taken directly from that paper. Build On has summarised them; the analysis and the recommendations are the authors’."
    ]
  },
  {
    slug: "democracy-without-the-veto",
    title: "Democracy without the neighbourhood veto",
    subtitle: "Britain is not short of elections. It is short of a room big enough for the people who need homes",
    date: "2026-09-13",
    author: "Build On",
    excerpt: "Local democracy, as we run it, hands a practical veto to the people already on the street. You can keep the ballot box and still stop treating every field as a parish plebiscite.",
    body: [
      "Western countries congratulate themselves on being democracies. Then, in England, a meaningful housing scheme reaches a committee and dies the death of a thousand local objections. The minutes will speak of character and capacity. The waiting lists will not be in the room.",
      "A parish hall packed against 800 homes is very democratic for the people who found a Tuesday evening. It is a rum way to decide whether anyone under forty can still live in the county. Both can be true at once. We have simply confused the warmth of a well-attended meeting with the whole of self-government.",
      "How the veto gets made",
      "New houses dump their costs on a small, organised group. Traffic. School places. A view that used to be a field. The gains wander off across thousands of people who will never see the agenda: lower rents, a nurse who can live near the hospital, children who do not have to leave town. So the process is not a quiet sounding of the community. It is a filter. Homeowners with a printer come through it. Renters, future residents and the family one town over tend not to.",
      "English law already lets anyone write in. In practice the file fills up with whoever got the leaflet. Add a planning system in which almost every scheme can still be refused, a Green Belt treated as a family heirloom, and councils that keep precious little of the long-term tax from new homes, and no becomes the sensible local act. Nobody needs a conspiracy. The machinery asks for refusal and, bless it, refusal arrives.",
      "We already have more democracy than the committee",
      "Parliament sets housing need and the national policy framework. Councils, if they can bear it, write a local plan. An inspector examines the thing. Governments can be thrown out for failing to house people. Courts will still slap down a decision that breaks the law. None of that requires a second, site-by-site poll of neighbours after the plan has been adopted. That extra veto is a post-war administrative habit with an excellent press agent. It is not Magna Carta.",
      "You can keep general elections, local elections, consultation and judicial review, and still decline to treat every hedgerow as a referendum question. Democracy is a set of rooms. We have been using the smallest one for the largest argument.",
      "Rooms that still count as democracy",
      "Decide the big yes earlier. Elect a council, a mayor or a parliament to say: this corridor grows, this gap stays open, this density is allowed. After that, a scheme that fits the rules is presumed to be acceptable. Neighbours can still have a proper row about design, flood risk and the junction. They do not get to reopen whether this town should grow at all. You have already had that election. Use it.",
      "Move the bruising choices up a tier. Housing numbers and strategic sites sit with combined authorities or mayors who answer to a larger electorate, including the people who need the homes. Parishes keep the parks, the design codes, the conservation areas. Call-in powers are this instinct in a high-vis jacket. The village loses a veto. The city-region gains a decision it can defend at the ballot box. There is a trade. Pretending there is not one is how we got the present mess.",
      "Pay the locality for saying yes. If new homes actually paid the council's bills for years — a lasting slice of council tax, or a share of land value — yes might occasionally win a local election. Objectors would still object. They always do. At least the people who voted for growth would not look like saints or simpletons. English districts that see the costs and export the gains should surprise nobody when they choose the field.",
      "Widen who counts. Statute already allows comment from outside the ward. You can go further: treat housing need and waiting lists as hard material; show that a consultation reached renters and under-forties, not only the civic society mailing list; use a citizens' assembly for the plan, and keep the application for the details. Build On is the blunt instrument version. Get the silent interest onto the file before the loud one closes it.",
      "Let a smaller group vote for homes, not only against them. Street votes. Estate ballots. Neighbourhood plans that add a storey in exchange for a say on the brick. Local democracy as a building tool rather than a fire extinguisher. It will not deliver fifty-five thousand homes in South Warwickshire by itself. It does chip away at the idea that local is a synonym for refuse.",
      "For the big sites, use a different instrument. New towns and proper urban extensions have been built by development corporations with a job, a board and a sunset clause. Parliament or a mayor creates them. Locals sit on design and stewardship. They do not get an infinite option on whether the place exists. The post-war new towns were many things. A coup was not one of them.",
      "What will not do",
      "Listen more on every outline application usually means listen longer to the same voices. Higher targets with the same committee veto produce speeches, then under-delivery. Green Belt is a national land-use policy, however fondly a ward newsletter may describe it as a human right. Abolishing consultation would lose the courts and the public before lunch. And the local paper will not re-educate its readers. It has bills to pay.",
      "The bargain",
      "You cannot give every street a binding veto on regional housing supply and still house the country. Something yields. The grown-up version keeps the ballot box and changes the room. Put the growth decision where winners and losers are both in the electorate. Lock it into rules. Pay the place that accepts the homes. Leave local politics to argue about how the street looks, not whether the next generation is allowed on it.",
      "We would still be a democracy. We would merely stop running one in which the people who arrived first hold a permanent option on the land. For a country that recites fairness with a straight face, that seems a modest renovation."
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
