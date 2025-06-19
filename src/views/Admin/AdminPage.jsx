'use client';

import api from '@/lib/fetcher';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function AdminPage() {
  const [businessCards, setBusinessCards] = useState([]);
  const fetchBusinessCards = async () => {
    try {
      const { data } = await api.get('/business-card');
      if (data.length > 0) {
        setBusinessCards(data);
      }
    } catch (error) {
      console.error('Error fetching business cards:', error);
    }
  };

  useEffect(() => {
    fetchBusinessCards();
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center bg-gray-900'>
      <div className='w-full p-4'>
        <BusinessCardList list={businessCards} />
      </div>
    </div>
  );
}

const BusinessCardItem = ({ name, email, phone, logo }) => (
  <div className='w-full bg-white rounded-xl shadow-md p-1 border'>
    <div className='flex flex-row items-center gap-2'>
      <Image
        height={80}
        width={80}
        alt='Business Card Logo'
        className='w-20 h-20 rounded-md'
        src={logo || '/app-bar-logo.svg'}
      />

      <section className='flex flex-col items-start h-full'>
        <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
        <p className='text-sm text-gray-600'>{email}</p>
        <p className='text-sm text-gray-600'>{phone}</p>
      </section>
    </div>
  </div>
);

const BusinessCardList = ({ list = [] }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {list.map((contact, index) => (
        <BusinessCardItem key={index} {...contact} />
      ))}
    </div>
  );
};
export default AdminPage;
