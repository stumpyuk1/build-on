import { BookOpen } from "lucide-react";

const myths = [
  {
    myth: "There is no housing shortage — look at all the empty homes.",
    reality:
      "Long-term empty homes in England are a small share of the stock (typically around 1% empty for six months or more). Bringing every suitable empty home back into use would help at the margins, but it cannot close a shortfall measured in hundreds of thousands of homes a year, or a multi-million historic backlog. Vacancy rates in the UK are among the lower rates in Europe. Shortage is real in the places people need to live and work.",
  },
  {
    myth: "Building more homes will not bring prices down.",
    reality:
      "In markets with constrained supply, extra demand mostly pushes prices up. England’s housing supply responds only weakly to price rises. Sustained higher building is the main structural way to stop price-to-earnings ratios drifting higher and, over time, to ease them. One scheme will not reset national prices overnight — but systematically blocking supply is how we got to 7–8× earnings from ~3× a generation ago.",
  },
  {
    myth: "Brownfield alone is enough — we do not need to build on green fields.",
    reality:
      "Brownfield should be used first where it is suitable, viable and in the right place. It is not enough on its own. Much brownfield is contaminated, poorly located, or already allocated and still not delivering at the scale required. High-demand areas often have limited brownfield relative to need. Sensible policy uses both brownfield and carefully chosen greenfield / grey-belt sites next to existing settlements and transport.",
  },
  {
    myth: "New homes always ruin character and overdevelop the area.",
    reality:
      "Design and density matter. Poor schemes should be improved or refused. Good schemes respect local character, scale and materials — and many of the places people love most were once “new”. Character is not the same as freezing a neighbourhood in time. Planning already tests design quality; the answer to bad design is better design, not a blanket ban on homes.",
  },
  {
    myth: "Infrastructure cannot cope — schools, GPs and roads are full.",
    reality:
      "Capacity constraints are real in some places and must be planned for. They are not a permanent reason to stop housing. New development contributes through Section 106 and the Community Infrastructure Levy (and successor mechanisms) toward schools, health and transport. Refusing homes does not fund infrastructure — it leaves both housing need and service pressure unaddressed. Infrastructure should be planned with growth, not used as a veto against it.",
  },
  {
    myth: "Developers are landbanking — just force them to build what they already have permission for.",
    reality:
      "Some delay between permission and completion is normal (conditions, finance, infrastructure, market absorption). Systematic “landbanking” as the main cause of the shortage is not supported by the overall numbers: permissions and completions have both been too low relative to need. Forcing faster build-out on existing sites may help at the margin, but it does not remove the need for a larger pipeline of new permissions in the right places.",
  },
  {
    myth: "New homes only go to investors / second-home owners / people from outside the area.",
    reality:
      "Investor and second-home demand is a genuine issue in some coastal and hotspot areas and can be addressed with local policy tools. Nationally, most new homes are occupied by households who need somewhere to live. Affordable and social housing quotas, local-connection policies where justified, and proper plan-led allocation are better responses than blocking supply for everyone.",
  },
  {
    myth: "New housing will crash the value of existing homes.",
    reality:
      "Well-designed new housing does not systematically destroy nearby values. In many cases good development supports local amenities and demand. The larger risk to living standards is not a modest easing of scarcity prices — it is locking the next generation out of ownership and stable tenancies while prices stay extreme relative to earnings. Planning should weigh the public interest in adequate housing, not only short-term asset prices.",
  },
];

export default function MythBusting() {
  return (
    <section id="myths" className="scroll-mt-24 border-t border-navy-100 pt-16 mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-build-green/15 text-build-green-dark">
          <BookOpen size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
          Myth-busting
        </h2>
      </div>

      <p className="text-navy-700 text-lg leading-relaxed max-w-3xl mb-10">
        Objections to new homes often rest on claims that sound plausible but do
        not hold up under scrutiny. Below are some of the most common myths — and
        the evidence that answers them. Use these points to keep representations
        factual and calm.
      </p>

      <div className="space-y-6 mb-12">
        {myths.map((item) => (
          <div
            key={item.myth}
            className="rounded-2xl border border-navy-100 overflow-hidden"
          >
            <div className="bg-navy-50 px-6 py-4 border-b border-navy-100">
              <p className="text-sm font-semibold uppercase tracking-wide text-build-green-dark mb-1">
                Myth
              </p>
              <p className="text-lg font-semibold text-navy-950">“{item.myth}”</p>
            </div>
            <div className="px-6 py-5 text-navy-700 leading-relaxed">
              <p>
                <strong className="text-navy-950">Reality:</strong> {item.reality}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-navy-950 text-white p-6 sm:p-8 mb-12">
        <h3 className="text-xl font-semibold mb-4">
          How to use this in a representation
        </h3>
        <p className="text-navy-200 leading-relaxed mb-4">
          You do not need to rebut every objection at length. One or two calm,
          factual points are often enough, for example:
        </p>
        <blockquote className="border-l-4 border-build-green pl-4 text-navy-100 italic leading-relaxed">
          “Concerns about infrastructure and character are important and should
          be addressed through design and developer contributions. They do not
          remove the need for more homes: England is delivering well below
          assessed need, and affordability remains far worse than a generation
          ago. I support this application subject to good design and appropriate
          mitigation.”
        </blockquote>
      </div>

      <p className="text-sm text-navy-600 leading-relaxed max-w-3xl mb-8">
        This is a starting set of the most common myths. We will expand it with
        local examples, further sources and links to the Toolkit as the campaign
        grows.
      </p>
    </section>
  );
}
