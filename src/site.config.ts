/** Canonical production origin — must match astro.config.mjs `site`. */
export const siteOrigin = "https://paperfolio.lixul.com";

export const site = {
  name: "PaperTidy",
  tagline: "Document scanner for iPhone and iPad",
  description:
    "Scan papers into watermark-free PDFs on your device. No account, offline-capable scanning, optional privacy-friendly analytics. iOS 17+.",
  /** Short phrases for meta keywords (minor signal; keep honest). */
  keywords: [
    "document scanner",
    "PDF scanner",
    "scan to PDF",
    "iPhone scanner",
    "iPad scanner",
    "watermark-free PDF",
    "offline scanner",
  ],
  platformsLabel: "iPhone & iPad · iOS 17+",
  lastUpdated: "November 2, 2026",
  copyrightYear: 2026,
  locale: "en_US",
  twitterHandle: "",
} as const;

export const pageSeo = {
  home: {
    title: "PaperTidy — Scan documents to PDF on iPhone & iPad",
    description: site.description,
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How PaperTidy handles your scans, camera access, optional analytics, and on-device storage. Privacy-first document scanning for iPhone and iPad.",
  },
  support: {
    title: "Help & Support",
    description:
      "PaperTidy help: scan and import documents, create PDFs, troubleshooting, and contact info for iPhone and iPad.",
  },
} as const;

export const stores = {
  ios: {
    name: "App Store",
    href: "https://apps.apple.com/",
    cta: "Download on the App Store",
    requirement: "iOS 17.0 or later · iPhone or iPad",
  },
  android: {
    name: "Google Play",
    href: "https://play.google.com/store/apps",
    cta: "Get it on Google Play",
    requirement: "Android 8.0 (API 26) or later",
  },
  harmony: {
    name: "AppGallery",
    href: "https://appgallery.huawei.com/",
    cta: "Explore on AppGallery",
    requirement: "HarmonyOS-compatible devices",
  },
} as const;

/** Toggle when additional store listings go live. */
export const publishedStoreKeys = ["ios"] as const satisfies ReadonlyArray<keyof typeof stores>;

export function getPublishedStores() {
  return publishedStoreKeys.map((key) => stores[key]);
}

/** Primary store link for generic “contact on store page” copy until a dedicated support email is published. */
export const primaryStoreUrl = stores.ios.href;
