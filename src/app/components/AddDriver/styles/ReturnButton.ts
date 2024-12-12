import styled from 'styled-components';

export const ReturnWrapper = styled.button`
    font-family: RobotoMedium,sans-serif;
    position: absolute;
    color: #34373b;
    background-color: white;
    top: 77%;
    left: 6%;
    letter-spacing: 0.1vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.9vw;
    width: 11vw;
    height: 2.5vw;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #c4c2c3;
    }
    &:active {
        transform: translateY(-5%);
    }
`