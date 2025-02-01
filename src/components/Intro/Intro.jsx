import React from 'react';
import Image from 'next/image';

export default function Intro() {
  return (
    <>
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
    </>
  );
}
