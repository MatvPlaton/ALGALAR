"use client"
import React from "react";
import styled from 'styled-components';
import Logotype from '../../assets/image7.svg'
import ProfileIcon from '../../assets/profile.svg'
import Image from "next/image";
const HeaderWrapper = styled.div`
    width: 100%;
    height: 15%;
    background-color: black;
    color: white;
    position: absolute;
    left: 0;
    top: 0;
    

`
const LogoImg = styled.div`
    position: absolute;
    left: 20%;
    top: 25%;
    transform: scale(150%);
    height: 3vw;
    width: 3vw;
`
const LogoAng = styled.div`
    position: absolute;
    left: 25%;
    top: 15%;
    font-size: 2vw;
    font-family: InterExtraBold, sans-serif;
`
const LogoRest  = styled.div`
    position: absolute;
    left: 25%;
    top: 50%;
    font-family: InterExtraBold, sans-serif;
    font-weight: bolder;
    font-size: 1vw;
`
const ProfileIc = styled.div`
    transform: scale(150%);
    left: 10%;
    top: 25%;
    width: 1vw;
    height: 1vw;
    position: absolute;
    
`
const Profile = styled.button`
    position: absolute;
    left: 75%;
    top: 25%;
    width: 13%;
    height: 25%;
    background-color: #43C5E2;
    border-radius: 0.5vw;
    border: none;
    font-size: 1vw;
    color: white;
    padding-left: 2vw;
`
const Header = () => {

    return <HeaderWrapper>

        <LogoImg> <Image style={{width: '3vw', height: '3vw'}} src={Logotype} alt='' /> </LogoImg>
        <LogoAng> ALGALAR </LogoAng>
        <LogoRest> технология безопасного вождения </LogoRest>
        <Profile>
            <ProfileIc> <Image style={{width: '1vw', height: '1vw'}} src={ProfileIcon} alt='' /> </ProfileIc>
                Личный Кабинет </Profile>
    </HeaderWrapper>;
}

export default Header;