import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { invitationDemos } from "@/lib/invitation-demos";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...invitationDemos.map((demo) => ({
      url: `${siteConfig.url}/demo/${demo.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
