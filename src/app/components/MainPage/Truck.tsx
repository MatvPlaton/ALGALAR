"use client"
import React from "react";
import Background from "../../assets/MainPage/Belaz.svg"
import Image from "next/image";
import {TruckWrapper,TextWrapper,BoldText,RegularText} from "./styles/Truck";

const Truck = () => {
    return <TruckWrapper>
            <Image style={{position: 'relative', left: '0.02%',width: '100%', height: 'inherit'}} src={Background} alt='' />
            <TextWrapper>
                <BoldText> УНИКАЛЬНАЯ <br /> ПЛАТФОРМА ALGALAR </BoldText>
                <RegularText> высокая эффективность работы и своевременное <br /> реагирование на все изменения технических показателей </RegularText>
            </TextWrapper>
        </TruckWrapper>


}
export default Truck;