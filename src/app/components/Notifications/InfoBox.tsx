import React, { useEffect, useState } from 'react';
import {InfoWrapper} from "./styles/InfoBox";
import Map from './Map';
import Information from "./Information";
import ReadCurr from "./ReadCurr";
import axios from 'axios';
import Cookie from 'js-cookie';

interface Prop {
    currIndex: string;
    setCurrIndex: React.Dispatch<React.SetStateAction<string>>;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
}

interface breakage {
    description: string,
    driver_name: string,
    location: [number,number],
    created_at: string
}
const InfoBox: React.FC<Prop> = ({setActive, currIndex,setCurrIndex, active}) => {

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
            {!active ? <ReadCurr setId={setCurrIndex} setActive={setActive} setBreakage={setBreakage} id={currIndex} /> : <> </>}
            
            <div className='absolute top-1/10 text-[1vw] w-2/5 h-8/10 left-[5%] font-[RobotoRegular]'> 
            <span className='font-[RobotoBold]'> Произошла поломка: </span> {breakage.description} <br /> 
            <span className='font-[RobotoBold]'> Водитель: </span> {breakage.driver_name}</div> </> :
            <> </>}

        </InfoWrapper>
    </>)

}

export default InfoBox;