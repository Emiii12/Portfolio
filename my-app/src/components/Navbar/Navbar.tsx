"use client"
import React from 'react';
import NavbarItems from './NavbarComponents/NavbarItems';
import SelectLanguage from './NavbarComponents/SelectLaguage';

const Navbar = () => {

  return (
    <div className='fixed w-full py-6 bg-coalBlue px-60 z-[1000] border-b-[1px] border-silverGray'>
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
};

export default Navbar;