'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import type { ISourceOptions } from "@tsparticles/engine";

const particleOptions: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  particles: {
    number: { value: 100 },
    shape: { type: 'circle' },
    move: {
      enable: true,
      direction: "top",
      speed: { min: 1.5, max: 4.2 },
      outModes: { top: 'out', default: 'none' },
      random: true,
      straight: false,
    },
  },
  emitters: { direction: "top" },
  preset: 'stars',
};

function MagicSide({
  side,
  imageSrc,
  imageWidth,
  imageHeight,
  gradient,
  particlesId,
  isParticlesEngineInitialized,
  imageClassName = '',
}: {
  side: 'left' | 'right';
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  gradient: string;
  particlesId: string;
  isParticlesEngineInitialized: boolean;
  imageClassName?: string;
}) {
  return (
    <div
      className={`absolute ${side}-0 hidden lg:block lg:w-[402px] md:h-[363px] 2xl:w-[616px] 2xl:h-[556px] pointer-events-none`}
    >
      <div
        className={`absolute h-full ${side}-0 w-40 pointer-events-none`}
        style={{
          zIndex: 2,
          background: gradient,
        }}
      ></div>
      <Image
        src={imageSrc}
        alt='anlyt media logo'
        width={imageWidth}
        height={imageHeight}
        className={`object-cover size-full pointer-events-none ${imageClassName}`}
      />
      {isParticlesEngineInitialized && (
        <Particles
          id={particlesId}
          options={particleOptions}
          className='absolute top-[4rem] w-full'
        />
      )}
    </div>
  );
}

function ModelCard({ title, src }: { title: string; src: string }) {
  return (
    <div className='flex bg-white-200 rounded-3xl shadow-md border border-blue-500 overflow-hidden h-[500px] w-full items-center justify-center'>
      <iframe
        title={title}
        allowFullScreen
        allow='autoplay; fullscreen; xr-spatial-tracking'
        src={src}
        className='w-full h-full'
        // Removed frameBorder, replaced with style for border: 0
        style={{ border: 0 }}
        xr-spatial-tracking='true'
        execution-while-out-of-viewport='true'
        execution-while-not-rendered='true'
        web-share='true'
      ></iframe>
    </div>
  );
}

export default function OurExperience() {
  const [isParticlesEngineInitialized, setIsParticlesEngineInitialized] =
    useState(false);

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

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setIsParticlesEngineInitialized(true);
    });
  }, []);

  return (
    <section className='container relative w-full '>
      <div
        className='absolute left-0 right-0 m-auto top-[6rem] '
        style={{ zIndex: -2 }}
      >
        <Image
          src='magic-bg.svg'
          alt='imag back'
          width={100}
          height={100}
          className='size-full pointer-events-none'
        />
      </div>

      <MagicSide
        side='left'
        imageSrc='/magic-l.svg'
        imageWidth={616}
        imageHeight={556}
        gradient='linear-gradient(90deg, var(--background) 0%, transparent 100%)'
        particlesId='ts-particles-left'
        isParticlesEngineInitialized={isParticlesEngineInitialized}
      />

      <MagicSide
        side='right'
        imageSrc='/magic-r.svg'
        imageWidth={100}
        imageHeight={100}
        gradient='linear-gradient(90deg, transparent 0, var(--background) 100%)'
        particlesId='ts-particles-fly'
        isParticlesEngineInitialized={isParticlesEngineInitialized}
      />

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
          <ModelCard key={`card-data-${index}`} {...card} />
        ))}
      </div>
    </section>
  );
}
