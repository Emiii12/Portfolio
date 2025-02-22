import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { CustomSelect } from '@/components/ui/Input/CustomSelect';

const SelectLanguage = () => {
  const [language, setLanguage] = useState('es');

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <CustomSelect
      value={language}
      onChange={handleLanguageChange}
      options={[
        { value: 'es', label: 'Español' },
        { value: 'en', label: 'Inglés' },
      ]}
      icon={<ChevronDownIcon className="w-5 h-5 text-lightSeaGreen" />}
    />
  );
};

export default SelectLanguage;