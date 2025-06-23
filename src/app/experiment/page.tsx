'use client';

import { useEffect, useRef } from 'react';

const GlassGyroCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const x = event.gamma ?? 0; // left to right tilt
      const y = event.beta ?? 0; // front to back tilt

      const rotateX = Math.min(Math.max(-15, y - 45), 15); // limit tilt
      const rotateY = Math.min(Math.max(-15, x), 15);

      if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener('deviceorientation', handleOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div className='w-full h-screen flex items-center justify-center bg-black'>
      <div
        ref={cardRef}
        className='w-80 h-80 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform duration-200 ease-out'
      >
        <div className='text-white p-6 font-semibold text-center text-xl'>
          Gyroscope Glass Card
        </div>
      </div>
    </div>
  );
};

export default GlassGyroCard;
