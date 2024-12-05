"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from '@/app/components/Profile/ProfileTitle'
import {FieldsWrapper} from "@/app/components/Profile/styles/FieldsWrapper";
import AnyField from "@/app/components/Profile/AnyField";
import ReturnButton from "@/app/components/Profile/ReturnButton";
import RegistrationButton from "@/app/components/Profile/RegistrationButton";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import SetTimezone from "@/app/components/Profile/SetTimezone";
import SetRank from "@/app/components/Profile/SetRank";
import axios from "axios";
import {setToken} from "@/app/redux/authSlice";
import {setRefreshToken} from "@/app/redux/refreshSlice";
const Page = () => {


    const token = useSelector((state: RootState) => state.auth.token);
    const refreshToken = useSelector((state: RootState) => state.refresh.refreshToken);
    const dispatch = useDispatch();
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
                    Authorization: `Bearer ${refreshToken}`
                }
            }).then(r => {
                dispatch(setToken(r.data.accessToken))
                dispatch(setRefreshToken(r.data.refreshToken))
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
        <ProfileMenu height={'100vh'} activeField={'Профиль'}/>
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