import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Documentation" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[color:rgba(247,241,232,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-ink)] text-sm font-semibold text-[var(--color-cream)]">
            OG
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Open Source
            </p>
            <p className="text-base font-semibold tracking-tight">OpenGUT</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-white hover:text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
