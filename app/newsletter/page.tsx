export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Newsletter</p>
        <h1 className="mt-2 text-4xl font-bold">Practical AI Stack Weekly</h1>
        <p className="mt-4 text-slate-300">One email per week: best tools, what changed, and what’s actually worth testing.</p>
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <p className="text-slate-300">Signup form integration coming next deploy pass. For now, use your ESP embed here.</p>
        </div>
      </section>
    </main>
  );
}
