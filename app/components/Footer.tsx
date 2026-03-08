import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] border-t border-[#27272a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-white">Practical AI</span>
            </Link>
            <p className="text-[#71717a] text-sm max-w-sm">
              Curated AI tool reviews and comparisons for creators, solopreneurs, 
              and productivity operators. No fluff, no sponsored bias.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/writing" className="text-[#71717a] hover:text-green-400 text-sm transition-colors">AI Writing</Link></li>
              <li><Link href="/image-video" className="text-[#71717a] hover:text-green-400 text-sm transition-colors">Image & Video</Link></li>
              <li><Link href="/workflow" className="text-[#71717a] hover:text-green-400 text-sm transition-colors">Workflow</Link></li>
              <li><Link href="/notes" className="text-[#71717a] hover:text-green-400 text-sm transition-colors">Notes & PKM</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="/newsletter" className="text-[#71717a] hover:text-green-400 text-sm transition-colors">Newsletter</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#71717a] hover:text-green-400 text-sm transition-colors">Twitter/X</a></li>
              <li><a href="#" className="text-[#71717a] hover:text-green-400 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#71717a] text-sm">
            © {currentYear} Practical AI Stack. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/affiliate-disclosure" className="text-[#71717a] hover:text-green-400 transition-colors">
              Affiliate Disclosure
            </Link>
            <Link href="/privacy" className="text-[#71717a] hover:text-green-400 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
