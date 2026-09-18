type SiteUrlEnvironment = {
  configuredUrl?: string;
  productionHost?: string;
  deploymentHost?: string;
};

export function resolveSiteUrl({ configuredUrl, productionHost, deploymentHost }: SiteUrlEnvironment): URL {
  const customUrl = configuredUrl?.trim();
  const vercelHost = productionHost?.trim() || deploymentHost?.trim();
  const value = customUrl || (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");

  try {
    const url = new URL(value);
    if (!(["http:", "https:"].includes(url.protocol) && url.hostname)) throw new TypeError("Unsupported URL scheme");
    return url;
  } catch {
    throw new TypeError(
      customUrl
        ? "NEXT_PUBLIC_SITE_URL must be an absolute http(s) URL, such as https://www.example.com"
        : "Vercel deployment URL must be a valid hostname",
    );
  }
}

export const siteUrl = resolveSiteUrl({
  configuredUrl: process.env.NEXT_PUBLIC_SITE_URL,
  productionHost: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  deploymentHost: process.env.VERCEL_URL,
});
