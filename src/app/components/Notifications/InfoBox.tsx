import React, { useEffect, useState } from 'react';
import {InfoWrapper} from "./styles/InfoBox";
import Map from './Map';
import Information from "./Information";
import ReadCurr from "./ReadCurr";
import axios from 'axios';
import Cookie from 'js-cookie';

interface Prop {
    currIndex: string;
}
interface breakage {
    description: string,
    driver_name: string,
    location: [number,number],
    created_at: string
}
const InfoBox: React.FC<Prop> = ({currIndex}) => {

    const token = Cookie.get('jwt');
    const [breakage, setBreakage] = useState<breakage | null>(null);

    useEffect(() => {
        if (currIndex === "")
            return
        axios.get(`https://algalar.ru:8080/notification/info?id=${currIndex}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {console.log(r) ; setBreakage(r.data)})
    },[currIndex])

    return (<>
        <InfoWrapper> 
            <Information />
            <Map coordinates={breakage?.location}/> 
            {breakage ? <>
            <ReadCurr />
            <div className='absolute top-1/10 text-[1vw] w-2/5 h-8/10 left-[5%] font-[RobotoRegular]'> {breakage.description} </div> </> :
            <> </>}

        </InfoWrapper>
    </>)

}

export default InfoBox;