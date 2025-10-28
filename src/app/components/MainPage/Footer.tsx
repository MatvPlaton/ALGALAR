import React from 'react';
import VKlogo from '../../assets/MainPage/Link → SVG.svg';
import YTlogo from '../../assets/MainPage/Link → SVG (1).svg';
import TGlogo from '../../assets/MainPage/telegram-social.svg';
import Image from 'next/image';
import Logo from '../../assets/MainPage/image7.svg';
import LeftCornerLogo from '../../assets/MainPage/image 10.svg';

const Footer = () => {
  return (
    <footer className="absolute w-full h-[40rem] top-[calc(130vh+81rem)] 
    max-[1281px]:top-[calc(130vh+110rem)]
    max-[1098px]:top-[calc(130vh+130rem)]
    max-[961px]:top-[calc(130vh+160rem)]
    max-[769px]:top-[calc(130vh+190rem)]
    max-[481px]:top-[calc(130vh+270rem)]
    max-[385px]:top-[calc(130vh+278rem)] text-white left-0 bg-[#141415]">
      <div className="absolute left-[18%] top-1/10 transform translate-x-[-25%] text-[calc(2vw+1rem)] font-montserrat font-bold ">
        
        ALGALAR
      </div>
      <div className="absolute left-[14.2%] top-[23%] text-[calc(0.7vw+1rem)] font-montserrat font-medium">
        
        Сделано в России!
      </div>
      <div className="absolute left-[14%] top-[38%] w-[25vw] font-inter font-regular text-[calc(0.3vw+1rem)] text-[#B3B6BA]">
        
        Россия, г. Екатеринбург, ул. Свердловская, дом 15, строение 29,
        помещение 1, 660079
      </div>
      <div className="absolute left-[65.5%] top-[33%] w-[25vw] font-montserrat font-bold text-[clamp(0vw,calc(0.8vw+1rem),3vw)]">
        
        +7 (9XX) XXX-XX-XX
      </div>
      <div className="absolute left-[66%] top-[43%] font-montserrat font-semibold text-[clamp(0vw,calc(0.8vw+1rem),3vw)]">
        
        algalar@gmail.com
      </div>
      <div className="absolute left-[68%] top-[55%] font-montserrat font-medium text-[clamp(0vw,calc(0.3vw+1rem),2vw)]">
        
        Мы в социальных сетях:
      </div>
      <div className="absolute left-[71.5%] top-3/5 w-[4vw] h-[2vh] flex flex-row">
        <Image
          className="relative left-[73%] top-[63%] mr-[1vw] border-none bg-[#141415] w-[2vw] h-[2vw]"
          src={VKlogo}
          alt=""
        />
        <Image
          className="relative left-[96%] top-[63%] mr-[1vw] border-none bg-[#141415] w-[2vw] h-[2vw]"
          src={YTlogo}
          alt=""
        />
        <Image
          className="relative left-[119%] top-[63%] border-none bg-[#141415] w-[2vw] h-[2vw]"
          src={TGlogo}
          alt=""
        />
      </div>
      <a className="absolute left-[29%] top-3/4 text-[1vw] font-inter font-regular">
        
        Политика использования персональных данных
      </a>
      <a className="absolute left-[58%] top-3/4 text-[1vw] font-inter font-regular">
        
        Пользовательское соглашение сервиса ALGALAR
      </a>
      <div className="absolute left-[27%] top-[85%] text-left text-[1vw] text-[#5f6266]">
        
        Мы используем файлы &quot;cookie&quot;, с целью персонализации сервисов
        и повышения удобства пользования веб-сайтом. <br />
        Если вы не хотите использовать файлы «cookie», измените настройки
        браузера.
      </div>
      <Image
        className="absolute left-[-1%] bottom-0 h-[clamp(2vw,15rem,20vw)] w-[clamp(2vw,15rem,20vw)]"
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
    </footer>
  );
};

export default Footer;
