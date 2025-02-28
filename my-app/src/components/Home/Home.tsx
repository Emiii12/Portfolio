import Image from 'next/image';
import React from 'react';
import ImageWebP from '../../../public/Image/fotocv.webp'
 
const Home = () => {
  return (
    <section className='w-full h-full py-24 '>
      <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center'>
        <div className='order-last lg:order-first lg:w-1/2 w-full h-full'>
          <h2 className='text-[22px] text-white font-semibold text-center'>
            Desarrollador Web <span className='text-lightSeaGreen'>Front</span>
            -
            <span className='text-lightSeaGreen'>End</span>
          </h2>
          <p>Hola, soy Emilio Pereira. Un apasionado de la programación en Buenos Aires, Argentina.</p>
          <div className='flex flex-col lg:flex-row'>
            <button>
              Proyectos
            </button>
            <button>
              Ver CV
            </button>
            <button>
              Contáctame
            </button>
          </div>
        </div>
        <div className='order-first lg:order-last lg:w-1/2 flex justify-center items-center'>
          <div className='p-1 rounded-full border-[2px] border-vibrantOrange '>
            <div className='w-auto h-auto lg:w-96 lg:h-96'>
              <Image src={ImageWebP} alt='foto ejemplo' className='w-auto h-auto lg:w-full lg:h-full rounded-full'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;