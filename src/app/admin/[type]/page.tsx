'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '@/lib/fetcher';
import BusinessCardForm from '@/views/Admin/BusinessCardForm';

const baseData = {
  name: '',
  position: '',
  email: '',
  phones: ['', ''],
  address: '',
  org: '',
  logo: '',
  bgColor: 'from-slate-600 to-slate-800',
  bgLogo: 'bg-blue-200',
  textColor: 'text-white',
  cardColor: 'bg-blue-600',
  buttonColor: 'bg-slate-500',
  socialLinks: {
    instagram: '',
    facebook: '',
    linkedin: '',
    twitter: '',
  },
  enableContactButton: false,
  enableSocialLinks: false,
};

function AddBusinessCard() {
  const params = useParams();
  const router = useRouter();
  const isEditMode = params.type !== 'add';

  const [initialData, setInitialData] = useState(null);

  const handleSubmit = async (formData: unknown) => {
    api[isEditMode ? 'patch' : 'post']('/business-card', formData)
      .then(() => {
        toast.success(
          isEditMode
            ? 'Business card updated successfully'
            : 'Business card added successfully'
        );
        router.push('/admin');
      })
      .catch((error) => {
        toast.error(error.message || 'Failed to add business card');
        console.error('Error adding business card:', error);
      });
  };

  useEffect(() => {
    if (isEditMode) {
      api
        .get(`/business-card?id=${params.type}`)
        .then((response) => {
          setInitialData(response);
        })
        .catch((error) => {
          console.error('Error fetching business card:', error);
        });
    }
  }, [isEditMode, params.type]);

  if (isEditMode && !initialData) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <BusinessCardForm
      onSubmit={handleSubmit}
      editMode={isEditMode}
      initialData={initialData ?? baseData}
    />
  );
}

export default AddBusinessCard;
