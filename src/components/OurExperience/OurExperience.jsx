'use client';

import Image from 'next/image';

export default function OurExperience() {
  const cardData = [
    {
      title: 'Panasonic RP-HF100M-K On Ear Headphone',
      src: 'https://sketchfab.com/models/eade9f6789ee47d38bdaa94a2835cba5/embed',
    },
    {
      title: 'X Rocker Adrenaline',
      src: 'https://sketchfab.com/models/14eb55d7069748889a27e9b06709dae4/embed',
    },
  ];
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
      <div
        className='container flex flex-col md:flex-row my-[3rem] md:my-[9rem] p-2 gap-4'
        style={{ zIndex: 90 }}
      >
        {cardData.map((card, index) => (
          <div
            key={`card-data-${index}`}
            className='flex bg-white-200 rounded-3xl shadow-md border border-blue-500  overflow-hidden h-[500px] w-full items-center justify-center'
          >
            <iframe
              title={card.title}
              allowFullScreen
              frameBorder='0'
              mozallowfullscreen='true'
              webkitallowfullscreen='true'
              allow='autoplay; fullscreen; xr-spatial-tracking'
              xr-spatial-tracking="true"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              src={card.src}
              className='w-full h-full'
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}
