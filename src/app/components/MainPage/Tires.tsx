import React from 'react';
import Background from '../../assets/MainPage/Background.svg';
import Image from 'next/image';

const Tires = () => {
  return (
    <div className="absolute left-0 top-[143rem] h-[46rem] w-full">
      <Image className="w-full h-full" src={Background} alt="" />
    </div>
  );
};
export default Tires;
