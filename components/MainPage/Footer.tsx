"use client"
import React from "react";
import styled from 'styled-components';
import VKlogo from '../../assets/Link → SVG.svg';
import YTlogo from '../../assets/Link → SVG (1).svg';
import TGlogo from '../../assets/telegram-social.svg';
import Image from "next/image";

const FooterWrapper = styled.div`
    background-color: #141415;
    position: absolute;
    width: 100%;
    left: 0;
    top:306%;
    height: 30vw;
`
const Algalar = styled.div`
    color: white;
    font-weight: bolder;
    font-size: 2.5vw;
    position: absolute;
    left: 15%;
    top: 15%;
    font-family: MontserratBold, sans-serif;
`
const MadeInRussia = styled.div`
    color: white;
    font-size: 1vw;
    position: absolute;
    left: 15%;
    top: 28%;
    font-family: MontserratMedium, sans-serif;
`
const Address = styled.div`
    color: #B3B6BA;
    font-size: 1vw;
    position: absolute;
    left: 15%;
    top: 48%;
    font-family: InterRegular;
`
const Number = styled.div`
    color: white;
    font-size: 1.5vw;
    font-weight: bolder;
    position: absolute;
    left: 75%;
    top: 43%;
    font-family: MontserratBold;
`
const Email = styled.div`

    color: white;
    font-size: 1.5vw;
    font-weight: bolder;
    position: absolute;
    left: 76%;
    top: 53%;
    font-family: MontserratSemiBold;

`
const Social = styled.div`
    color: white;
    font-size: 1vw;
    position: absolute;
    left: 78.5%;
    top: 65%;
    font-family: MontserratMedium, sans-serif;
`
const VK = styled.div`
    left: 83%;
    top: 73%;
    position: absolute;
`
const YouTUbe = styled.div`
    left: 86%;
    top: 73%;
    position: absolute;
`
const Telegram = styled.div`
    left: 89%;
    top: 73%;
    position: absolute;
`
const Footer = () => {
    return <FooterWrapper>
        <Algalar> ALGALAR </Algalar>
        <MadeInRussia> Сделано в России! </MadeInRussia>
        <Address> Россия, г. Красноярск, ул. Свердловская, дом 15, строение 29, помещение 1, 660079 </Address>
        <Number> +7 (9XX) XXX-XX-XX </Number>
        <Email> algalar@gmail.com </Email>
        <Social> Мы в социальных сетях: </Social>
        
        <VK> <Image src={VKlogo} alt='' /> </VK>
        <YouTUbe> <Image src={YTlogo} alt='' /> </YouTUbe>
        <Telegram> <Image src={TGlogo} alt='' /> </Telegram>
    </FooterWrapper>
}

export default Footer;