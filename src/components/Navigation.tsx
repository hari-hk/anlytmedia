'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.scss';
import { Button } from './ui/Button';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <img
            src='/anlyt-full0-logo.png'
            alt='ANLYT MEDIA Logo'
            className={styles.logoImage}
          />
        </Link>
        <div className={styles.links}>
          <Link href='#about'>About</Link>
          <Link href='#services'>Services</Link>
          <Link href='#portfolio'>Portfolio</Link>
          <Link href='#process'>Process</Link>
          <Button
            variant='primary'
            size='sm'
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
