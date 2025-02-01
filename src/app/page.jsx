'use client';

// import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// import { list } from '@vercel/blob';
// import { useEffect } from 'react';
import Intro from '@/components/Intro';

const ModelViewer = dynamic(() => import('../components/ModelViewer'), {
  ssr: false,
});

export default function Home() {
  // const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   console.log('env', process.env.NEXT_PUBLIC_VERCEL_TOKEN);
  //   list({
  //     token: 'vercel_blob_rw_lpfHR2cn9lm0UjTJ_k7BVTauk1D9B9mVmXiQ2buwWXPb3x8',
  //     access: 'public',
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setCards(res?.blobs ?? []);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const cards = [
    {
      id: 1,
      title: 'headphone',
      url:
        'https://lh3.googleusercontent.com/pw/AP1GczPoopKVE2b5sMgnOHMLFaS4BZZS6JHZJaIvYDHc-_v2AAk848gV_htKAPSNKMnWm4H4wMAjr599lIT9RMoVXGdjhUZSR9U0ul-9Y2XUXXcyLFaKtg=w2400',
    },
    {
      id: 2,
      title: 'Luggage',
      url:
        'https://lh3.googleusercontent.com/pw/AP1GczMxCwHPRD3zwgwcDiFeI2L4LgPhW5BjfcD9FTDDNQeNUbosdJPxS28euQYovoYxBjZezVW3ePo50YTy8XSnswQHiOmunzXyVppsuNdKIV92epHSoQ=w2400',
    },
    {
      id: 3,
      title: 'bangle',
      url:
        'https://lh3.googleusercontent.com/pw/AP1GczOPMX-e39C-7lYkbIKr4oP3ifO5AHv6JPj0Gq0bbq9QY0-k0lE4AAcNM1ZQDoh8BsRdpkt6Q70yRck4IC8haYGLdgLKfDAiSFuy6bAml57bWXcvfQ=w2400',
    },
    {
      id: 4,
      title: 'Mashmelon',
      url:
        'https://lh3.googleusercontent.com/pw/AP1GczPaziCHFQbdIwWKGcpfA7FWZ6fQlPZv26lEIuPsO34bjMGO9IbNRc8Ha4DzyZzGz2p52qSK8lRmSj9yYBGxCy83zp-by5O2KH5q2p1N5PBn89zi0Q=w2400',
    },
    {
      id: 5,
      title: 'toy',
      url:
        'https://lh3.googleusercontent.com/pw/AP1GczPm7KceH7noqZL3RcEoESdMpDyPRgb-5kzIUEaH_yD5pReh3GJMSrQ9-APxP_D4y4mqOTDJfZKNA6p_w9kTy8Db95NIap93g2LI26KFWYdQhdlYxA=w2400',
    },
    {
      id: 6,
      title: 'other',
      url:
        'https://lh3.googleusercontent.com/pw/AP1GczP6JgMxC9ODKz1LcbeqbTE7u5qVXnRzEv47VtqQUN_wPmmYKa2rmc3aKz57uyTYkhO0ee8W9sYg2jNZhLBxTQbgQfTx4Rts-C5QObhVkALuSkMgpg=w2400',
    },
  ];
  return (
    <>
      <div className='absolute -z-10 hue-rotate-340 w-full flex justify-center mt-[5rem]'>
        <img src='/bg-header.svg' alt='anlyt media logo' />
      </div>
      <div className='min-h-screen  flex flex-col  items-center'>
        <Intro />

        <section className='container flex flex-col items-center justify-center mt-10 relative'>
          <div className='w-full overflow-hidden '>
            <div
              className='absolute  h-full  left-0 w-40  hidden md:block'
              style={{
                zIndex: 2,
                background:
                  'linear-gradient(90deg, var(--background) 0%, transparent 100%)',
              }}
            ></div>
            <div
              className='absolute  h-full  right-0 w-40 hidden md:block'
              style={{
                zIndex: 2,
                background:
                  'linear-gradient(90deg, transparent 0, var(--background) 100%)',
              }}
            ></div>
            <Marquee>
              <div className='flex mt-10'>
                {cards.map((card, index) => (
                  <div
                    key={`card-${index}`}
                    className='rounded-3xl shadow-md border border-blue-500 overflow-hidden mr-4 h-[200px] md:h-[300px] w-full mr-8'
                  >
                    <Image
                      src={card?.url}
                      alt={card?.title ?? `cover-image-${index}`}
                      className='object-cover size-full object-center'
                      width={500}
                      height={500}
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
