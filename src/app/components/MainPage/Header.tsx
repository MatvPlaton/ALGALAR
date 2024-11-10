import React from "react";
import Link from 'next/link'
import Logotype from '../../assets/MainPage/image7.svg'
import ProfileIcon from '../../assets/MainPage/profile.svg'
import Image from "next/image";
import {HeaderWrapper, LogoAng, LogoImg, LogoRest, Profile, ProfileIc} from "./styles/Header";

const Header = () => {

    return <HeaderWrapper>

        <LogoImg> <Image style={{width: '3vw', height: '3vw'}} src={Logotype} alt='' /> </LogoImg>
        <LogoAng> ALGALAR </LogoAng>
        <LogoRest> технология безопасного вождения </LogoRest>
        <Profile>
            <ProfileIc> <Image style={{width: '1vw', height: '1vw'}} src={ProfileIcon} alt='' /> </ProfileIc>
            <Link href='/login'> Личный Кабинет </Link> </Profile>
    </HeaderWrapper>;
}

export default Header;