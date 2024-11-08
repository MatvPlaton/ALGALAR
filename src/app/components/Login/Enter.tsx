import React from 'react';
import styled from 'styled-components';

const EnterWrapper = styled.button`
    font-family: RobotoMedium,sans-serif;
    position: absolute;
    top: 43%;
    color: white;
    background-color: #5A5CA8;
    left: 53%;
    letter-spacing: 0.1vw;
    font-size: 1.2vw;
    border: none;
    border-radius: 0.4vw;
    width: 7vw;
    height: 6vh;
    &:hover {
        background-color: #46478b;
    }
    &:active {
        transform: translateY(-5%);
    }
`
const Enter = () => {

    return <EnterWrapper> ВХОД </EnterWrapper>
}

export default Enter;