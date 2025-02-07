import Intro from '@/components/Intro';
import AutoSlider from '@/components/AutoSlider';
import OurExperience from '@/components/OurExperience';
import Head from 'next/head';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Anlyt Media | 3D Modeling, Package Designing & Digital Marketing
        </title>
        <meta
          name='description'
          content='Anlyt Media specializes in 3D modeling, package designing, and digital marketing, delivering innovative solutions to elevate your brand.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.anlytmedia.in/' />
        <meta property='og:title' content='Anlyt Media' />
        <meta
          property='og:description'
          content="Transform your brand with Anlyt Media's expert 3D modeling, package designing, and digital marketing services."
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.anlytmedia.in/' />
        <meta property='twitter:title' content='Anlyt Media' />
        <meta
          property='twitter:description'
          content="Elevate your brand with Anlyt Media's 3D modeling, package designing & digital marketing services."
        />
      </Head>
      <div className=' p-2 bg-black fixed top-0 w-full z-10 '>
        <p className='text-white font-bold  text-center animate-pulse'>
          Website Upgrades in Progress
          <span className='hidden md:inline'>
            – Get Ready for an Amazing Experience!
          </span>
        </p>
      </div>
      <div className='absolute -z-10 hue-rotate-340 w-full flex justify-center mt-[5rem]'>
        <img src='/bg-header.svg' alt='anlyt media logo' />
      </div>
      <div className='min-h-screen  flex flex-col  items-center'>
        <Intro />
        <AutoSlider />
        <OurExperience />
        <Footer />
      </div>
    </>
  );
}
