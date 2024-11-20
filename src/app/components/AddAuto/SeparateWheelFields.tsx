import React from "react";
import {FieldsWrapper, Header, SeparateWheelFieldsWrapper, Wrapper} from './styles/SeparateWheelFields';
import AnyField from "@/app/components/AddAuto/AnyField";
import TempAndPressure from "@/app/components/AddAuto/TempAndPressure";
interface Prop {
    redacting: boolean;
}
const SeparateWheelFields: React.FC<Prop> = ({redacting}) => {
    return <> {redacting ? <>
        <Wrapper>
        <Header> Настройка колеса </Header>
        <FieldsWrapper>
        <SeparateWheelFieldsWrapper>
        <AnyField text={'Номер датчика*'} />
        <AnyField text={'Размер шины*'} />
            <AnyField text={'НГП*'} />
            <AnyField text={'Модель шины*'} />

        </SeparateWheelFieldsWrapper>
        <SeparateWheelFieldsWrapper>
            <AnyField text={'Бренд шины*'} />
            <AnyField text={'Стоимость шины(тыс. руб.)*'} />
            <AnyField text={'ТКВЧ*'} />
        </SeparateWheelFieldsWrapper>
        </FieldsWrapper>
            <TempAndPressure redacting={redacting}/>

        </Wrapper>
        </> : <div />} </>
}

export default SeparateWheelFields;