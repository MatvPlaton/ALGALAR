"use client"
import React from "react";
import Background from '../../assets/MainPage/Background.svg';
import Image from "next/image";
import {TiresWrapper} from "@/app/components/MainPage/styles/Tires";


const Tires = () => {
    return <TiresWrapper>  <Image style={{width: '100%', height: '100%'}} src={Background} alt='' /> </TiresWrapper>
}
export default Tires;