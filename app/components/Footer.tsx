import Link from "next/link";

const exploreLinks = [
  { label: "Best Tools", href: "/best-tools" },
  { label: "Comparisons", href: "/comparisons" },
  { label: "Reviews", href: "/reviews" },
  { label: "Categories", href: "/categories" },
  { label: "Start Here", href: "/start-here" },
];

const categoryLinks = [
  { label: "Writing", href: "/categories/writing" },
  { label: "Design", href: "/categories/design" },
  { label: "Automation", href: "/categories/automation" },
  { label: "Notes", href: "/categories/notes" },
  { label: "Newsletters", href: "/categories/email" },
  { label: "Productivity", href: "/categories/workflow" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Newsletter", href: "/newsletter" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-lg font-semibold text-white">
              Practical AI Stack
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Honest reviews, practical comparisons, and useful AI workflows for creators, 
              solo operators, and small business.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Categories
            </h3>
            <ul className="mt-4 space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-500">
            © 2026 Practical AI Stack. Built for practical operators.
          </p>
        </div>
      </div>
    </footer>
  );
}
