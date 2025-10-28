import React from 'react';
import Link from 'next/link';

const ReturnButton = () => {
  return (
    <Link href={'/auth/login'} className="relative flex items-center justify-center w-[8rem] h-[2.5rem] 
    border-none rounded-[0.4rem] text-[#34373b] text-[0.9rem] bg-white 
    font-roboto font-medium tracking-[0.1vw]
    hover:bg-[#c4c2c3] active:translate-y-[-5%] 
    shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)]">
        ВЕРНУТЬСЯ
    </Link>
  );
};

export default ReturnButton;
