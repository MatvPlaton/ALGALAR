import styled from 'styled-components';

export const RegistrationWrapper = styled.button`
    font-family: RobotoMedium,sans-serif;
    position: absolute;
    top: 107%;
    color: white;
    background-color: #5A5CA8;
    left: 77%;
    letter-spacing: 0.1vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.9rem;
    width: 14rem;
    height: 2.5rem;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #46478b;
    }
    &:active {
        transform: translateY(-5%);
    }
    @media (max-width: 1000px) {
        left: 2%;
        position: relative;
        top: 10%;
    }
`