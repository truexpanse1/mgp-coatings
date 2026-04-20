import { MetadataRoute } from "next";

// Next.js App Router generates /robots.txt at build time from this export.
// For static export (output: "export"), this is emitted as a static file in out/.
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mgpcoatings.solutions";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Block crawl-trap query strings (no canonical impact).
        disallow: ["/*?utm_*", "/*?fbclid=*", "/*?gclid=*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
