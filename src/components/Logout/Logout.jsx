'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Logout() {
  const [loading, setLoading] = useState(false);
  const handlelogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
  };
  return (
    <button
      disabled={loading}
      onClick={handlelogout}
      className='bg-zinc-500 text-white px-4 py-2 rounded hover:bg-zinc-600'
    >
      Logout
    </button>
  );
}
