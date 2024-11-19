import styled from 'styled-components';

export const Header = styled.div`
    position: absolute;
    font-family: RobotoRegular, sans-serif;
    font-size: 1.4vw;
    left: 59%; 
    top: 2%;
    color: black;
    width: 40%;
    height: 13%;
    background-color: white;
    display: grid;
    place-items: flex-end;
`
export const FieldsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 40%;
    top : 18%;
    left: 59%;
    position: absolute;
    background-color: white;

`
export const SeparateWheelFieldsWrapper = styled.div`
    position: relative;
    width: 50%;
    height: 52%;
    flex-direction: column;

`