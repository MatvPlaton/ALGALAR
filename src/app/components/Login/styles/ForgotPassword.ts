import styled from 'styled-components';

export const ForgotPasswordWrapper = styled.button`
    font-family: RobotoMedium,sans-serif;
    position: absolute;
    top: 45%;
    color: #34373b;
    background-color: white;
    left: 20.5%;
    letter-spacing: 0.07vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.8vw;
    width: 10vw;
    height: 4vh;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #c4c2c3;
    }
    &:active {
        transform: translateY(-5%);
    }
`