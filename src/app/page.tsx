import Link from "next/link";
import { ImageCarousel } from "@/components/image-carousel";
import { getAllDocs } from "@/lib/docs";

const highlights = [
  {
    title: "Open-source design",
    description:
      "PCB schematics, layouts, and BOMs are published under a permissive license so you can build, modify, and manufacture your own sensor boards.",
  },
  {
    title: "Simple yet powerful software",
    description:
      "Assist your gut research with simple software interface that comes with the freedom of customization as you want.",
  },
  {
    title: "Join the community",
    description:
      "OpenGUT is available from the GitHub repository. Let's create the gut research fun together!",
  },
];

export default async function Home() {
  const docs = await getAllDocs();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-3 shadow-[0_30px_80px_rgba(34,42,54,0.08)] sm:p-5">
        <ImageCarousel
          title="OpenGUT"
          subtitle="An Open-Source Platform for Gut-Computer Interaction Research."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 rounded-[1.75rem] bg-[var(--color-ink)] p-8 text-[var(--color-cream)] shadow-[0_24px_64px_rgba(34,42,54,0.18)] sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--color-gold)]">
            What is OpenGUT?
          </p>
          <h2 className="font-[family:var(--font-fraunces)] text-4xl leading-tight sm:text-5xl">
            Hardware, firmware, and software for studying gut sounds — freely available.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[color:rgba(250,246,239,0.82)] sm:text-lg">
            OpenGUT is an open-source prototyping tool that provides everything
            you need to record, process, and analyse gastrointestinal acoustic
            signals — from the sensor board to the analysis desktop application.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/docs">
              Get Started
            </Link>
            <Link className="button-secondary" href="https://github.com/opengut">
              View on GitHub
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-[1.5rem] border border-[var(--color-line)] bg-white/85 p-6 backdrop-blur"
            >
              <h2 className="text-lg font-semibold tracking-tight">{highlight.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {highlight.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(188,130,86,0.12),rgba(255,255,255,0.9))] p-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Markdown-driven docs
          </p>
          <h2 className="mt-4 font-[family:var(--font-fraunces)] text-3xl leading-tight">
            Every documentation page lives as a standalone Markdown file.
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
            Drop a file in <code className="text-sm">content/docs</code>, add frontmatter, and the site
            automatically adds it to the navigation and generates a static route.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {docs.map((doc) => (
            <Link
              key={doc.slug.join("/")}
              href={`/docs/${doc.slug.join("/")}`}
              className="group rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-panel)] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Documentation
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight group-hover:text-[var(--color-accent)]">
                {doc.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {doc.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
