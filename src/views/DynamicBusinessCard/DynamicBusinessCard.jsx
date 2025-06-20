'use client';

import { useEffect, useState } from 'react';
import api from '@/lib/fetcher';
import BusinessCard from '@/views/BusinessCard/BusinessCard';

export default function DynamicBusinessCard({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBusinessCard = async () => {
    try {
      const response = await api.get(`/business-card?endpoint=${id}`);
      if (response && response.id) {
        setData(response);
      } else {
        setData(null);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching business card:', error);
      setData(null);
      setLoading(false);
    }
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
