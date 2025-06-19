'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AuthListener({ onAuthChange = () => {} }) {
  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        onAuthChange(event, session);
      }
    );

    supabase.auth.startAutoRefresh();

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  return null;
}
