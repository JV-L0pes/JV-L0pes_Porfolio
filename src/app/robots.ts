import type { MetadataRoute } from "next";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Anthropic-AI",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "Claude-User",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "Amazonbot",
  "PerplexityBot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "Omgilibot",
  "Omgili",
  "YouBot",
  "Timpibot",
  "Webzio-Extended",
  "Ai2Bot",
  "ICC-Crawler",
  "PetalBot",
  "DataForSeoBot",
  "magpie-crawler",
  "iaskspider/2.0",
  "Scrapy",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: AI_CRAWLERS,
        disallow: "/",
      },
    ],
  };
}
