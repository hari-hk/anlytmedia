'use client';

import { useState } from 'react';

const initialData = {
  name: 'Ananda Sayanan',
  position: 'Creative Director at Anlyt Media',
  org: 'Anlyt Media',
  email: 'hello@anlytmedia.in',
  phones: ['+917092828370', '+918428524861'],
  address: '18/16/3, Elavuvilai Jn, Marthandam, TN 629191, India',
  bgColor: 'from-slate-600 to-slate-800',
  bgLogo: 'bg-slate-500',
  textColor: 'text-white',
  cardColor: 'bg-green',
  buttonColor: 'bg-slate-500',
  enableContactButton: true,
  enableSocialLinks: false,
  socialLinks: {
    instagram: 'https://www.instagram.com/anlytmedia',
    facebook: 'https://www.facebook.com/anlytmedia',
    linkedin: 'https://www.linkedin.com/company/anlytmedia',
    twitter: 'https://www.twitter.com/anlytmedia',
  },
};

const BusinessCardForm = () => {
  const [formData, setFormData] = useState(initialData);

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

  return (
    <form className='max-w-xl mx-auto p-6 bg-white rounded-lg shadow space-y-4 text-gray-800 mt-2'>
      <h2 className='text-xl font-bold'>Edit Business Card</h2>

      <div>
        <label className="block mb-1">Full Name</label>
        <input
          className='w-full border p-2 rounded'
          type='text'
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1">Position</label>
        <input
          className='w-full border p-2 rounded'
          type='text'
          value={formData.position}
          onChange={(e) => updateField('position', e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1">Organization</label>
        <input
          className='w-full border p-2 rounded'
          type='text'
          value={formData.org}
          onChange={(e) => updateField('org', e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          className='w-full border p-2 rounded'
          type='email'
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1">Address</label>
        <textarea
          className='w-full border p-2 rounded'
          value={formData.address}
          onChange={(e) => updateField('address', e.target.value)}
        />
      </div>

      <div>
        <label className='block font-medium mb-1'>Phone Numbers</label>
        {formData.phones.map((phone, index) => (
          <div key={index}>
            <label className="block text-sm mb-1">Phone {index + 1}</label>
            <input
              className='w-full border p-2 rounded mb-2'
              type='text'
              value={phone}
              onChange={(e) => updatePhone(index, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <label className="block mb-1">Background Gradient</label>
          <input
            className='border p-2 rounded w-full'
            type='text'
            value={formData.bgColor}
            onChange={(e) => updateField('bgColor', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Logo Background</label>
          <input
            className='border p-2 rounded w-full'
            type='text'
            value={formData.bgLogo}
            onChange={(e) => updateField('bgLogo', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Text Color</label>
          <input
            className='border p-2 rounded w-full'
            type='text'
            value={formData.textColor}
            onChange={(e) => updateField('textColor', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Card Color</label>
          <input
            className='border p-2 rounded w-full'
            type='text'
            value={formData.cardColor}
            onChange={(e) => updateField('cardColor', e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-1">Button Color</label>
          <input
            className='border p-2 rounded w-full'
            type='text'
            value={formData.buttonColor}
            onChange={(e) => updateField('buttonColor', e.target.value)}
          />
        </div>
      </div>

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

      {formData.enableSocialLinks && (
        <div>
          <label className='block font-medium mb-1'>Social Links</label>
          {Object.entries(formData.socialLinks).map(([platform, link]) => (
            <div key={platform}>
              <label className="block text-sm mb-1 capitalize">
                {platform}
              </label>
              <input
                className='w-full border p-2 rounded mb-2'
                type='url'
                value={link}
                onChange={(e) => updateSocial(platform, e.target.value)}
              />
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
