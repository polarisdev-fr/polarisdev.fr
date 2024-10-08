import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://polarisdev.fr/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://polarisdev.fr/login',
      lastModified: new Date().toISOString(),
      changeFrequency: 'never',
      priority: 0.7,
    },
    {
      url: 'https://polarisdev.fr/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'never',
      priority: 0.5,
    },
    {
      url: 'https://polarisdev.fr/pricing',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://polarisdev.fr/services',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  ]
}