# PaperTidy marketing site (Astro)

Static site for the **PaperTidy** iOS app: landing page, Privacy Policy, and Help & Support. Copy is aligned with [`document-scanner/docs/legal/`](../document-scanner/docs/legal/).

## Requirements

- Node.js 18+ (tested with Node 20)
- [Yarn](https://yarnpkg.com/) 1.x or Berry

## Commands

```bash
cd landing-page
yarn install
yarn dev       # http://localhost:4321/
yarn build     # output in dist/
yarn preview   # http://localhost:4321/
```

## Configuration

Edit [`src/site.config.ts`](src/site.config.ts):

- `stores.ios` — App Store product URL when the listing is live
- `site` in [`astro.config.mjs`](astro.config.mjs) — canonical site URL (currently [paperfolio.lixul.com](https://paperfolio.lixul.com/))

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing / home |
| `/privacy` | Privacy Policy |
| `/support` | Help & Support |

## Production URLs

| Page | URL |
|------|-----|
| Home | https://paperfolio.lixul.com/ |
| Privacy | https://paperfolio.lixul.com/privacy/ |
| Support | https://paperfolio.lixul.com/support/ |

The site is deployed at the domain root (`base: "/"`). Internal links use `src/lib/paths.ts`.

[`public/CNAME`](public/CNAME) is included for GitHub Pages custom-domain deploys.

Deploy the `dist/` folder to any static host (GitHub Pages, Cloudflare Pages, Netlify, etc.).
