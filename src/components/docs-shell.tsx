import Link from "next/link";
import type { ReactNode } from "react";
import type { DocSummary } from "@/lib/docs";

type DocsShellProps = {
  docs: DocSummary[];
  currentSlug?: string[];
  title: string;
  description: string;
  children: ReactNode;
};

export function DocsShell({
  docs,
  currentSlug,
  title,
  description,
  children,
}: DocsShellProps) {
  const currentPath = currentSlug?.join("/");

  return (
    <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:px-8">
      <aside className="h-fit rounded-[1.75rem] border border-[var(--color-line)] bg-[color:rgba(255,253,248,0.92)] p-5 shadow-[0_18px_48px_rgba(34,42,54,0.08)] lg:sticky lg:top-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Documentation
        </p>
        <h2 className="mt-3 text-lg font-semibold tracking-tight">Pages</h2>
        <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
          {docs.map((doc) => {
            const href = `/docs/${doc.slug.join("/")}`;
            const isActive = currentPath === doc.slug.join("/");

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`min-w-fit rounded-2xl border px-4 py-3 text-sm transition-colors lg:min-w-0 ${
                  isActive
                    ? "border-[color:rgba(161,91,52,0.35)] bg-[color:rgba(161,91,52,0.14)] text-[var(--color-ink)] shadow-[inset_0_0_0_1px_rgba(161,91,52,0.12)]"
                    : "border-transparent bg-transparent text-[var(--color-muted)] hover:border-[var(--color-line)] hover:bg-white hover:text-[var(--color-ink)]"
                }`}
              >
                <span className={`block font-medium ${isActive ? "text-[var(--color-accent)]" : ""}`}>
                  {doc.navTitle ?? doc.title}
                </span>
                <span className="mt-1 hidden text-xs leading-5 opacity-75 lg:block">
                  {doc.description}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="rounded-[1.9rem] border border-[var(--color-line)] bg-[color:rgba(255,253,248,0.94)] p-6 shadow-[0_18px_48px_rgba(34,42,54,0.08)] sm:p-8 lg:p-10">
        <header className="mb-8 border-b border-[var(--color-line)] pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Docs
          </p>
          <h1 className="mt-3 font-[family:var(--font-fraunces)] text-4xl leading-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-muted)]">
            {description}
          </p>
        </header>

        {children}
      </section>
    </div>
  );
}
