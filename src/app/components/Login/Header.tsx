import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/image7.svg'
import Image from "next/image";
const HeaderWrapper = styled.div`
    background-color: black;
    color: white;
    width: 100%;
    height: 10vh;
`
const LogoWrapper = styled.div`
    transform: scale(150%);
    position: relative;
    left: 42%;
    top: 19%;
    width: 3.5vw;
    height: 6vh;
`
const ALGALAR = styled.div`
    font-family: InterExtraBold,sans-serif;
    left: 47%;
    top: -49%;
    position: relative;
    font-size: 2vw;
    width: 10%;
`
const Description = styled.div`
    font-family: InterExtraBold,sans-serif;
    left: 47.1%;
    top: -44%;
    position: relative;
    font-size: 0.7vw;
    width: 15%;
`
const Header = () => {

    return <HeaderWrapper>
        <LogoWrapper> <Image style={{width: '3.5vw', height: '6vh'}} src={logo} alt='' /> </LogoWrapper>
        <ALGALAR> ALGALAR </ALGALAR>
        <Description> техника безопасного вождения </Description>

    </HeaderWrapper>
}

export default Header;