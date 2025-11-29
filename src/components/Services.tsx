'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Services.module.scss';

const services = [
  {
    title: '3D Modeling',
    description:
      'Bringing concepts to life with photorealistic precision and immersive depth.',
  },
  {
    title: 'Package Designing',
    description:
      'Tactile experiences that captivate from the shelf to the unboxing.',
  },
  {
    title: 'Logo Creation',
    description: 'Distilling your essence into a timeless visual mark.',
  },
  {
    title: 'Branding & Graphic Design',
    description: 'Cohesive visual systems that tell your unique story.',
  },
  {
    title: 'Web Design & Development',
    description: 'High-performance digital destinations built for impact.',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven strategies to amplify your reach and ROI.',
  },
  {
    title: 'Social Media Management',
    description:
      'Curating conversations and building communities around your brand.',
  },
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;

    if (!section || !list) return;

    gsap.fromTo(
      list.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id='services' className={styles.services} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Expertise</h2>
          <p>Comprehensive solutions for the modern digital landscape.</p>
        </div>
        <div className={styles.grid} ref={listRef}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.number}>0{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.line}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
