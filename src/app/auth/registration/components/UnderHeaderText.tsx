import React from 'react';

const UnderHeaderText = (props: { message: string }) => {
  return (
    <div
      className="relative top-[1.56rem] left-[3%] 
    text-black text-[1.5rem] font-roboto font-medium max-[609px]:text-center  max-[609px]:top-3/40"
    >
      {props.message}
    </div>
  );
};

export default UnderHeaderText;
