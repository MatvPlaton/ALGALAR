import React from 'react';
import logo from '../../assets/MainPage/image7.svg'
import Image from "next/image";
import {ALGALAR, Description, HeaderWrapper, LogoWrapper} from "./styles/Header";

const Header = () => {

    return <HeaderWrapper>
        <LogoWrapper> <Image style={{width: '3.5vw', height: '6vh'}} src={logo} alt='' /> </LogoWrapper>
        <ALGALAR> ALGALAR </ALGALAR>
        <Description> техника безопасного вождения </Description>

    </HeaderWrapper>
}

export default Header;