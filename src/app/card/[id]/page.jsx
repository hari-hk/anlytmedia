import api from '@/lib/fetcher';
import BusinessCard from '@/views/BusinessCard/BusinessCard';

export const metadata = {
  title: 'Card',
  description: 'Powered at Anlyt Media',
};

export default async function DynamicCard({ params }) {
  const { id } = await params;

  const response = await api.get(`/business-card?endpoint=${id}`);
  if (!response || !response.id) {
    return <div className='text-center'>Business card not found</div>;
  }

  return <BusinessCard {...response} />;
}
