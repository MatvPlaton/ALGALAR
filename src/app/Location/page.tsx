"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import TitleBox from "../components/Location/TitleBox";

import MapBox from "../components/Location/MapBox";
import ListBox from "../components/Location/ListBox";
import Cookie from 'js-cookie';
import axios from "axios";
interface car {
    brand: string
    car_id: string
    state_number: string
    unique_id: string
}
const Page = () => {
    
    
    const [id, setId] = useState('');
    const token = Cookie.get('jwt');

    const [cars,setCars] = useState<car[]>([]);
    
    useEffect(() => {
        axios.get('https://algalar.ru:8080/positions/listcars?limit=100&offset=0', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {console.log(r.data); setCars(r.data)})
        
    },[])

    return <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>
        
        <ProfileMenu activeField={'Location'}/>
        <TitleBox />
        <MapBox cars={cars} id={id} setId={setId} />
        <ListBox  cars={cars} id={id} setId={setId} />
        </ div>
}

export default Page;