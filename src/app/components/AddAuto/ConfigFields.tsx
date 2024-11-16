import React from "react";
import {ConfigFieldsWrapper} from './styles/ConfigFields';
import AnyField from "@/app/components/AddAuto/AnyField";
import SetTimezone from "@/app/components/AddAuto/SetTimezone";
const ConfigFields = () => {
    return <ConfigFieldsWrapper>
        <AnyField text={'ID устройства*'} />
        <AnyField text={'ГОС Номер*'} />
        <AnyField text={'Марка Авто*'} />
        <SetTimezone text={'Тип Авто*'} />
        <AnyField text={'Уникальный ID*'} />

    </ConfigFieldsWrapper>
}

export default ConfigFields;