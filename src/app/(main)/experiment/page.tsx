'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GlassGyroCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const x = event.gamma ?? 0; // left-right
      const y = event.beta ?? 0; // front-back

      const rotateX = Math.min(Math.max(-10, y - 45), 10);
      const rotateY = Math.min(Math.max(-10, x), 10);

      if (cardRef.current) {
        // GSAP for smooth 3D rotation
        gsap.to(cardRef.current, {
          rotateX,
          rotateY,
          ease: 'power2.out',
          duration: 0.5,
          transformPerspective: 1000,
          transformOrigin: 'center',
        });
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800'>
      <div
        ref={cardRef}
        className='w-80 h-80 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] transition-transform duration-200 ease-out relative overflow-hidden'
      >
        {/* Optional Shine / Reflection Effect */}
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-10 pointer-events-none' />

        <div className='text-white p-6 font-semibold text-center text-xl z-10 relative'>
          Glassmorphism Gyro Card
        </div>
      </div>
    </div>
  );
};

export default GlassGyroCard;
