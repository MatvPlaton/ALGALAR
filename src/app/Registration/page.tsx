"use client"
import React, {useState} from "react";
import Header from '@/app/components/Registration/Header';
import UnderHeaderText from "@/app/components/Login/UnderHeaderText";
import AnyField from "@/app/components/Registration/AnyField";
import {FieldsWrapper} from "@/app/components/Login/styles/FieldsWrapper";
import SetGender from "@/app/components/Login/SetGender";
import PasswordField from "@/app/components/Registration/PasswordField";
import SetTimezone from "@/app/components/Login/SetTimezone";
import ReturnButton from "@/app/components/Registration/ReturnButton";
import {LoginWrapper} from "@/app/components/Registration/styles/LoginWrapper";
import {RegistrationWrapper} from "@/app/components/Registration/styles/RegistrationButton";
import axios from "axios";
import {useRouter} from "next/navigation";
import {setInn} from "@/app/redux/innSlice";
import {useDispatch} from "react-redux";

const Page = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [phone, setPhone] = useState('');
    const [inn, setInn1] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [, setGender] = useState('');
    const [timezone, setTimezone] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();

    const Registration = () => {
        if (password != password1) {
            console.log('Пароли не совпадают!')
            return;
        }
        axios.post('https://algalar.ru:8080/user', {
            firstName: name,
            lastName: secondName,
            middleName: "",
            phone: phone,
            email: email,
            timeZone: Number(timezone),
            inn: inn,
            password: password
        }).then(r => {
            console.log(r)
            if (r.status === 201) {
                console.log('success')
                dispatch(setInn(inn))
                router.push('/login')
            }
            if (r.status === 400) {
                console.log('wrong password or email')
            }

        })
    };

    return <LoginWrapper>
        <Header/>

        <UnderHeaderText message='Регистрация в системе'/>
        <FieldsWrapper>
            <AnyField text='E-mail' onDataChange={setEmail}/>
            <AnyField text='Имя' onDataChange={setName}/>
            <AnyField text='Фамилия' onDataChange={setSecondName}/>
            <SetGender onDataChange={setGender}/>
            <AnyField text='Телефон' onDataChange={setPhone}/>
            <AnyField text='ИНН компании' onDataChange={setInn1}/>
            <PasswordField text='Пароль' onDataChange={setPassword}/>
            <PasswordField text='Повторите пароль' onDataChange={setPassword1}/>
            <SetTimezone onDataChange={setTimezone}/>
            <ReturnButton message='ВЕРНУТЬСЯ'/>
            <RegistrationWrapper onClick={() => Registration()}> ЗАРЕГИСТРИРОВАТЬСЯ </RegistrationWrapper>
        </FieldsWrapper>
    </LoginWrapper>

}

export default Page;