#!/usr/bin/env node
/**
 * Catch internal links that ignore Astro `base` (e.g. old GitHub Pages subpath deploys).
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const base = process.env.BASE_PATH ?? "/";
const isRootDeploy = base === "/" || base === "";

function walkHtml(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walkHtml(path, out);
    else if (name.endsWith(".html")) out.push(path);
  }
  return out;
}

const htmlFiles = walkHtml("dist");
let failed = false;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");

  if (isRootDeploy) {
    if (html.includes("/document-scanner-website")) {
      console.error(`[verify-base-path] ${file} still references /document-scanner-website (use pathTo())`);
      failed = true;
    }
    continue;
  }

  const forbidden = ['href="/privacy"', 'href="/support"', 'href="/"'];
  for (const pattern of forbidden) {
    if (html.includes(pattern)) {
      console.error(`[verify-base-path] ${file} contains ${pattern}`);
      failed = true;
    }
  }
}

if (failed) {
  console.error("\nFix internal links in src/lib/paths.ts and components.\n");
  process.exit(1);
}

console.log(`[verify-base-path] OK (${htmlFiles.length} HTML files, base ${base})`);
