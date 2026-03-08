const criteria = [
  "Ease of use",
  "Output quality",
  "Workflow fit",
  "Value for money",
  "Learning curve",
  "Real-world usefulness",
];

export default function HowWeReview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How We Review Tools
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Recommendations should be useful, transparent, and based on practical testing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Main copy */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              Every tool on Practical AI Stack is reviewed through a practical lens: does it save time, 
              improve output, fit real workflows, and justify the cost?
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              We care less about hype and more about whether a tool actually helps creators, 
              solo operators, and small business owners do better work with less friction.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Some links on this site may earn a commission. That never changes the review logic. 
              If a tool is bloated, overpriced, awkward, or overhyped, we&apos;ll say so.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              Affiliate-supported. Opinion-led. Practical-first.
            </div>
          </div>

          {/* Criteria grid */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="text-lg font-semibold text-white mb-6">
              Our Review Criteria
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {criteria.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20">
                    <svg className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
