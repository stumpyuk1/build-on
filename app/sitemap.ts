import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://build-on.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/map", priority: 0.9, changeFrequency: "daily" },
    { path: "/portals", priority: 0.9, changeFrequency: "weekly" },
    { path: "/toolkit", priority: 0.85, changeFrequency: "monthly" },
    { path: "/toolkit/generator", priority: 0.85, changeFrequency: "monthly" },
    { path: "/toolkit/write", priority: 0.8, changeFrequency: "monthly" },
    { path: "/toolkit/speak", priority: 0.8, changeFrequency: "monthly" },
    { path: "/evidence", priority: 0.85, changeFrequency: "monthly" },
    { path: "/groups", priority: 0.7, changeFrequency: "monthly" },
    { path: "/join", priority: 0.75, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
