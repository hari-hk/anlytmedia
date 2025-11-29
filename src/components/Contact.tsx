'use client';

import React from 'react';
import styles from './Contact.module.scss';
import { Button } from './ui/Button';

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with your actual WhatsApp Business number
    const phoneNumber = '917092828370'; 
    const text = `*New Inquiry from WEB Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service || 'Not specified'}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Ready to Transmit Your Vision?</h2>
          <p>Let's build something extraordinary together.</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
              <input 
                type='text' 
                name='name'
                placeholder='Name' 
                required 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type='email' 
                name='email'
                placeholder='Email' 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <select 
              name='service'
              required 
              value={formData.service}
              onChange={handleChange}
            >
              <option value='' disabled>
                Select Service
              </option>
              <option value='3d'>3D Modeling</option>
              <option value='web'>Web Design</option>
              <option value='branding'>Branding</option>
              <option value='other'>Other</option>
            </select>
            <textarea
              name='message'
              placeholder='Tell us about your project'
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
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
