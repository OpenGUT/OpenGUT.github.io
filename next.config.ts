import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repositoryName.toLowerCase().endsWith(".github.io");
const shouldUseProjectBasePath = process.env.GITHUB_ACTIONS === "true" && !isUserSite;
const basePath = shouldUseProjectBasePath ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
