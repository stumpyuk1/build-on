import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://build-on.org.uk";

/**
 * Priority bands (relative hints for crawlers — not ranking magic):
 * 1.0   Home
 * 0.9   Primary tools (map, portals)
 * 0.8   Toolkit entry + evidence
 * 0.7   Toolkit deep pages + join
 * 0.5   Groups (placeholder), about
 * 0.2   Legal / low-value for acquisition
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: NonNullable<
      MetadataRoute.Sitemap[number]["changeFrequency"]
    >;
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/map", priority: 0.9, changeFrequency: "daily" },
    { path: "/portals", priority: 0.9, changeFrequency: "weekly" },
    { path: "/toolkit", priority: 0.8, changeFrequency: "monthly" },
    { path: "/evidence", priority: 0.8, changeFrequency: "monthly" },
    { path: "/toolkit/generator", priority: 0.7, changeFrequency: "monthly" },
    { path: "/toolkit/write", priority: 0.7, changeFrequency: "monthly" },
    { path: "/toolkit/speak", priority: 0.7, changeFrequency: "monthly" },
    { path: "/join", priority: 0.7, changeFrequency: "monthly" },
    { path: "/groups", priority: 0.5, changeFrequency: "monthly" },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
