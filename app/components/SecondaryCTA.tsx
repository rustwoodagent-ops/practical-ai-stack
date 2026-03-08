import Link from "next/link";

export default function SecondaryCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Stop Testing Everything. Start Using What Works.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Most people waste time bouncing between shiny tools, inflated promises, and generic recommendations. 
          Practical AI Stack exists to shorten that loop.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
          Whether you&apos;re writing content, running a one-person business, building a workflow, 
          or trying to choose the right tool before you spend money, this site helps you cut through 
          the noise and move faster with more confidence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/25"
          >
            Browse Reviews
          </Link>
          <Link
            href="/comparisons"
            className="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-base font-semibold text-white transition-all hover:border-slate-600 hover:bg-slate-800"
          >
            See Comparisons
          </Link>
        </div>
      </div>
    </section>
  );
}
