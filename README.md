# OpenGUT Documentation Site

A Next.js + Tailwind documentation website that uses markdown files as the page source and exports as static files for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Markdown-Managed Docs

- Put markdown files in `content/docs/*.md`.
- Each file should include frontmatter fields:

```md
---
title: Page Title
description: Short summary
order: 1
---
```

- URL format is `/docs/<filename>`.

## Build for Static Hosting

```bash
npm run build
```

This generates static files in the `out` directory.

## Deploy to GitHub Pages

1. Push to `main`.
1. In GitHub repository settings, enable Pages and select GitHub Actions as the source.
1. The workflow at `.github/workflows/deploy.yml` will build and publish the site automatically.

The Next.js config auto-detects whether the repository is a project site and sets `basePath` accordingly during GitHub Actions builds.

## Troubleshooting

If GitHub shows your repository `README.md` instead of the Next.js site:

1. Open the Pages URL, not the repository URL.
	- Repository URL example: `https://github.com/<owner>/<repo>` (this always shows README)
	- Pages URL example (project site): `https://<owner>.github.io/<repo>/`
	- Pages URL example (user site repo named exactly `<owner>.github.io`): `https://<owner>.github.io/`
1. Confirm in GitHub Settings > Pages that Source is `GitHub Actions`.
1. Confirm the latest `Deploy Next.js site to GitHub Pages` workflow run succeeded.
