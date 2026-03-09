import Link from "next/link";

const featured = [
  {
    title: "Best AI Writing Assistant for Teams (2026)",
    category: "Editorial Review",
    score: "9.2",
    summary:
      "Head-to-head testing across speed, output quality, and collaboration workflows for marketing and content teams.",
    href: "/reviews/ai-writing-assistants",
  },
  {
    title: "Claude vs ChatGPT vs Gemini for Operators",
    category: "Comparison",
    score: "9.0",
    summary:
      "A practical operator-focused breakdown: daily reliability, context handling, and best use by task type.",
    href: "/comparisons/claude-vs-chatgpt-vs-gemini",
  },
  {
    title: "Best AI Video Tools for Solo Creators",
    category: "Buyer Guide",
    score: "8.8",
    summary:
      "Which tools actually cut edit time without sacrificing quality—ranked by real workflow outcomes.",
    href: "/best-tools/ai-video-tools",
  },
];

const stacks = [
  {
    name: "Creator Stack",
    subtitle: "For YouTube, Shorts, and content teams",
    tools: "Descript + Midjourney + ChatGPT + OpusClip",
  },
  {
    name: "Operator Stack",
    subtitle: "For automation, docs, and daily execution",
    tools: "Claude + Notion AI + Zapier + Perplexity",
  },
  {
    name: "Growth Stack",
    subtitle: "For offers, email, and conversion",
    tools: "Jasper + Framer AI + Synthesia + ConvertKit",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top editorial strip */}
      <section className="border-b border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 text-xs sm:px-6 lg:px-8">
          <p className="font-medium uppercase tracking-[0.18em] text-indigo-400">
            Practical AI Stack — Independent Reviews
          </p>
          <p className="text-slate-400">
            Affiliate-supported • Transparent scoring • Updated weekly
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950 to-slate-950" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Modern Editorial + SaaS Buyer Intelligence
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Buy Better AI Tools with
                <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Real Reviews, Not Link Dumps
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                We test AI tools like a product team, write like an editorial desk,
                and score like a SaaS analyst. Clear recommendations for creators,
                operators, and small business teams.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/best-tools"
                  className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                  Explore Best Tools
                </Link>
                <Link
                  href="/comparisons"
                  className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  View Comparisons
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                How We Score
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>Workflow Fit</span>
                  <span className="text-indigo-300">30%</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>Output Quality</span>
                  <span className="text-indigo-300">25%</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>Ease of Use</span>
                  <span className="text-indigo-300">20%</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>Cost Efficiency</span>
                  <span className="text-indigo-300">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Support & Reliability</span>
                  <span className="text-indigo-300">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured editorial cards */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-400">
              Featured Coverage
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Top Reviews This Week</h2>
          </div>
          <Link href="/reviews" className="text-sm font-medium text-indigo-300 hover:text-indigo-200">
            See all reviews →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-indigo-500/50"
            >
              <div className="mb-4 flex items-center justify-between text-xs">
                <span className="rounded-full border border-slate-700 px-2.5 py-1 text-slate-300">
                  {item.category}
                </span>
                <span className="rounded-full bg-indigo-500/15 px-2.5 py-1 font-semibold text-indigo-300">
                  Score {item.score}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-snug group-hover:text-indigo-200">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.summary}</p>
              <Link href={item.href} className="mt-5 inline-block text-sm font-semibold text-indigo-300">
                Read review →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Preset stacks */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-400">Quick Start</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Recommended AI Stacks by Goal</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {stacks.map((s) => (
              <div key={s.name} className="rounded-xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{s.subtitle}</p>
                <p className="mt-4 rounded-lg bg-slate-900 p-3 text-sm text-slate-200">{s.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-900/60 p-8 sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Want the exact tools for your workflow?</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Subscribe for practical buyer guides, real-world AI workflows, and weekly comparison drops.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/newsletter" className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500">
              Join Newsletter
            </Link>
            <Link href="/best-tools" className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-500">
              Browse Best Tools
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
