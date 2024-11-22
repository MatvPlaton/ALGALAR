"use client"
import React from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from '@/app/components/Profile/ProfileTitle'
import {FieldsWrapper} from "@/app/components/Profile/styles/FieldsWrapper";
import AnyField from "@/app/components/Profile/AnyField";
import ReturnButton from "@/app/components/Profile/ReturnButton";
import RegistrationButton from "@/app/components/Profile/RegistrationButton";
import {useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import SetTimezone from "@/app/components/Profile/SetTimezone";
const Page = () => {


    const token = useSelector((state: RootState) => state.auth.token);
    console.log(token)


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
            <SetTimezone text='Должность'  />
            <SetTimezone text='Должность'  />
        </FieldsWrapper>
        <ReturnButton />
        <RegistrationButton />
        </>
}

export default Page;