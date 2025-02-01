import Intro from '@/components/Intro';

export default function ContactPage() {
  return (
    <>
      <div className='min-h-screen  flex flex-col  items-center'>
        <Intro disableDescription={true} hideContactButton={true} />
        <div className='p-2 mt-3'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLScB5h5IL1J4rQjwksstZ8dZih4MLwCllfj2w3pTacJ-3dNGew/viewform?embedded=true'
            width='640'
            height='956'
            frameBorder='0'
            marginHeight='0'
            marginWidth='0'
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Intro />
    </>
  );
}
