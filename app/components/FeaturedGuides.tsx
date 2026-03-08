import Link from "next/link";

const guides = [
  {
    title: "Best AI Tools for Creators in 2026",
    copy: "A practical roundup of the tools most worth your attention this year.",
    cta: "Read guide",
    href: "/guides/best-ai-tools-creators-2026",
  },
  {
    title: "Best AI Writing Tools for Solo Business Owners",
    copy: "The strongest tools for content, email, planning, and day-to-day output.",
    cta: "Read guide",
    href: "/guides/best-ai-writing-tools",
  },
  {
    title: "Best AI Productivity Tools for Busy Solo Operators",
    copy: "A curated list of tools that genuinely save time and reduce mental clutter.",
    cta: "Read guide",
    href: "/guides/best-ai-productivity-tools",
  },
  {
    title: "Best AI Tools for Social Media Content",
    copy: "Create faster without turning your content into generic machine sludge.",
    cta: "Read guide",
    href: "/guides/best-ai-social-media-tools",
  },
  {
    title: "Best AI Newsletter Tools for Creators and Coaches",
    copy: "The best stack for building an email engine that actually supports your business.",
    cta: "Read guide",
    href: "/guides/best-ai-newsletter-tools",
  },
  {
    title: "My 5-Tool AI Stack for Running a Solo Business",
    copy: "A real-world setup built for practical output, not endless experimenting.",
    cta: "See the stack",
    href: "/guides/5-tool-ai-stack",
  },
];

export default function FeaturedGuides() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Guides
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Deep dives, ranked lists, and practical recommendations for real operators.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <article
              key={guide.title}
              className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-indigo-500/30 hover:bg-slate-800/50"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Guide {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                {guide.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {guide.copy}
              </p>
              <Link
                href={guide.href}
                className="mt-6 inline-flex items-center text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                {guide.cta}
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
