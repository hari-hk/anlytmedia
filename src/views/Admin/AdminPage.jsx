'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import api from '@/lib/fetcher';
import toast from 'react-hot-toast';

function AdminPage() {
  const router = useRouter();

  const [businessCards, setBusinessCards] = useState([]);

  const fetchBusinessCards = async () => {
    try {
      const response = await api.get('/business-card');
      if (response.length > 0) {
        setBusinessCards(response);
      }
    } catch (error) {
      console.error('Error fetching business cards:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/business-card?id=${id}`);
      if (response) {
        toast.success('Business card deleted successfully');
        setBusinessCards((prev) => prev.filter((card) => card.id !== id));
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete business card');
    }
  };

  const handleEdit = async (id) => {
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
          onView={(endpoint) => window.open(`/card/${endpoint}`, '_blank')}
        />
      </div>
    </div>
  );
}

const BusinessCardItem = ({
  name,
  email,
  phone,
  logo,
  id,
  endpoint,
  onDelete,
  onEdit,
  onView,
}) => (
  <div className='w-full bg-white rounded-xl shadow-md p-1 border'>
    <div className='flex flex-row items-center gap-1'>
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
    <div className='flex flex-row items-center justify-end mt-2 gap-1'>
      <button
        onClick={() => {
          onView(endpoint);
        }}
        type='button'
        className='focus:outline-none text-white bg-red-700 hover:bg-red-800  font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 '
      >
        View
      </button>

      <button
        onClick={() => {
          onDelete(id);
        }}
        type='button'
        className='focus:outline-none text-white bg-red-700 hover:bg-red-800  font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 '
      >
        Delete
      </button>
      <button
        onClick={() => onEdit(id)}
        type='button'
        className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800  font-small rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 '
      >
        Edit
      </button>
    </div>
  </div>
);

const BusinessCardList = ({ list = [], onDelete, onEdit, onView }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {list.map((contact, index) => (
        <BusinessCardItem
          key={index}
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
