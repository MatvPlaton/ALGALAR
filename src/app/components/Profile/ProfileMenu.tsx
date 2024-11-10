'use client';
import React, { useState } from "react";
import {
    SidebarWrapper,
    ToggleButton,
    LogoWrapper,
    LogosWrapper,
    ProfileActiveWrapper,
    DescriptionsWrapper, DescriptionWrapper
} from "./styles/ProfileMenu";
import logo from "../../assets/MainPage/image7.svg"
import arrow1 from "../../assets/Profile/Arrow1.svg"
import arrow2 from "../../assets/Profile/Arrow2.svg"
import ProfileActiveExpanded from "../../assets/Profile/ProfileActiveExpanded.svg"
import truck from "../../assets/Profile/user 2.svg"
import location from "../../assets/Profile/user 3.svg"
import drivers from "../../assets/Profile/user 3 (1).svg"
import tires from "../../assets/Profile/user 3 (2).svg"
import addCar from "../../assets/Profile/user 3 (3).svg"
import addDriver from "../../assets/Profile/user 3 (4).svg"
import notifications from "../../assets/Profile/user 4.svg"
import exit from "../../assets/Profile/user 6.svg"

import Image from "next/image";
import {ALGALAR, Description} from "@/app/components/Profile/styles/ProfileMenu";
export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
                <SidebarWrapper $active={isExpanded}>
                    <LogoWrapper $active={isExpanded}> <Image style={{width: '6vw', height: '6vh'}} src={logo} alt='' /> </LogoWrapper>
                    {isExpanded ? <>
                    <ALGALAR> ALGALAR </ALGALAR>
                    <Description> техника безопасного вождения </Description>
                    </> : <div/>}
                    <LogosWrapper>
                        <Image style={{clipPath: isExpanded ? 'inset(0 0 0 0)' : 'inset(0 80% 0 0)',
                            transition: 'clip-path 0.3s ease', overflow: isExpanded ? 'hidden' : '',
                            position: 'absolute', top: '-15%',width: '24vw', height: '8vh'}} src={ProfileActiveExpanded} alt='' />
                        <Image style={{position: 'relative',top: '21%',width: '4vw', height: '4vh'}} src={truck} alt='' />
                        <Image style={{position: 'relative',top: '21%',width: '4vw', height: '4vh'}} src={location} alt='' />
                        <Image style={{position: 'relative',top: '20%',width: '4vw', height: '4vh'}} src={drivers} alt='' />
                        <Image style={{position: 'relative',top: '21%',width: '4vw', height: '4vh'}} src={tires} alt='' />
                        <Image style={{position: 'relative',top: '21%',width: '4vw', height: '4vh'}} src={addCar} alt='' />
                        <Image style={{position: 'relative',top: '21%',width: '4vw', height: '4vh'}} src={addDriver} alt='' />
                        <Image style={{position: 'relative',top: '21%',width: '4vw', height: '4vh'}} src={notifications} alt='' />
                        <Image style={{position: 'relative',top: '21%',width: '4vw', height: '4vh'}} src={exit} alt='' />

                    </LogosWrapper>
                    <DescriptionsWrapper $active={isExpanded}>
                        <ProfileActiveWrapper $active={isExpanded}> Профиль </ProfileActiveWrapper>
                        <DescriptionWrapper style={{position: 'relative',top: '1%'}} $active={isExpanded}> Автопарк </DescriptionWrapper>
                        <DescriptionWrapper style={{position: 'relative',top: '0.5%'}} $active={isExpanded}> Местоположение авто </DescriptionWrapper>
                        <DescriptionWrapper style={{position: 'relative',top: '-0.8%'}} $active={isExpanded}> Статистика по водителям </DescriptionWrapper>
                        <DescriptionWrapper style={{position: 'relative',top: '-1%'}} $active={isExpanded}> Статистика по шинам </DescriptionWrapper>
                        <DescriptionWrapper style={{position: 'relative',top: '-1.5%'}} $active={isExpanded}> Добавить машину </DescriptionWrapper>
                        <DescriptionWrapper style={{position: 'relative',top: '-2.5%'}} $active={isExpanded}> Добавить водителя </DescriptionWrapper>
                        <DescriptionWrapper style={{position: 'relative',top: '-3.1%'}} $active={isExpanded}> Уведомления </DescriptionWrapper>

                        <DescriptionWrapper style={{position: 'relative',top: '-3.1%'}} $active={isExpanded}> Выход </DescriptionWrapper>

                    </DescriptionsWrapper>
                    <ToggleButton $active={isExpanded} onClick={toggleSidebar}>
                        {isExpanded ? <Image style={{width: '2vw', height: '4vh'}} src={arrow1} alt='' /> :
                        <Image style={{width: '2vw', height: '4vh'}} src={arrow2} alt='' />} </ToggleButton>
                </ SidebarWrapper>
)



}
