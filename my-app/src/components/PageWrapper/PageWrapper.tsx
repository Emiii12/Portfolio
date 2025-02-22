import Home from '@/components/Home/Home';
import React, { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = () => {
  return (
    <div className='w-full px-60 max-lg:px-20'>
      <main className="w-full h-screen flex justify-center items-center">
        <Home />
      </main>
    </div>
  );
};

export default PageWrapper;