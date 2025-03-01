import React from 'react';
import ClientComponents from './components/ClientComponents';

const Page = () => {
  
  
  return (
    <div className="absolute w-[70rem] h-[51rem] 
    left-1/2 top-3/20 flex flex-col overflow-x-hidden -translate-x-1/2">
    <div className="relative top-[1.56rem] left-[3%] 
  text-black text-[1.5rem] font-[RobotoMedium]"> Регистрация в системе </div>
    <ClientComponents />
    </div>
  );
};

export default Page;
