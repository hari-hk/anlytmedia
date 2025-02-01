'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { list } from '@vercel/blob';

const ModelViewer = dynamic(() => import('../ModelViewer'), {
  ssr: false,
});

export default function OurExperience() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetchModels();
  }, []);
  const fetchModels = async () => {
    try {
      const response = await fetch('/api/models');
      const data = await response?.json();
      const cardData = data.blobs.filter((blob) => blob.url.includes('.glb'));
      setCards(cardData);
    } catch (error) {
      console.error('Failed to fetch greeting:', error);
    }
  };

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
      <div className='container flex flex-col md:flex-row my-[3rem] md:my-[5rem] p-2 gap-4'>
        {cards.map((card, index) => (
          <div
            key={`modal-3d-${index}`}
            className='flex bg-white-200 rounded-3xl shadow-md border border-blue-500  overflow-hidden h-[400px] w-full items-center justify-center'
          >
            <ModelViewer
              src={card.url}
              alt='A 3D model of an object'
              auto-rotate
              camera-controls
              disable-zoom
              style={{ width: '100%', height: '100%' }}
            ></ModelViewer>
          </div>
        ))}
      </div>
    </section>
  );
}
