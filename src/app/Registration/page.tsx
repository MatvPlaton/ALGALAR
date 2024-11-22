"use client"
import React, {useState} from "react";
import Header from '@/app/components/Registration/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Registration/AnyField";
import {FieldsWrapper} from "@/app/components/Login/styles/FieldsWrapper";
import SetGender from "@/app/components/Login/SetGender";
import PasswordField from "@/app/components/Registration/PasswordField";
import SetTimezone from "@/app/components/Login/SetTimezone";
import RegistrationButton from "@/app/components/Registration/RegistrationButton";
import ReturnButton from "@/app/components/Registration/ReturnButton";
import {LoginWrapper} from "@/app/components/Registration/styles/LoginWrapper";
import {RegistrationWrapper} from "@/app/components/Registration/styles/RegistrationButton";
import axios from "axios";
import {useRouter} from "next/navigation";

const Page = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');
    const [inn, setInn] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [gender, setGender] = useState('');
    const [timezone, setTimezone] = useState('');

    const router = useRouter();

    const Show = () => {
        console.log(email);
        console.log(name);
        console.log(secondName);
        console.log(phone);
        console.log(inn);
        console.log(password);
        console.log(password1);
        console.log(gender);
        console.log(timezone);

    }
    const Registration = () => {
        if (password != password1) {
            console.log('Пароли не совпадают!')
            return;
        }
        axios.post('http://5.188.138.91:8080/user', {
            firstName: name,
            lastName: secondName,
            middleName: "",
            phone: phone,
            email: email,
            timeZone: `${timezone}`,
            inn: inn,
            password: password
        }).then(r => {
            console.log(r)
            if (r.status === 201) {
                console.log('success')
                router.push('/login')
            }
            if (r.status === 400) {
                console.log('wrong password or email')
            }

        })
    };

    return <LoginWrapper>
        <Header/>
        <button style={{height: '1vw'}} onClick={() => Show()}> 123</button>

        <UnderHeaderText message='Регистрация в системе'/>
        <FieldsWrapper>
            <AnyField text='E-mail' onDataChange={setEmail}/>
            <AnyField text='Имя' onDataChange={setName}/>
            <AnyField text='Фамилия' onDataChange={setSecondName}/>
            <SetGender onDataChange={setGender}/>
            <AnyField text='Телефон' onDataChange={setPhone}/>
            <AnyField text='ИНН компании' onDataChange={setInn}/>
            <PasswordField text='Пароль' onDataChange={setPassword}/>
            <PasswordField text='Повторите пароль' onDataChange={setPassword1}/>
            <SetTimezone onDataChange={setTimezone}/>
            <ReturnButton message='ВЕРНУТЬСЯ'/>
            <RegistrationWrapper onClick={() => Registration()}> ЗАРЕГИСТРИРОВАТЬСЯ </RegistrationWrapper>
        </FieldsWrapper>
    </LoginWrapper>

}

export default Page;