"use client"
import React from "react";
import BadTyre1 from '../../assets/MainPage/bad_tyre1.webp.svg';
import BadTyre2 from '../../assets/MainPage/bad_tyre2.webp.svg';
import Image from "next/image";
import {
    Algalar01Descripion,
    Algalar02Descripion,
    Algalar03Description,
    AlgalarBlock,
    AlgalarDescription, EnumWrapper,
    EnumWrapper1, EnumWrapper2,
    Description,
    Sentence,
    SentenceNumber,
    SentenceTextWrapper,
    FirstSentenceWrapper,
    InfoWrapper,
    MainAdditional,
    MainDescription,
    MainWrapper,
    PressureReminder,
    SecondSentenceWrapper,
    Tyre1,
    Tyre2, TiresWrapper
} from "./styles/Info";


const Info = () => {
    return <InfoWrapper>
       <MainWrapper>
        <MainDescription> Комплексное
            <span style={{color: '#43C5E2'}}> решение </span> в одном месте </MainDescription>
        <MainAdditional> И в каких ситуациях вам необходима наша система </MainAdditional>
       </MainWrapper>
        <EnumWrapper>
            <EnumWrapper1>
            <FirstSentenceWrapper>
                <SentenceNumber> 01 </SentenceNumber>
                <SentenceTextWrapper>
                    <Sentence>  Простой техники </Sentence>
                    <Description> Дорожные происшествия, <br /> приводящие к простоям <br /> автотранспорта и дополнительным
                        затратам на ремонт </Description>
                </SentenceTextWrapper>
            </FirstSentenceWrapper>
            <SecondSentenceWrapper>
            <SentenceNumber> 02 </SentenceNumber>
            <SentenceTextWrapper>
            <Sentence> Быстрый износ <br /> и перегрев шин </Sentence>
        <Description> Отсутствие своевременного контроля за <br />
            состоянием автошин и преждевременный <br /> выход из строя </Description>
            </SentenceTextWrapper>
            </SecondSentenceWrapper>
            </EnumWrapper1>
        <EnumWrapper2>
            <FirstSentenceWrapper>
                <SentenceNumber> 03 </SentenceNumber>
                <SentenceTextWrapper>
        <Sentence> Нет актуальных данных <br /> для принятия решения </Sentence>
        <Description> Выбор бренда автошин основывается на <br /> обещаниях продавца, а не на реальной <br />
            статистике использования </Description> </SentenceTextWrapper>
            </FirstSentenceWrapper>
            <SecondSentenceWrapper>
            <SentenceNumber> 04 </SentenceNumber>
            <SentenceTextWrapper>
        <Sentence>Отсутствие удаленной <br /> системы контроля </Sentence>
        <Description> Владелец не знает о текущем состоянии <br /> своего автопарка, поэтому сложно <br /> спрогнозировать расходы на техническое <br />
            обслуживание и ремонт</Description>
            </SentenceTextWrapper>
            </SecondSentenceWrapper>
        </EnumWrapper2>
        </EnumWrapper>
        <AlgalarBlock>

            <AlgalarDescription> Платформа мониторинга <br/> <span style={{color: '#43C5E2'}}> ALGALAR </span>
            </AlgalarDescription>
            <ul style={{position:'relative',top: '4%'}}>
                <Algalar01Descripion> <span
                    style={{color: '#43C5E2'}}>  дистанционное <br/> управление </span> вашим <br/> автопарком и
                    водителем в <br/> любое время и в единой <br/> системе </Algalar01Descripion>
                <Algalar02Descripion> отслеживание реакции <br/> водителя на изменение <br/> показателей
                </Algalar02Descripion>
                <Algalar03Description> значительное <span style={{color: '#43C5E2'}}> сокращение  <br/> расходов </span> за
                    счет <br/> безопасной эксплуатации <br/> автотехники
                </Algalar03Description>
            </ul>
        </AlgalarBlock>
        <TiresWrapper>
        <PressureReminder> Отсутствие постоянного контроля <br />
            давления в шинах - это прямая <br />
            угроза безопасности вашего <br />
            автопарка и роста затрат! </PressureReminder>

        <Tyre1> <Image style={{width: 'inherit', height: 'inherit'}} src={BadTyre1} alt='' /> </Tyre1>
        <Tyre2> <Image style={{width: 'inherit', height: 'inherit'}} src={BadTyre2} alt='' /> </Tyre2>
        </TiresWrapper>
    </InfoWrapper>
}

export default Info;