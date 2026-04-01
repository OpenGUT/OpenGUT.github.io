import type { Metadata } from "next";
import { DocsShell } from "../../../components/docs-shell";
import { getAllDocs, getDocBySlug } from "@/lib/docs";

type DocPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getDocBySlug(slug);

  return {
    title: `${doc.title} | OpenGUT`,
    description: doc.description,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const [docs, doc] = await Promise.all([getAllDocs(), getDocBySlug(slug)]);

  return (
    <DocsShell
      docs={docs}
      currentSlug={slug}
      title={doc.title}
      description={doc.description}
    >
      <article
        className="markdown"
        dangerouslySetInnerHTML={{ __html: doc.contentHtml }}
      />
    </DocsShell>
  );
}
