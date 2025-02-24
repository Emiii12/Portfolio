import React from 'react';

interface CommonTextsProps {
  className?: string; // Prop opcional para recibir clases extra
}

export const CommonTexts: React.FC<CommonTextsProps> = ({ className }) => {
  return (
    <p className={`text-white text-sm font-semibold ${className}`}>
      Emilio<span className='text-lightSeaGreen'>.</span>
    </p>
  );
};
