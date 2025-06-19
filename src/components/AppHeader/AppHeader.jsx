import Image from 'next/image';
import Link from 'next/link';
import Logout from '../Logout/Logout';

export default function AppHeader({ isAuthenticated }) {
  return (
    <header className='mb-4 w-full flex flex-row items-center justify-between bg-gray-800 gap-2 p-4 rounded-lg shadow-lg'>
      <Link href='/admin'>
        <Image
          src='/app-bar-logo.svg'
          alt='Logo'
          width={50}
          height={50}
          className='rounded-full'
        />
      </Link>
      {isAuthenticated && (
        <div className='flex gap-2'>
          <Link
            href='/admin/add'
            className='bg-zinc-300 text-black px-4 py-2 rounded hover:bg-zinc-400'
          >
            Add card
          </Link>
          <Logout />
        </div>
      )}
    </header>
  );
}
