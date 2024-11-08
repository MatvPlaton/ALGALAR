import React from 'react';
import styled from 'styled-components';

const RegistrationWrapper = styled.button`
    font-family: RobotoMedium,sans-serif;
    position: absolute;
    top: 43%;
    color: #34373b;
    background-color: white;
    left: 33%;
    letter-spacing: 0.1vw;
    font-size: 1.2vw;
    border: none;
    border-radius: 0.4vw;
    width: 15vw;
    height: 6vh;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.5vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #c4c2c3;
    }
    &:active {
        transform: translateY(-5%);
    }
`
const Registration = () => {

    return <RegistrationWrapper> РЕГИСТРАЦИЯ </RegistrationWrapper>
}

export default Registration;