"use client";

import Link from "next/link";

const categories = [
  {
    slug: "writing",
    title: "AI Writing",
    description: "Content creation, copywriting, and long-form writing tools",
    tools: ["Claude", "ChatGPT", "Jasper", "Copy.ai"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    slug: "image-video",
    title: "Image & Video",
    description: "Generation, editing, and creative visual tools",
    tools: ["Midjourney", "DALL-E", "Runway", "Descript"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    slug: "workflow",
    title: "Workflow & Automation",
    description: "Connect tools, automate tasks, build systems",
    tools: ["Zapier", "Make", "n8n", "Relevance"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    slug: "notes",
    title: "Notes & Knowledge",
    description: "Second brain, PKM, and knowledge management",
    tools: ["Notion AI", "Obsidian", "Mem", "Readwise"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    slug: "email",
    title: "Email & Newsletter",
    description: "Writing, sending, and managing email communications",
    tools: ["Beehiiv", "ConvertKit", "Lavender", "Superhuman"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    slug: "meetings",
    title: "Meetings & Audio",
    description: "Transcription, note-taking, and meeting tools",
    tools: ["Otter.ai", "Fireflies", "Grain", "Fathom"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-[#0a0a0b] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Browse by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Find the right AI tool for your specific workflow need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group bg-[#18181b] rounded-2xl border border-[#27272a] p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4 group-hover:bg-green-500/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-[#a1a1aa] mb-4 text-sm">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool) => (
                  <span key={tool} className="px-2 py-1 rounded-md bg-[#27272a] text-[#71717a] text-xs">
                    {tool}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
