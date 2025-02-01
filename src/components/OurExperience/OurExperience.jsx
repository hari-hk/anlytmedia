'use client';

// import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
// import { list } from '@vercel/blob';

const ModelViewer = dynamic(() => import('../ModelViewer'), {
  ssr: false,
});

export default function OurExperience() {
  // const [cards, setCards] = useState([]);
  // useEffect(() => {
  //   list({
  //     token: process.env.NEXT_PUBLIC_VERCEL_TOKEN,
  //     access: 'public',
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setCards(res?.blobs ?? []);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
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
  );
}
