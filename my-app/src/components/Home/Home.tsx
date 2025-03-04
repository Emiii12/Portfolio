import Image from 'next/image';
import React from 'react';
import ImgFoto from '../../../public/image/fotocv.webp';
 
const Home = () => {
  return (
    <section className='w-full h-full pt-32 xs:pt-28 '>
      <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center gap-12'>
        <div className='order-last lg:order-first w-full lg:w-1/2 space-y-8'>
          <h2 className='text-[26px] text-white font-bold text-center'>
            Desarrollador Web <span className='text-lightSeaGreen'>Front</span>
            -
            <span className='text-lightSeaGreen'>End</span>
          </h2>
          <p className='text-center text-base font-semibold'>
            <span className='text-white'>Emilio Pereira</span> 
            <span className='text-lightSeaGreen'> | </span> 
            <span className='text-white'>Buenos Aires, Argentina. </span>
          </p>

          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
            <button className='col-span-2 sm:col-span-1 py-2 w-full bg-vibrantOrange'>Proyectos</button>
            <button className='col-span-1 py-2 w-full bg-vibrantOrange'>Ver CV</button>
            <button className='col-span-1 py-2 w-full bg-vibrantOrange'>Contáctame</button>
          </div>
        </div>
        <div className='order-first lg:order-last lg:w-1/2 flex justify-center items-center'>
          <div className='p-1 rounded-full border-[2px] border-vibrantOrange '>
            <div className='w-60 h-60 lg:w-96 lg:h-96'>
              <Image src={ImgFoto} alt='foto ejemplo' className='lg:w-full lg:h-full rounded-full'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;