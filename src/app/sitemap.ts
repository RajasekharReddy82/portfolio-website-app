import { MetadataRoute } from "next";
import { resumeData } from "@/data/resumeData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rajasekharreddy.dev";

  const routes = [
    "",
    "/about",
    "/projects",
    "/resume",
    "/contact",
  ];

  const projectRoutes = resumeData.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projectRoutes,
  ];
}

