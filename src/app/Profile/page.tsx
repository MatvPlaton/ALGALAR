"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from '@/app/components/Profile/ProfileTitle'
import {FieldsWrapper} from "@/app/components/Profile/styles/FieldsWrapper";
import AnyField from "@/app/components/Profile/AnyField";
import ReturnButton from "@/app/components/Profile/ReturnButton";
import RegistrationButton from "@/app/components/Profile/RegistrationButton";
import SetTimezone from "@/app/components/Profile/SetTimezone";
import SetRank from "@/app/components/Profile/SetRank";
import axios from "axios";
import { useAuthStore } from "../redux/store";
import { useRefreshStore } from "../redux/store";
const Page = () => {

    const token = useAuthStore((state) => state.token);
    const refresh = useRefreshStore((state) => state.refresh);

    const setToken = useAuthStore((state) => state.setToken);
    const setRefresh = useRefreshStore((state) => state.setRefresh);

    const [name,setName] = useState('');
    const [secondName,setSecondName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [inn,setInn] = useState('');
    const [timezone,setTimezone] = useState('');
    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            axios.post('https://algalar.ru:8080/refresh', {},{
                headers: {
                    Authorization: `Bearer ${refresh}`
                }
            }).then(r => {
                setToken(r.data.accessToken)
                setRefresh(r.data.refreshToken)
            })
        }
        return error;
    });

    useEffect(() => {
        axios.get('https://algalar.ru:8080/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r)
            setName(r.data['firstName'])
            setSecondName(r.data['lastName'])
            setPhone(r.data['phone'])
            setEmail(r.data['email'])
            setInn(r.data['inn'])
            setTimezone(r.data['timezone'])
        }).catch()
    })
    return <>
        <ProfileMenu height={'100vh'} activeField={'Profile'}/>
        <ProfileTitle />
        <FieldsWrapper>
            <AnyField userField={name} text='Имя'  />
            <AnyField userField={secondName} text='Фамилия*' />
            <AnyField userField={''} text='Отчество'  />
            <AnyField userField={phone} text='Телефон*'  />
            <AnyField userField={email} text='E-mail*'  />
            <AnyField userField={inn} text='ИНН Компании'  />
            <SetRank />
            <SetTimezone userField={timezone}/>
        </FieldsWrapper>
        <ReturnButton />
        <RegistrationButton />
        </>
}

export default Page;