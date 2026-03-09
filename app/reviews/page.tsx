import Link from "next/link";

const reviews = [
  {
    title: "Best AI Writing Assistant for Teams (2026)",
    href: "/reviews/ai-writing-assistants",
    summary:
      "A practical review of top writing assistants across quality, speed, collaboration, and value.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Reviews</p>
        <h1 className="mt-2 text-4xl font-bold">AI Tool Reviews</h1>
        <p className="mt-4 text-slate-300">Independent, workflow-first reviews focused on actual operator outcomes.</p>

        <div className="mt-10 grid gap-5">
          {reviews.map((r) => (
            <article key={r.href} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-xl font-semibold">{r.title}</h2>
              <p className="mt-2 text-slate-400">{r.summary}</p>
              <Link href={r.href} className="mt-4 inline-block text-indigo-300 font-semibold">Read review →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
