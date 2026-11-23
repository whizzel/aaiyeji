import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Demo invitations are fictional samples — shareable, but not for search.
      disallow: "/demo/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
