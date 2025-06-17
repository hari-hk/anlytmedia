'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import './style.css';
import EmailIcon from '@/components/icons/email';
import PhoneIcon from '@/components/icons/phone';
import LocationIcon from '@/components/icons/location';

const SocialIconsView = dynamic(() => import('./SocialIconsView'));

const defaultVCardData = (name, org, phones, address, email) =>
  `
BEGIN:VCARD
VERSION:3.0
N:${name};;;;
FN:${name}
ORG:${org}
TEL;TYPE=CELL:${phones[0] || ''}
TEL;TYPE=WORK:${phones[1] || ''}
ADR;TYPE=WORK:;;${address}
EMAIL:${email}
END:VCARD
`.trim();

export default function BusinessCard(props) {
  const {
    name,
    position,
    email,
    phones,
    address,
    org,
    profileImage = '/app-bar-logo.svg',
    bgColor = 'from-slate-600 to-slate-800',
    bgLogo,
    textColor = 'text-white',
    cardColor = 'bg-green-600',
    buttonColor = 'bg-slate-500',
    socialLinks = {},
    enableContactButton = false,
    enableSocialLinks = false,
  } = props;
  const imageRef = useRef(null);
  const addButtonRef = useRef(null);

  const vCardData = defaultVCardData(name, org, phones, address, email);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  const handleAddToContact = () => {
    gsap.to(addButtonRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut',
    });

    try {
      const blob = new Blob([vCardData], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'contact.vcf';
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      console.error('Error creating/downloading vCard:', error);
      alert('An error occurred while processing your request.');
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b ${bgColor}`}
    >
      <div
        className={`w-[350px] shadow-xl border border-gray-200 rounded-lg ${cardColor}`}
      >
        <div className='p-6'>
          <div className='flex flex-col items-center text-center relative'>
            <div
              className={`absolute w-24 h-24 ${
                bgLogo ?? cardColor
              } rounded-full mb-4 -top-16 shadow-xl`}
              ref={imageRef}
            >
              <Image
                src={profileImage ?? '/app-bar-logo.svg'}
                alt='avatar'
                width={96}
                height={96}
                className='rounded-full'
              />
            </div>
            <h2 className={`text-2xl font-semibold mt-[3rem] ${textColor}`}>
              {name}
            </h2>
            <p className={textColor}>{position}</p>

            <div className='w-full h-px bg-gray-300 my-4'></div>

            <ul className={`space-y-3 text-sm ${textColor}`}>
              {email && (
                <li className='flex items-center gap-2'>
                  <EmailIcon />
                  <a
                    className='flex items-center gap-2'
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
              )}
              {phones && phones.length > 0 && (
                <li className='flex items-start justify-start gap-2'>
                  <PhoneIcon />
                  <ul className='list-disc-none'>
                    {phones.map((phone, index) => (
                      <li key={index}>
                        <a href={`tel:${phone}`}>{phone}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {address && (
                <li className='flex items-start justify-start gap-2'>
                  <LocationIcon />
                  <span className='text-start'>{address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      {enableContactButton && (
        <button
          className={`w-[350px] mt-6 p-2 shadow-xl border border-gray-200 rounded-lg ${buttonColor} ${textColor}`}
          ref={addButtonRef}
          onClick={handleAddToContact}
        >
          Add to contact
        </button>
      )}

      {enableSocialLinks && Object.keys(socialLinks).length > 0 && (
        <>
          <h2 className={`text-2xl font-bold mt-6 mb-2 ${textColor}`}>
            Social Media
          </h2>
          <div className='w-[350px] shadow-xl border border-gray-200 bg-slate rounded-lg'>
            <div className='p-6'>
              <div className='flex flex-row items-center gap-2 flex-wrap justify-around'>
                {Object.entries(socialLinks).map(([key, url]) => (
                  <div
                    key={key}
                    className='size-10 border drop-shadow-md shadow-slate-100 rounded-full flex items-center justify-center'
                  >
                    <Link href={url} target='_blank'>
                      <SocialIconsView url={url} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
