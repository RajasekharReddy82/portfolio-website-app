import { MetadataRoute } from "next";
import { resumeData } from "@/data/resumeData";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const staticRoutes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/projects", priority: 0.8 },
    { path: "/resume", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = resumeData.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: path === "/" ? baseUrl : `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...projectRoutes,
  ];
}
