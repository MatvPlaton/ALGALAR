import React from 'react';
import VKlogo from '../../assets/MainPage/Link → SVG.svg';
import YTlogo from '../../assets/MainPage/Link → SVG (1).svg';
import TGlogo from '../../assets/MainPage/telegram-social.svg';
import Image from 'next/image';
import Logo from '../../assets/MainPage/image7.svg';
import LeftCornerLogo from '../../assets/MainPage/image 10.svg';
import Fasie from '../../assets/MainPage/FASIE.svg';

const Footer = () => {
  return (
    <footer className="absolute w-full h-fit top-[calc(130vh+81rem)] 
    max-[1281px]:top-[calc(130vh+110rem)]
    max-[1098px]:top-[calc(130vh+130rem)]
    max-[961px]:top-[calc(130vh+160rem)]
    max-[769px]:top-[calc(130vh+190rem)]
    max-[481px]:top-[calc(130vh+270rem)]
    max-[385px]:top-[calc(130vh+278rem)] text-white left-0 bg-[#141415]">

      <div className='flex flex-row h-100 '> 
      <div className='relative w-fit left-3/20 top-2/10'> 
      <div className="relative transform text-[calc(2vw+1rem)] font-montserrat font-bold w-fit">
        
        ALGALAR
      </div>
      <div className="relative text-[calc(0.7vw+1rem)] font-montserrat font-medium w-fit">
        
        Сделано в России!
      </div>
      <div className="relative top-[5%] w-[25vw] font-inter font-regular text-[calc(0.3vw+1rem)] text-[#B3B6BA]">
        
        Россия, г. Екатеринбург, ул. Свердловская, дом 15, строение 29,
        помещение 1, 660079
      </div>
      </div>

      <div className='relative left-4/10 top-5/10 w-fit flex flex-col items-end gap-4'>
      <div className="font-montserrat font-bold text-[clamp(0vw,calc(0.8vw+1rem),3vw)]">
        
      +7 962 500 05 00
      </div>
      <div className=" font-montserrat font-semibold text-[clamp(0vw,calc(0.8vw+1rem),3vw)]">
        
        algalar@gmail.com
      </div>
      <div className="font-montserrat font-medium text-[clamp(0vw,calc(0.3vw+1rem),2vw)]">
        
        Мы в социальных сетях:
      </div>
      <div className="relative -left-14 justify-center w-[4vw] h-[2vh] flex flex-row gap-4">
        <Image
          className="mr-[1vw] border-none bg-[#141415] w-[2vw] h-[2vw]"
          src={VKlogo}
          alt=""
        />
        <Image
          className="mr-[1vw] border-none bg-[#141415] w-[2vw] h-[2vw]"
          src={YTlogo}
          alt=""
        />
        <Image
          className="border-none bg-[#141415] w-[2vw] h-[2vw]"
          src={TGlogo}
          alt=""
        />
      </div>
      </div>
      </div>
      <div className='relative left-[10%] h-160  flex flex-col font-inter font-regular text-center text-[2rem] w-4/5 '>
        <div className='relative top-1/10 flex justify-center place-items'> 
        <Image src={Fasie} alt='fasie' className='w-[30vw] '/> 
        </div>
        <div className='relative top-1/5'> 
        Проект создан при поддержке Федерального государственного бюджетного учреждения 
        «Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы &quot;
        Студенческий стартап&quot; федерального проекта &quot;
        Платформа университетского технологического предпринимательства&quot;. </div>
        </div>
        <div className=' w-fit'>
          <div className='relative flex flex-row gap-24 left-9/20 top-24'>  
      <a className="relative text-[1vw] font-inter font-regular">
        
        Политика использования персональных данных
      </a>
      <a className="relative text-[1vw] font-inter font-regular">
        
        Пользовательское соглашение сервиса ALGALAR
      </a>
      </div>
      <div className="relative left-17/40 top-32 text-left text-[1vw] text-[#5f6266] ">
        
        Мы используем файлы &quot;cookie&quot;, с целью персонализации сервисов
        и повышения удобства пользования веб-сайтом. <br />
        Если вы не хотите использовать файлы «cookie», измените настройки
        браузера.
      </div>
      <Image
        className=" left-[-1%] bottom-0 h-[clamp(2vw,15rem,20vw)] w-[clamp(2vw,15rem,20vw)]"
        src={LeftCornerLogo}
        alt=""
      />
      <Image
        className="absolute left-[87%] top-1/5 bottom-0 h-[clamp(2vw,6rem,12vw)] w-[clamp(2vw,6rem,12vw)]"
        src={Logo}
        alt=""
      />
      <Image
        className="absolute left-[92.5%] top-2/5 bottom-0 h-[clamp(2vw,3rem,7vw)] w-[clamp(2vw,3rem,7vw)]"
        src={Logo}
        alt=""
      />
      </div>
    </footer>
  );
};

export default Footer;
