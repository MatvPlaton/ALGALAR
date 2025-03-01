import React from 'react';
import Link from 'next/link';

const RegistrationButton = () => {
  return (
    <Link href={'/auth/login'}>
     
      <button
        className="absolute bg-[#5A5CA8] w-[7rem] h-[2.5rem] 
    tracking-[0.1vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] rounded-[0.4rem] 
    font-[RobotoMedium] text-[white]  text-[0.9rem] top-[12%] left-[96%]
    hover:bg-[#46478b] active:translate-y-[-5%]"
      >
        
        СБРОСИТЬ
      </button>
    </Link>
  );
};

export default RegistrationButton;
