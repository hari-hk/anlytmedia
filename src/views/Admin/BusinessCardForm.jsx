'use client';

import { useState } from 'react';

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
}) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const updatePhone = (index, value) => {
    const newPhones = [...formData.phones];
    newPhones[index] = value;
    setFormData({ ...formData, phones: newPhones });
  };

  const updateSocial = (platform, value) => {
    setFormData({
      ...formData,
      socialLinks: { ...formData.socialLinks, [platform]: value },
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name?.trim()) newErrors.name = 'Name is required';
    if (!formData.endpoint?.trim()) newErrors.endpoint = 'URL path is required';
    else if (!/^\/?[\w-]+$/.test(formData.endpoint))
      newErrors.endpoint = 'Invalid URL path format';
    // if (!formData.position?.trim()) newErrors.position = 'Position is required';
    // if (!formData.org?.trim()) newErrors.org = 'Organization is required';

    // if (!formData.email?.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    //   newErrors.email = 'Invalid email format';
    // }

    // if (!formData.address?.trim()) newErrors.address = 'Address is required';

    // formData.phones.forEach((phone, i) => {
    //   if (!/^\+?\d{10,15}$/.test(phone)) {
    //     newErrors[`phone_${i}`] = `Invalid phone number ${i + 1}`;
    //   }
    // });

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

  const handleSubmit = (e) => {
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
      {[
        { label: 'Full Name', field: 'name', type: 'text' },
        { label: 'URL Path', field: 'endpoint', type: 'text' },
        { label: 'Position', field: 'position', type: 'text' },
        { label: 'Logo', field: 'logo', type: 'text' },
        { label: 'Organization', field: 'org', type: 'text' },
        { label: 'Email', field: 'email', type: 'email' },
      ].map(({ label, field, type }) => (
        <div key={field}>
          <label className='block mb-1'>{label}</label>
          <input
            className={inputClass}
            type={type}
            value={formData[field] || ''}
            onChange={(e) => updateField(field, e.target.value)}
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
          value={formData.address}
          onChange={(e) => updateField('address', e.target.value)}
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
          onChange={(e) => updateField('address_link', e.target.value)}
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
              onChange={(e) => updatePhone(index, e.target.value)}
            />
            {errors[`phone_${index}`] && (
              <p className='text-red-500 text-sm'>{errors[`phone_${index}`]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Theme Fields */}
      {['bgColor', 'bgLogo', 'textColor', 'cardColor', 'buttonColor'].map(
        (field) => (
          <div key={field}>
            <label className='block mb-1 capitalize'>
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              className={inputClass}
              type='text'
              value={formData[field] || ''}
              onChange={(e) => updateField(field, e.target.value)}
            />
          </div>
        )
      )}

      {/* Toggles */}
      <div className='flex items-center space-x-4'>
        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={formData.enableContactButton}
            onChange={(e) =>
              updateField('enableContactButton', e.target.checked)
            }
          />
          <span>Enable Contact Button</span>
        </label>

        <label className='flex items-center space-x-2'>
          <input
            type='checkbox'
            checked={formData.enableSocialLinks}
            onChange={(e) => updateField('enableSocialLinks', e.target.checked)}
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
                onChange={(e) => updateSocial(platform, e.target.value)}
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
