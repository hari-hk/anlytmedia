import Landing from '@/views/Landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anlyt Media',
  description:
    'Anlyt Media specializes in logo design, 3D modeling, package designing, web design, and digital & offline marketing. We create stunning visuals, standout packaging, and impactful brand strategies for businesses.',
  keywords:
    'Anlyt Media, Logo Creation, Logo Design, Logo Design Company, Graphic Design, Graphic Design Services, Web Design, Web Design Agency, Website Development, Offline Marketing, Print Design, Flex Printing, Business Card Design, Package Design, 3D Modeling, 3D Design, AutoCAD, 3ds Max, Photoshop, Branding, Branding Agency, Visual Identity, Brochure Design, Poster Design, Social Media Design, Corporate Branding, Marketing, Marthandam Design Studio',
  openGraph: {
    title: 'Anlyt Media',
    description:
      'Professional logo design, 3D modeling, package design, web design, and marketing services.',
    url: 'https://anlytmedia.com/',
    siteName: 'Anlyt Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anlyt Media logo design and branding showcase',
      },
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://anlytmedia.com/',
  },
};

export default function Home() {
  return <Landing />;
}
