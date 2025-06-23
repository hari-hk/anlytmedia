'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import api from '@/lib/fetcher';
import toast from 'react-hot-toast';
import { BusinessCardProps } from '../BusinessCard/BusinessCard';
import Link from 'next/link';

type BusinessCard =
  | Pick<
      BusinessCardProps,
      'name' | 'email' | 'phones' | 'logo' | 'endpoint'
    > & { id: string };

// Props for BusinessCardItem
interface BusinessCardItemProps extends BusinessCard {
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onView: (endpoint: string) => void;
}

// Props for BusinessCardList
interface BusinessCardListProps {
  list: BusinessCard[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onView: (endpoint: string) => void;
}

function AdminPage() {
  const router = useRouter();

  const [businessCards, setBusinessCards] = useState<BusinessCard[]>([]);

  const fetchBusinessCards = async () => {
    try {
      const response: BusinessCard[] = await api.get('/business-card');
      if (response.length > 0) {
        setBusinessCards(response);
      }
    } catch (error) {
      console.error('Error fetching business cards:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await api.delete(`/business-card?id=${id}`);
      if (response) {
        toast.success('Business card deleted successfully');
        setBusinessCards((prev) => prev.filter((card) => card.id !== id));
      }
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'message' in error) {
        toast.error(
          (error as { message?: string }).message ||
            'Failed to delete business card'
        );
      } else {
        toast.error('Failed to delete business card');
      }
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/${id}`);
  };

  useEffect(() => {
    fetchBusinessCards();
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center bg-gray-900'>
      <div className='w-full p-4'>
        <BusinessCardList
          list={businessCards}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onView={(endpoint: string) =>
            window.open(`/card/${endpoint}`, '_blank')
          }
        />
      </div>
    </div>
  );
}

const BusinessCardItem: React.FC<BusinessCardItemProps> = ({
  name,
  email,
  phones,
  logo,
  id,
  endpoint,
  onDelete,
  onEdit,
  onView,
}) => (
  <div className='w-full bg-white rounded-xl shadow-md p-2 border'>
    <div className='flex flex-row items-start gap-1'>
      <Image
        height={80}
        width={80}
        alt='Business Card Logo'
        className='w-10 h-10 rounded-md'
        src={logo || '/app-bar-logo.svg'}
      />

      <section className='flex flex-col items-start h-full overflow-hidden'>
        <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
        <p className='text-sm text-gray-600'>{email}</p>
        <Link
          href={`${window.location.host}/card/${endpoint}`}
          className='text-sm text-blue-600'
        >{`${window.location.host}/card/${endpoint}`}</Link>
      </section>
    </div>
    <div className='flex flex-row items-center justify-end mt-2 gap-1'>
      <button
        onClick={() => {
          onDelete(id);
        }}
        type='button'
        className='focus:outline-none text-white bg-red-700 hover:bg-red-800  font-small rounded-lg text-sm p-2 '
      >
        Delete
      </button>
      <button
        onClick={() => onEdit(id)}
        type='button'
        className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800  font-small rounded-lg text-sm p-2'
      >
        Edit
      </button>
    </div>
  </div>
);

const BusinessCardList: React.FC<BusinessCardListProps> = ({
  list = [],
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {list.map((contact) => (
        <BusinessCardItem
          key={contact.id}
          {...contact}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default AdminPage;
