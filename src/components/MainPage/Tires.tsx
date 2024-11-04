import React from "react";
import styled from 'styled-components'
import Background from '../../assets/Background.svg';
const TiresWrapper = styled.img`
    position: absolute;
    left: 0;
    width: 100%;
    top: 229%
`

const Tires = () => {
    return <TiresWrapper src={Background} alt='' />
}

export default Tires;