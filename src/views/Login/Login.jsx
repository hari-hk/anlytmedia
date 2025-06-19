'use client';

import api from '@/lib/fetcher';
import { supabase } from '@/lib/supabaseClient';
import { memo } from 'react';

function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const { data, error } = await api.post('/login', {
        email,
        password,
      });
      if (error) {
        throw new Error(response.error.message || 'Login failed');
      }

      if (data?.session) {
        await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        });
      }

      console.log('Login successful:', data);
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <h5 className='text-xl text-center  font-bold text-gray-900 dark:text-white'>
            Sign in to Anlytmedia admin
          </h5>
          <div>
            <label
              for='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              E-mail
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              for='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='••••••••'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(LoginPage);
