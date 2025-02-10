"use client"
import React, {useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import TitleBox from "../components/Location/TitleBox";

import MapBox from "../components/Location/MapBox";
import ListBox from "../components/Location/ListBox";
const Page = () => {
    
    
    const [index, setIndex] = useState(-1); 

    return <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>

        <ProfileMenu height={'100vh'} activeField={'Location'}/>
        <TitleBox />
        <MapBox coordinates={[55.74, 37.568423]} />
        <ListBox dataIndex={index} setDataIndex={setIndex} />
        </ div>
}

export default Page;