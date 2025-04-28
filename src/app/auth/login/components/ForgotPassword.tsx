import React from 'react';
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <Link className="absolute bottom-1/5 left-[1%]" href={'/auth/forgotPassword'}>
      <button
        className="bg-white w-[10rem] h-[2.5rem] 
    tracking-[0.07vw] border-none shadow-[0_0.5vw_0.5vw_0_rgba(0,0,0,0.2),0_0.1vw_0.5vw_0_rgba(0,0,0,0.2)] rounded-[0.4rem] 
    font-[RobotoMedium] text-[#34373b]  text-[0.9rem] 
    hover:bg-[#c4c2c3] active:translate-y-[-5%]"
      >
        ЗАБЫЛИ ПАРОЛЬ
      </button>
    </Link>
  );
};

export default ForgotPassword;
