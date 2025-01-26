'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Home() {
  const cards = [
    { id: 1, title: 'Card 1', image: '/media/2Cover.jpg' },
    { id: 2, title: 'Card 2', image: '/media/22.png' },
    { id: 3, title: 'Card 3', image: '/media/baby.png' },
    { id: 4, title: 'Card 4', image: '/media/panasonic.jpg' },
  ];
  return (
    <>
      <div className='absolute -z-10 hue-rotate-340 w-full flex justify-center'>
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
      </div>
    </>
  );
}
