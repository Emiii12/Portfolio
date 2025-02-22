"use client"
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
  label?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  icon,
  className = '',
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {label && <label className="block mb-2">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className='bg-coalBlue text-white rounded appearance-none px-2 py-1 pr-7 cursor-pointer'
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {icon && (
        <div
          className={`w-5 h-5 text-lightSeaGreen absolute right-1 top-1/2 transform -translate-y-1/2 transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {icon}
        </div>
      )}
    </div>
  );
};
