'use client';

import React, { memo, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import './style.css';
import EmailIcon from '@/components/icons/email';
import PhoneIcon from '@/components/icons/phone';
import LocationIcon from '@/components/icons/location';

// Dynamically import SocialIconsView with an expected prop signature.
const SocialIconsView = dynamic(
  () => import('./SocialIconsView')
) as React.ComponentType<{
  url: string;
  color: string;
}>;

// Helper: Generate a vCard string
const defaultVCardData = (
  name: string,
  org: string,
  phones: string[] = ['', ''],
  address: string,
  email: string
): string =>
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

// Define the prop types for the BusinessCard component
export interface BusinessCardProps {
  name: string;
  position: string;
  email: string;
  phones: string[];
  address: string;
  org: string;
  logo?: string;
  bgColor?: string;
  bgLogo?: string;
  textColor?: string;
  cardColor?: string;
  buttonColor?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
  enableContactButton?: boolean;
  enableSocialLinks?: boolean;
}

function BusinessCard(props: BusinessCardProps) {
  const {
    name,
    position,
    email,
    phones,
    address,
    org,
    logo = '/app-bar-logo.svg',
    bgColor = 'from-slate-600 to-slate-800',
    bgLogo,
    textColor = 'text-white',
    cardColor = 'bg-green-600',
    buttonColor = 'bg-slate-500',
    socialLinks = {
      instagram: '',
      facebook: '',
      linkedin: '',
      twitter: '',
    },
    enableContactButton = false,
    enableSocialLinks = false,
  } = props;

  console.log('BusinessCard props:', props);

  // Define refs with proper types
  const imageRef = useRef<HTMLDivElement>(null);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const vCardData = defaultVCardData(name, org, phones, address, email);

  useEffect(() => {
    if (imageRef.current) {
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
    }
  }, []);

  const handleAddToContact = () => {
    if (addButtonRef.current) {
      gsap.to(addButtonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut',
      });
    }

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
              } rounded-full mb-4 -top-16 shadow-xl flex items-center justify-center`}
              ref={imageRef}
            >
              <Image
                src={logo ?? '/app-bar-logo.svg'}
                alt='avatar'
                width={80}
                height={80}
                className='rounded-full p-1'
              />
            </div>
            <h2 className={`text-2xl font-semibold mt-[3rem] ${textColor}`}>
              {name}
            </h2>
            <p className={textColor}>{position}</p>
            <div className='w-full h-px bg-gray-300 my-4'></div>
            <ul
              className={`w-full flex flex-col items-start space-y-3 text-sm ${textColor}`}
            >
              {email && (
                <li className='flex items-center gap-2'>
                  <EmailIcon color={textColor} />
                  <a
                    className='flex items-center gap-2'
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </li>
              )}
              {phones && phones.filter((phone) => phone.trim()).length > 0 && (
                <li className='flex items-start justify-start gap-2'>
                  <PhoneIcon color={textColor} />
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
                  <LocationIcon color={textColor} />
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
      {enableSocialLinks &&
        Object.entries(socialLinks).filter(([_, value]) => value?.trim())
          .length > 0 && (
          <>
            <h2 className={`text-2xl font-bold mt-6 mb-2 ${textColor}`}>
              Social Media
            </h2>
            <div className='w-[350px] shadow-xl border border-gray-200 bg-slate rounded-lg'>
              <div className='p-6'>
                <div className='flex flex-row items-center gap-2 flex-wrap justify-around'>
                  {Object.entries(socialLinks)
                    .filter(([_, value]) => value?.trim())
                    .map(([key, url]) => (
                      <div
                        key={key}
                        className='size-10 border drop-shadow-md shadow-slate-100 rounded-full flex items-center justify-center'
                      >
                        <Link href={url!} target='_blank'>
                          <SocialIconsView url={url!} color={textColor} />
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

export default memo(BusinessCard);
