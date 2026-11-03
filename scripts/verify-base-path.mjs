#!/usr/bin/env node
/**
 * Fail the build if internal links ignore Astro `base` (common GitHub Pages bug).
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const base = process.env.BASE_PATH ?? "/document-scanner-website/";
const normalized = base.endsWith("/") ? base.slice(0, -1) : base;

function walkHtml(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walkHtml(path, out);
    else if (name.endsWith(".html")) out.push(path);
  }
  return out;
}

const htmlFiles = walkHtml("dist");
const forbidden = ['href="/privacy"', 'href="/support"', 'href="/"'];

let failed = false;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const pattern of forbidden) {
    if (html.includes(pattern)) {
      console.error(`[verify-base-path] ${file} contains ${pattern}`);
      failed = true;
    }
  }
}

if (failed) {
  console.error(
    `\nInternal links must use pathTo() (base "${normalized}/"). See src/lib/paths.ts.\n`,
  );
  process.exit(1);
}

console.log(`[verify-base-path] OK (${htmlFiles.length} HTML files)`);
