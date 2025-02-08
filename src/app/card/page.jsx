import Image from 'next/image';

export default function Card() {
  //   return (
  //     <div className='flex flex-col items-center justify-center p-2 w-full'>
  //         <div className="container flex flex-col items-center justify-center">

  //         </div>
  //     </div>
  //   );

  return (
    <div className='min-h-screen  flex items-center justify-center p-4'>
      <div className='w-[350px] shadow-xl border border-gray-200 bg-white rounded-lg'>
        <div className='p-6'>
          <div className='flex flex-col items-center text-center relative'>
            <div className='absolute w-24 h-24 bg-blue-700 rounded-full mb-4 -top-16'>
              <Image
                src='/app-bar-logo.svg'
                alt='avatar'
                width={96}
                height={96}
                className='rounded-full'
              />
            </div>
            <h2 className='text-2xl font-semibold text-blue-600 mt-[3rem]'>
              Ananda Sayanan
            </h2>
            <p className='text-gray-600'>Creative Director at Anlyt Media</p>

            <div className='w-full h-px bg-gray-300 my-4'></div>

            <ul className='space-y-2 text-sm text-gray-600'>
              <li className='flex items-center gap-2'>
                <svg
                  className='w-4 h-4 text-blue-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z'
                  />
                </svg>
                anandasayanan@anlytmedia.in
              </li>
              <li className='flex items-center gap-2'>
                <svg
                  className='w-4 h-4 text-blue-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 10l9-7 9 7v11a4 4 0 01-4 4H7a4 4 0 01-4-4V10z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 21h6'
                  />
                </svg>
                +91 842 852 4861
              </li>
              <li className='flex items-center gap-2'>
                <svg
                  className='w-4 h-4 text-blue-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657A8 8 0 119.343 8.343M21 21l-3-3'
                  />
                </svg>
                123 Main Street, Springfield
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
