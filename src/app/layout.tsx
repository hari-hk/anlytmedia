import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anlytmedia.com'),
  title: {
    default: 'Anlyt Media — Creative Design Studio | 3D, Branding & Digital Marketing',
    template: '%s | Anlyt Media',
  },
  description:
    'Anlyt Media is a creative design studio specializing in 3D modeling, package designing, logo creation, branding, web design, and digital marketing. We bring ideas to life with stunning visuals, standout packaging, and impactful digital strategies.',
  keywords: [
    'Anlyt Media', 'graphic design', 'logo design', 'branding', 'web design',
    'digital marketing', 'package design', '3D modeling', 'creative studio',
    'social media marketing', 'printing services', 'business branding',
  ],
  authors: [{ name: 'Anlyt Media', url: 'https://anlytmedia.com' }],
  creator: 'Anlyt Media',
  publisher: 'Anlyt Media',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Anlyt Media',
    title: 'Anlyt Media — Creative Design Studio',
    description:
      'Professional 3D modeling, package design, logo creation, branding, web design, and digital marketing services.',
    images: [
      {
        url: '/anlyt-icon-512.png',
        width: 512,
        height: 512,
        alt: 'Anlyt Media — Creative Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Anlyt Media — Creative Design Studio',
    description:
      'Professional 3D modeling, package design, logo creation, branding, web design, and digital marketing services.',
    images: ['/anlyt-icon-512.png'],
    creator: '@anlytmedia',
  },
  icons: {
    icon: '/anlyt-icon-512.png',
    apple: '/anlyt-icon-512.png',
  },
  verification: {
    google: 'o_K3FdAM3567exC-qawkqQeun6IfW1LEdqBY-ffZa_o',
  },
};

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <JsonLd />
        {/* Google Tag Manager */}
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5625K268');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
