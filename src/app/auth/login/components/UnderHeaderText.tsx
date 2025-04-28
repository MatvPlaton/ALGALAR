import React from 'react';

const UnderHeaderText = (props: { message: string }) => {
  return (
    <div
      className="relative top-[6%] left-[3%] 
    text-black text-[1.5rem] font-[RobotoMedium] max-[609px]:text-center  max-[609px]:top-3/20"
    >
      {props.message}
    </div>
  );
};

export default UnderHeaderText;
