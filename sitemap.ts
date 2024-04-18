import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    
    const staticRoutes = [
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}`, lastModified: new Date(), priority: 1 },
    ]

    return [...staticRoutes];
}