"use client"
import React, {useEffect, useState} from "react";
import Header from '@/app/components/Login/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Login/AnyField";
import {FieldsWrapper} from "@/app/components/Login/styles/FieldsWrapper";
import SetGender from "@/app/components/Login/SetGender";
import PasswordField from "@/app/components/Login/PasswordField";
import SetTimezone from "@/app/components/Login/SetTimezone";
import RegistrationButton from "@/app/components/Registration/RegistrationButton";
import ReturnButton from "@/app/components/Registration/ReturnButton";
const Page = () => {
    const [parentData, setParentData] = useState<string>('');
    const handleDataFromChild = (data: string) => {
        setParentData(data);

    };
    useEffect(() => {
        console.log(parentData);
    }, [parentData]);
    return <div style={{height: '120vh'}}>
        <Header />
        <UnderHeaderText message='Регистрация в системе'/>
        <FieldsWrapper>
            <AnyField text='E-mail' onDataChange={handleDataFromChild}/>
            <AnyField text='Имя' onDataChange={handleDataFromChild} />
            <AnyField text='Фамилия' onDataChange={handleDataFromChild} />
            <SetGender />
            <AnyField text='Телефон' onDataChange={handleDataFromChild} />
            <AnyField text='ИНН компании' onDataChange={handleDataFromChild} />
            <PasswordField text='Пароль' />
            <PasswordField text='Повторите пароль' />
            <SetTimezone />
            <ReturnButton message='ВЕРНУТЬСЯ'/>
            <RegistrationButton />
        </FieldsWrapper>

    </div>

}

export default Page;