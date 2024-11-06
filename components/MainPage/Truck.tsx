"use client"
import React from "react";
import styled from "styled-components";
import Background from "../../assets/background.svg"
import Image from "next/image";

const TruckWrapper = styled.div`
    width: 100%;
    top: 15%;
    position: absolute;
    left: 0;
    z-index: 10;

`
const TextWrapper = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    top: 15%;
    width: 50%;
    height: 54.03%;
    z-index: 100;
    left: 0;
`
const BoldText = styled.div`
    color: white;
    font-weight: bold;
    text-align: left;
    position: absolute;
    left: 35%;
    top: 15%;
    font-size: 2vw;
    font-family: MontserratBold, sans-serif;
`
const RegularText = styled.div`
    color: #C5C5C5;
    text-align: left;
    position: absolute;
    left: 35%;
    top: 40%;
    font-size: 1.1vw;
    font-family: RobotoRegular, sans-serif;
    line-height: 2vw;
`

const Truck = () => {
    return <div>

        <TruckWrapper>
            <Image style={{width: '100%', height: '15%'}} src={Background} alt='' />
        </TruckWrapper>
        <TextWrapper>
            <BoldText> УНИКАЛЬНАЯ <br /> ПЛАТФОРМА ALGALAR </BoldText>
            <RegularText> высокая эффективность работы и своевременное <br /> реагирование на все изменения технических показателей </RegularText>
        </TextWrapper>
    </div>
}
export default Truck;