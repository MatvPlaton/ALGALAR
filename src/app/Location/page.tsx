"use client"
import React, { useEffect, useState } from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import YandexMap from "../components/Location/Map";
import ProfileTitle from "../components/Location/ProfileTitle";
import Table from "../components/Location/Table";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import axios from "axios";
const Page = () => {
    
    const token = useSelector((state: RootState) => state.auth.token);
    
    const [index, setIndex] = useState(-1); 
    
    useEffect(() => {
        axios.get('https://algalar.ru:8080/positions/listcars?limit=100&offset=0', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => console.log(r))
    })
    
    return <>
        <ProfileMenu height={'100vh'} activeField={'Location'}/>
        <ProfileTitle />
            <YandexMap coordinates={[56.751244, 37.618423]} />
            <Table dataIndex={index} setDataIndex={setIndex} />
        </>
}

export default Page;