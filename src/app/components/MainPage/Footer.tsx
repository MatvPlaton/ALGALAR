"use client"
import React from "react";
import VKlogo from '../../assets/MainPage/Link → SVG.svg';
import YTlogo from '../../assets/MainPage/Link → SVG (1).svg';
import TGlogo from '../../assets/MainPage/telegram-social.svg';
import Image from "next/image";
import Logo from '../../assets/MainPage/image7.svg'
import LeftCornerLogo from '../../assets/MainPage/image 10.svg';
import RightCornerLogo from '../../assets/MainPage/image 11.svg';
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
    YouTUbe
} from "./styles/Footer";
const Footer = () => {
    return <FooterWrapper>
        <Algalar> ALGALAR </Algalar>
        <MadeInRussia> Сделано в России! </MadeInRussia>
        <Address> Россия, г. Красноярск, ул. Свердловская, дом 15, строение 29, помещение 1, 660079 </Address>
        <Number> +7 (9XX) XXX-XX-XX </Number>
        <Email> algalar@gmail.com </Email>
        <Social> Мы в социальных сетях: </Social>
        <VK> <Image style={{width: '3vw', height: '3vh'}} src={VKlogo} alt='' /> </VK>
        <YouTUbe> <Image style={{width: '3vw', height: '3vh'}} src={YTlogo} alt='' /> </YouTUbe>
        <Telegram> <Image style={{width: '3vw', height: '3vh'}} src={TGlogo} alt='' /> </Telegram>
        <PersonalData onClick={() => console.log(1)}> Политика использования персональных данных  </PersonalData>
        <Agreement> Пользовательское соглашение сервиса ALGALAR </Agreement>
        <Cookie> Мы используем файлы &quot;cookie&quot;, с целью персонализации сервисов и повышения удобства пользования веб-сайтом. <br />
            Если вы не хотите использовать файлы «cookie», измените настройки браузера.
        </Cookie>
        <Image style={{width: '25vw', height: '25vh', position: "absolute", left: '-6%', top: '54%'}} src={LeftCornerLogo} alt='' />
        <Image style={{width: '10vw', height: '10vh', position: "absolute", left: '84%', top: '20%'}} src={Logo} alt='' />
        <Image style={{width: '5vw', height: '5vh', position: "absolute", left: '91.5%', top: '40%'}} src={Logo} alt='' />
        <Image style={{width: '20vw', height: '20vh', position: "absolute", left: '86%'}} src={RightCornerLogo} alt='' />
    </FooterWrapper>
}

export default Footer;