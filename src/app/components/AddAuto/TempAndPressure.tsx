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

const TempAndPressure = () => {
    return <>
        <MinMaxWrapper>
            <div style={{marginRight: '6.6vw'}}> Минимальное </div>
            <div style={{marginRight: '1vw'}}> Максимальное </div>
            </MinMaxWrapper>
        <TempAndPressureWrapper>
        <Headers>
                <Temp> Температура</Temp>
                <Temp> Давление </Temp>
                </Headers>
                <MinFields>
                    <FieldWrapper>
                        <AnyFieldoutlined text={''} />
                        <Image src={temp} alt={''} />
                    </FieldWrapper>
                    <FieldWrapper>
                        <AnyFieldoutlined text={''} />
                        <Image src={bar} alt={''} />

                    </FieldWrapper>
                </MinFields>
                <MinFields>
                    <FieldWrapper>
                        <AnyFieldoutlined text={''} />
                        <Image src={temp} alt={''} />
                    </FieldWrapper>
                    <FieldWrapper>
                        <AnyFieldoutlined text={''} />
                        <Image src={bar} alt={''} />

                    </FieldWrapper>
                </MinFields>
        </TempAndPressureWrapper> </>
}

export default TempAndPressure;