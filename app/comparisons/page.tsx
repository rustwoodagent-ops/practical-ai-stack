import Link from "next/link";

const comparisons = [
  {
    title: "Claude vs ChatGPT vs Gemini for Operators",
    href: "/comparisons/claude-vs-chatgpt-vs-gemini",
    summary:
      "Which model wins for planning, execution, context retention, and production reliability.",
  },
];

export default function ComparisonsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Comparisons</p>
        <h1 className="mt-2 text-4xl font-bold">AI Tool Comparisons</h1>
        <p className="mt-4 text-slate-300">Head-to-head tests built for people making real buying decisions.</p>

        <div className="mt-10 grid gap-5">
          {comparisons.map((c) => (
            <article key={c.href} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="mt-2 text-slate-400">{c.summary}</p>
              <Link href={c.href} className="mt-4 inline-block text-indigo-300 font-semibold">Read comparison →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
