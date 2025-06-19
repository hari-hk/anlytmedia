'use client';
import { useState } from 'react';
import AppHeader from '@/components/AppHeader';
import AuthListener from '@/components/AuthListener/AuthListener';
import Login from '@/views/Login/Login';

export default function AdminLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const handleAuthChange = (event, session) => {
    if (event === 'SIGNED_IN') {
      setIsLoggedIn(true);
    }
    if (event === 'SIGNED_OUT') {
      setIsLoggedIn(false);
    }
    if (event === 'TOKEN_REFRESHED') {
    }
    if (event === 'INITIAL_SESSION') {
      if (session) {
        setIsLoggedIn(true);
      }
    }
    // You can add additional logic here if needed
  };

  return (
    <div className='flex flex-col items-center justify-start min-h-screen bg-gray-900 p-2'>
      <div className='w-full max-w-4xl'>
        <AuthListener onAuthChange={handleAuthChange} />
        {typeof isLoggedIn !== 'object' && (
          <>
            <AppHeader isAuthenticated={isLoggedIn} />
            {!isLoggedIn && <Login />}
            {isLoggedIn && children}
          </>
        )}
      </div>
    </div>
  );
}
