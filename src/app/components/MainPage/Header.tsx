"use client"
import React from "react";
import Logotype from '../../assets/MainPage/image7.svg'
import ProfileIcon from '../../assets/MainPage/profile.svg'
import {useRouter} from "next/navigation";
import Image from "next/image";
import {
    HeaderWrapper,
    LogoAng,
    LogoImg,
    LogoRest,
    Profile,
    ProfileIc,
    LogoWrapper,
    LogoWrapperText, ButtonTextWrapper
} from "./styles/Header";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const Header = () => {

    const router = useRouter();
    const token = useSelector((state: RootState) => state.auth.token);


    return <HeaderWrapper>
        <LogoWrapper>
        <LogoImg> <Image style={{width: 'inherit', height: 'inherit'}} src={Logotype} alt='' /> </LogoImg>
        <LogoWrapperText>
            <LogoAng> ALGALAR </LogoAng>
            <LogoRest> технология безопасного вождения </LogoRest>
        </LogoWrapperText>
        </LogoWrapper>
        <Profile onClick={() => token === null ? router.push('/login') : router.push('/Profile')}>
            <ProfileIc> <Image style={{width: 'inherit', height: 'inherit'}} src={ProfileIcon} alt='' /> </ProfileIc>
            <ButtonTextWrapper> Личный Кабинет </ButtonTextWrapper> </Profile>
    </HeaderWrapper>;
}

export default Header;