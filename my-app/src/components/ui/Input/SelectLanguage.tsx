import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

export const SelectLanguage = () => {
	const [language, setLanguage] = useState('es');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative text-base flex items-center'>
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          setIsOpen(false);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className='bg-coalBlue text-white rounded appearance-none px-2 py-1 pr-7'
      >
        <option value='es'>Español</option>
        <option value='en'>Inglés</option>
      </select>
      <ChevronDownIcon
        className={`w-5 h-5 text-lightSeaGreen absolute right-1 pointer-events-none transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </div>
  );
}