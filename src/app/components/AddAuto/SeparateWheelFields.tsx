import React from "react";
import {FieldsWrapper, Header, SeparateWheelFieldsWrapper} from './styles/SeparateWheelFields';
import AnyField from "@/app/components/AddAuto/AnyField";
const SeparateWheelFields = () => {
    return <>
        <Header> Настройка колеса </Header>
        <FieldsWrapper>
        <SeparateWheelFieldsWrapper>
        <AnyField text={'Номер датчика*'} />
        <AnyField text={'Размер шины*'} />
            <AnyField text={'Модель шины*'} />

        </SeparateWheelFieldsWrapper>
        <SeparateWheelFieldsWrapper>
            <AnyField text={'Бренд шины*'} />
            <AnyField text={'Стоимость шины(тыс. руб.)*'} />
        </SeparateWheelFieldsWrapper>
        </FieldsWrapper>
        </>
}

export default SeparateWheelFields;