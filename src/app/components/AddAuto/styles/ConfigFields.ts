import styled from 'styled-components';

export const ConfigFieldsWrapper = styled.div`
    position: absolute;
    top : 8%;
    left: 7%;
    width: 50%;
    height: 85%;
    margin-bottom: 10vw;
    flex-direction: column;
    background-color: white;
    overflow-y: scroll;
`
export const HeaderText2 = styled.div`
    color: black;
    position: relative;
    font-family: RobotoRegular, sans-serif;
    font-size: 1.4vw;
    display: flex;
    align-items: flex-end;
    padding: 0.5vw;
`
export const CopyButton = styled.button`
    font-family: RobotoMedium,sans-serif;
    color: white;
    background-color: #a9a9a9;
    letter-spacing: 0.07vw;
    border: none;
    border-radius: 0.4vw;
    font-size: 0.9vw;
    position: relative;
    top: 65%;
    left: 85%;
    width: 8vw;
    height: 1vw;
    box-shadow: 0 0.5vw 0.5vw 0 rgba(0,0,0,0.2), 0 0.01vw 0.5vw 0 rgba(0,0,0,0.19);
    &:hover {
        background-color: #c4c2c3;
    }
    &:active {
        transform: translateY(-5%);
    }
     
`