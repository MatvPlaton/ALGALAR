"use client"
import React, {useState} from "react";
import {FieldsWrapper} from "@/app/components/Drivers/styles/FieldsWrapper";
import AnyField from "@/app/components/Drivers/AnyField";
import DateField from "@/app/components/Drivers/DateField";

const Fields = () => {

    const [name,] = useState('');
    const [secondName,] = useState('');

    return <>
        
        <FieldsWrapper>
        <div style={{fontSize: '1vw'}}> Информация по водителю </div>
            <AnyField userField={name} text='ФИО*'  />
            <AnyField userField={secondName} text='Телефон*' />
            <AnyField userField={''} text='Стаж(год)*'  />
            <DateField userField={null} text='Дата рождения*'  />
        </FieldsWrapper>
        </>
}

export default Fields;