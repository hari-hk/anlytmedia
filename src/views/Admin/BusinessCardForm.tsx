'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type SocialLinks = {
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  [key: string]: string;
};

type BusinessCardFormData = {
  name?: string;
  endpoint?: string;
  position?: string;
  logo?: string;
  org?: string;
  email?: string;
  address?: string;
  address_link?: string;
  phones: string[];
  socialLinks: SocialLinks;
  bgColor?: string;
  bgLogo?: string;
  textColor?: string;
  cardColor?: string;
  buttonColor?: string;
  enableContactButton?: boolean;
  enableSocialLinks?: boolean;
  [key: string]: any;
};

type BusinessCardFormProps = {
  initialData?: BusinessCardFormData;
  onSubmit?: (data: BusinessCardFormData) => void;
  editMode?: boolean;
};

type Errors = {
  [key: string]: string;
};

const BusinessCardForm = ({
  initialData = {
    phones: ['', ''],
    socialLinks: {
      instagram: '',
      facebook: '',
      linkedin: '',
      twitter: '',
    },
  },
  onSubmit,
  editMode = false,
}: BusinessCardFormProps) => {
  const [formData, setFormData] = useState<BusinessCardFormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});

  const updateField = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const updatePhone = (index: number, value: string) => {
    const newPhones = [...formData.phones];
    newPhones[index] = value;
    setFormData({ ...formData, phones: newPhones });
  };

  const updateSocial = (platform: string, value: string) => {
    setFormData({
      ...formData,
      socialLinks: { ...formData.socialLinks, [platform]: value },
    });
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.name?.trim()) newErrors.name = 'Name is required';
    if (!formData.endpoint?.trim()) newErrors.endpoint = 'URL path is required';
    else if (!/^\/?[\w-]+$/.test(formData.endpoint))
      newErrors.endpoint = 'Invalid URL path format';

    const urlFields = ['address_link'];
    urlFields.forEach((field) => {
      const val = formData[field];
      if (val?.trim() && !/^https?:\/\/[\w.-]+/.test(val)) {
        newErrors[field] = `${field} must be a valid URL`;
      }
    });

    if (formData.enableSocialLinks) {
      Object.entries(formData.socialLinks).forEach(([platform, url]) => {
        if (url && !/^https?:\/\/[\w.-]+/.test(url)) {
          newErrors[platform] = `${platform} URL is invalid`;
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      onSubmit && onSubmit(formData);
    }
  };

  const inputClass =
    'w-full border p-2 rounded bg-gray-700 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white';

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-xl flex gap-4 flex-col mx-auto p-6 border-gray-100 bg-grey-400 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mt-2'
    >
      <h2 className='text-xl font-bold mb-2'>
        {editMode ? 'Edit ' : 'Add '} Business Card
      </h2>

      {/* Text Inputs */}
      {([
        { label: 'Full Name', field: 'name', type: 'text' },
        { label: 'URL Path', field: 'endpoint', type: 'text' },
        { label: 'Position', field: 'position', type: 'text' },
        { label: 'Logo', field: 'logo', type: 'text' },
        { label: 'Organization', field: 'org', type: 'text' },
        { label: 'Email', field: 'email', type: 'email' },
      ] as const).map(({ label, field, type }) => (
        <div key={field}>
          <label className='block mb-1'>{label}</label>
          <input
            className={inputClass}
            type={type}
            value={formData[field] || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateField(field, e.target.value)
            }
          />
          {errors[field] && (
            <p className='text-red-500 text-sm'>{errors[field]}</p>
          )}
        </div>
      ))}

      {/* Address */}
      <div>
        <label className='block mb-1'>Address</label>
        <textarea
          className={inputClass}
          value={formData.address || ''}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            updateField('address', e.target.value)
          }
        />
        {errors.address && (
          <p className='text-red-500 text-sm'>{errors.address}</p>
        )}
      </div>

      {/* Address Link */}
      <div>
        <label className='block mb-1'>Google Map Link</label>
        <input
          className={inputClass}
          type='url'
          value={formData.address_link || ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updateField('address_link', e.target.value)
          }
        />
        {errors.address_link && (
          <p className='text-red-500 text-sm'>{errors.address_link}</p>
        )}
      </div>

      {/* Phone Numbers */}
      <div>
        <label className='block font-medium mb-1'>Phone Numbers</label>
        {formData.phones?.map((phone, index) => (
          <div key={index} className='mb-2'>
            <label className='block text-sm mb-1'>Phone {index + 1}</label>
            <input
              className={inputClass}
              type='text'
              value={phone}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePhone(index, e.target.value)
              }
            />
            {errors[`phone_${index}`] && (
              <p className='text-red-500 text-sm'>{errors[`phone_${index}`]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Theme Fields */}
      {(['bgColor', 'bgLogo', 'textColor', 'cardColor', 'buttonColor'] as const).map(
        (field) => (
          <div key={field}>
            <label className='block mb-1 capitalize'>
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              className={inputClass}
              type='text'
              value={formData[field] || ''}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateField(field, e.target.value)
              }
            />
          </div>
        )
      )}

      {/* Toggles */}
      <div className='flex items-center space-x-4'>
        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={!!formData.enableContactButton}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateField('enableContactButton', e.target.checked)
            }
          />
          <span>Enable Contact Button</span>
        </label>

        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={!!formData.enableSocialLinks}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateField('enableSocialLinks', e.target.checked)
            }
          />
          <span>Enable Social Links</span>
        </label>
      </div>

      {/* Social Links */}
      {formData.enableSocialLinks && (
        <div>
          <label className='block font-medium mb-1'>Social Links</label>
          {Object.entries(formData.socialLinks).map(([platform, url]) => (
            <div key={platform}>
              <label className='block text-sm mb-1 capitalize'>
                {platform}
              </label>
              <input
                className={inputClass + ' mb-2'}
                type='url'
                value={url}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateSocial(platform, e.target.value)
                }
              />
              {errors[platform] && (
                <p className='text-red-500 text-sm'>{errors[platform]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        type='submit'
        className='w-full py-2 px-4 rounded text-white bg-slate-600 hover:bg-slate-700 transition'
      >
        Save
      </button>
    </form>
  );
};

export default BusinessCardForm;
