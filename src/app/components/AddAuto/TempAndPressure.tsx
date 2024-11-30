import React from "react";
import {
    Headers,
    MinFields, MinMaxWrapper,
    Temp,
    TempAndPressureWrapper
} from "@/app/components/AddAuto/styles/TempAndPressure";
import AnyFieldoutlined from "@/app/components/AddAuto/AnyFieldoutlined";
import {FieldWrapper} from "@/app/components/AddAuto/styles/TempAndPressure";
import Image from "next/image";
import temp from '../../assets/AddAuto/tempIcon.svg';
import bar from '../../assets/AddAuto/barIcon.svg';
interface Prop {
    redacting: boolean;
    minPress : string,
    setMinPress : React.Dispatch<React.SetStateAction<string>>,
    maxPress : string,
    setMaxPress : React.Dispatch<React.SetStateAction<string>>,
    minTemp : string,
    setMinTemp : React.Dispatch<React.SetStateAction<string>>,
    maxTemp : string,
    setMaxTemp : React.Dispatch<React.SetStateAction<string>>
}
const TempAndPressure: React.FC<Prop> = ({minPress, maxPress, minTemp, maxTemp,
                                             setMaxTemp, setMinTemp, setMinPress, setMaxPress, redacting}) => {
    return <> {redacting ? <>
        <MinMaxWrapper>
            <div style={{zIndex: 100, marginRight: '7.5vw'}}> Минимальное </div>
            <div> Максимальное </div>
            </MinMaxWrapper>
        <TempAndPressureWrapper>
        <Headers>
                <Temp> Температура</Temp>
                <Temp> Давление </Temp>
                </Headers>
                <MinFields>
                    <FieldWrapper>
                        <AnyFieldoutlined userField={minTemp} setField={setMinTemp} text={''} />
                        <Image src={temp} alt={''} />
                    </FieldWrapper>
                    <FieldWrapper>
                        <AnyFieldoutlined userField={minPress} setField={setMinPress} text={''} />
                        <Image src={bar} alt={''} />

                    </FieldWrapper>
                </MinFields>
                <MinFields>
                    <FieldWrapper>
                        <AnyFieldoutlined userField={maxTemp} setField={setMaxTemp} text={''} />
                        <Image src={temp} alt={''} />
                    </FieldWrapper>
                    <FieldWrapper>
                        <AnyFieldoutlined userField={maxPress} setField={setMaxPress} text={''} />
                        <Image src={bar} alt={''} />

                    </FieldWrapper>
                </MinFields>
        </TempAndPressureWrapper> </> : <div />} </>
}

export default TempAndPressure;