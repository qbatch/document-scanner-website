import { site, siteOrigin, stores } from "../site.config";

type JsonLd = Record<string, unknown>;

/** Absolute canonical URL (trailing slash on non-root paths). */
export function pageCanonical(pathname: string): string {
  const url = new URL(pathname, siteOrigin);
  if (url.pathname !== "/" && !url.pathname.endsWith("/")) {
    url.pathname = `${url.pathname}/`;
  }
  return url.href;
}

export function homeJsonLd(): JsonLd[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: siteOrigin,
      description: site.description,
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        url: stores.ios.href,
      },
      description: site.description,
      downloadUrl: stores.ios.href,
    },
  ];
}

export function webPageJsonLd(title: string, description: string, url: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: siteOrigin,
    },
    inLanguage: "en-US",
  };
}

export function serializeJsonLd(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
