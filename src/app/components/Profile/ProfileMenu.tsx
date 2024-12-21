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

import arrow1 from "../../assets/Profile/Arrow1.svg"
import arrow2 from "../../assets/Profile/Arrow2.svg"
import Image from "next/image";
import {ALGALAR, Description} from "@/app/components/Profile/styles/ProfileMenu";
import {useRouter} from "next/navigation";

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
        'Профиль': [user,userActive,'Profile'],
        'Автопарк': [autoPark,autoParkActive,'AutoPark'],
        'Местоположение авто': [location,locationActive,'Location'],
        'Статистика по водителям' : [drivers,driversActive,'Drivers'],
        'Статистика по шинам' : [tires,tires,'tires'],
        'Добавить авто' : [addCar,addCarActive,'AddAuto'],
        'Добавить водителя' : [addDriver,addDriverActive,'AddDriver'],
        'Уведомления' : [notifications,notifications,'Notifications'],
        'Выход' : [exit,exit,'Exit']
    }
    return (
        <SidebarWrapper height={height} $active={isExpanded}>
            <HeaderWrapper>
                <LogoWrapper $active={isExpanded}> <Image style={{width: '6vw', height: '6vh'}} src={logo} alt='' /> </LogoWrapper>
                <ALGALAR> ALGALAR </ALGALAR>
                <Description> техника безопасного вождения </Description>
            </HeaderWrapper>
            <ComponentsList>
                {Object.keys(Pictures).map((key : string) =>
                    <Component onClick={() => {console.log(key); router.push( `/${Pictures[key][2]}`)}} key={key}>
                        {activeField === key ? <>
                                <Image style={{position: 'relative', left: '-1%', top: '-24%',display: 'grid', width: '27vw',height: '8vh'}}
                                                      src={Pictures[key][1]} alt={''} />
                            <ComponentTextOn> {key} </ComponentTextOn> </> : <>
                            <ComponentImage> <Image style={{width: 'inherit',height: 'inherit'}} src={Pictures[key][0]} alt={''} /> </ComponentImage>
                    <ComponentText> {key} </ComponentText> </>}
                    </Component>)}
            </ComponentsList>


                    <ToggleButton $active={isExpanded} onClick={toggleSidebar}>
                        {isExpanded ? <Image style={{width: '2vw', height: '4vh'}} src={arrow1} alt='' /> :
                        <Image style={{width: '2vw', height: '4vh'}} src={arrow2} alt='' />} </ToggleButton>
                </SidebarWrapper>
)



}

export default Sidebar;
