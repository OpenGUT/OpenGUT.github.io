import Link from "next/link";
import { getAllDocsMeta } from "@/lib/docs";

export const metadata = {
  title: "OpenGUT Docs",
  description: "Documentation index",
};

export default function DocsIndexPage() {
  const docs = getAllDocsMeta();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
        <p className="mt-2 text-ink/75">
          Every document is loaded from a markdown file in the content/docs folder.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="rounded-xl border border-ink/10 bg-card p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent/40"
          >
            <h2 className="text-lg font-semibold">{doc.title}</h2>
            <p className="mt-2 text-sm text-ink/75">{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}