"use client"
import React from "react";
import styled from "styled-components";
import Background from "../../assets/MainPage/background.svg"
import Image from "next/image";

const TruckWrapper = styled.div`
    width: 100%;
    top: 20vh;
    height: 51vh;
    position: absolute;
    left: 0;
    z-index: 10;
`
const TextWrapper = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    width: 50%;
    height: inherit;
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
    return <TruckWrapper>
            <Image style={{width: '101%', height: 'inherit'}} src={Background} alt='' />
            <TextWrapper>
                <BoldText> УНИКАЛЬНАЯ <br /> ПЛАТФОРМА ALGALAR </BoldText>
                <RegularText> высокая эффективность работы и своевременное <br /> реагирование на все изменения технических показателей </RegularText>
            </TextWrapper>
        </TruckWrapper>


}
export default Truck;