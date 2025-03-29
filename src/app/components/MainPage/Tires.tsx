import React from 'react';
import Background from '../../assets/MainPage/Background.svg';
import Image from 'next/image';

const Tires = () => {
  return (
    <div className="absolute left-0 top-[calc(55vh+101rem)] 
    max-[1281px]:top-[calc(55vh+130rem)]
    max-[1098px]:top-[calc(55vh+150rem)]
    max-[961px]:top-[calc(55vh+180rem)]
    max-[769px]:top-[calc(55vh+210rem)]
    max-[481px]:top-[calc(55vh+290rem)]
    max-[385px]:top-[calc(55vh+298rem)]
    h-[75vh] w-full">
      <Image className="w-full h-full" src={Background} alt="" />
    </div>
  );
};
export default Tires;
