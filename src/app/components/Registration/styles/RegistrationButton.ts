import styled from 'styled-components';

export const RegistrationWrapper = styled.button`
    font-family: RobotoMedium,sans-serif;
    position: absolute;
    top: 105%;
    color: white;
    background-color: #5A5CA8;
    left: 59.5%;
    letter-spacing: 0.1vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.8vw;
    width: 12vw;
    height: 4vh;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #46478b;
    }
    &:active {
        transform: translateY(-5%);
    }
`