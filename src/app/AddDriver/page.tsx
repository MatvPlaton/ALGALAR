"use client"
import React, {useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from "@/app/components/AddDriver/ProfileTitle";
import {FieldsWrapper} from "@/app/components/AddDriver/styles/FieldsWrapper";
import AnyField from "@/app/components/AddDriver/AnyField";
import DateField from "@/app/components/AddDriver/DateField";
import RegistrationButton from "@/app/components/AddDriver/RegistrationButton";

const Page = () => {

    const [name,] = useState('');
    const [secondName,] = useState('');
    const [phone,] = useState('');

    return <>
        <ProfileMenu height={'100vh'} activeField={'Добавить водителя'}/>
        <ProfileTitle />
        <FieldsWrapper>
            <AnyField userField={name} text='Имя*'  />
            <AnyField userField={secondName} text='Фамилия*' />
            <AnyField userField={''} text='Отчество*'  />
            <AnyField userField={phone} text='Телефон*'  />
            <DateField userField={null} text='Дата рождения*'  />
        </FieldsWrapper>
        <RegistrationButton />
        </>
}

export default Page;