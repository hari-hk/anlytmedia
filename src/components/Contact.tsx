'use client';

import styles from './Contact.module.scss';
import { Button } from './ui/Button';

export const Contact = () => {
  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Ready to Transmit Your Vision?</h2>
          <p>Let's build something extraordinary together.</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.group}>
              <input type='text' placeholder='Name' required />
              <input type='email' placeholder='Email' required />
            </div>
            <select required>
              <option value='' disabled selected>
                Select Service
              </option>
              <option value='3d'>3D Modeling</option>
              <option value='web'>Web Design</option>
              <option value='branding'>Branding</option>
              <option value='other'>Other</option>
            </select>
            <textarea
              placeholder='Tell us about your project'
              rows={5}
              required
            ></textarea>
            <Button variant='primary' size='lg' type='submit'>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
