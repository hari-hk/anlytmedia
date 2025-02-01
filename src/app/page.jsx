import Intro from '@/components/Intro';
import AutoSlider from '@/components/AutoSlider';
import OurExperience from '@/components/OurExperience';

export default function Home() {
  return (
    <>
      <div className=' p-2 bg-black fixed top-0 w-full z-10 '>
        <p className='text-white font-bold  text-center animate-pulse'>
          Website Upgrades in Progress
          <span className='hidden md:inline'>
            – Get Ready for an Amazing Experience!
          </span>
        </p>
      </div>
      <div className='absolute -z-10 hue-rotate-340 w-full flex justify-center mt-[5rem]'>
        <img src='/bg-header.svg' alt='anlyt media logo' />
      </div>
      <div className='min-h-screen  flex flex-col  items-center'>
        <Intro />
        <AutoSlider />
        <OurExperience />
      </div>
    </>
  );
}
