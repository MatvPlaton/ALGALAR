import React from 'react';
import {RegistrationWrapper} from "./styles/RegistrationButton";
import Cookie from 'js-cookie';
import axios from 'axios';
import { useTimeZoneStore } from '@/app/redux/store';

interface Prop {
    firstName: string,
    lastName: string,
    gender: string,
    phone: string,
    email: string,
    timeZone: number,
    inn: string,
}
const RegistrationButton: React.FC<Prop> = ({firstName,lastName,gender,phone,email,timeZone,inn}) => {

    const token = Cookie.get('jwt');
    const setZone = useTimeZoneStore((state) => state.setZone);


    const sendData = () => {
        console.log(firstName)
        setZone(timeZone)
        axios.put('https://algalar.ru:8080/userinfo', {
            firstName : firstName,
            lastName : lastName,
            gender : gender,
            phone : phone,
            email : email,
            timeZone : timeZone,
            inn : inn
        }, {
            headers: {
                Authorization: `Bearer ${token}`
              }
        }).then(r => console.log(r))
    }
    return <RegistrationWrapper onClick={() => sendData()}> СОХРАНИТЬ </RegistrationWrapper>
}

export default RegistrationButton;