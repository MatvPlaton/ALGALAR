import React from "react";
import {ConfigFieldsWrapper} from './styles/ConfigFields';
import AnyField from "@/app/components/AddAuto/AnyField";
import SetTimezone from "@/app/components/AddAuto/SetTimezone";
import {HeaderText2} from "@/app/components/AddAuto/styles/ConfigFields";
import WheelConfig from "@/app/components/AddAuto/WheelConfig";
interface Props {
    setRedacting: React.Dispatch<React.SetStateAction<boolean>>;
    axis : number;
    setAxis:  React.Dispatch<React.SetStateAction<number>>;
    isChecked : boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    currTire : number;
    setCurrTire : React.Dispatch<React.SetStateAction<number>>;
    isDoubled : boolean[];
    setIsDoubled : React.Dispatch<React.SetStateAction<boolean[]>>;
    images : string[];
    setImages : React.Dispatch<React.SetStateAction<string[]>>;
}
const ConfigFields: React.FC<Props> = ({setRedacting,axis,
                                           setAxis,isChecked,setIsChecked,
                                           images,setImages,currTire,setCurrTire, isDoubled, setIsDoubled}) => {

    return <ConfigFieldsWrapper>
        <HeaderText2> Выберите конфигурацию колёсной системы</HeaderText2>

        <AnyField text={'ID устройства*'} />
        <AnyField text={'ГОС Номер*'} />
        <AnyField text={'Марка Авто*'} />
        <SetTimezone text={'Тип Авто*'} />
        <AnyField text={'Уникальный ID*'} />
        <WheelConfig images={images} setImages={setImages} isDoubled={isDoubled} setIsDoubled={setIsDoubled}
                     setCurrTire={setCurrTire} isChecked={isChecked} setIsChecked={setIsChecked}
                     setRedacting={setRedacting} axis={axis} setAxis={setAxis} currTire={currTire}/>

    </ConfigFieldsWrapper>
}

export default ConfigFields;