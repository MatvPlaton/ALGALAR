"use client"
import React, {useEffect, useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import ProfileTitle from '@/app/components/Profile/ProfileTitle'
import {FieldsWrapper} from "@/app/components/Profile/styles/FieldsWrapper";
import AnyField from "@/app/components/Login/AnyField";
import ReturnButton from "@/app/components/Profile/ReturnButton";
import RegistrationButton from "@/app/components/Profile/RegistrationButton";
const Page = () => {
    const [parentData, setParentData] = useState<string>('');
    const handleDataFromChild = (data: string) => {
        setParentData(data);

    };
    useEffect(() => {
        console.log(parentData);
    }, [parentData]);
    return <>
        <ProfileMenu />
        <ProfileTitle />
        <FieldsWrapper>
            <AnyField text='Имя*'  onDataChange={handleDataFromChild}/>
            <AnyField text='Фамилия*'  onDataChange={handleDataFromChild}/>
            <AnyField text='Отчество'  onDataChange={handleDataFromChild}/>
            <AnyField text='Телефон*'  onDataChange={handleDataFromChild}/>
            <AnyField text='E-mail*'  onDataChange={handleDataFromChild}/>
            <AnyField text='ИНН Компании'  onDataChange={handleDataFromChild}/>
        </FieldsWrapper>
        <ReturnButton />
        <RegistrationButton />
        </>
}

export default Page;