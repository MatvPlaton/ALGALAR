import React from 'react';
import ClientComponents from './components/ClientComponents';
import UnderHeaderText from './components/UnderHeaderText';

const Page = () => {
  
  
  return (
    <div className="absolute w-[70rem] h-[51rem] 
    left-1/2 top-3/20 flex flex-col overflow-x-hidden -translate-x-1/2
    max-[1121px]:w-full max-[1121px]:top-5/20">
    <UnderHeaderText message="Регистрация в системе" />
    <ClientComponents />
    </div>
  );
};

export default Page;
