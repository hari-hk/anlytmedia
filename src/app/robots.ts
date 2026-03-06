import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://anlytmedia.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/card/', '/_next/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
