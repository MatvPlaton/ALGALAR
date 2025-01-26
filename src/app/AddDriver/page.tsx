"use client"
import React, {useState} from "react";
import ProfileMenu from '@/app/components/Profile/ProfileMenu'
import TitleBox from "../components/AddDriver/TitleBox";
import {FieldsWrapper} from "@/app/components/AddDriver/styles/FieldsWrapper";
import AnyField from "@/app/components/AddDriver/AnyField";
import DateField from "@/app/components/AddDriver/DateField";
import RegistrationButton from "@/app/components/AddDriver/RegistrationButton";
import Notification from "../components/AddDriver/Notification";
import { BodyWrapper } from "../components/AddDriver/styles/BodyBox";
import { Dayjs } from "dayjs";
import axios from "axios";
import { useAuthStore } from "@/app/redux/store";

const Page = () => {

    const token = useAuthStore((state) => state.token);

    const [nameTurn, setNameTurn] = useState(false);
    const [secondNameTurn, setSecondNameTurn] = useState(false);
    const [thirdNameTurn, setThirdNameTurn] = useState(false);

    const [phoneTurn, setPhoneTurn] = useState(false);
    const [dateTurn, setDateTurn] = useState(false);
    const [stateNumberTurn, setStateNumberTurn] = useState(false);

    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [thirdName, setThirdName] = useState('');

    const [phone, setPhone] = useState('');
    const [date, setDate] = useState<Dayjs | null >(null);
    const [stateNumber, setStateNumber] = useState('');

    const [isVisible,setIsVisible] = useState(false);
    const [message,setMessage] = useState('');

    const sendDriver = () => {
        let flag = false;
        if (name === '') {setNameTurn(true); flag = true}
        if (secondName === '') {setSecondNameTurn(true); flag = true}
        if (thirdName === '') {setThirdNameTurn(true); flag = true}
        if (phone === '') {setPhoneTurn(true); flag = true}
        if (date === null) {setDateTurn(true); flag = true}
        if (stateNumber === null) {setStateNumberTurn(true); flag = true}

        if (flag) return;

        axios.post('https://algalar.ru:8080/driver', {
            "name": name,
            "surname": secondName,
            "middle_name": thirdName,
            "phone": phone,
            "birthday": date?.format('YYYY-MM-DD'),
            "state_number": stateNumber
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(r => {
            console.log(r)
            if (r.status == 200) {
            setMessage('Водитель добавлен');
            }
            if (r.status == 400) {
                setMessage('Неправильный номер гос авто');
            }
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
    })
    }


    return <div style={{backgroundColor: '#f2f3f4', height: '100vh'}}>
        <ProfileMenu height={'100vh'} activeField={'AddDriver'}/>
        <TitleBox />
        <BodyWrapper>
        <FieldsWrapper>
            <div> Добавление водителя</div>
            <AnyField turn={nameTurn} setTurn={setNameTurn} setField={setName} userField={name} text='Имя*'  />
            <AnyField turn={secondNameTurn} setTurn={setSecondNameTurn} setField={setSecondName} userField={secondName} text='Фамилия*' />
            <AnyField turn={thirdNameTurn} setTurn={setThirdNameTurn} setField={setThirdName} userField={thirdName} text='Отчество*'  />
            <AnyField turn={phoneTurn} setTurn={setPhoneTurn} setField={setPhone} userField={phone} text='Телефон*'  />
            <AnyField turn={stateNumberTurn} setTurn={setStateNumberTurn} setField={setStateNumber} userField={stateNumber} text='Гос Номер Авто*'  />

            <DateField turn={dateTurn} setTurn={setDateTurn} setField={setDate} userField={date} text='Дата рождения*'  />
        </FieldsWrapper>
        <RegistrationButton sendDriver={sendDriver}/>
        </BodyWrapper>
        <Notification message={message} visible={isVisible} />
        </ div>
}

export default Page;