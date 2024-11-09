"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import Logotype from '../../assets/MainPage/image7.svg'
import ProfileIcon from '../../assets/MainPage/profile.svg'
import Image from "next/image";
import {HeaderWrapper, LogoAng, LogoImg, LogoRest, Profile, ProfileIc} from "./styles/Header";

const Header = () => {
    const router = useRouter();

    const navigateToAnotherPage = () => {
        router.push('../../Login'); // Specify the path to the page you want to navigate to
    };
    return <HeaderWrapper>

        <LogoImg> <Image style={{width: '3vw', height: '3vw'}} src={Logotype} alt='' /> </LogoImg>
        <LogoAng> ALGALAR </LogoAng>
        <LogoRest> технология безопасного вождения </LogoRest>
        <Profile onClick={() => navigateToAnotherPage()}>
            <ProfileIc> <Image style={{width: '1vw', height: '1vw'}} src={ProfileIcon} alt='' /> </ProfileIc>
                Личный Кабинет </Profile>
    </HeaderWrapper>;
}

export default Header;