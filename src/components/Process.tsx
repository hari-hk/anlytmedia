'use client';

import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Process.module.scss';

const steps = [
  {
    title: 'Discovery',
    description: 'We listen, research, and understand your core needs.',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Strategy',
    description: 'Blueprinting the path to success with data and creativity.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Creation',
    description: 'Where magic happens—designing, coding, and modeling.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Refinement',
    description: 'Polishing every pixel and interaction.',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Launch',
    description: 'Deploying your vision to the world.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
  },
];

export const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const stepsEl = stepsRef.current;
    const visual = visualRef.current;

    if (!section || !stepsEl || !visual) return;

    if (!section || !stepsEl || !visual) return;

    // Pinning is now handled via CSS sticky in the module.scss

    const stepElements = Array.from(stepsEl.children);

    stepElements.forEach((step, index) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveStep(index),
        onEnterBack: () => setActiveStep(index),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id='process' className={styles.process} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Workflow</h2>
          <p>From concept to reality, step by step.</p>
        </div>
        <div className={styles.content}>
          <div className={styles.steps} ref={stepsRef}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.step} ${
                  activeStep === index ? styles.active : ''
                }`}
              >
                <div className={styles.number}>0{index + 1}</div>
                <div className={styles.text}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.visualWrapper}>
            <div className={styles.visual} ref={visualRef}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.imageWrapper} ${
                    activeStep === index ? styles.active : ''
                  }`}
                >
                  <img src={step.image} alt={step.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
