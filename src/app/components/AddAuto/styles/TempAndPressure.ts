import styled from 'styled-components';

export const TempAndPressureWrapper = styled.div`
    width: 38%;
    height: 30%;
    position: absolute;
    left: 59%;
    top: 52%;
    display: flex;
    flex-direction: row;
    background-color: white;

`
export const Headers = styled.div`
    width: 20%;
    height: 100%;
    position: relative;
    flex-direction: column;
`

export const MinFields = styled.div`
    width: 40%;
    height: 100%;
    flex-direction: column;
    font-family: RobotoRegular,sans-serif;
    font-size: 1.2vw;
    text-align: center;
`
export const MaxFields = styled.div`
    width: 40%;
    height: 100%;
    flex-direction: column;
`
export const Temp = styled.div`
    display: grid;
    height: 50%;
    font-size: 1vw;
    font-family: RobotoRegular,sans-serif;
    width: 100%;
    place-items: center;
`

export const FieldWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: grid;
    grid-auto-flow: column;
    place-items: center;
`

export  const MinMaxWrapper = styled.div`
    font-family: RobotoRegular,sans-serif;
    font-size: 1.2vw;
    position: absolute;
    left: 68.4%;
    top: 52.2%;
    display: flex;
    flex-direction: row;
    background-color: white;
`
