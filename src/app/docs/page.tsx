import Link from "next/link";
import { DocsShell } from "../../components/docs-shell";
import { getAllDocs } from "@/lib/docs";

export const metadata = {
  title: "OpenGUT Documentation",
  description: "Guides for hardware, firmware, and the analysis software.",
};

export default async function DocsIndexPage() {
  const docs = await getAllDocs();

  return (
    <DocsShell
      docs={docs}
      title="Documentation"
      description="Guides for setting up the hardware, flashing firmware, and using the analysis playground."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.slug.join("/")}
            href={`/docs/${doc.slug.join("/")}`}
            className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {doc.slug.join(" / ")}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{doc.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {doc.description}
            </p>
          </Link>
        ))}
      </div>
    </DocsShell>
  );
}