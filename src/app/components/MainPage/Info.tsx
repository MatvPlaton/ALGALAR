import React from 'react';
import PurpleBlock from './Info/PurpleBlock';
import InfoTitle from './Info/InfoTitle';
import InfoFirst from './Info/InfoFirst';
import InfoSecond from './Info/InfoSecond';
import InfoThird from './Info/InfoThird';
import InfoFourth from './Info/InfoFourth';
import InfoTires from './Info/InfoTires';
const Info = () => {
  return (
    <div className="absolute bg-[#1D1C1C] left-0 w-full h-[91rem] top-[calc(55vh+10rem)]
    max-[1281px]:h-[120rem]
    max-[1098px]:top-[calc(30rem+55vh)]
    max-[961px]:h-[150rem]
    max-[769px]:h-[180rem]
    max-[481px]:top-[calc(34rem+55vh)] max-[481px]:h-[256rem]
    max-[385px]:h-[264rem]">
      <InfoTitle />
      
      <div className="absolute w-[55vw] h-[50rem] top-1/5 left-1/10 flex flex-col 
      max-[769px]:top-[13%] max-[609px]:left-[1%]
       max-[481px]:top-[18%]">
        <div className="flex flex-row w-full h-1/2">
          <InfoFirst />
          <InfoSecond />
        </div>
        <div className=" relative top-[-5%] flex flex-row w-full h-1/2
         max-[1281px]:top-[14%] ">
          <InfoThird />
          <InfoFourth />
        </div>
      </div>

      <PurpleBlock />
      <InfoTires />
      
    </div>
  );
};

export default Info;
