import AppHeader from '@/components/AppHeader';
import { supabase } from '@/lib/supabaseClient';
import Login from '@/views/Login/Login';

export default async function AdminLayout({ children }) {
  const { data } = await supabase.auth.getSession();
  return (
    <div className='flex flex-col items-center justify-start min-h-screen bg-gray-900 p-2'>
      <div className='w-full max-w-4xl'>
        <AppHeader />
        {!data.session && <Login />}
        {data.session && children}
      </div>
    </div>
  );
}
