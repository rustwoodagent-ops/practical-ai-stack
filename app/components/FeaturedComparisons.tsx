import Link from "next/link";

const comparisons = [
  {
    title: "ChatGPT vs Claude vs Gemini",
    copy: "Which AI assistant is best for writing, planning, research, and daily workflow?",
    cta: "Read comparison",
    href: "/comparisons/chatgpt-claude-gemini",
    featured: true,
  },
  {
    title: "Kit vs beehiiv",
    copy: "Which newsletter platform makes more sense for a one-person business?",
    cta: "Compare tools",
    href: "/comparisons/kit-beehiiv",
    featured: false,
  },
  {
    title: "Notion AI vs Obsidian Workflows",
    copy: "A practical look at structured thinking, notes, and knowledge management.",
    cta: "See breakdown",
    href: "/comparisons/notion-obsidian",
    featured: false,
  },
  {
    title: "Best AI Image Tools Compared",
    copy: "Which tools are actually worth using for content, branding, and fast visual production?",
    cta: "View image tool roundup",
    href: "/comparisons/best-ai-image-tools",
    featured: false,
  },
];

export default function FeaturedComparisons() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Compare Before You Buy
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Side-by-side guides that help you choose the right tool for the way you actually work.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Featured card */}
          <Link
            href={comparisons[0].href}
            className="group relative flex flex-col rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/50 to-slate-900/50 p-8 lg:col-span-1 lg:row-span-2 transition-all hover:border-indigo-500/50"
          >
            <div className="mb-4 inline-flex w-fit rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Featured
            </div>
            <h3 className="text-2xl font-bold text-white">
              {comparisons[0].title}
            </h3>
            <p className="mt-4 flex-1 text-lg text-slate-400">
              {comparisons[0].copy}
            </p>
            <div className="mt-8 flex items-center text-base font-semibold text-indigo-400 transition-colors group-hover:text-indigo-300">
              {comparisons[0].cta}
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>

          {/* Other cards */}
          {comparisons.slice(1).map((comparison) => (
            <Link
              key={comparison.title}
              href={comparison.href}
              className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-indigo-500/30 hover:bg-slate-800/50"
            >
              <h3 className="text-lg font-semibold text-white">
                {comparison.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {comparison.copy}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-indigo-400 transition-colors group-hover:text-indigo-300">
                {comparison.cta}
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
