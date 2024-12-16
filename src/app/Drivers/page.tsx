"use client"
import React from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from "../components/Drivers/ProfileTitle";
import Table from "../components/Drivers/Table";
import App1 from "../components/Drivers/Diagram";
import Fields from "../components/Drivers/Fields";
import CircularChart from "../components/Drivers/CircularChart";
const Page = () => {

    return <>
        <ProfileMenu height={'100vh'} activeField={'Статистика по водителям'}/>
        <ProfileTitle />
        <Table />
        <App1 />
        <Fields />
        <CircularChart value={2.534}/>
        </>
}

export default Page;