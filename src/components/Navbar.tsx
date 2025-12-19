import Link from "next/link";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Our Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200/50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="#top"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight"
          aria-label="Leola-tech home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm">
            <span className="text-sm">LT</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/30" />
          </span>
          <span className="text-slate-900">Leola-tech</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
