"use client";

const featuredTools = [
  {
    name: "Claude",
    category: "Writing",
    rating: 4.8,
    description: "The best AI for long-form writing, analysis, and thoughtful content creation. Our top pick for creators.",
    bestFor: "Blog posts, scripts, analysis",
    pricing: "Free / $20mo",
    affiliateUrl: "https://claude.ai",
  },
  {
    name: "Notion AI",
    category: "Notes",
    rating: 4.6,
    description: "AI-powered workspace that combines notes, databases, and now intelligent writing assistance.",
    bestFor: "Second brain, team docs",
    pricing: "$10/mo add-on",
    affiliateUrl: "https://notion.so",
  },
  {
    name: "Midjourney",
    category: "Image",
    rating: 4.7,
    description: "The gold standard for AI image generation. Unmatched quality for creative professionals.",
    bestFor: "Marketing assets, concept art",
    pricing: "$10/mo",
    affiliateUrl: "https://midjourney.com",
  },
  {
    name: "Zapier",
    category: "Workflow",
    rating: 4.5,
    description: "Connect 5000+ apps and automate repetitive tasks without coding. Essential for solopreneurs.",
    bestFor: "Automation, integrations",
    pricing: "Free / $20mo",
    affiliateUrl: "https://zapier.com",
  },
];

export default function FeaturedTools() {
  return (
    <section className="py-24 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Reviews</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Tools we use and recommend after real-world testing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredTools.map((tool, index) => (
            <div key={tool.name} className="bg-[#18181b] rounded-2xl border border-[#27272a] p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-green-400 font-medium uppercase tracking-wider">{tool.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{tool.name}</h3>
                </div>
                <div className="flex items-center bg-[#27272a] px-2 py-1 rounded-lg">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white text-sm font-medium">{tool.rating}</span>
                </div>
              </div>

              <p className="text-[#a1a1aa] mb-4">{tool.description}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <span className="text-[#71717a] w-20">Best for:</span>
                  <span className="text-white">{tool.bestFor}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-[#71717a] w-20">Pricing:</span>
                  <span className="text-white">{tool.pricing}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#27272a]">
                <a
                  href={`/reviews/${tool.name.toLowerCase()}`}
                  className="text-green-400 hover:text-green-300 text-sm font-medium"
                >
                  Read Full Review →
                </a>
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-medium transition-colors"
                >
                  Try Free
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
