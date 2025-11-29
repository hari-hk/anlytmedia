import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href='/' className={styles.logo}>
              ANLYT<span>MEDIA</span>
            </Link>
            <p>Elevating Brands Beyond Dimensions.</p>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Company</h4>
              <Link href='#about'>About</Link>
              <Link href='#services'>Services</Link>
              <Link href='#portfolio'>Portfolio</Link>
            </div>
            <div className={styles.column}>
              <h4>Legal</h4>
              <Link href='/privacy'>Privacy Policy</Link>
              <Link href='/terms'>Terms of Service</Link>
            </div>
            <div className={styles.column}>
              <h4>Connect</h4>
              <a
                href='https://facebook.com/anlytmedia'
                target='_blank'
                rel='noopener noreferrer'
              >
                Facebook
              </a>
              <a
                href='https://instagram.com/anlytmedia'
                target='_blank'
                rel='noopener noreferrer'
              >
                Instagram
              </a>
              <a
                href='https://linkedin.com/company/anlytmedia'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
              <a
                href='https://x.com/anlytmedia'
                target='_blank'
                rel='noopener noreferrer'
              >
                X (Twitter)
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            &copy; {new Date().getFullYear()} ANLYT MEDIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
