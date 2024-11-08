"use client"
import React from "react";
import styled from 'styled-components'
import Background from '../../assets/Background.svg';
import Image from "next/image";
const TiresWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 230vh
`

const Tires = () => {
    return <TiresWrapper>  <Image style={{width: '100%', height: '80vh'}} src={Background} alt='' /> </TiresWrapper>
}
export default Tires;