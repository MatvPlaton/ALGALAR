"use client"
import React from "react";
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
    return <div style={{height: '120vh'}}>
        <Header />
        <UnderHeaderText message='Регистрация в системе'/>
        <FieldsWrapper>
            <AnyField text='E-mail' />
            <AnyField text='Имя' />
            <AnyField text='Фамилия' />
            <SetGender />
            <AnyField text='Телефон' />
            <AnyField text='ИНН компании' />
            <PasswordField text='Пароль' />
            <PasswordField text='Повторите пароль' />
            <SetTimezone />
            <ReturnButton message='ВЕРНУТЬСЯ'/>
            <RegistrationButton />
        </FieldsWrapper>

    </div>

}

export default Page;