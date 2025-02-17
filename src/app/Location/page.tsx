"use client"
import React, {useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import TitleBox from "../components/Location/TitleBox";

import MapBox from "../components/Location/MapBox";
import ListBox from "../components/Location/ListBox";
const Page = () => {
    
    
    const [id, setId] = useState('');

    return <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>

        <ProfileMenu height={'100vh'} activeField={'Location'}/>
        <TitleBox />
        <MapBox id={id} setId={setId} />
        <ListBox  id={id} setId={setId} />
        </ div>
}

export default Page;