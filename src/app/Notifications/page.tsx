"use client"
import React, { useState } from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import TitleBox from "../components/Notifications/TitleBox";
import InfoBox from "../components/Notifications/InfoBox";

import ListBox from "../components/Notifications/ListBox";
const Notifications = () => {
    
    const [currNot,setCurrNot] = useState(-1);

    return  <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>
    <ProfileMenu height={'100vh'} activeField={'Notifications'} />
    <TitleBox />
    <ListBox index={currNot} setIndex={setCurrNot}/>
    <InfoBox currIndex={currNot}/>
    </div>
}

export default Notifications;