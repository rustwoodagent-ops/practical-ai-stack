export default function Article() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Editorial Review</p>
        <h1 className="mt-2 text-4xl font-bold">Best AI Writing Assistant for Teams (2026)</h1>
        <p className="mt-4 text-slate-300">Short answer: for most teams, Claude and ChatGPT are the strongest dual-stack. Jasper still wins for prebuilt marketing workflows.</p>

        <h2 className="mt-10 text-2xl font-semibold">How we tested</h2>
        <p className="mt-3 text-slate-300">We ran each tool through five repeatable tasks: long-form rewrite, landing page draft, email sequence generation, brand voice consistency, and collaborative editing handoff.</p>

        <h2 className="mt-8 text-2xl font-semibold">Top picks</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
          <li><strong>Best overall:</strong> ChatGPT Team — strongest balance of quality + speed + integrations.</li>
          <li><strong>Best for structured thinking:</strong> Claude — cleaner long-form reasoning and editorial tone control.</li>
          <li><strong>Best marketing workflow package:</strong> Jasper — fastest campaign assembly for teams.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Verdict</h2>
        <p className="mt-3 text-slate-300">If your team needs one platform, choose ChatGPT Team. If editorial quality is the north star, pair Claude + your CMS. If campaign speed is the KPI, Jasper can still justify its premium.</p>
      </article>
    </main>
  );
}
