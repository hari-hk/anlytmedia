import React from 'react';

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Anlyt Media',
    url: 'https://anlytmedia.com',
    logo: 'https://anlytmedia.com/anlyt-icon-512.png',
    description:
        'Anlyt Media specializes in 3D modeling, package designing, logo creation, branding, web design, digital marketing, and social media management. We bring ideas to life with stunning visuals, standout packaging, and impactful digital strategies.',
    contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@anlytmedia.com',
        contactType: 'customer service',
    },
    sameAs: [
        'https://facebook.com/anlytmedia',
        'https://instagram.com/anlytmedia',
        'https://linkedin.com/company/anlytmedia',
        'https://x.com/anlytmedia',
    ],
};

const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Anlyt Media',
    url: 'https://anlytmedia.com',
    description:
        'Professional creative studio offering 3D modeling, package design, logo creation, branding, web design, and digital marketing services.',
    publisher: {
        '@type': 'Organization',
        name: 'Anlyt Media',
        logo: {
            '@type': 'ImageObject',
            url: 'https://anlytmedia.com/anlyt-icon-512.png',
        },
    },
};

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Anlyt Media',
    url: 'https://anlytmedia.com',
    logo: 'https://anlytmedia.com/anlyt-icon-512.png',
    image: 'https://anlytmedia.com/anlyt-icon-512.png',
    description:
        'Creative design studio specializing in 3D modeling, package designing, logo creation, graphic design, branding, web design & development, digital marketing, and social media management.',
    email: 'info@anlytmedia.com',
    sameAs: [
        'https://facebook.com/anlytmedia',
        'https://instagram.com/anlytmedia',
        'https://linkedin.com/company/anlytmedia',
        'https://x.com/anlytmedia',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Creative & Digital Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: '3D Modeling',
                    description:
                        'Bringing concepts to life with photorealistic precision and immersive depth.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Package Designing',
                    description:
                        'Tactile experiences that captivate from the shelf to the unboxing.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Logo Creation',
                    description:
                        'Distilling your essence into a timeless visual mark.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Branding & Graphic Design',
                    description:
                        'Cohesive visual systems that tell your unique story.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Web Design & Development',
                    description:
                        'High-performance digital destinations built for impact.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Digital Marketing',
                    description:
                        'Data-driven strategies to amplify your reach and ROI.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Social Media Management',
                    description:
                        'Curating conversations and building communities around your brand.',
                },
            },
        ],
    },
};

export default function JsonLd() {
    return (
        <>
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
        </>
    );
}
