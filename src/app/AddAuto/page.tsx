"use client"
import React from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import Header from "@/app/components/AddAuto/Header"
import ConfigFields from "@/app/components/AddAuto/ConfigFields"
import WheelConfig from "@/app/components/AddAuto/WheelConfig";
import SeparateWheelFields from "@/app/components/AddAuto/SeparateWheelFields";
import TempAndPressure from "@/app/components/AddAuto/TempAndPressure";


const AutoPark = () => {

    return <>
        <ProfileMenu height={'172vh'} activeField={'Добавить авто'} />
        <Header />
        <ConfigFields />
        <WheelConfig />
        <SeparateWheelFields />
        <TempAndPressure />
    </>
}

export default AutoPark;