import Link from "next/link";

const guides = [
  {
    title: "Best AI Video Tools for Solo Creators",
    href: "/best-tools/ai-video-tools",
    summary:
      "A buyer guide for creators who need speed without losing storytelling quality.",
  },
];

export default function BestToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Best Tools</p>
        <h1 className="mt-2 text-4xl font-bold">Best AI Tools by Use Case</h1>
        <p className="mt-4 text-slate-300">Curated picks by workflow: creator, operator, growth, and small business.</p>

        <div className="mt-10 grid gap-5">
          {guides.map((g) => (
            <article key={g.href} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h2 className="text-xl font-semibold">{g.title}</h2>
              <p className="mt-2 text-slate-400">{g.summary}</p>
              <Link href={g.href} className="mt-4 inline-block text-indigo-300 font-semibold">Read guide →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
