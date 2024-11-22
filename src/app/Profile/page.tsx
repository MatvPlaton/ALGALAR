"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from '@/app/components/Profile/ProfileTitle'
import {FieldsWrapper} from "@/app/components/Profile/styles/FieldsWrapper";
import AnyField from "@/app/components/Profile/AnyField";
import ReturnButton from "@/app/components/Profile/ReturnButton";
import RegistrationButton from "@/app/components/Profile/RegistrationButton";
import {useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import SetTimezone from "@/app/components/Profile/SetTimezone";
import SetRank from "@/app/components/Profile/SetRank";
import axios from "axios";
const Page = () => {


    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token)

    const [,setName] = useState('');
    const [,setSecondName] = useState('');
    const [,setPhone] = useState('');
    // const [email,setEmail] = useState('');
    // const [inn,setInn] = useState('');

    useEffect(() => {
        axios.get('http://5.188.138.91:8080/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r)
            setName(r.data['firstName'])
            setSecondName(r.data['lastName'])
            setPhone(r.data['lastName'])

        })
    })
    return <>
        <ProfileMenu height={'100vh'} activeField={'Профиль'}/>
        <ProfileTitle />
        <FieldsWrapper>
            <AnyField text='Имя*'  />
            <AnyField text='Фамилия*' />
            <AnyField text='Отчество'  />
            <AnyField text='Телефон*'  />
            <AnyField text='E-mail*'  />
            <AnyField text='ИНН Компании'  />
            <SetRank />
            <SetTimezone />
        </FieldsWrapper>
        <ReturnButton />
        <RegistrationButton />
        </>
}

export default Page;