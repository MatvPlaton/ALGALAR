import React from 'react';
import Link from 'next/link';

const RegistrationButton = () => {
  return (
    <Link className="absolute flex items-center justify-center bottom-1/5  left-7/10
    max-[961px]:left-[12rem] bg-white w-[10rem] h-[2.5rem] 
    tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] rounded-[0.4rem] 
    font-roboto font-medium text-[#34373b]  text-[0.9rem] 
    hover:bg-[#c4c2c3] active:translate-y-[-5%]" href={'/auth/registration'}>      
        РЕГИСТРАЦИЯ
    </Link>
  );
};

export default RegistrationButton;
