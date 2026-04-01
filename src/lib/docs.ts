import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const docsDirectory = path.join(process.cwd(), "content", "docs");

type Frontmatter = {
  title?: string;
  description?: string;
  navTitle?: string;
  order?: number;
};

export type DocSummary = {
  title: string;
  description: string;
  navTitle?: string;
  order: number;
  slug: string[];
};

export type DocPage = DocSummary & {
  contentHtml: string;
};

async function collectMarkdownFiles(directory: string): Promise<string[]> {
  let entries;
  try {
    entries = await fs.readdir(directory, { withFileTypes: true });
  } catch {
    return [];
  }

  const results = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        return collectMarkdownFiles(entryPath);
      }

      if (entry.isFile() && entry.name.endsWith(".md")) {
        return [entryPath];
      }

      return [];
    }),
  );

  return results.flat();
}

function filePathToSlug(filePath: string) {
  const relativePath = path.relative(docsDirectory, filePath);
  return relativePath.replace(/\.md$/, "").split(path.sep);
}

async function markdownToHtml(markdown: string) {
  const processed = await remark().use(gfm).use(html).process(markdown);
  return processed.toString();
}

function buildSummary(filePath: string, frontmatter: Frontmatter): DocSummary {
  const slug = filePathToSlug(filePath);

  return {
    title: frontmatter.title ?? slug[slug.length - 1] ?? "Untitled",
    description: frontmatter.description ?? "",
    navTitle: frontmatter.navTitle,
    order: frontmatter.order ?? 99,
    slug,
  };
}

export const getAllDocs = cache(async (): Promise<DocSummary[]> => {
  const files = await collectMarkdownFiles(docsDirectory);
  const docs = await Promise.all(
    files.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContent);
      return buildSummary(filePath, data as Frontmatter);
    }),
  );

  return docs.sort((left, right) => {
    if (left.order !== right.order) {
      return left.order - right.order;
    }

    return left.title.localeCompare(right.title);
  });
});

export const getDocBySlug = cache(async (slug: string[]): Promise<DocPage> => {
  const filePath = path.join(docsDirectory, `${slug.join(path.sep)}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const summary = buildSummary(filePath, data as Frontmatter);
    const contentHtml = await markdownToHtml(content);

    return {
      ...summary,
      contentHtml,
    };
  } catch {
    notFound();
  }
});