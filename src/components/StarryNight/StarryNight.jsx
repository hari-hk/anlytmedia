'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const StarryNight = ({
  numStars = 50,
  speed = 4,
  moveSpeed = 8,
  starColor = '#ffffff5e',
  containerWidth = 800, // in pixels
  containerHeight = 600, // in pixels
  customStyle = {},
}) => {
  const starsRef = useRef([]);
  const containerRef = useRef(null);

  // State to store container's actual dimensions
  const [containerDimensions, setContainerDimensions] = useState({
    width: containerWidth,
    height: containerHeight,
  });

  // Function to generate a random value between min and max
  const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  // Update container dimensions when the window resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setContainerDimensions({
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    };

    // Add resize event listener
    window.addEventListener('resize', updateDimensions);

    // Initial dimension update
    updateDimensions();

    // Cleanup the event listener
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Initialize and animate stars when the DOM is fully ready
  useEffect(() => {
    if (!containerRef.current || !starsRef.current.length) return; // Ensure container and stars are mounted

    // Create initial star positions once
    starsRef.current.forEach((star) => {
      const top = getRandom(
        containerDimensions.height * 0.4,
        containerDimensions.height * 0.6
      );
      const left = getRandom(
        containerDimensions.width * 0.4,
        containerDimensions.width * 0.6
      );

      // Set initial position and opacity
      gsap.set(star, { top, left, opacity: 0 });
    });

    // Create GSAP animation for each star
    const animateStars = () => {
      starsRef.current.forEach((star) => {
        const delay = getRandom(0, 15);

        gsap.to(star, {
          opacity: 1,
          scale: 1.5,
          boxShadow: `0px 0px 10px 5px ${starColor}`,
          duration: speed, // Controls the sparkle effect
          repeat: -1, // Loop infinitely
          yoyo: true, // Make the animation go back and forth
          delay: delay,
          ease: 'power1.inOut',
          onRepeat: () => {
            const newTop = getRandom(0, containerDimensions.height);
            const newLeft = getRandom(0, containerDimensions.width);

            gsap.to(star, {
              top: newTop,
              left: newLeft,
              duration: moveSpeed, // Control movement speed
              ease: 'power1.inOut',
            });
          },
        });
      });
    };

    animateStars(); // Start animations
  }, [starColor, speed, moveSpeed, containerDimensions]);

  // Generate stars dynamically
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(
      <div
        key={i}
        ref={(el) => starsRef.current[i] = el}  // Assign each ref using index
        className='star'
        style={{
          position: 'absolute',
          width: '2px',
          height: '2px',
          backgroundColor: 'white',
          borderRadius: '50%',
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: `${containerDimensions.width}px`,
        height: `${containerDimensions.height}px`,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        ...customStyle
      }}
    >
      {stars}
    </div>
  );
};

export default StarryNight;
