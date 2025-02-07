import Image from 'next/image';

export default function Footer() {
  return (
    <section
      id='footer'
      className='bg-[url(/footer-grid.svg)] bg-contains w-full bg-no-repeat p-2'
    >
      <div className='container m-auto'>
        <div className='grid grid-cols-3'>
          <div className='pt-5'>
            <div className='flex flex-col  px-4 items-start justify-cente '>
              <Image
                src='/app-bar-logo.svg'
                alt='anlyt media logo'
                width={180}
                height={38}
                priority
                className='pointer-events-none'
              />

              <h1 className='text-2xl md:text-3xl text-left font-bold'>
                Book a Call For Free Consultation
              </h1>
              <p className='text-base md:text-xl text-grey-900 text-left mt-2'>
                Experienced team delivering exceptional digital solutions
                tailored to your brand.
              </p>

              <p className='text-base md:text-xl mt-6 font-semibold'>
                Our Social Handels
              </p>

              <div className='flex gap-2 py-2'>
                <a
                  href='https://www.instagram.com/anlytmedia/'
                  className='grayscale hover:grayscale-0'
                >
                  <Image
                    src='/social-instagram.svg'
                    alt='instagram'
                    width={40}
                    height={40}
                    priority
                    className='pointer-events-none'
                  />
                </a>
                <a
                  href='https://www.facebook.com/anlytmedia'
                  className='grayscale hover:grayscale-0'
                >
                  <Image
                    src='/social-facebook.svg'
                    alt='facebook'
                    width={40}
                    height={40}
                    priority
                    className='pointer-events-none'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/company/anlytmedia'
                  className='grayscale hover:grayscale-0'
                >
                  <Image
                    src='/social-linkedin.svg'
                    alt='linkedin'
                    width={40}
                    height={40}
                    priority
                    className='pointer-events-none'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='col-span-2'></div>
        </div>
      </div>
    </section>
  );
}
