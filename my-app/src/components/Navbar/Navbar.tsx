"use client"
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useSidebar } from '@/context/useSidebar';
import Sidebar from './NavbarComponents/Sidebar';
import { CommonTexts } from '../ui/Common/CommonTexts';
import { NavbarItems } from './NavbarComponents/NavItems';
import { SelectLanguage } from './NavbarComponents/SelectLaguage';

const Navbar = () => {
  const {isSideBarActive, toggleSidebar } = useSidebar();

  return (
    <>
      <div className={`fixed w-full h-[70px] flex items-center bg-coalBlue z-[1000] border-b-[1px] border-silverGray`}
      >
        <header className='relative w-full flex justify-center lg:justify-between items-center px-6 2xl:px-52 xl:px-36 lg:px-24'>
          <button 
            className='flex left-6 p-[6px] absolute cursor-pointer rounded-full hover:bg-silverGray hover:bg-opacity-20 transition-colors duration-150 lg:hidden' 
            onClick={toggleSidebar}
          >
            <Bars3Icon className='text-lightSeaGreen w-5 h-5 sm:w-6 sm:h-6 text-start' />
          </button>
          <CommonTexts className='text-[14px] sm:text-lg lg:text-lg xl:text-xl' />
          <div className='max-lg:hidden'>
            <NavbarItems />
          </div>
          <div className='max-lg:hidden'>
            <SelectLanguage />
          </div>
        </header>
      </div>

      <Sidebar />      
      {isSideBarActive && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-[1005] lg:hidden max-smx:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;