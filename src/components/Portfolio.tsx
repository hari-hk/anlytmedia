'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Portfolio.module.scss';

const projects = [
  {
    title: 'Coffee Maker',
    category: '3D Modeling',
    image: 'https://ik.imagekit.io/anlytmedia/coffee.jpg',
  },
  {
    title: 'Package Design',
    category: 'Packaging',
    image:
      'https://ik.imagekit.io/anlytmedia/ananda-sayanan-6hIn0FJIWks-unsplash.jpg',
  },
  {
    title: 'Tower Toaster',
    category: '3D Modeling',
    image: 'https://ik.imagekit.io/anlytmedia/Tower%20Toasters.jpg',
  },
  {
    title: 'Urban Style',
    category: 'Web Design',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Product Design',
    category: 'Art Direction',
    image: 'https://ik.imagekit.io/anlytmedia/Cup%20Exploded.png',
  },
  {
    title: 'Victory Knives',
    category: 'Logo Design',
    image: 'https://ik.imagekit.io/anlytmedia/VictoryKnives%20SH.png',
  },
];

export const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    gsap.fromTo(
      grid.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section id='portfolio' className={styles.portfolio} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Selected Works</h2>
          <p>A showcase of our finest creations.</p>
        </div>
        <div className={styles.grid} ref={gridRef}>
          {projects.map((project, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.imageWrapper}>
                {/* Using img tag for simplicity in this concept, in prod use Next Image */}
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <h3>{project.title}</h3>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
