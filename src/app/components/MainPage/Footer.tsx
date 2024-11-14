"use client"
import React from "react";
import VKlogo from '../../assets/MainPage/Link → SVG.svg';
import YTlogo from '../../assets/MainPage/Link → SVG (1).svg';
import TGlogo from '../../assets/MainPage/telegram-social.svg';
import Image from "next/image";
import Logo from '../../assets/MainPage/image7.svg'
import LeftCornerLogo from '../../assets/MainPage/image 10.svg';
import {
    Address, Agreement,
    Algalar, Cookie,
    Email, Number,
    FooterWrapper,
    MadeInRussia,
    PersonalData,
    Social,
    Telegram,
    VK,
    YouTUbe, IconsWrapper
} from "./styles/Footer";
const Footer = () => {
    return <FooterWrapper>
        <Algalar> ALGALAR </Algalar>
        <MadeInRussia> Сделано в России! </MadeInRussia>
        <Address> Россия, г. Екатеринбург, ул. Свердловская, дом 15, строение 29, помещение 1, 660079 </Address>
        <Number> +7 (9XX) XXX-XX-XX </Number>
        <Email> algalar@gmail.com </Email>
        <Social> Мы в социальных сетях: </Social>
        <IconsWrapper>
        <VK> <Image style={{marginRight: '1vw',width: '2vw', height: '2vw'}} src={VKlogo} alt='' /> </VK>
        <YouTUbe> <Image style={{marginRight: '1vw',width: '2vw', height: '2vw'}} src={YTlogo} alt='' /> </YouTUbe>
        <Telegram> <Image style={{width: '2vw', height: '2vw'}} src={TGlogo} alt='' /> </Telegram>
        </IconsWrapper>
        <PersonalData onClick={() => console.log(1)}> Политика использования персональных данных  </PersonalData>
        <Agreement> Пользовательское соглашение сервиса ALGALAR </Agreement>
        <Cookie> Мы используем файлы &quot;cookie&quot;, с целью персонализации сервисов и повышения удобства пользования веб-сайтом. <br />
            Если вы не хотите использовать файлы «cookie», измените настройки браузера.
        </Cookie>
        <Image style={{width: 'clamp(2vw,15rem,20vw)', height: 'clamp(2vw,15rem,20vw)', position: "absolute", left: '-1%', bottom: '0'}} src={LeftCornerLogo} alt='' />
        <Image style={{width: 'clamp(2vw,6rem,12vw)', height: 'clamp(2vw,6rem,12vw)', position: "absolute", left: '87%', top: '20%'}} src={Logo} alt='' />
        <Image style={{width: 'clamp(2vw,3rem,7vw)', height: 'clamp(2vw,3rem,7vw)', position: "absolute", left: '92.5%', top: '40%'}} src={Logo} alt='' />
    </FooterWrapper>
}

export default Footer;