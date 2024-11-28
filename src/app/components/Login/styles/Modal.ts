import styled from 'styled-components'

export const OverlayStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const ModalStyles = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    font-family: RobotoRegular, sans-serif;
    text-align: center;

`

export const ButtonStyles = styled.button`
    font-family: RobotoRegular, sans-serif;
    font-size: 16px;
    cursor: pointer;
    color: black;
    background-color: white;
    border: none;
    position: relative;
    top: -1rem;
    left: 52%;
`
