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
    slug: "democracy-without-the-veto",
    title: "Democracy without the neighbourhood veto",
    subtitle:
      "Britain is not short of elections. It is short of a room big enough for the people who need homes",
    date: "2026-09-13",
    author: "Build On",
    excerpt:
      "Local democracy, as we run it, hands a practical veto to the people already on the street. You can keep the ballot box and still stop treating every field as a parish plebiscite.",
    body: [
      "Western countries congratulate themselves on being democracies. Then, in England, a meaningful housing scheme reaches a committee and dies the death of a thousand local objections. The minutes will speak of character and capacity. The waiting lists will not be in the room.",
      "A parish hall packed against 800 homes is very democratic for the people who found a Tuesday evening. It is a rum way to decide whether anyone under forty can still live in the county. Both can be true at once. We have simply confused the warmth of a well-attended meeting with the whole of self-government.",
      "How the veto gets made",
      "New houses dump their costs on a small, organised group. Traffic. School places. A view that used to be a field. The gains wander off across thousands of people who will never see the agenda: lower rents, a nurse who can live near the hospital, children who do not have to leave town. So the process is not a quiet sounding of \u201cthe community\u201d. It is a filter. Homeowners with a printer come through it. Renters, future residents and the family one town over tend not to.",
      "English law already lets anyone write in. In practice the file fills up with whoever got the leaflet. Add a planning system in which almost every scheme can still be refused, a Green Belt treated as a family heirloom, and councils that keep precious little of the long-term tax from new homes, and \u201cno\u201d becomes the sensible local act. Nobody needs a conspiracy. The machinery asks for refusal and, bless it, refusal arrives.",
      "We already have more democracy than the committee",
      "Parliament sets housing need and the national policy framework. Councils, if they can bear it, write a local plan. An inspector examines the thing. Governments can be thrown out for failing to house people. Courts will still slap down a decision that breaks the law. None of that requires a second, site-by-site poll of neighbours after the plan has been adopted. That extra veto is a post-war administrative habit with an excellent press agent. It is not Magna Carta.",
      "You can keep general elections, local elections, consultation and judicial review, and still decline to treat every hedgerow as a referendum question. Democracy is a set of rooms. We have been using the smallest one for the largest argument.",
      "Rooms that still count as democracy",
      "Decide the big yes earlier. Elect a council, a mayor or a parliament to say: this corridor grows, this gap stays open, this density is allowed. After that, a scheme that fits the rules is presumed to be acceptable. Neighbours can still have a proper row about design, flood risk and the junction. They do not get to reopen \u201cshould this town grow at all?\u201d You have already had that election. Use it.",
      "Move the bruising choices up a tier. Housing numbers and strategic sites sit with combined authorities or mayors who answer to a larger electorate, including the people who need the homes. Parishes keep the parks, the design codes, the conservation areas. Call-in powers are this instinct in a high-vis jacket. The village loses a veto. The city-region gains a decision it can defend at the ballot box. There is a trade. Pretending there isn\u2019t one is how we got the present mess.",
      "Pay the locality for saying yes. If new homes actually paid the council\u2019s bills for years \u2014 a lasting slice of council tax, or a share of land value \u2014 \u201cyes\u201d might occasionally win a local election. Objectors would still object. They always do. At least the people who voted for growth would not look like saints or simpletons. English districts that see the costs and export the gains should surprise nobody when they choose the field.",
      "Widen who counts. Statute already allows comment from outside the ward. You can go further: treat housing need and waiting lists as hard material; show that a consultation reached renters and under-forties, not only the civic society mailing list; use a citizens\u2019 assembly for the plan, and keep the application for the details. Build On is the blunt instrument version. Get the silent interest onto the file before the loud one closes it.",
      "Let a smaller group vote for homes, not only against them. Street votes. Estate ballots. Neighbourhood plans that add a storey in exchange for a say on the brick. Local democracy as a building tool rather than a fire extinguisher. It will not deliver fifty-five thousand homes in South Warwickshire by itself. It does chip away at the idea that \u201clocal\u201d is a synonym for \u201crefuse\u201d.",
      "For the big sites, use a different instrument. New towns and proper urban extensions have been built by development corporations with a job, a board and a sunset clause. Parliament or a mayor creates them. Locals sit on design and stewardship. They do not get an infinite option on whether the place exists. The post-war new towns were many things. A coup was not one of them.",
      "What will not do",
      "\u201cListen more\u201d on every outline application usually means listen longer to the same voices. Higher targets with the same committee veto produce speeches, then under-delivery. Green Belt is a national land-use policy, however fondly a ward newsletter may describe it as a human right. Abolishing consultation would lose the courts and the public before lunch. And the local paper will not re-educate its readers. It has bills to pay.",
      "The bargain",
      "You cannot give every street a binding veto on regional housing supply and still house the country. Something yields. The grown-up version keeps the ballot box and changes the room. Put the growth decision where winners and losers are both in the electorate. Lock it into rules. Pay the place that accepts the homes. Leave local politics to argue about how the street looks, not whether the next generation is allowed on it.",
      "We would still be a democracy. We would merely stop running one in which the people who arrived first hold a permanent option on the land. For a country that recites fairness with a straight face, that seems a modest renovation.",
    ],
  },
