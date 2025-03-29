import Image from 'next/image';
import BadTyre1 from '../../../assets/MainPage/bad_tyre1.webp.svg';
import BadTyre2 from '../../../assets/MainPage/bad_tyre2.webp.svg';

const InfoTires = () => {
    return <div className="relative h-[20rem] w-4/5 top-[71%] left-1/10 flex flex-row
    max-[1746px]:top-[78%]
    max-[1281px]:top-[80%]
    max-[961px]:flex-col max-[961px]:left-[28%] max-[961px]:w-3/5 max-[961px]:top-[67%]
    max-[769px]:top-[71%]
    max-[641px]:top-[71%]

    max-[481px]:top-[81%]
    max-[385px]:top-[83%]">
        <div className="relative h-0 left-[2.85%] top-[20%] text-white text-right transform translate-x-[-20%] 
        text-[2rem] leading-[2rem] font-[MontserratSemiBold] max-[1281px]:top-[0] 
         max-[961px]:text-center max-[641px]:top-[25%]">
          Отсутствие постоянного контроля <br />
          давления в шинах - это прямая <br />
          угроза безопасности вашего <br />
          автопарка и роста затрат!{' '}
        </div>

        <Image
          className=" relative top-[6%] max-w-[40vw] max-h-[30vw]  w-[20rem] h-[15rem]
          max-[961px]:top-[65%] max-[961px]:left-[3%] max-[769px]:top-[76%]
          max-[641px]:top-[121%] max-[481px]:top-[142%]"
          src={BadTyre1}
          alt=""
        />
        <Image
          className=" relative top-[6%] max-w-[40vw] max-h-[30vw] left-[8%] w-[20rem] h-[15rem]
          max-[1025px]:left-1/20
          max-[961px]:top-[85%] max-[961px]:left-[3%] max-[641px]:top-[131%]
          max-[481px]:top-[152%] max-[385px]:top-[148%]"
          src={BadTyre2}
          alt=""
        />
      </div>
}

export default InfoTires;