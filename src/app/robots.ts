import { MetadataRoute } from "next";

// Next.js App Router generates /robots.txt at build time from this export.
// For static export (output: "export"), this is emitted as a static file in out/.
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://mgpcoatings.solutions";

  return {
    rules: [
      // AI search crawlers named explicitly. They are already covered by the
      // wildcard, but naming them means a future "block the scrapers" edit
      // cannot silently cut off the assistants that send qualified traffic.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
      },
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
