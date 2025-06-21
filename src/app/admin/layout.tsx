'use client';

import { useState, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import AppHeader from '@/components/AppHeader';
import AuthListener from '@/components/AuthListener/AuthListener';
import Login from '@/views/Login/Login';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<null | boolean>(null);

  const handleAuthChange = (
    event: AuthChangeEvent,
    session: Session | null
  ) => {
    switch (event) {
      case 'SIGNED_IN':
        setIsLoggedIn(true);
        break;
      case 'SIGNED_OUT':
        setIsLoggedIn(false);
        break;
      case 'INITIAL_SESSION':
        setIsLoggedIn(!!session);
        break;
      case 'TOKEN_REFRESHED':
      case 'USER_UPDATED':
      case 'PASSWORD_RECOVERY':
        // Optional: handle these cases
        break;
    }
  };

  return (
    <div className='flex flex-col items-center justify-start min-h-screen bg-gray-900 p-2'>
      <div className='w-full max-w-5xl'>
        <AuthListener onAuthChange={handleAuthChange} />
        <Toaster position='bottom-center' reverseOrder={true} />
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
