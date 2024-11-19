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
}
const TempAndPressure: React.FC<Prop> = ({redacting}) => {
    return <> {redacting ? <>
        <MinMaxWrapper>
            <div style={{zIndex: 100, marginRight: '6.6vw'}}> Минимальное </div>
            <div style={{zIndex: 100, marginRight: '1vw'}}> Максимальное </div>
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
        </TempAndPressureWrapper> </> : <div />} </>
}

export default TempAndPressure;