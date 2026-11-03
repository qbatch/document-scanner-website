import { defineConfig } from "astro/config";

const repoBase = "/document-scanner-website/";

/** Production builds (incl. CI) use the GitHub Pages subpath; `yarn dev` uses `/`. */
function resolveBase() {
  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH.endsWith("/") ? process.env.BASE_PATH : `${process.env.BASE_PATH}/`;
  }
  const isProductionBuild =
    process.env.npm_lifecycle_event === "build" ||
    process.env.GITHUB_ACTIONS === "true" ||
    process.env.CI === "true";
  return isProductionBuild ? repoBase : "/";
}

export default defineConfig({
  site: "https://qbatch.github.io/document-scanner-website",
  base: resolveBase(),
  compressHTML: true,
});
