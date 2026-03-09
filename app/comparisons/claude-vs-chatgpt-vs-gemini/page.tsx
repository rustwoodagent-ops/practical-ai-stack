export default function Article() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Comparison</p>
        <h1 className="mt-2 text-4xl font-bold">Claude vs ChatGPT vs Gemini for Operators</h1>
        <p className="mt-4 text-slate-300">Operator lens: reliability, context memory, structured outputs, and handoff quality to tools/automation.</p>

        <h2 className="mt-10 text-2xl font-semibold">At a glance</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-300">
          <li><strong>ChatGPT:</strong> strongest ecosystem and tool integration footprint.</li>
          <li><strong>Claude:</strong> strongest long-context reasoning and document integrity.</li>
          <li><strong>Gemini:</strong> improving rapidly, best value in Google-native workflows.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Who should pick what?</h2>
        <p className="mt-3 text-slate-300"><strong>Pick ChatGPT</strong> if your team needs broad compatibility and fast implementation. <strong>Pick Claude</strong> if quality under long context is mission-critical. <strong>Pick Gemini</strong> if your stack is deeply tied to Workspace and cost discipline.</p>

        <h2 className="mt-8 text-2xl font-semibold">Final recommendation</h2>
        <p className="mt-3 text-slate-300">Most operators should run a dual model setup: ChatGPT for execution surface area, Claude for high-stakes writing and reasoning. Use Gemini where Google-native automation gives a measurable edge.</p>
      </article>
    </main>
  );
}
