import React, {useState} from 'react';
import Image from 'next/image'
import SchemeImage from '../../assets/AutoPark/SchemeWrapper.svg'
import styled from "styled-components";

interface Prop {
    dataIndex: number;
}

const PressureWrapper = styled.div`
    text-align: center;
    position: relative;
    top: -27%; 
    color: #1e1e1e;
    z-index: 100;
    font-family: RobotoBold, sans-serif;
    font-size: 1vw;
`
const PressureNumber = styled(PressureWrapper)`
    border: solid black 0.1vw;
    border-radius: 0.4vw;
    top: -25%;
    width: 25%;
    height: 10%;
    left: 37.5%;
    display: grid;
    place-items: center;
`
const Title = styled.div`
    text-align: center;
    position: relative;
    top: -115%;
    font-size: 1.2vw;
    color: #1e1e1e;
    font-family: RobotoBold, sans-serif;
`
const Wheel = styled.div`
    background: linear-gradient(to bottom right, #43C5E2, #5A5CA8);
    position: relative;
    top: -120%;
    left: 5%;
    width: 2.3vw;
    height: 2.6vw;
    border-radius: 0.4vw;
    flex-direction: column;
    margin-bottom: 0.4vw;
    cursor: pointer;
`

const ParamWrapperActive = styled.div`
    color: white;
    width: 80%;
    position: relative;
    left: 10%;
    text-align: center;
    background: linear-gradient(#9cdde9, #899ee0);
    top: 10%;
    height: 80%;
    border-radius: 0.3vw;
`

const ParamWrapper = styled(ParamWrapperActive)`
    background: white;
    color: black;
`
const Scheme: React.FC<Prop> = ({dataIndex}) => {

    const [active, setActive] = useState(false);

    return <> {dataIndex === -1 ? <div /> :
        <div style={{height: '45vh',position: 'absolute',left: '50%', top: '15%'}}>
            <Image style={{width: '15vw', height: '45vh', position: 'relative'}} src={SchemeImage} alt={''} />
            <Title> Текущее состояние </Title>
            <PressureWrapper> Рекомендованное давление </PressureWrapper>
            <PressureNumber> 123 </PressureNumber>
            <Wheel onClick={() => setActive(!active)}>
                {active ?
                <ParamWrapperActive>7.2 <br />
                    <span style={{position: 'relative', bottom: '-10%'}}> 85 </span> </ParamWrapperActive> :
                    <ParamWrapper>7.2 <br />
                    <span style={{position: 'relative', bottom: '-10%'}}> 85 </span> </ParamWrapper>}
            </Wheel>

    </div>} </>
    }

export default Scheme;