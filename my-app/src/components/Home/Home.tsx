import React from 'react'
 
const Home = () => {
  return (
    <section className="w-full h-full py-24 grid grid-cols-2 grid-rows-[3fr_1fr] gap-4">
      <div className="bg-blue-500"></div>
      <div className="flex flex-col gap-4">
				<div className='w-full h-full bg-yellow-500'>

				</div>
				<div className='w-full h-full bg-yellow-500'>

				</div>
				<div className='w-full h-full bg-yellow-500'>

				</div>
			</div>
      <div className="bg-green-500 col-span-2"></div>
    </section>
  );
};

export default Home;