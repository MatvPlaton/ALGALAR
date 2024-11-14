'use client';
import React, { useState } from "react";
import {
    SidebarWrapper,
    ToggleButton,
    LogoWrapper,
    HeaderWrapper,
    Component,
    ComponentsList,
    ComponentText,
    ComponentTextOn,
    ComponentImage
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
                    <HeaderWrapper>
                    <LogoWrapper $active={isExpanded}> <Image style={{width: '6vw', height: '6vh'}} src={logo} alt='' /> </LogoWrapper>
                    <ALGALAR> ALGALAR </ALGALAR>
                    <Description> техника безопасного вождения </Description>

                    </HeaderWrapper>
                    <ComponentsList>
                        <Component onClick={() => console.log(1)}>
                            <Image style={{position: 'relative', left: '-1%', top: '-10%',display: 'grid', width: '27vw',height: '8vh'}} src={ProfileActiveExpanded} alt={''} />
                            <ComponentTextOn> Профиль </ComponentTextOn>
                        </Component>
                        <Component onClick={() => console.log(1)} >
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={truck} alt={''} /> </ComponentImage>
                            <ComponentText> Автопарк </ComponentText>
                        </Component>
                        <Component onClick={() => console.log(1)} >
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={location} alt={''} /> </ComponentImage>
                            <ComponentText> Местоположение авто </ComponentText>
                        </Component>
                        <Component onClick={() => console.log(1)} >
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={drivers} alt={''} /> </ComponentImage>
                            <ComponentText> Статистика по водителям </ComponentText>
                        </Component>
                        <Component onClick={() => console.log(1)} >
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={tires} alt={''} /> </ComponentImage>
                            <ComponentText> Статистика по шинам </ComponentText>
                        </Component>
                        <Component>
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={addCar} alt={''} /> </ComponentImage>
                            <ComponentText> Добавить авто </ComponentText>
                        </Component>
                        <Component>
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={addDriver} alt={''} /> </ComponentImage>
                            <ComponentText> Добавить водителя </ComponentText>
                        </Component>
                        <Component>
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={notifications} alt={''} /> </ComponentImage>
                            <ComponentText> Уведомления </ComponentText>
                        </Component>
                        <Component>
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={exit} alt={''} /> </ComponentImage>
                            <ComponentText> Выход </ComponentText>
                        </Component>
                    </ComponentsList>

                    <ToggleButton $active={isExpanded} onClick={toggleSidebar}>
                        {isExpanded ? <Image style={{width: '2vw', height: '4vh'}} src={arrow1} alt='' /> :
                        <Image style={{width: '2vw', height: '4vh'}} src={arrow2} alt='' />} </ToggleButton>
                </ SidebarWrapper>
)



}
