'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.scss';
import { Button } from './ui/Button';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const prismRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const text = textRef.current;
    const visual = visualRef.current;
    const prism = prismRef.current;

    if (!hero || !text || !visual || !prism) return;

    const tl = gsap.timeline();

    // Initial Reveal
    tl.fromTo(
      text.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
    ).fromTo(
      visual,
      { scale: 0.8, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: 'power2.out' },
      '-=1'
    );

    // Scroll Parallax
    gsap.to(visual, {
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 200,
      rotation: 10,
    });

    gsap.to(text, {
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 100,
      opacity: 0.5,
    });

    // Mouse Parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;

      gsap.to(prism, {
        rotationY: x * 20,
        rotationX: -y * 20,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(text, {
        x: x * 10,
        y: y * 10,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.floatingParticles}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.container}>
        <div className={styles.content} ref={textRef}>
          <h1>
            Elevating Brands <br />
            <span>Beyond Dimensions</span>
          </h1>
          <p>
            We craft immersive digital experiences, 3D realities, and strategic
            branding that define the future.
          </p>
          <div className={styles.actions}>
            <Button variant='primary' size='lg'>
              Explore Work
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Our Services
            </Button>
          </div>
        </div>
        <div className={styles.visual} ref={visualRef}>
          <div className={styles.prism} ref={prismRef}>
            <div className={styles.face}>3D</div>
            <div className={styles.face}>WEB</div>
            <div className={styles.face}>BRAND</div>
          </div>
          <div className={styles.glow}></div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll to Explore</span>
        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default Hero;
