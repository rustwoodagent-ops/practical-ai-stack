"use client";

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#0a0a0b] border-t border-[#27272a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-8 sm:p-12">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[100px] opacity-50" />
          
          <div className="relative text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get One Practical AI Tool, Every Week
            </h2>
            <p className="text-lg text-[#a1a1aa] max-w-xl mx-auto mb-8">
              Join 2,000+ creators and solopreneurs getting tested tool recommendations, 
              honest reviews, and exclusive deals.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-lg bg-[#0a0a0b] border border-[#27272a] text-white placeholder-[#71717a] focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-[#71717a] mt-4">
              No spam. Unsubscribe anytime. We test every tool we recommend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
