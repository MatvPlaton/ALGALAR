import styled from 'styled-components';

export const WheelConfigWrapper = styled.div`
    height: 30%;
    top: 60%;
    position: absolute;
    width: 30%;
    left: 20%;
`

export const AxisNumber = styled.div`
    display: flex;
    flex-direction: row;
    font-family: RobotoRegular,sans-serif;
    color: black;
    font-size: 1vw;
`
export const AxisBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 10%;
    top: 30%;
    width: 85%;
    max-height: 130%;
    overflow-y: auto;
`
export const SingleAxis = styled.div`
    display: flex;
    margin-bottom: 1vw;
    flex-direction: row;
    position: relative;
    width: 50%;
    left: 20%;
    top: 25%;
    height: 100%;
`
export const DoubleAxisWrapper = styled.div`
    display: flex;
    margin-bottom: 1vw;
    flex-direction: row;
    position: relative;
    width: 90%;
    left: 4.2%;
    gap: 6.1vw;
`


export const CheckBoxWrapper1 = styled.input`
    position: relative;
    left: 150%;
`
export const CheckBoxWrapper2 = styled.input`
    position: relative;
    left: 40%;
`