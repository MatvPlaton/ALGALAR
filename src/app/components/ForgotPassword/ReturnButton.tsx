import React from 'react';
import Link from 'next/link';

const Enter = () => {
  return (
    <Link href={'/login'} className="relative top-[12%] left-[88%]">
      {' '}
      <button
        className="w-[5rem] h-[2.5rem] 
    border-none rounded-[0.4vw] text-[#34373b] text-[0.9rem] bg-white 
    font-[RobotoMedium] tracking-[0.1vw]
    hover:bg-[#c4c2c3] active:translate-y-[-5%] 
    shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)]"
      >
        {' '}
        НАЗАД{' '}
      </button>{' '}
    </Link>
  );
};

export default Enter;
