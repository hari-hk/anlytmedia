import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';
import Grain from '@/components/ui/Grain';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface IMainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Grain />
      <Navigation />
      {children}
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
