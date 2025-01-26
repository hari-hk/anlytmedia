'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const ModelViewer = dynamic(() => import('../components/ModelViewer'), {
  ssr: false,
});

export default function Home() {
  const cards = [
    { id: 1, title: 'Card 1', image: '/media/2Cover.jpg' },
    { id: 2, title: 'Card 2', image: '/media/22.png' },
    { id: 3, title: 'Card 3', image: '/media/baby.png' },
    { id: 4, title: 'Card 4', image: '/media/panasonic.jpg' },
  ];
  return (
    <>
      <div className='absolute -z-10 hue-rotate-340 w-full flex justify-center mt-[5rem]'>
        <img src='/bg-header.svg' alt='anlyt media logo' />
      </div>
      <div className='min-h-screen  flex flex-col  items-center'>
        <header className='container flex flex-row justify-between items-center '>
          <Image
            src='/app-bar-logo.svg'
            alt='anlyt media logo'
            width={180}
            height={38}
            priority
          />

          <button className='bg-sky-500 text-white px-4 py-4 rounded-lg'>
            Contact us
          </button>
        </header>

        <main className='container flex flex-col items-center max-w-xl justify-center'>
          <h1 className='text-5xl text-white font-bold  text-center leading-tight'>
            Design That Powers Real Business Growth
          </h1>
          <p className='text-white text-lg mt-5 text-center'>
            Elevating brands through innovative and engaging digital solutions
          </p>
        </main>

        <section className='container flex flex-col items-center justify-center mt-10 relative'>
          <div className='w-full overflow-hidden'>
            <div
              className='absolute  h-full  left-0 w-40 '
              style={{
                zIndex: 2,
                background:
                  'linear-gradient(90deg, var(--background) 0%, transparent 100%)',
              }}
            ></div>
            <div
              className='absolute  h-full  right-0 w-40'
              style={{
                zIndex: 2,
                background:
                  'linear-gradient(90deg, transparent 0, var(--background) 100%)',
              }}
            ></div>
            <Marquee>
              <div className='flex mt-10'>
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className='rounded-3xl shadow-md border border-blue-500 overflow-hidden mr-4 h-[400px] w-full mr-8'
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      className='object-cover size-full'
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </section>

        <section className='container relative w-full '>
          <div
            className='absolute left-0 right-0 m-auto top-[6rem] '
            style={{
              zIndex: -2,
            }}
          >
            <Image
              src='magic-bg.svg'
              alt='imag back'
              width={100}
              height={100}
              className='size-full'
            ></Image>
          </div>

          <div className='absolute left-0 hidden lg:block lg:w-[402px] md:h-[363px] 2xl:w-[616px] 2xl:h-[556px]'>
            <div
              className='absolute  h-full  left-0 w-40 '
              style={{
                zIndex: 2,
                background:
                  'linear-gradient(90deg, var(--background) 0%, transparent 100%)',
              }}
            ></div>
            <Image
              src='/magic-l.svg'
              alt='anlyt media logo'
              width={616}
              height={556}
              className='object-cover size-full'
            />
          </div>
          <div className='absolute right-0 hidden lg:block lg:w-[402px] md:h-[363px] 2xl:w-[616px] 2xl:h-[556px]'>
            <div
              className='absolute  h-full  right-0 w-40'
              style={{
                zIndex: 2,
                background:
                  'linear-gradient(90deg, transparent 0, var(--background) 100%)',
              }}
            ></div>
            <Image
              src='/magic-r.svg'
              alt='anlyt media logo'
              width={100}
              height={100}
              className='object-cover size-full'
            />
          </div>
          <section>
            <h1 className=' text-2xl lg:text-5xl mt-[9rem] lg:mt-[12rem]  2xl:mt-[20rem] text-white font-bold  text-center leading-tight'>
              Looking For A 3D Model
            </h1>
            <p className='text-white text-lg mt-5 text-center'>
              3D Models and AR Experiences for eCommerce
            </p>
          </section>
          <div className='container flex flex-col gap-2 mt-[10rem]'>
            <ModelViewer
              src='/media/frame.glb'
              alt='A 3D model of an object'
              auto-rotate
              camera-controls
              style={{ width: '300px', height: '500px' }}
            ></ModelViewer>
          </div>
        </section>
      </div>
    </>
  );
}
