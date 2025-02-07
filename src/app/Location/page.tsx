"use client"
import React, { useEffect, useState } from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import TitleBox from "../components/Location/TitleBox";
import Cookie from "js-cookie";
import axios from "axios";
import MapBox from "../components/Location/MapBox";
import ListBox from "../components/Location/ListBox";
const Page = () => {
    
    const token = Cookie.get('jwt');
    
    const [index, setIndex] = useState(-1); 
    
    useEffect(() => {
        axios.get('https://algalar.ru:8080/positions/listcars?limit=100&offset=0', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => console.log(r))
    })
    
    return <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>

        <ProfileMenu height={'100vh'} activeField={'Location'}/>
        <TitleBox />
        <MapBox coordinates={[56.751244, 37.618423]} />
        <ListBox dataIndex={index} setDataIndex={setIndex} />
        </ div>
}

export default Page;