/** Prefix internal routes for GitHub Pages subdirectory deploys. */
const base = import.meta.env.BASE_URL;

function baseWithSlash(): string {
  return base.endsWith("/") ? base : `${base}/`;
}

export function pathTo(route: string): string {
  const root = baseWithSlash();
  if (!route || route === "/") {
    return root;
  }
  const segment = route.replace(/^\//, "");
  return `${root}${segment}`;
}

/** True when the current pathname matches a site route (ignores trailing slashes). */
export function isActiveRoute(pathname: string, route: string): boolean {
  const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
  const current = normalize(pathname);
  const target = normalize(pathTo(route));
  const home = normalize(baseWithSlash());
  if (route === "/" || route === "") {
    return current === home || current === "/";
  }
  return current === target;
}
