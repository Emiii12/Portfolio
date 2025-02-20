"use client"
import React from 'react';
import { NavbarItems } from './NavbarItems';
import { SelectLanguage } from '../ui/Input/SelectLanguage';

export const Navbar = () => {

  return (
    <div className='fixed w-full py-6 bg-coalBlue px-40'>
      <header className='flex justify-between items-center'>
        <h1 className='text-white text-base'>
          Emilio Pereira<span className='text-lightSeaGreen'>.</span>	
        </h1>
        <div>
          <NavbarItems />
        </div>
        <div>
          <SelectLanguage />
        </div>
      </header>
    </div>
  );
}
