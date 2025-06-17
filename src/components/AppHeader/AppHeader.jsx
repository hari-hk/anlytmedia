export default function AppHeader() {
  return (
    <header className='mb-4 w-full flex flex-row items-center justify-between bg-gray-800 gap-2 p-4 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold'>Anlytmedia</h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        Logout
      </button>
    </header>
  );
}
