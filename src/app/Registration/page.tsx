import React from 'react';
import Header from '@/app/components/Registration/Header';
import ClientComponents from '../components/Registration/ClientComponents';

const Page = () => {
  
  
  return (
    <div className="absolute w-[70rem] h-[56rem] 
    left-1/2 top-1/20 flex flex-col overflow-x-hidden -translate-x-1/2">
    <Header />
    <div className="relative top-[1.56rem] left-[3%] 
  text-black text-[1.5rem] font-[RobotoMedium]"> Регистрация в системе </div>
    <ClientComponents />
    </div>
  );
};

export default Page;
