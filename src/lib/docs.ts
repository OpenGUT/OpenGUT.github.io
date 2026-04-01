import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type DocMeta = {
  slug: string;
  title: string;
  description: string;
  order: number;
};

const docsDirectory = path.join(process.cwd(), "content", "docs");

function getDocSlugs(): string[] {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(docsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllDocsMeta(): DocMeta[] {
  return getDocSlugs()
    .map((slug) => {
      const fullPath = path.join(docsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: String(data.title ?? slug),
        description: String(data.description ?? ""),
        order: Number(data.order ?? 999),
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

export async function getDocBySlug(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const rendered = await remark().use(html).process(content);

  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    html: rendered.toString(),
  };
}