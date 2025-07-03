'use client';

import { useEffect, useState } from 'react';
import BusinessCard, {
  BusinessCardProps,
} from '@/views/BusinessCard/BusinessCard';
import BUSINESS_CARDS from './business-card-data.json';

interface DynamicBusinessCard extends BusinessCardProps {
  id: string;
}

export default function DynamicBusinessCard({ id }: { id: string }) {
  const [data, setData] = useState<null | DynamicBusinessCard>(null);
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

  return <BusinessCard {...data} />;
}
