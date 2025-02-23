"use client"
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSidebar } from '@/context/useSidebar';
import Sidebar from './NavbarComponents/Sidebar';
import { CommonTexts } from '../ui/Common/CommonTexts';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <div className={`fixed w-full py-6 bg-coalBlue z-[1000] border-b-[1px] border-silverGray`}
      >
        <header className='relative w-full flex justify-center items-center px-4'>
          <button 
            className='flex left-4 p-[6px] absolute cursor-pointer rounded-full hover:bg-silverGray hover:bg-opacity-20 transition-colors duration-150' 
            onClick={toggleSidebar}
          >
            <Bars3Icon className='text-lightSeaGreen w-6 h-6 text-start' />
          </button>
          <CommonTexts className='text-base' />
        </header>
      </div>

      <Sidebar />
      
    </>
  );
};

export default Navbar;