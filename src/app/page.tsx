import Link from "next/link";
import { ImageCarousel } from "@/components/image-carousel";
import { getAllDocsMeta } from "@/lib/docs";

export default function Home() {
  const docs = getAllDocsMeta();

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)]">
        <ImageCarousel
          slides={[
            {
              src: "/carousel/slide-1.svg",
              alt: "OpenGUT feature overview",
            },
            {
              src: "/carousel/slide-2.svg",
              alt: "OpenGUT architecture overview",
            },
            {
              src: "/carousel/slide-3.svg",
              alt: "OpenGUT community and roadmap",
            },
          ]}
          title="OpenGUT"
          subtitle="A practical open-source toolkit for building robust data and model pipelines."
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </div>
  );
}
