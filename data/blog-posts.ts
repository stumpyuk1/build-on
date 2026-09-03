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
    slug: "how-much-regulation-adds-to-a-new-home",
    title: "How much regulation adds to a new home",
    subtitle:
      "Two different numbers: extra cost on the plot, and the much larger planning-scarcity effect on prices",
    date: "2026-09-03",
    author: "Build On",
    excerpt:
      "Identifiable policy costs add tens of thousands of pounds to building a new English house. The planning system’s restriction of supply adds a much larger share of the sale price in the tightest markets.",
    body: [
      "People ask a simple question: how much does regulation add to the price of a new house in the United Kingdom? There are two different questions hiding in that sentence, and mixing them produces nonsense.",
      "The first is what extra cash regulation puts on the construction cost of one new dwelling — building regulations, the Future Homes Standard, Biodiversity Net Gain, levies, Section 106, CIL. The second is how much the planning system raises the market price of houses by restricting how many get built. Peer-reviewed economics is strong on the second. The pound-per-plot numbers come mainly from government impact assessments and industry studies.",
      "The big number: planning scarcity and sale prices",
      "This is the academic core. Hilber and Vermeulen, in the Economic Journal in 2016, used a panel of 353 English planning authorities from 1974 to 2008. They separated regulatory restrictiveness from physical land scarcity and topography. Regulatory constraints were the main driver of how strongly house prices respond to local earnings.",
      "A counterfactual with regulatory constraints stripped out implied real prices in an average English authority would have risen about 100 percent less over that period. Their illustration was a rise to about £147,000 rather than £226,000. A milder comparison: if the South East had been only as restrictive as the North East, South East prices would have been about 25 percent lower in 2008 and perhaps 30 percent lower by 2015.",
      "That is not “BNG added £5,700 to this plot”. It is the system that rations permission making all houses in tight markets more expensive.",
      "Cheshire and Sheppard’s work on the welfare economics of British land-use constraint, using Reading, found that net welfare losses can be large. In a mid-2000s snapshot, housing land just inside the urban envelope was worth around £3 million per hectare against agricultural land next door at about £7,500. The “regulatory tax” is the gap between the value of land with permission and land without it. Related LSE work on offices found British markets with a regulatory tax of several hundred percent in central London. Housing follows the same logic: sale price minus physical build cost is mostly permissioned land, not bricks.",
      "If you take an England average sale price around £290,000 and treat 25 to 35 percent as the planning-scarcity wedge in constrained southern markets, you are talking tens of thousands to over £100,000 on the price, varying hugely by place. In the North East the wedge is much smaller. There is no single UK average that is honest.",
      "Direct extra cost on building one new home",
      "This is what most people mean by the regulatory burden on a new build. It is additive cost, not the scarcity premium.",
      "The Home Builders Federation’s 2026 report The Viability Crunch is a trade-body study, not a journal article, but it is the most cited recent itemisation. It measures extra cost since 2020, not the total stock of regulation since 1947. Of a quoted £76,000 increase, about £37,000 is materials and labour inflation. The policy slice is about £39,000: roughly £7,770 for wider building regulations, £5,700 for Biodiversity Net Gain, £10,200 for the Future Homes Standard, about £7,000 in taxes and levies including the Building Safety Levy and landfill tax, and about £7,000 in site-specific extras such as nutrient mitigation. They put the whole £76,000 at more than 20 percent of an average new-home value they take as £365,000. Treat this as an industry upper bound on recent additions.",
      "Government Future Homes and Building Regulations impact assessments sit in the same ballpark for the energy package: typically a low-to-mid thousands to around £10,000 uplift per house. Older Committee on Climate Change work with Currie and Brown found ultra-high fabric plus a heat pump as a 1 to 4 percent build-cost uplift versus then-current regulations — cheaper to do at construction than as retrofit.",
      "Section 106 and CIL are a tax on the scheme, usually designed to come out of land value. Official surveys have put developer contributions in the billions of pounds a year nationally. Most of the value is affordable housing via Section 106. Per plot this varies from almost nothing in weak markets to tens of thousands in the South East. Advocacy estimates of the housing element of Section 106 as a tax on open-market homes are in the low tens of thousands where it bites. There is no stable national average in the academic literature.",
      "Process costs matter too. Competition and industry work on small sites finds direct planning costs — fees, professionals, delay finance — disproportionately high per plot on small sites, on the order of a few thousand pounds below 50 units versus under £1,000 on very large sites. That hits SME builders hardest.",
      "Who actually pays?",
      "In a tight market, sale prices are set by what buyers will pay for scarce homes. Extra Section 106, CIL and BNG usually come off residual land value first, not added pound-for-pound to the sticker price. When land value cannot fall any further, extra regulation stops the home being built. That is how regulation raises prices: fewer completions, not a line on the completion certificate.",
      "Building-regulations and Future Homes rules change the physical product. Some of that is capitalised into a slightly higher willingness to pay; some is deadweight. The Hilber–Vermeulen effect is the one that hits buyers of new and existing homes: less supply, higher prices everywhere the constraint binds. A new-build buyer in a tight southern market is paying a large scarcity premium created by the planning regime. They are not usually paying the full Section 106 bill as an add-on at the till.",
      "What to take from this",
      "Regulation adds on the order of £25,000 to £40,000 of identifiable extra build and policy cost to a typical new English house compared with the early-2020s baseline. The planning system’s restriction of supply is estimated to have added a much larger share of the sale price in southern England — measured in the academic literature as tens of percent, not a few thousand pounds.",
      "The first number is what a quantity surveyor can put on a spreadsheet. The second is why a house that costs around £180,000 to build sells for far more than that in the South East. Both matter. Confusing them is how people end up arguing that scrapping BNG would collapse house prices, or that bricks are what made Reading land worth three million pounds a hectare.",
      "Sources: Hilber and Vermeulen, Economic Journal 2016; Cheshire and Sheppard, Journal of Urban Economics 2002 and later LSE work; Home Builders Federation, The Viability Crunch, 2026; MHCLG planning-obligations surveys and NAO work on developer contributions; government Future Homes impact assessments.",
    ],
  },
