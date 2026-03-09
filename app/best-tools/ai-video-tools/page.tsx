export default function Article() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Buyer Guide</p>
        <h1 className="mt-2 text-4xl font-bold">Best AI Video Tools for Solo Creators</h1>
        <p className="mt-4 text-slate-300">For most solo creators: use one editing core, one clip repurposer, and one script ideation engine. Avoid tool sprawl.</p>

        <h2 className="mt-10 text-2xl font-semibold">Top 3 setup</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
          <li><strong>Core editor:</strong> Descript (speed + transcript-based editing)</li>
          <li><strong>Repurposing:</strong> OpusClip (short-form extraction)</li>
          <li><strong>Script partner:</strong> ChatGPT or Claude (hooks, structure, iteration)</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">What to optimise first</h2>
        <p className="mt-3 text-slate-300">Optimise for throughput before polish. Publish cadence beats perfect edits in early growth stages. Use AI to remove friction, not to replace your point of view.</p>

        <h2 className="mt-8 text-2xl font-semibold">Verdict</h2>
        <p className="mt-3 text-slate-300">If you’re solo, keep the stack lean. Descript + OpusClip + one strong language model is enough to ship high-quality weekly content consistently.</p>
      </article>
    </main>
  );
}
