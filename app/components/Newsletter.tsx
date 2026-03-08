"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get the Weekly Stack
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            One useful email each week with practical AI tools, sharp comparisons, and worthwhile 
            finds — without drowning you in noise.
          </p>

          <div className="mt-8 text-slate-300">
            <p>
              Join readers who want useful AI recommendations, not endless hype cycles and recycled lists. 
              Every week you&apos;ll get a small curated shortlist of tools, updates, and comparisons 
              worth actually paying attention to.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:justify-center">
            <div className="min-w-0 flex-1 max-w-md">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="block w-full rounded-xl border-0 bg-slate-900 px-4 py-4 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-4 sm:ml-4 sm:mt-0">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join the Weekly Stack
              </button>
            </div>
          </form>

          <p className="mt-4 text-sm text-slate-500">
            No spam. Unsubscribe anytime. Only practical tools and useful insights.
          </p>
        </div>
      </div>
    </section>
  );
}
