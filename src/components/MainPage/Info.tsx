import React from "react";
import styled from 'styled-components';
import Logotype from '../../assets/image7.svg';
import BadTyre1 from '../../assets/bad_tyre1.webp.svg';
import BadTyre2 from '../../assets/bad_tyre2.webp.svg';

const InfoWrapper = styled.div`
    background-color: #1D1C1C;
    position: absolute;
    left: 0;
    width: 100%;
    height: 160%;
    top:69%;
`
const MainDescription = styled.div`
    color: white;
    font-weight: bolder;
    font-size: 2vw;
    position: absolute;
    left: 10%;
    top: 10%;
`
const MainAdditional = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1vw;
    position: absolute;
    left: 10%;
    top: 16%;
`
const FirstSentence = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1.5vw;
    left: 10%;
    top: 25%;
    position: absolute;
`
const SecondSentence = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1.5vw;
    left: 40%;
    top: 25%;
    position: absolute;

`
const ThirdSentence = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1.5vw;
    left: 10%;
    top: 55%;
    position: absolute;

`
const FourthSentence = styled.div`
    color: white;
    font-weight: bold;
    font-size: 1.5vw;
    left: 40%;
    top: 55%;
    position: absolute;

`
const FirstDescription = styled.div`
    color: white;
    font-size: 0.8vw;
    left: 12.85%;
    top: 30%;
    position: absolute;
    text-align: left;
    line-height: 1.5vw;
`
const SecondDescription = styled.div`
    color: white;
    font-size: 0.8vw;
    left: 43.15%;
    top: 30%;
    position: absolute;
    text-align: left;
    line-height: 1.5vw;
`
const ThirdDescription = styled.div`
    color: white;
    font-size: 0.8vw;
    left: 12.85%;
    top: 60%;
    position: absolute;
    text-align: left;
    line-height: 1.5vw;
`
const FourthDescription = styled.div`
    color: white;
    font-size: 0.8vw;
    left: 42.85%;
    top: 60%;
    position: absolute;
    text-align: left;
    line-height: 1.5vw;
`
const AlgalarBlock = styled.div`
    background-color: #5A5CA8;
    color: white;
    font-size: 0.8vw;
    left: 62.85%;
    top: 25%;
    position: absolute;
    text-align: left;
    line-height: 1.5vw;
    width: 23%;
    height: 45%;
    border-radius: 2vw;
`
const AlgalarDescription = styled.div`
    position: absolute;
    left: 12%;
    text-align: left;
    font-size: 1.2vw;
    font-weight: bold;
    top: 5%;
`
const Algalar01 = styled.div`
    position: absolute;
    left: 7%;
    text-align: left;
    font-size: 1.2vw;
    font-weight: bold;
    top: 25%;

`

const Algalar02 = styled.div`
    position: absolute;
    left: 7%;
    text-align: left;
    font-size: 1.2vw;
    font-weight: bold;
    top: 60%;

`
const Algalar01Descripion = styled.div`
    position: absolute;
    left: 17%;
    text-align: left;
    font-size: 1.2vw;
    font-weight: bold;
    top: 30%;

`
const Algalar02Description = styled.div`
    position: absolute;
    left: 17%;
    text-align: left;
    font-size: 1.2vw;
    font-weight: bold;
    top: 65%;

`
const PressureReminder = styled.div`
    color: white;
    font-size: 1.5vw;
    left: 12.85%;
    top: 80%;
    position: absolute;
    text-align: right;
    line-height: 2vw;
    
`
const Tyre1 = styled.img`
    left: 42.85%;
    top: 73%;
    position: absolute;
    width: 20vw;
    height: 20vw;
`
const Tyre2 = styled.img`
    left: 65.85%;
    top: 73%;
    position: absolute;
    width: 20vw;
    height: 20vw;
    
`
const Logo = styled.img`
    left: 85%;
    top: -17%;
    position: absolute;
    width: 35vw;
    height: 35vw;
`
const Info = () => {
    return <InfoWrapper>
        <MainDescription> Комплексное
            <span style={{color: '#43C5E2'}}> решение </span> в одном месте </MainDescription>
        <MainAdditional> И в каких ситуациях вам необходима наша система </MainAdditional>

        <FirstSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 01    </span> Простой техники</FirstSentence>
        <FirstDescription> Дорожные происшествия, <br />
            приводящие к простоям <br />
            автотранспорта и доп. затратам <br />
            на ремонт</FirstDescription>

        <SecondSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 02    </span> Износ и перегрев шин </SecondSentence>
        <SecondDescription> Отсутствие своевременного контроля за <br />
            состоянием автошин и преждевременный <br /> выход из строя </SecondDescription>

        <ThirdSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 03    </span> Актуальность данных </ThirdSentence>
        <ThirdDescription> Выбор бренда автошин основывается на <br /> обещаниях продавца, а не на реальной <br /> статистике использования </ThirdDescription>

        <FourthSentence> <span style={{color: '#43C5E2',marginRight: '0.6vw'}}> 04    </span> Удалённый контроль </FourthSentence>
        <FourthDescription> Владелец не знает о текущем состоянии <br /> своего автопарка, поэтому сложно <br /> спрогнозировать расходы на техническое <br />
            обслуживание и ремонт</FourthDescription>
        <AlgalarBlock>
            <AlgalarDescription> Платформа мониторинга <br/> <span style={{color: '#43C5E2'}}> ALGALAR </span>
            </AlgalarDescription>
            <Algalar01> 01 </Algalar01>
            <Algalar02> 02 </Algalar02>
            <Algalar01Descripion> <span style={{color: '#43C5E2'}}> дистанционное <br/> управление </span> вашим <br/> автопарком и водителем в <br /> любое время и в единой <br /> системе </Algalar01Descripion>
            <Algalar02Description> значительное <span style={{color: '#43C5E2'}}> сокращение  <br/> расходов </span> за счет  <br/> безопасной эксплуатации  <br /> автотехники
            </Algalar02Description>
        </AlgalarBlock>
        <PressureReminder> Отсутствие постоянного контроля <br />
            давления в шинах - это прямая <br />
            угроза безопасности вашего <br />
            автопарка и роста затрат! </PressureReminder>
        <Tyre1 src={BadTyre1} alt='' />
        <Tyre2 src={BadTyre2} alt='' />
        <Logo src={Logotype} alt='' />
    </InfoWrapper>
}

export default Info;