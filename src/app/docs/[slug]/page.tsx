import { notFound } from "next/navigation";
import { getAllDocsMeta, getDocBySlug } from "@/lib/docs";

type DocPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllDocsMeta().map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    return { title: "Document Not Found" };
  }

  return {
    title: `${doc.title} | OpenGUT Docs`,
    description: doc.description,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="prose rounded-2xl border border-ink/10 bg-card p-5 shadow-[0_10px_35px_-30px_rgba(0,0,0,0.5)] sm:p-8">
      <h1>{doc.title}</h1>
      <p className="text-sm text-ink/65">{doc.description}</p>
      <div dangerouslySetInnerHTML={{ __html: doc.html }} />
    </article>
  );
}