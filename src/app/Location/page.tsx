"use client"
import React, { useState } from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import YandexMap from "../components/Location/Map";
import ProfileTitle from "../components/Location/ProfileTitle";
import Table from "../components/Location/Table";
const Page = () => {

    const [index, setIndex] = useState(-1); 
    return <>
        <ProfileMenu height={'100vh'} activeField={'Местоположение авто'}/>
        <ProfileTitle />
            <YandexMap coordinates={[56.751244, 37.618423]} />
            <Table dataIndex={index} setDataIndex={setIndex} />
        </>
}

export default Page;