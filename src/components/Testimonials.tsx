'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Testimonials.module.scss';

const testimonials = [
  {
    quote:
      "ANLYT transformed our brand into a digital masterpiece. The 3D integration is unlike anything we've seen.",
    author: 'Sarah Jenkins',
    role: 'CEO, TechNova',
  },
  {
    quote:
      "Professional, visionary, and incredibly talented. They didn't just build a website; they built an experience.",
    author: 'Marcus Thorne',
    role: 'Director, FutureSpace',
  },
  {
    quote:
      'The level of detail in their work is astounding. Our engagement metrics have skyrocketed since the launch.',
    author: 'Elena Rodriguez',
    role: 'CMO, LuxeLife',
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    gsap.fromTo(
      container.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section className={styles.testimonials} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Client Stories</h2>
        </div>
        <div className={styles.grid} ref={containerRef}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quote}>"{item.quote}"</div>
              <div className={styles.author}>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
