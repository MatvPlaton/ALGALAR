import React from 'react';
import Background from '../../assets/MainPage/new.png';
import Image from 'next/image';
import { montserrat } from '@/app/fonts/Montserrat';
import { roboto } from '@/app/fonts/Roboto';
const Truck = () => {
  return (
    <div className="absolute w-full top-[10rem] h-[55vh] left-0 z-10 bg-[#383838]">
      <Image
        className="relative left-[0.02%] w-full h-full"
        src={Background}
        alt=""
      />
      <div className="absolute bg-black/90 top-0 w-1/2 flex flex-col  h-full z-100 
      max-[1098px]:bg-black 
      max-[1098px]:top-[55vh] max-[1098px]:w-full max-[1098px]:flex-row   max-[1098px]:h-[20rem]
      max-[481px]:flex-col max-[481px]:h-[24rem]">
        <div
          className={`relative text-white font-bold text-left left-[10%] w-[90%] h-auto top-[12%] 
          text-[2.5rem] ${montserrat.className}
          max-[1098px]:left-1/20  max-[1098px]:w-2/5 
          max-[481px]:text-center max-[481px]:w-auto  max-[481px]:left-0`}
        >
          УНИКАЛЬНАЯ <br /> ПЛАТФОРМА ALGALAR
        </div>
        <div
          className={`relative text-[#C5C5C5] text-left font-regular
          left-[10%] top-[20%] w-[30vw] text-[1.4rem] ${roboto.className} line-height-[2rem]
          max-[1098px]:left-3/20 max-[1098px]:top-[12%] max-[1098px]:w-2/5 
          max-[641px]:left-7/40 
          max-[481px]:text-center max-[481px]:w-auto max-[481px]:left-0`}
        >
          высокая эффективность работы и своевременное <br />
          реагирование на все изменения технических показателей
        </div>
      </div>
    </div>
  );
};
export default Truck;
