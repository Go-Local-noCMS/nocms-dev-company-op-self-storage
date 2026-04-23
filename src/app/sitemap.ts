import blogPostsData from "@/data/blog-posts.json";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = process.env.SITE_URL ?? "https://www.opsselfstorage.com";

interface BlogPost {
  slug: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/facility",
    "/size-guide",
    "/blog",
    "/storage-oklahoma",
    "/storage-oklahoma-city",
    "/storage-edmond",
    "/storage-moore",
  ];

  const blogPages = (blogPostsData as BlogPost[]).map(
    (p) => `/blog/${p.slug}`
  );

  const allPages = [...staticPages, ...blogPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
