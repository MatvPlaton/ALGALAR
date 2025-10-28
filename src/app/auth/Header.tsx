import React from 'react';
import logo from '../assets/MainPage/image7.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <div className=" absolute left-1/2 top-1/20 -translate-x-1/2 rounded-t-md bg-black text-white w-[70rem] 
    h-[6rem] overflow-x-hidden max-[1098px]:w-full">
      <div className="relative left-[38%] top-1/25 w-[27%] h-[96%] flex flex-row justify-center">
        <Image
          className="relative top-1/20 w-[27%] h-[85%] max-[1025px]:w-[8vw] max-[940px]:w-[20vw]"
          src={logo}
          alt=""
        />
        <div
          className="relative top-[-5%] left-1/20 flex flex-col justify-center"
        >
          <div className="relative w-1/10 top-[-5%] text-[2.2rem] font-inter font-extrabold text-center">
            
            ALGALAR
          </div>
          <div className="relative w-full top-[-15%]  text-[0.8rem] font-inter font-extrabold text-center">
            
            техника безопасного вождения
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
