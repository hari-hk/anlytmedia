import Landing from '@/views/Landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anlyt Media',
  description:
    'Anlyt Media specializes in logo design, 3D modeling, package designing, web design, and digital & offline marketing. We create stunning visuals, standout packaging, and impactful brand strategies for businesses.',
  keywords:
    'Anlyt Media, Anlyt Media Marthandam, Graphic designer Marthandam, Logo designer Marthandam, Branding agency Marthandam, Web design company Marthandam, Digital marketing Marthandam, Package design Marthandam, 3D modeling Marthandam, Graphic design services Marthandam, Creative designer Marthandam, Professional designer Marthandam, Business branding Marthandam, Branding solutions Marthandam, Brand identity designer Marthandam, Printing services Marthandam, Flex printing Marthandam, Poster design Marthandam, Banner design Marthandam, Brochure design Marthandam, Graphic designer near me, Logo designer near me, Banner printing near me, Brochure printing near me, Visiting card printing near me, Web design near me, Branding agency near me, Digital marketing near me, Flex printing near me, Poster printing near me, Business card design near me, Invitation design near me, Social media designer near me, Website developer near me, Affordable designer near me, Graphic designer Nagercoil, Logo design Nagercoil, Branding agency Nagercoil, Web design Nagercoil, Printing services Nagercoil, Social media designer Nagercoil, Brochure design Nagercoil, Flex printing Nagercoil, Graphic designer Kanyakumari, Branding agency Kanyakumari, Web design Kanyakumari, Logo design Kanyakumari, Poster printing Kanyakumari, Printing services Kanyakumari, Graphic designer Kuzhithurai, Logo designer Kuzhithurai, Branding agency Kuzhithurai, Graphic designer Kaliyakkavilai, Branding agency Kaliyakkavilai, Web design Kaliyakkavilai, Restaurant branding Marthandam, Shop board design Marthandam, Hotel menu design Marthandam, Medical clinic branding Marthandam, School brochure design Marthandam, Church banner design Marthandam, Event poster design Marthandam, Real estate brochure Marthandam, Political banner design Marthandam, Festival poster design Marthandam, Wedding card design Marthandam, Birthday invitation design Marthandam, Opening ceremony banner Marthandam, Visiting card designer Marthandam, Letterhead design Marthandam, Invoice book printing Marthandam, Sticker printing Marthandam, Label design Marthandam, Packaging label design Marthandam, Product box design Marthandam, Menu card printing Marthandam, Brochure printing Marthandam, Flyer design Marthandam, Flyer printing Marthandam, Catalogue design Marthandam, Website developer Marthandam, Best web design company Marthandam, Ecommerce website Marthandam, Business website design Marthandam, Portfolio website design Marthandam, Website redesign Marthandam, SEO service Marthandam, Social media marketing Marthandam, Google ads service Marthandam, Digital branding Marthandam, Best graphic designer in Tamil Nadu, Logo design Tamil Nadu, Branding agency Tamil Nadu, Creative agency Tamil Nadu, Affordable designer Tamil Nadu, Packaging design company Tamil Nadu, Social media designer Tamil Nadu, Professional logo designer Tamil Nadu, Branding service for startups Tamil Nadu, Graphic design price Tamil Nadu, Logo design price Marthandam, Affordable logo design Marthandam, Cheap graphic designer Marthandam, Budget graphic designer, Logo package Marthandam, Branding package Marthandam, Business branding package, Startup branding Marthandam, Business design solutions Marthandam, Graphic design shop Marthandam, Printing shop Marthandam, Design studio Marthandam, Branding studio Marthandam, Poster shop Marthandam, Flex board shop Marthandam, Sign board design Marthandam, Name board design Marthandam, LED board design Marthandam, Business card shop Marthandam, Pongal poster design Marthandam, Diwali poster design Marthandam, Christmas banner Marthandam, New year poster design Marthandam, Election banner design Marthandam, Independence day poster Marthandam, Opening ceremony branding Marthandam, Sale poster design Marthandam, Startup branding Marthandam, Corporate branding Marthandam, Small business branding Marthandam, Retail branding Marthandam, Wholesale branding Marthandam, Product branding Marthandam, 3D logo design Marthandam, Mascot logo design Marthandam, Minimal logo design Marthandam, Luxury logo design Marthandam, Food packaging design Marthandam, Cosmetic packaging design Marthandam, Box printing Marthandam, Envelope printing Marthandam, Graphic design course Marthandam, Graphic design training Marthandam, Photoshop training Marthandam, Website training Marthandam, Social media course Marthandam, Digital marketing course Marthandam, Hire graphic designer Marthandam, Hire logo designer Marthandam, Hire web designer Marthandam, Hire branding agency Marthandam, Best design studio near Marthandam, Top designer near Marthandam, Best printing shop Marthandam, Affordable printing shop Marthandam, Custom logo design Marthandam, Custom banner printing Marthandam, Professional brochure design Marthandam, Marketing materials Marthandam, Branding expert Marthandam, Creative studio Marthandam',
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
