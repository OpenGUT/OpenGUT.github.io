import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : "standalone",
  images: {
    unoptimized: isGitHubPagesBuild,
  },
  trailingSlash: isGitHubPagesBuild,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
