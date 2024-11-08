"use client"
import React from "react";
import styled from 'styled-components';
import VKlogo from '../../assets/Link → SVG.svg';
import YTlogo from '../../assets/Link → SVG (1).svg';
import TGlogo from '../../assets/telegram-social.svg';
import Image from "next/image";
import Logo from '../../assets/image7.svg'
import LeftCornerLogo from '../../assets/image 10.svg';
import RightCornerLogo from '../../assets/image 11.svg';
const FooterWrapper = styled.div`
    background-color: #141415;
    position: absolute;
    width: 100%;
    left: 0;
    top:306%;
    height: 55vh;
`
const Algalar = styled.div`
    color: white;
    font-weight: bolder;
    font-size: 2.5vw;
    position: absolute;
    left: 15%;
    top: 10%;
    font-family: MontserratBold, sans-serif;
`
const MadeInRussia = styled.div`
    color: white;
    font-size: 1vw;
    position: absolute;
    left: 15%;
    top: 23%;
    font-family: MontserratMedium, sans-serif;
`
const Address = styled.div`
    color: #B3B6BA;
    font-size: 1vw;
    position: absolute;
    left: 15%;
    top: 38%;
    font-family: InterRegular;
`
const Number = styled.div`
    color: white;
    font-size: 1.5vw;
    font-weight: bolder;
    position: absolute;
    left: 65.5%;
    top: 33%;
    font-family: MontserratBold;
`
const Email = styled.div`

    color: white;
    font-size: 1.5vw;
    font-weight: bolder;
    position: absolute;
    left: 66%;
    top: 43%;
    font-family: MontserratSemiBold;

`
const Social = styled.div`
    color: white;
    font-size: 1vw;
    position: absolute;
    left: 68.5%;
    top: 55%;
    font-family: MontserratMedium, sans-serif;
`
const VK = styled.button`
    left: 73.1%;
    top: 63%;
    position: absolute;
    background-color: #141415;
    border: none;
`
const YouTUbe = styled.button`
    left: 76.1%;
    top: 63%;
    position: absolute;
    background-color: #141415;
    border: none;
`
const Telegram = styled.button`
    left: 79.1%;
    top: 63%;
    position: absolute;
    background-color: #141415;
    border: none;
`
const PersonalData = styled.a`
    font-family: InterRegular, sans-serif;
    color: white;
    font-size: 1vw;
    position: absolute;
    left: 28.5%;
    top: 75%;
    
`
const Agreement = styled.a`
    font-family: InterRegular, sans-serif;
    color: white;
    font-size: 1vw;
    position: absolute;
    left: 56.5%;
    top: 75%;
`
const Cookie = styled.div`
    color: #5f6266;
    font-size: 1vw;
    left: 27%;
    top: 85%;
    position: absolute;
    text-align: right;
`
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