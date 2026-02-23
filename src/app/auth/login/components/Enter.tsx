'use client';
import React from 'react';



const Enter = () => {
  

  return (
    <button 
      className="absolute bg-[#5A5CA8] w-[4.5rem] h-[2.5rem] 
        tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] 
        rounded-[0.4rem] font-roboto font-medium text-[white] text-[0.9rem] bottom-1/5 left-[93%]
        hover:bg-[#46478b] active:translate-y-[-5%] max-[961px]:left-[24rem] max-[449px]:left-[1%] max-[449px]:bottom-1/20
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        type='submit'
    >
      ВХОД
    </button>
  );
};

export default Enter;