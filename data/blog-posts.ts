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
