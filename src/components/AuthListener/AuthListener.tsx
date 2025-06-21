'use client';

import { useEffect } from 'react';
import { Session, AuthChangeEvent, Subscription } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';

interface IAuthListenerProps {
  onAuthChange?: (event: AuthChangeEvent, session: Session | null) => void;
}

export default function AuthListener({
  onAuthChange = () => {},
}: IAuthListenerProps) {
  useEffect(() => {
    const {
      data,
    }: {
      data: { subscription: Subscription };
    } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        onAuthChange(event, session);
      }
    );

    supabase.auth.startAutoRefresh();

    return () => {
      data.subscription?.unsubscribe();
    };
  }, []);

  return null;
}
