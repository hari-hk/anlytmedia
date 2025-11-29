'use client';

import { useEffect, useState } from 'react';
import { BusinessCardProps } from '@/views/BusinessCard/BusinessCard';
import BUSINESS_CARDS from './business-card-data.json';
import CardTemplate from '@/components/CardGallery/CardTemplate';

interface BusinessCardTemplate extends BusinessCardProps {
  id: string;
}

export default function BusinessCardTemplate({
  id,
  templateId,
}: {
  id: string;
  templateId: string;
}) {
  const [data, setData] = useState<null | BusinessCardTemplate>(null);
  const [loading, setLoading] = useState(true);

  const getBusinessCard = async () => {
    const data: any =
      BUSINESS_CARDS.find((card) => card.endpoint === id) || null;
    setData(data);
    setLoading(false);
    // try {
    //   const response = await api.get(`/business-card?endpoint=${id}`);
    //   if (response && response.id) {
    //     setData(response);
    //   } else {
    //     setData(null);
    //   }
    //   setLoading(false);
    // } catch (error) {
    //   console.error('Error fetching business card:', error);
    //   setData(null);
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    getBusinessCard();
  }, []);

  if (loading) {
    return <div className='text-center'></div>;
  }

  if (!data || !data.id) {
    return <div className='text-center'>Business card not found</div>;
  }

  function isNumber(value: string | undefined): boolean {
    if (!value) return false;
    return !isNaN(Number(value));
  }

  return (
    <div className='min-h-screen bg-slate-100 lg:p-8 sm:p-1 font-sans flex items-center'>
      <div className='max-w-md w-full m-auto '>
        <CardTemplate
          variant={isNumber(templateId) ? +templateId : 1}
          data={data}
        />
      </div>
    </div>
  );
}
