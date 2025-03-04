import Home from '@/components/Home/Home';
import React, { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = () => {
  return (
    <div className='w-full px-6 2xl:px-52 xl:px-36 lg:px-24'>
      <main className="w-full flex justify-center items-center">
        <Home />
      </main>
    </div>
  );
};

export default PageWrapper;