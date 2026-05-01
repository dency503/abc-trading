import type { MetadataRoute } from 'next';
import { siteConfig } from './seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { path: '', priority: 1 },
    { path: '/clases', priority: 0.9 },
    { path: '/indicador', priority: 0.85 },
  ].map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
  }));
}
