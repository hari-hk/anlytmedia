import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Anlyt Media',
  description:
    'Anlyt Media specializes in logo design, 3D modeling, package designing, web design, and digital & offline marketing. We create stunning visuals, standout packaging, and impactful brand strategies for businesses.',
  keywords:
    'Anlyt Media, Graphic design, Logo design, Branding, Web design, Digital marketing, Package design, 3D modeling, Creative design, Business branding, Poster design, Banner design, Brochure design, Printing services, Visiting card, Flex printing, Sticker printing, Label design, Box design, Product packaging, Menu design, Flyer design, Catalogue design, Website developer, Ecommerce website, SEO service, Social media marketing, Google ads, Branding studio, Design studio, Printing shop, Sign board, LED board, Business card, Event poster, Festival poster, Wedding card, Invitation design, Corporate branding, Retail branding, Product branding, 3D logo, Mascot logo, Minimal logo, Luxury logo, Food packaging, Cosmetic packaging, Envelope printing, Graphic design course, Photoshop training, Website training, Social media course, Digital marketing course, Hire designer, Custom logo, Custom printing, Marketing materials, Creative studio',
  openGraph: {
    title: 'Anlyt Media',
    description:
      'Professional logo design, 3D modeling, package design, web design, and marketing services.',
    url: 'https://anlytmedia.com/',
    siteName: 'Anlyt Media',
    images: [
      {
        url: '/anlyt-icon-512.jpg',
        width: 512,
        height: 512,
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
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
