# Paperfolio marketing site (Astro)

Static site for the **Paperfolio** iOS app: landing page, Privacy Policy, and Help & Support. Copy is aligned with [`document-scanner/docs/legal/`](../document-scanner/docs/legal/).

## Requirements

- Node.js 18+ (tested with Node 20)
- [Yarn](https://yarnpkg.com/) 1.x or Berry

## Commands

```bash
cd landing-page
yarn install
yarn dev       # http://localhost:4321
yarn build     # output in dist/
yarn preview   # serve production build
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

Deploy the `dist/` folder to any static host (Cloudflare Pages, Netlify, GitHub Pages, etc.).
