"use client"
import React, { useState } from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import ProfileTitle from "../components/Notifications/ProfileTitle";
import Table from '../components/Notifications/Table'
import TableButtons from "../components/Notifications/TableButtons";
import Map from '../components/Notifications/Map';
import Information from "../components/Notifications/Information";
const Notifications = () => {
    
    const [index,setIndex] = useState(-1);
    return <> 
    <ProfileMenu height={'100vh'} activeField={'Notifications'} />
    <ProfileTitle />
    <Table dataIndex={index} setDataIndex={setIndex}/>
    <TableButtons />
    <Map coordinates={[55.731272, 37.447198]}/>
    <Information /> 
    </>
}

export default Notifications;