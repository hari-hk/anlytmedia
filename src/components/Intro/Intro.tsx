'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import StarryNight from '../StarryNight/StarryNight';

interface IntroProps {
  disableDescription?: boolean;
  hideContactButton?: boolean;
}

export default function Intro({
  disableDescription = false,
  hideContactButton = false,
}: IntroProps) {
  const boxRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const text =
    'Elevating brands through innovative and engaging digital solutions';

  useLayoutEffect(() => {
    if (boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'bounce.out' }
      );
    }
  }, []);

  useLayoutEffect(() => {
    const chars = text.split('');
    if (textRef.current) {
      textRef.current.innerHTML = '';
      chars.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        textRef.current!.appendChild(span);
      });

      gsap.fromTo(
        Array.from(textRef.current.children),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.05,
          stagger: 0.1,
          ease: 'power1.inOut',
        }
      );
    }
  }, []);

  return (
    <>
      <header className='container flex flex-row justify-between items-center '>
        <Image
          src='/app-bar-logo.svg'
          alt='anlyt media logo'
          width={180}
          height={38}
          priority
          className='pointer-events-none'
        />

        {!hideContactButton && (
          <button
            className='bg-sky-500 text-white px-4 py-4 rounded-lg'
            onClick={() =>
              window.open('https://forms.gle/zaesT8XVXkCPn5hUA', '_blank')
            }
          >
            Contact us
          </button>
        )}
      </header>

      {!disableDescription && (
        <main className='container flex flex-col items-center max-w-xl justify-center'>
          <StarryNight
            customStyle={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          />
          <h1
            className='text-5xl text-white font-bold  text-center leading-tight'
            ref={boxRef}
          >
            Design That Powers Real Business Growth
          </h1>
          <div ref={textRef} className='text-white text-lg mt-5 text-center' />
        </main>
      )}
    </>
  );
}
