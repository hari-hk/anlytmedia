'use client';

import api from '@/lib/fetcher';
import { memo } from 'react';

function LoginPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      if (response.error) {
        throw new Error(response.error.message || 'Login failed');
      }
      console.log('Login successful:', response);
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div class='w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form class='space-y-6' onSubmit={handleSubmit}>
          <h5 class='text-xl text-center  font-bold text-gray-900 dark:text-white'>
            Sign in to Anlytmedia admin
          </h5>
          <div>
            <label
              for='email'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              E-mail
            </label>
            <input
              type='email'
              name='email'
              id='email'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              for='password'
              class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='••••••••'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              required
            />
          </div>
          <button
            type='submit'
            class='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
}

export default memo(LoginPage);
