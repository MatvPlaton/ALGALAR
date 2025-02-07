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
import user from "../../assets/Profile/user 1.svg";
import autoPark from "../../assets/Profile/user 2.svg"
import location from "../../assets/Profile/user 3.svg"
import drivers from "../../assets/Profile/user 3 (1).svg"
import tires from "../../assets/Profile/user 3 (2).svg"
import addCar from "../../assets/Profile/user 3 (3).svg"
import addDriver from "../../assets/Profile/user 3 (4).svg"
import notifications from "../../assets/Profile/user 4.svg"
import exit from "../../assets/Profile/user 6.svg"

import userActive from "../../assets/Profile/ProfileActiveExpanded.svg"
import autoParkActive from "../../assets/Profile/ActiveAutoPark.svg"
import locationActive from "../../assets/Profile/ActiveLocation.svg"
import driversActive from "../../assets/Profile/ActiveDrivers.svg"
import addCarActive from "../../assets/Profile/ActiveAddAuto.svg"
import addDriverActive from  "../../assets/Profile/ActiveAddDriver.svg"
import notificationsActive from "../../assets/Profile/ActiveNotifications.svg"

import arrow1 from "../../assets/Profile/Arrow1.svg"
import arrow2 from "../../assets/Profile/Arrow2.svg"
import Image from "next/image";
import {ALGALAR, Description} from "@/app/components/Profile/styles/ProfileMenu";
import {useRouter} from "next/navigation";
import { useAuthStore } from "@/app/redux/store";


interface Prop {
    activeField : string;
    height: string;
}
const Sidebar: React.FC<Prop> = ({activeField,height}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    };

    const router = useRouter();

    const Pictures : {[key : string] : [string,string,string]} = {
        'Profile': [user,userActive,'Профиль'],
        'AutoPark': [autoPark,autoParkActive,'Автопарк'],
        'Location': [location,locationActive,'Местоположение Авто'],
        'Drivers' : [drivers,driversActive,'Статистика по водителям'],
        'tires' : [tires,tires,'Статистика по шинам'],
        'AddAuto' : [addCar,addCarActive,'Добавить авто'],
        'AddDriver' : [addDriver,addDriverActive,'Добавить водителя'],
        'Notifications' : [notifications,notificationsActive,'Уведомления'],
        'Exit' : [exit,exit,'Выход']
    }

    const setToken = useAuthStore((state) => state.setToken);
    
    const exitSession = () => {
        console.log(1)
        setToken(null)
        router.push('/MainPage')
    } 
    return (
        <SidebarWrapper height={height} $active={isExpanded}>
            <HeaderWrapper>
                <LogoWrapper onClick={() => router.push('/MainPage')} $active={isExpanded}> <Image style={{width: '6vw', height: '6vh'}} src={logo} alt='' /> </LogoWrapper>
                <ALGALAR> ALGALAR </ALGALAR>
                <Description> техника безопасного вождения </Description>
            </HeaderWrapper>
            <ComponentsList>
                {Object.keys(Pictures).map((key : string) =>
                    <Component onClick={() => key === 'Exit' ? exitSession() : router.push( `/${key}`)} key={key}>
                        {activeField === key ? <>
                                <Image style={{position: 'relative', left: '-1%', top: '-24%',display: 'grid', width: '27vw',height: '8vh'}}
                                                      src={Pictures[key][1]} alt={''} />
                            <ComponentTextOn> {Pictures[key][2]} </ComponentTextOn> </> : <>
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={Pictures[key][0]} alt={''} /> </ComponentImage>
                    <ComponentText> {Pictures[key][2]} </ComponentText> </>}
                    </Component>)}
            </ComponentsList>


                    <ToggleButton $active={isExpanded} onClick={toggleSidebar}>
                        {isExpanded ? <Image style={{width: '2vw', height: '4vh'}} src={arrow1} alt='' /> :
                        <Image style={{width: '2vw', height: '4vh'}} src={arrow2} alt='' />} </ToggleButton>
                </SidebarWrapper>
)



}

export default Sidebar;
