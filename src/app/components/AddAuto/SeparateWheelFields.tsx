import React from "react";
import {FieldsWrapper, Header, SeparateWheelFieldsWrapper} from './styles/SeparateWheelFields';
import AnyField from "@/app/components/AddAuto/AnyField";
interface Prop {
    redacting: boolean;
}
const SeparateWheelFields: React.FC<Prop> = ({redacting}) => {
    return <> {redacting ? <>
        <Header> <span style={{position: 'absolute', left: '2%', bottom: '5%'}}> Настройка колеса </span> </Header>
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
        </> : <div />} </>
}

export default SeparateWheelFields;