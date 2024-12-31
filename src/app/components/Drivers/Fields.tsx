"use client"
import React, {useEffect, useState} from "react";
import {FieldsWrapper} from "@/app/components/Drivers/styles/FieldsWrapper";
import AnyField from "@/app/components/Drivers/AnyField";
import DateField from "@/app/components/Drivers/DateField";
import dayjs, { Dayjs } from "dayjs";

interface driver {
    name: string,
    surname: string,
    middle_name: string,
    phone: string,
    birthday: string,
    worked_time: number,
    experience: number,
    rating: number,
    breakages_count: number,
}
interface Prop {
    driver: driver,
    index: number,
}
const Fields: React.FC<Prop> = ({driver, index}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [exp, setExp] = useState(0);
    const [date, setDate] = useState<Dayjs | null>(null);

    useEffect(() => {
        console.log(driver)
        setName(`${driver.surname} ${driver.name} ${driver.middle_name}`);
        setPhone(driver.phone)
        setExp(driver.experience);
        setDate(dayjs(driver.birthday))
        console.log(date)
    },[driver])

    return <>
        {index != -1 ?
        <FieldsWrapper>
        <div style={{fontSize: '1vw'}}> Информация по водителю </div>
            <AnyField userField={name} text='ФИО*'  />
            <AnyField userField={phone} text='Телефон*' />
            <AnyField userField={String(exp)} text='Стаж(год)*'  />
            <DateField userField={date} text='Дата рождения*'  />
        </FieldsWrapper> : <div />}
        </>
}

export default Fields;