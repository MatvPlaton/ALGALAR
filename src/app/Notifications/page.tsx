"use client"
import React, { useState } from "react";
import ProfileMenu from "@/app/components/Profile/ProfileMenu";
import TitleBox from "../components/Notifications/TitleBox";
import InfoBox from "../components/Notifications/InfoBox";

import ListBox from "../components/Notifications/ListBox";
import Cookie from "js-cookie";
import axios from "axios";
const Notifications = () => {
    
    const [currNot,setCurrNot] = useState(-1);
    const token = Cookie.get('jwt');
    axios.get('https://algalar.ru:8080/notification/list?limit=100&offset=0', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(r => console.log(r))

    return  <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>
    <ProfileMenu activeField={'Notifications'} />
    <TitleBox />
    <ListBox index={currNot} setIndex={setCurrNot}/>
    <InfoBox currIndex={currNot}/>
    </div>
}

export default Notifications;