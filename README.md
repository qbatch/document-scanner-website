# Paperfolio marketing site (Astro)

Static site for the **Paperfolio** iOS app: landing page, Privacy Policy, and Help & Support. Copy is aligned with [`document-scanner/docs/legal/`](../document-scanner/docs/legal/).

## Requirements

- Node.js 18+ (tested with Node 20)
- [Yarn](https://yarnpkg.com/) 1.x or Berry

## Commands

```bash
cd landing-page
yarn install
yarn dev       # http://localhost:4321/  (local — no /document-scanner-website prefix)
yarn build     # output in dist/ (paths match GitHub Pages)
yarn preview   # http://localhost:4321/document-scanner-website/
```

## Configuration

Edit [`src/site.config.ts`](src/site.config.ts):

- `stores.ios`, `stores.android`, `stores.harmony` — product URLs when each listing is live
- `site` in [`astro.config.mjs`](astro.config.mjs) — production domain for sitemap/canonical URLs

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing / home |
| `/privacy` | Privacy Policy |
| `/support` | Help & Support |

## GitHub Pages (project site)

This repo is configured for [GitHub Pages](https://qbatch.github.io/document-scanner-website/). Production builds set `BASE_PATH=/document-scanner-website/`; local `yarn dev` uses `/` so you can open the site at the dev server root.

| Page | URL |
|------|-----|
| Home | https://qbatch.github.io/document-scanner-website/ |
| Privacy | https://qbatch.github.io/document-scanner-website/privacy/ |
| Support | https://qbatch.github.io/document-scanner-website/support/ |

`https://qbatch.github.io/privacy` will **not** work—that path is outside this project. Use the URLs above (or a custom domain at the site root).

Internal links use `src/lib/paths.ts` so navigation stays under the deploy base path.

Deploy the `dist/` folder to any static host (Cloudflare Pages, Netlify, GitHub Pages, etc.).
